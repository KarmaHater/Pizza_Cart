import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchPizzaSizes } from "./../../redux/actions";
import { selectPizzaSizes } from "./../../redux/selectors";
import PizzaSize from "./PizzaSize";

class PizzaSizesContainer extends Component {
  componentWillMount() {
    this.props.fetchPizzaSizes()
  }

  render() {
    return (
      <div>
        <h1>Pizzas:</h1>
        {this.props.pizzaSizes.map((item, i) => <PizzaSize key={i} item={item} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzaSizes: selectPizzaSizes(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPizzaSizes: bindActionCreators(fetchPizzaSizes, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSizesContainer);
