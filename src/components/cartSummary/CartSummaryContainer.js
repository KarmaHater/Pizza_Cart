import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCartSummaryItems } from './../../redux/selectors';
import CartItem from './CartItem';

class CartSummaryContainer extends Component {
    render() {
        const { items } = this.props;

        return (
      <div>
        <h1>Cart:</h1>
        <div>
          {items.map((item, i) => <CartItem key={i} item={item} />)}
        </div>
      </div>
        );
    }
}

const mapStateToProps = state => ({
    items: selectCartSummaryItems(state)
});

export default connect(mapStateToProps)(
  CartSummaryContainer
);
