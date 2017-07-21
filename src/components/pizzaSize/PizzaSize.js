import React from "react";

const PizzaSize = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.maxToppings}</div>
      <div>{item.basePrice}</div>
    </div>
  );
};

export default PizzaSize;
