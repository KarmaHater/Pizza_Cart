import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchPizzaSizes,
  shouldFetchPizzaToppings
} from "./../../redux/actions";
import { selectPizzaSizes, selectToppings } from "./../../redux/selectors";
import PizzaSize from "./../pizzaSize/PizzaSize";
import Toppings from "./../toppings/Toppings";

class PizzaSizesContainer extends Component {
  componentWillMount() {
    this.props.fetchPizzaSizes();
    this.props.shouldFetchPizzaToppings();
  }

  render() {
    const { pizzaSizes, toppings } = this.props;

    return (
      <div>
        <h1>Pizzas:</h1>
        {pizzaSizes.map((item, i) => {
          return (
            <div key={i}>
              <PizzaSize item={item} />
              <Toppings
                toppings={toppings}
                pizzaName={item.name}
              />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzaSizes: selectPizzaSizes(state),
  toppings: selectToppings(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPizzaSizes: bindActionCreators(fetchPizzaSizes, dispatch),
    shouldFetchPizzaToppings: bindActionCreators(
      shouldFetchPizzaToppings,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PizzaSizesContainer
);
