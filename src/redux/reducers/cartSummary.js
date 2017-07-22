import { CART_ITEM_ADD } from "../constants/constants.js";
import { Map, List } from "immutable";

const initialState = new List()

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      return state.push(action.payload);
    default:
      return state;
  }
};
