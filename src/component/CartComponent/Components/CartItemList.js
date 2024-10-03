import React from "react";
import AddToCartButton from "../../../common/AddToCartButton";

const CartItemList = ({ cartItems }) => {
  return (
    <div className="item-box-container">
      <div className="box-container-title">
        <input type="checkbox" className="delivery-checkbox" />
        <span>Product in cart</span>
        <span style={{ color: "#A5A5A5", fontSize: "10px" }}>
          ({cartItems.length})
        </span>
      </div>
      <div className="offer-container">
        {cartItems.map((items) => (
          <div className="offer-card" key={items.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input type="checkbox" className="delivery-checkbox" />
              <img src={items.imageSrc} width={"60px"} alt={items.title} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="offer-item-title">{items.title}</span>
                <span className="offer-item-price">₹{items.price}</span>
                <span className="offer-item-mrp">₹{items.mrp}</span>
              </div>
            </div>
            <div className="offer-item-button-container">
              <AddToCartButton
                id={items.id}
                product={{
                  id: items.id,
                  title: items.title,
                  price: items.price,
                  imageSrc: items.imageSrc,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
