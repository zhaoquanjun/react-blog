import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "./navLink.css";

const MenuItem = Menu.Item;

const Lists = [
  { key: "home", type: "home", text: "首页" },
  { key: "article", type: "book", text: "文章" },
  { key: "timeline", type: "clock-circle-o", text: "时间轴" },
  { key: "tips", type: "profile", text: "点滴汇" },
  { key: "essay", type: "edit", text: "随笔" }
];

const content = Lists.map(item => (
  <MenuItem key={item.key}>
    <Icon type={item.type} />
    {item.text}
  </MenuItem>
));

console.dir(Menu);

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: "home"
    };
    this.handlePathChange = this.handlePathChange.bind(this);
  }

  handlePathChange(e) {
    this.setState({
      currentPath: e.key
    });
  }

  render() {
    return (
      <div className="nav-menu">
        <Menu
          onClick={this.handlePathChange}
          mode="horizontal"
          selectedKeys={[this.state.currentPath]}
        >
          {content}
        </Menu>
      </div>
    );
  }
}

export default NavLink;
