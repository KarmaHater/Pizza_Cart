import React from "react";

const Topping = ({ topping }) => {
  return (
    <li>
      <div>{topping.name}</div>
      <div> <b>price:</b> {topping.price}</div>
    </li>
  );
};

export default Topping;
