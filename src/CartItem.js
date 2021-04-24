import React from "react";

const CartItem = (props) => {

    const { price, title, qty, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, OnDeleteItem } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={Styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "#777" }}>Rs {price}</div>
                <div style={{ color: "#777" }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://pics.freeicons.io/uploads/icons/png/3642717691543238914-512.png"
                        onClick={() => { onIncreaseQuantity(product) }}
                    />

                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://pics.freeicons.io/uploads/icons/png/18537612601543238905-512.png"
                        onClick={() => { onDecreaseQuantity(product) }}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://pics.freeicons.io/uploads/icons/png/2790131631558965374-512.png"
                        onClick={() => { OnDeleteItem(product.id) }}
                    />
                </div>
            </div>
        </div>
    );
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
