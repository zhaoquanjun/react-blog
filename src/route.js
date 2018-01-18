import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay, Page404 } from "./containers";

const reg = /(\/|\/home|\/timeline|\/tips|\/essay|\/article)/;

const RouteLink = () => (
    <Router>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/article" component={Article} />
            <Route path="/timeLine" component={TimeLine} />
            <Route path="/tips" component={Tips} />
            <Route path="/essay" component={Essay} />
            <Route path={!reg.match} component={Page404}/>
        </Switch>
    </Router>
  )

export default RouteLink;
