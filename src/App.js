import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db= firebase.firestore()
  }
  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   const products  = snapshot.docs.map((docs)=>{
    //     const data = docs.data();
    //     data['id']=docs.id;
    //     return data
    //   })
    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })
      this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((docs) => {
          const data = docs.data();
          data['id'] = docs.id;
          return data
        })
        this.setState({
          products,
          loading: false
        })
      })
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log("Updated")
    })
    .catch((error)=>{
      console.log(error)
    })
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({ products });
    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("decreased")
    })
    .catch((error)=>{
      console.log(error)
    })

  };
  handleDeleteItem = (id) => {
    const { products } = this.state;
    // const item = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: item,
    // });
    const docRef = this.db.collection('products').doc(id);
    docRef.delete()
    .then(()=>{
      console.log("deleted")
    })
    .catch((error)=>{
      console.log(error)
    })
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0
    products.forEach((product) => {
      count += product.qty
    })
    return count
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return ''
    })
    return cartTotal

  }
  addProduct = () => {
    firebase
      .firestore()
      .collection('products')
      .add({
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIicmvh438TjhDvoEAd3eVpBPybZ9eZyvkw&usqp=CAU",
        price: 199,
        qty: 4,
        title: "oppo"

      })
      .then((docRef)=>{
        console.log(docRef);
      })
      .catch((error) =>{
        console.log(error);
      })
  }
  render() {
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button style={{ padding: 5, margintop: 50, marginLeft: 20 }} onClick={this.addProduct}>Add Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteItem={this.handleDeleteItem}
        />
        {loading && <h1>Loading Data .....</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL:{this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
