export const calculateTotal = items => {
  if (items && !items.isEmpty()) {
    return items
      .reduce((total, item, i) => {
        const basePrice = item.pizzaSize.basePrice;
        const toppings = calculateToppings(item.currentToppings);
        return basePrice + toppings + total;
      }, 0)
      .toFixed(2);
  }

  return 0;
};

const calculateToppings = toppings =>
  toppings.reduce((total, topping) => {
    return total + topping.price;
  }, 0);
