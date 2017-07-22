import React from "react";

const Topping = ({ topping }) => {
  return (
      <span>{topping.name} : {topping.price}</span>
  );
};

export default Topping;
