import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCartItem } from "./../../redux/actions";
import { WARNING } from "./utils/warning";
import Topping from "./Topping";

class Toppings extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: new Set(), displayWarning: false };
  }

  toggleWarning(boolean) {
    this.setState({
      displayWarning: boolean
    });
  }

  toggleCheckbox = name => {
    if (this.state.checked.has(name)) {
      this.state.checked.delete(name);
      this.setState({ checked: this.state.checked });
      this.toggleWarning(false);
    } else {
      const currentAmountOfToppings = this.state.checked.size;
      if (currentAmountOfToppings <= this.props.maxToppings) {
        this.setState({ checked: this.state.checked.add(name) });
      } else {
        this.toggleWarning(true);
      }
    }
  };

  handleAddClick = () => {
    this.props.addCartItem({
      pizzaName: this.props.pizzaName,
      currentToppings: this.state.checked
    });
    this.setState({ checked: new Set() });
    this.toggleWarning(false);
  };

  render() {
    const { toppings } = this.props;
    console.log(this.state.check, "check");
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
        <button onClick={this.handleAddClick}>Add me</button>
        {this.state.displayWarning ? <h4>{WARNING}</h4> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCartItem: bindActionCreators(addCartItem, dispatch)
});

export default connect(null, mapDispatchToProps)(Toppings);
