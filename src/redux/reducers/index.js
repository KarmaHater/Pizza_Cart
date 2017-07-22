import {combineReducers} from 'redux';
import cartSummary from './cartSummary';
import pizzas from './pizzas';

export default combineReducers({
    cartSummary,
    pizzas
});
