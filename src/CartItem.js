import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 2,
      img: "",
    };
  }
  increaseQuantity =() =>{
    console.log(this.state)
  }
  decreaseQuantity  =() =>{
    console.log(this.state)
  }
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={Styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1619266629~hmac=12080decae03eb76742599eef7ade1ab"
              onClick={this.increaseQuantity}
            />

            <img
              alt="decrease"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619266571~hmac=bfeb4390323c5608ff958af30ea22801"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1619266664~hmac=c8ee45cef073dbf2a2fbb95587ea16f7"
            />
          </div>
        </div>
      </div>
    );
  }
}
const Styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
