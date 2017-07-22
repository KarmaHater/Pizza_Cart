import { PIZZA_TOPPINGS_FETCH } from '../constants/constants.js';
import { selectToppings } from './../../redux/selectors';

//get this data
// Available toppings per pizza size, and whether they are selected by default for that size.

// const fetch = require("graphql-fetch")(
//   "https://core-graphql.dev.waldo.photos/pizza"
// );
//
// const query = `{
//     pizzaSizes {
//       name
//       maxToppings
//       basePrice
//     }
// }`;

const mockedToppings = [
  { name: 'cheese', price: 1.20 },
  { name: 'ham', price: 1.20 },
  { name: 'tomate', price: 1.20 },
  { name: 'olives', price: 1.20 },
  { name: 'onions', price: 1.20 },
  { name: 'blue cheese', price: 1.20 },
  { name: 'goat cheese', price: 1.20 }
];

const fetchPizzaToppings = () => dispatch => {
  // fetch(query).then(results => {
  //   if (results.errors) {
  //     console.log(results.errors);
  //   }

    dispatch({
        type: PIZZA_TOPPINGS_FETCH,
        payload: {
            toppings: mockedToppings
        }
    });
  // });
};

export const shouldFetchPizzaToppings = () => (dispatch, getState) => {
    const cachedToppings = selectToppings(getState());

    if (cachedToppings.isEmpty()) {
        dispatch(fetchPizzaToppings());
    }

    return;
};
