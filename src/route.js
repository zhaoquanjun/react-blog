import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  IndexRoute,
  Provider
} from "react-router-dom";

import App from "./App";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={App}>
      <IndexRoute path="/home" component={App} />
    </Route>
  </BrowserRouter>
);

export default Routes;
