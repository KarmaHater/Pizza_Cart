import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from "react-router";
import store from "./redux/store";
import HomePage from "./pages/home-page";

const routes = (
  <Route>
    <Route path="/" component={HomePage} />
  </Route>
);

let reactElement = document.getElementById("react");

render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  reactElement
);
