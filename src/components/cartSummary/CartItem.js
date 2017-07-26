import React from "react";
import { connect } from "react-redux";
import { List } from "immutable";
import { bindActionCreators } from "redux";
import { removeCartItem } from "./../../redux/actions";
import Total from './../total/Total';

const CartSummary = ({ item, removeCartItem }) => {
  return (
    <div>
      <div><b>pizza type:</b> {item.pizzaSize.name}</div>
      <div><b>pizza toppings:</b></div>
      <ul>
        {" "}
        {item.currentToppings.map(topping => <li>{topping.name}</li>)}
      </ul>
      
      <Total items={new List([item])} />

      <button onClick={() => removeCartItem(item.id)}>Remove Item</button>
      <hr />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCartItem: bindActionCreators(removeCartItem, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CartSummary);
