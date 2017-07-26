export const calculateTotal = items => {
  if (items && !items.isEmpty()) {
    const total = items.reduce((total, item) => {
      const basePrice = item.pizzaSize.basePrice;
      const toppings = calculateToppings(item.currentToppings);
      return basePrice + toppings;
    }, 0);
    return total.toFixed(2);
  }

  return 0;
};

const calculateToppings = toppings =>
  toppings.reduce((total, topping) => {
    return total + topping.price;
  }, 0);
