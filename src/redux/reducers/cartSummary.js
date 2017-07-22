import { CART_ITEM_ADD, CART_ITEM_REMOVE } from '../constants/constants.js';
import { Map, List } from 'immutable';

const initialState = new List();

export default (state = initialState, action) => {
    switch (action.type) {
    case CART_ITEM_ADD:
        return state.push(action.payload);
    case CART_ITEM_REMOVE:
        return state.filter((item) => item.id !== action.payload.id);
    default:
        return state;
    }
};
