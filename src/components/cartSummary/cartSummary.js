import React from "react";

const CartSummary = ({ item }) => {
  return (
    <div>
      {items.map((item, i) => <div>{item.name}</div>)}
    </div>
  );
};

export default CartSummary;
