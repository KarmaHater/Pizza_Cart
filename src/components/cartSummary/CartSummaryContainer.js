import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCartItem } from "./../../redux/actions";
import { selectCartSummaryItems } from "./../../redux/selectors";
import { calculateTotal } from "./utils";
import CartItem from "./CartItem";

class CartSummaryContainer extends Component {
  render() {
    const { items } = this.props;
    
    return (
      <div>
        <h1>Cart:</h1>
        <div>
          {items.map((item, i) => <CartItem key={i} item={item} />)}
        </div>
        <div>{calculateTotal(items)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: selectCartSummaryItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCartItem: bindActionCreators(removeCartItem, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CartSummaryContainer
);
