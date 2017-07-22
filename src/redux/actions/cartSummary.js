import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../constants/constants.js";
import { selectCurrentSize, selectCurrentToppings } from "./../selectors";

export const addCartItem = item => (dispatch, getState) => {
  dispatch({
    type: CART_ITEM_ADD,
    payload: {
      pizzaSize: selectCurrentSize(getState(), item.pizzaName),
      currentToppings: selectCurrentToppings(getState(), item.currentToppings)
    }
  });
};

export const removeCartItem = item => dispatch => {
  debugger;
  dispatch({
    type: CART_SUMMARY_REMOVE,
    payload: {
      item
    }
  });
};
