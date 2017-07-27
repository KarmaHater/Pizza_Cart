import React, { Component } from "react";
import PizzasContainer from './../components/pizzas/PizzasContainer';
import CartSummary from './../components/cartSummary/CartSummary';

class HomePage extends Component {
  render() {
    return (
      <div>
        <CartSummary />
        <PizzasContainer />
      </div>
    );
  }
}

export default HomePage;
