import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay } from "./containers";

const RouteLink = () => (
    <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/article" component={Article} />
            <Route path="/timeLine" component={TimeLine} />
            <Route path="/tips" component={Tips} />
            <Route path="/essay" component={Essay} />
        </Switch>
    </Router>
  )

export default RouteLink;
