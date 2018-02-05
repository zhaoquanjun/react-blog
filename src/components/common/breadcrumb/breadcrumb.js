import React, { Component } from "react";
import "./breadcrumb.css";

import { Breadcrumb } from "antd";

const BreadItem = Breadcrumb.Item;

function mathchPath() {
  switch(window.location.pathname){
    case '/article':
      return '文章'
    case '/timeline':
      return '时间轴'
    case '/tips':
      return '点滴汇'
    case '/essay':
      return '随笔'
    default:
      return '首页'
  }
}

let currentPath = mathchPath()

class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav-path">
        <Breadcrumb className="b-breadcrumb">
          <BreadItem>当前位置：/ {currentPath}</BreadItem>
        </Breadcrumb>
      </div>
    );
  }

  componentWillUpdate() {
    currentPath = mathchPath()
  }
}

export default Bread;
