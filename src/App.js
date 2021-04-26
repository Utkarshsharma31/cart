import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    };
  }
  componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      const products  = snapshot.docs.map((docs)=>{
        const data = docs.data();
        data['id']=docs.id;
        return data
      })
      this.setState({
        products,
        loading:false
      })
    })
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState(products);
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({ products });

  };
  handleDeleteItem = (id) => {
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id);
    this.setState({
      products: item,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0
    products.forEach((product) => {
      count += product.qty
    })
    return count
  }
  getCartTotal = () =>{
    const { products } = this.state;
    let cartTotal=0
    products.map((product)=>{
      cartTotal = cartTotal+product.qty*product.price;
      return ''
    })
    return cartTotal

  }
  render() {
    const { products,loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteItem={this.handleDeleteItem}
        />
        {loading && <h1>Loading Data .....</h1>}
        <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
