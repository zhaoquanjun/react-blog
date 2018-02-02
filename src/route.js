import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay, Page404 } from "./containers";
import ArticleDetail from './components/common/articleDetail/articleDetial'

// const articlePage = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./containers/article').default)
//   }, 'articlePage')
// }

// const articlePage = (props) => (
//   <App load={(cb) => {
//       require.ensure([], require => {
//           cb(require('./containers/article'));
//       });
//   }}>
//   {(articlePage) => <articlePage {...props}/>}
// </App>
// );

// const timelinePage = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./containers/timeline').default)
//   }, timelinePage)
// }

// const tipsPage = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./containers/tips').default)
//   }, tipsPage)
// }

// const essayPage = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./containers/essay').default)
//   }, essayPage)
// }

// const errorPage404 = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./containers/404').default)
//   }, errorPage404)
// }

// const articleDetailPage = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./components/common/articleDetail/articleDetial').default)
//   }, articleDetailPage)
// }

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
