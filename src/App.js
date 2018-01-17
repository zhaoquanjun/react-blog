import "babel-polyfill";
import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import "./App.css";
// import ReactChildrenMap from './utils/ReachChildrenMap'

import {
  // BrowserRouter,
  Route,
  Switch,
  // Redirect
} from "react-router-dom";

import { Home, Article, TimeLine, Tips, Essay } from "./containers";

// import RouteLink from "./route";

import { BackTop } from 'antd';

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import Breadcrumb from "./components/common/breadcrumb/breadcrumb";


const RouteLink = () => (
  <div className="contentContainer">
    <Route path="/home" component={Home} />
    {/* <Redirect exact from="/" to="/home" /> */}
    <Route path="/article" component={Article} />
    <Route path="/timeLine" component={TimeLine} />
    <Route path="/tips" component={Tips} />
    <Route path="/essay" component={Essay} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Switch>
          <div className="b-page">
            <Header />
            <div className="breadcrumbContainer">
              <Breadcrumb />
            </div>
            <RouteLink />
            <div className="footerContainer">
              <Footer />
            </div>
            <div className='backTop'>
              <BackTop />
            </div>
          </div>
      </Switch>
    );
  }
}

// const RouteOut  = () => (
//   <Router>
//     <Switch>
//       <Route path='/home' component={App} />
//       <Redirect from='/' to='/home' />
//     </Switch>
//   </Router>
// )

export default App;
