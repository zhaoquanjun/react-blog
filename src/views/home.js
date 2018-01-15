import React, { Component } from "react";
import "../style/home.css";

import { Row, Col } from "antd";

import Banner from "../components/private/banner/banner";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homePage">
        <div className="home-header">
          <div className="home-banner">
            <Banner />
          </div>
          <div className="home-day-words">
            <h2 className="words-title">每日寄语</h2>
            <p className="words-content">
              毕竟不是作家，写不出那么好的文章 —
              因为没有丰富阅历和经验！闲下来时多看看书，书本里的故事总有我要学的人生。
            </p>
          </div>
        </div>
        <ul className="articleLists">
          <li className="listItem">111</li>
        </ul>
      </div>
    );
  }
}

export default Home;
