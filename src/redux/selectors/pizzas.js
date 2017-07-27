export const selectPizzaSizes = state => state.pizzas.get('pizzaSizes');

export const selectCurrentSize = (state, size) =>
    selectPizzaSizes(state).filter(item => item.name === size).first();

export const selectToppings = (state, pizzaName) => {
    return state.pizzas.getIn(['toppings', pizzaName]) || [];
};

export const selectCurrentToppings = (state, currentToppings, pizzaName) =>
    selectToppings(state, pizzaName).filter(item =>
        currentToppings.has(item.topping.name)
    );

export const selectDefaultToppings = (state, pizzaName) =>
    selectToppings(state, pizzaName).filter(topping => topping.defaultSelected);

export const selectSelectableToppings = (state, pizzaName) =>
    selectToppings(state, pizzaName).filter(
        topping => topping.defaultSelected === false
    );
