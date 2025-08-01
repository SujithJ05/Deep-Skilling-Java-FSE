import React from "react";
import Cart from "./Cart";

export class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 },
    ];

    return (
      <div className="myDiv" style={{ textAlign: "center" }}>
        <h1 style={{ color: "green" }}>Items Ordered :</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Cart item={CartInfo} />
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
