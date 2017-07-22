import {
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
} from "../constants/constants.js";

export const addCartItem = (item) => dispatch => {
  console.log(item, "item")
  debugger;
  dispatch({
    type: CART_SUMMARY_ADD,
    payload: {
      item
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
