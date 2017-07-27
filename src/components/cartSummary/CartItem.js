import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { removeCartItem } from './../../redux/actions';
import { selectDefaultToppings } from './../../redux/selectors';
import Total from './../total/Total';

const CartItem = ({ item, removeCartItem, defaultItems }) =>
    <div>
        <div><b>pizza type:</b> {item.pizzaSize.name}</div>
        <div><b>Toppings:</b></div>
        <ul>
            {' '}
            {item.currentToppings.map((topping, i) =>
                <li key={i}>{topping.topping.name}</li>
            )}
        </ul>
        <div><b>Default toppings:</b></div>
        <ul>
            {' '}
            {defaultItems.map((topping, i) =>
                <li key={i}>{topping.topping.name}</li>
            )}
        </ul>

        <Total items={new List([item])} />

        <button onClick={() => removeCartItem(item.id)}>Remove Item</button>
        <hr />
    </div>;

const mapStateToProps = (state, { item }) => ({
    defaultItems: selectDefaultToppings(state, item.pizzaSize.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeCartItem: bindActionCreators(removeCartItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
