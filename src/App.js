import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9,
          title: "watches",
          qty: 1,
          img: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          id: 1,
        },
        {
          price: 99,
          title: "Mobile Phone",
          qty: 2,
          img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 3,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          id: 3,
        },
      ],
    };
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
      cartTotal = cartTotal+product.qty*product.price
    })
    return cartTotal

  }
  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteItem={this.handleDeleteItem}
        />
        <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
