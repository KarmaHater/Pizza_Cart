import React from 'react';

const Topping = ({ topping, defaultSelected }) =>
    <span>{topping.name} {defaultSelected ? topping.price : null}</span>;

export default Topping;
