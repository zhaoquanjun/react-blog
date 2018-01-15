import React, { Component } from "react";
import "./header.css";
import logo from "../../../logo.svg";

import NavTo from "../nav/navLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="b-header">
        <div className="b-header-container">
          <h1 className="b-header-title">
            <span
              className="b-header-car"
              style={{ color: "#3197ef", fontSize: 35 + "px" }}
            >
              Car
            </span>lton
            <img className="b-header-rotate" src={logo} alt="rotate icon" />
          </h1>
          <small className="sub-title" style={{ fontSize: 14 + "px" }}>
            Miss the past is to better face the future.
          </small>
        </div>
        <NavTo />
      </div>
    );
  }
}

export default Header;
