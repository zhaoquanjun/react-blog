import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay, Page404 } from "./containers";
import ArticleDetail from './components/common/articleDetail/articleDetial'

// const reg = /(\/|\/home|\/timeline|\/tips|\/essay|\/article)/;

const RouteLink = () => (
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/article/:title" strict  component={ArticleDetail} />
      <Route path="/article" component={Article} />
      <Route path="/timeLine" component={TimeLine} />
      <Route path="/tips" component={Tips} />
      <Route path="/essay" component={Essay} />
      <Route component={Page404}/>
  </Switch>
)

export default RouteLink;
