import "babel-polyfill";
import React, { Component } from "react";
import Route from "./route";
import "./App.css";

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import Breadcrumb from "./components/private/breadcrumb/breadcrumb";

class App extends Component {
  render() {
    return (
      <div className="b-page">
        <Header />
        <Breadcrumb />
        <Footer />
      </div>
    );
  }
}

export default App;
