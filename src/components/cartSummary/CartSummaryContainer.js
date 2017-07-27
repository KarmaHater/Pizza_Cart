import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCartSummaryItems } from './../../redux/selectors';
import CartItem from './CartItem';
import Total from './../total/Total';

class CartSummaryContainer extends Component {
    render() {
        const { items, defaultItems } = this.props;

        return (
            <div>
                <h1>Cart:</h1>
                <div>
                    <h3>Topping</h3>
                    {items.map((item, i) => <CartItem key={i} item={item} />)}
                </div>
                <Total items={items} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: selectCartSummaryItems(state)
});

export default connect(mapStateToProps)(CartSummaryContainer);
