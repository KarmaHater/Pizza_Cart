import React, { Component } from "react";
import { connect } from "react-redux";
// import { selectPizzaSizes } from "./../../store/selectors";
import PizzaSize from "./PizzaSize";

const PizzaSizesContainer = ({ pizzaSizes }) => (
  <div>
    <h1>These are the thresholds:</h1>
    {[1,2,3].map((t, i) => <PizzaSize key={i} item={t} />)}
  </div>
);

const mapStateToProps = state => ({
  // pizzaSizes: selectPizzaSizes(state)
});

export default connect(mapStateToProps)(PizzaSizesContainer);
