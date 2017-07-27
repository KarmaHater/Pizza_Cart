import { PIZZA_TOPPINGS_FETCH } from '../constants/constants.js';
const fetch = require('graphql-fetch')(
    'https://core-graphql.dev.waldo.photos/pizza'
);

const getQuery = name => `{
         pizzaSizeByName(name: ${name.toUpperCase()}) {
           toppings {
             topping {
               name
               price
             }
             defaultSelected
           }
         }
    }`;

export const fetchPizzaToppings = name => dispatch => {
    fetch(getQuery(name)).then(results => {
        if (results.errors) {
            console.log(results.errors);
        }

        dispatch({
            type: PIZZA_TOPPINGS_FETCH,
            payload: {
                pizzaName: name,
                toppings: results.data.pizzaSizeByName.toppings
            }
        });
    });
};
