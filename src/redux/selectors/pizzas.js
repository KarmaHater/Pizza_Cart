export const selectPizzaSizes = state => state.pizzas.get('pizzaSizes');

export const selectCurrentSize = (state, size) =>
    selectPizzaSizes(state).filter(item => item.name === size).first();

export const selectToppings = (state, pizzaName) => {
    console.log(state.pizzas.toJS());
    return state.pizzas.getIn(['toppings', pizzaName]) || [];
}

export const selectCurrentToppings = (state, currentToppings) =>
    selectToppings(state).filter(topping => currentToppings.has(topping.name));
