import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
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
        }
    }
    handleIncreaseQuantity = (product) => {
        const {products} = this.state
        const index = products.indexOf(product)

        products[index].qty +=1
        this.setState(
            products
        )
    };
    handleDecreaseQuantity = (product) => {
        const {products} = this.state
        const index = products.indexOf(product)

        products[index].qty -=1
        if(products[index].qty >=0){
        this.setState(
            products
        )
        }
    };
    handleDeleteItem = (id) => {
        const {products} = this.state
        const item = products.filter((item) =>  item.id !== id)
            this.setState({
                products:item
            })
    };
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (<CartItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    OnDeleteItem={this.handleDeleteItem}
                    />)
                })}
            </div>
        );
    }
}

export default Cart;
