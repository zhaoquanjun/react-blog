import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
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
    {/* <Link to="/"> */}
    <Icon type={item.type} />
    {item.text}
    {/* </Link> */}
  </MenuItem>
));

class NavTo extends Component {
  constructor(props, context) {
    super(props, context);
    // this.context.router;
    this.state = {
      currentPath: "home"
    };
    this.handlePathChange = this.handlePathChange.bind(this);
  }

  handlePathChange(e) {
    this.setState({
      currentPath: e.key
    });
    // this.context.router.push("/" + e.key);
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

// NavTo.propTypes = {
//   router: PropTypes.func.isRequired
// };

export default NavTo;
