import { CART_ITEM_ADD, CART_ITEM_REMOVE } from '../constants/constants.js';
import { selectCurrentSize, selectCurrentToppings } from './../selectors';

// Should give more meaningful ID but for now this work.
let CART_ID = 0;

export const addCartItem = item => (dispatch, getState) => {
    CART_ID += 1;
    dispatch({
        type: CART_ITEM_ADD,
        payload: {
            id: CART_ID,
            currentToppings: selectCurrentToppings(getState(), item.currentToppings, item.pizzaName),
            pizzaSize: selectCurrentSize(getState(), item.pizzaName)
        }
    });
};

export const removeCartItem = id => dispatch => {
    dispatch({
        type: CART_ITEM_REMOVE,
        payload: {
            id
        }
    });
};
