import React from 'react';

const PizzaSize = ({ item }) => {
    return (
    <div>
      <h2>Size: {item.name}</h2>
      <div>{item.maxToppings}</div>
      <div>pirce: {item.basePrice}</div>
    </div>
    );
};

export default PizzaSize;
