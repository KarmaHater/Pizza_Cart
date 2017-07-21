import { PIZZA_SIZES_FETCH } from "../constants/constants.js";
import { List } from "immutable";

const initialState = new List();

export default (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_SIZES_FETCH:
      return new List(action.payload.pizzaSizes)
    default:
      return state;
  }
};
