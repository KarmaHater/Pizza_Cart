import React from "react";

const CartSummary = ({ item }) => {
  return (
    <div>
      <div><b>pizza type:</b> {item.pizzaSize.name}</div>
      <div><b>pizza toppings:</b></div>
      <ul>
        {" "}
        {item.currentToppings.map(topping => <li>{topping.name}</li>)}
      </ul>
      <hr />
    </div>
  );
};

export default CartSummary;
