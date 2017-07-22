import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCartItem } from "./../../redux/actions";
import Topping from "./Topping";

class Toppings extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: new Set() };
  }

  toggleCheckbox = name => {
    if (this.state.checked.has(name)) {
      this.setState({ checked: this.state.checked.delete(name) });
    } else {
      this.setState({ checked: this.state.checked.add(name) });
    }
  };

  handleClick = () => {
    this.props.addCartItem({
      pizzaName: this.props.pizzaName,
      currentToppings: this.state.checked
    });
    this.setState({ checked: new Set() });
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
                checked={this.state.checked.has(topping.name) || false}
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
