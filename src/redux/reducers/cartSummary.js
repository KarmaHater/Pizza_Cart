import { CART_SUMMARY_FETCH } from "../constants/constants.js";
import { Map, List } from "immutable";

const initialState = new Map({
  items: new List()
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_SUMMARY_FETCH:
      return state.set("items", new List(action.payload.item));
    default:
      return state;
  }
};
