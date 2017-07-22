import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCartItem } from "./../../redux/actions";
import Topping from "./Topping";

class Toppings extends Component {
  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = name => {
    if (this.selectedCheckboxes.has(name)) {
      this.selectedCheckboxes.delete(name);
    } else {
      this.selectedCheckboxes.add(name);
    }
  };

  handleClick = () => {
    this.props.addCartItem({
      pizzaName: this.props.pizzaName,
      pizzaToppings: this.selectedCheckboxes
    });
  };

  render() {
    const { toppings } = this.props;

    return (
      <div>
        <h3>topping</h3>
        <ul>
          {toppings.map((topping, i) => (
            <li key={i}>
              <input
                type="checkbox"
                onClick={() => this.toggleCheckbox(topping.name)}
              />
              <Topping topping={topping} />
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add me</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCartItem: bindActionCreators(addCartItem, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Toppings);
