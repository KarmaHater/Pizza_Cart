import React from "react";
import Topping from "./Topping";

const Toppings = ({ toppings }) => {
  return (
    <div>
      <h3>topping</h3>
      <ul>
        {toppings.map((topping, i) => <Topping key={i} topping={topping} />)}
      </ul>
    </div>
  );
};

export default Toppings;
