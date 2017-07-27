import {
    PIZZA_SIZES_FETCH,
    PIZZA_TOPPINGS_FETCH
} from '../constants/constants.js';
import { Map, List, fromJS } from 'immutable';

const initialState = fromJS({
    pizzaSizes: [],
    toppings: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
    case PIZZA_SIZES_FETCH:
        return state.set('pizzaSizes', new List(action.payload.pizzaSizes));
    case PIZZA_TOPPINGS_FETCH:
        const toppings = state
                .get('toppings')
                .set(
                    action.payload.pizzaName,
                    new List(action.payload.toppings)
                );

        return state.set('toppings', toppings);
    default:
        return state;
    }
};
