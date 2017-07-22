import React, { Component } from "react";
import PizzasContainer from './../components/pizzas/PizzasContainer';
import CartSummaryContainer from './../components/cartSummary/CartSummaryContainer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <PizzasContainer />
        <CartSummaryContainer />
      </div>
    );
  }
}

export default HomePage;
