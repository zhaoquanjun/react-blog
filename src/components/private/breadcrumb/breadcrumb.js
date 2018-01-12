import React, { Component } from "react";
import "./breadcrumb.css";

import { Breadcrumb } from "antd";

const BreadItem = Breadcrumb.Item;

class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav-path">
        <Breadcrumb className="b-breadcrumb">
          <BreadItem>当前位置：首页</BreadItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default Bread;
