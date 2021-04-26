import React from "react";

function Navbar(props) {
    return (
        <div style={Styles.nav}>
            <div style={Styles.cartIconContainer}>
                <img
                    alt="cart"
                    style={Styles.chartIcon}
                    src="https://pics.freeicons.io/uploads/icons/png/5343179461574330916-512.png"
                />
                <span style={Styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}
const Styles = {
    chartIcon: {
        height: 50,
        marginRight: 20,
        marginTop: 11

    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "flex-end",
        alignitem: "center",
    },
    cartIconContainer: {
        position: "relative",
    },
    cartCount: {
        background: "yellow",
        borderRadius: "50%",
        padding: "4px 12px",
        position: "relative",
        right: 28,
        top: -27,

    },
};
export default Navbar;
