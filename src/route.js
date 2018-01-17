import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay } from "./containers";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect exact from="/" to="/home" />
      <Route path="/article" component={Article} />
      <Route path="/timeLine" component={TimeLine} />
      <Route path="/tips" component={Tips} />
      <Route path="/essay" component={Essay} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
