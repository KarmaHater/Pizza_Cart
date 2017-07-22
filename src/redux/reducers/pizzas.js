import {
  PIZZA_SIZES_FETCH,
  PIZZA_TOPPINGS_FETCH
} from '../constants/constants.js';
import { Map, List } from 'immutable';

const initialState = new Map({
    pizzaSizes: new List(),
    toppings: new List()
});

export default (state = initialState, action) => {
    switch (action.type) {
    case PIZZA_SIZES_FETCH:
        return state.set('pizzaSizes', new List(action.payload.pizzaSizes));
    case PIZZA_TOPPINGS_FETCH:
        return state.set('toppings', new List(action.payload.toppings));
    default:
        return state;
    }
};
