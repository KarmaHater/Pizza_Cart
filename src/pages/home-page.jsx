import React, { Component } from "react";
import PizzasContainer from './../components/pizzas/PizzasContainer';
import CartSummaryContainer from './../components/cartSummary/CartSummaryContainer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <CartSummaryContainer />
        <PizzasContainer />
      </div>
    );
  }
}

export default HomePage;
