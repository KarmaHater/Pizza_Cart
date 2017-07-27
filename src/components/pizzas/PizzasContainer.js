import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPizzaSizes } from './../../redux/actions';
import { selectPizzaSizes } from './../../redux/selectors';
import PizzaSize from './../pizzaSize/PizzaSize';
import Toppings from './../toppings/Toppings';

class PizzaSizesContainer extends Component {
    componentWillMount() {
        this.props.fetchPizzaSizes();
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
                                maxToppings={item.maxToppings}
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
});

const mapDispatchToProps = dispatch => ({
    fetchPizzaSizes: bindActionCreators(fetchPizzaSizes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
    PizzaSizesContainer
);
