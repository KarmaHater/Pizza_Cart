import { PIZZA_SIZES_FETCH } from "../constants/constants.js";
const fetch = require("graphql-fetch")(
  "https://core-graphql.dev.waldo.photos/pizza"
);

const query = `{
    pizzaSizes {
      name
      maxToppings
      basePrice
    }
}`;

export const fetchPizzaSizes = () => dispatch => {
  fetch(query).then(results => {
    if (results.errors) {
      console.log(results.errors);
    }

    dispatch({
      type: PIZZA_SIZES_FETCH,
      payload: {
        pizzaSizes: results.data.pizzaSizes
      }
    });
  });
};
