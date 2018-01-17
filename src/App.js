import "babel-polyfill";
import React, { Component } from "react";
import "./App.css";

import Route from "./route";

import { BackTop } from 'antd';

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import Breadcrumb from "./components/common/breadcrumb/breadcrumb";

class App extends Component {
  render() {
    return (
      <div className="b-page">
        <Header />
        <div className="breadcrumbContainer">
          <Breadcrumb />
        </div>
        <div className="contentContainer">
          <Route />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
        <div className='backTop'>
          <BackTop />
        </div>
      </div>
    );
  }
}

export default App;
