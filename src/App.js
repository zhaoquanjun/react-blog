import "babel-polyfill";
import React, { Component } from "react";
import "./App.css";
// import ReactChildrenMap from './utils/ReachChildrenMap'

import {
  BrowserRouter as Router,
} from "react-router-dom";

import PropTypes from 'prop-types';

import RouteLink from "./route";

import { BackTop } from 'antd';

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import Breadcrumb from "./components/common/breadcrumb/breadcrumb";




class App extends Component {
  getChildContext(){
    return {router:{}};
  }
  render() {
    return (
      <Router>
        <div className="b-page">
          <Header />
          <div className="breadcrumbContainer">
            <Breadcrumb />
          </div>
          <div className='contentContainer'>
            <RouteLink />
          </div>
          <div className="footerContainer">
            <Footer />
          </div>
          <div className='backTop'>
            <BackTop />
          </div>
        </div>
    </Router>
    );
  }
}

App.childContextTypes = {
  router: PropTypes.object
}

export default App;
