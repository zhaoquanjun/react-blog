import React, { Component } from "react";
import { message } from "antd";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    message.info("你想去哪里呀~");
  }

  render() {
    return (
      <div className="b-footer">
        <p className="b-footer-name" onClick={this.handleClick}>
          footer
        </p>
        <p className="b-rights">Carlton © 2017-2018 All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
