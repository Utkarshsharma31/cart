import React from "react";

class CartItem extends React.Component {
 
 
  render() {
    
    const { price, title, qty } = this.props.product;
    const { product,onIncreaseQuantity,onDecreaseQuantity,OnDeleteItem} = this.props;
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
              src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1619288570~hmac=c9e765612ad8c0c0ed65fda8ee16c34f"
              onClick={() =>{onIncreaseQuantity(product)}}
            />

            <img
              alt="decrease"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619288494~hmac=5229799565660ba38ec425c03ec2d6c4"
              onClick={() =>{onDecreaseQuantity(product)}}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1619288659~hmac=6c1d8547d1f1092cce10d5023023eafe"
              onClick={() =>{OnDeleteItem(product.id)}}
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
