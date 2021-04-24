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
          img: "",
          id: 1,
        },
        {
          price: 99,
          title: "Mobile Phone",
          qty: 2,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 3,
          img: "",
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
    
      this.setState({products});
    
  };
  handleDeleteItem = (id) => {
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id);
    this.setState({
      products: item,
    });
  };
  getCartCount = ()=>{
    const {products} = this.state;
    let count =0
    products.forEach((product)=>{
      count +=product.qty
    })
    return count
  }
  render() {
    const {products} =this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      OnDeleteItem={this.handleDeleteItem}
      />
      
          </div>
  );
}
}

export default App;
