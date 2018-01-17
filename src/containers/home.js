import React, { Component } from "react";
import "../style/home.css";

import { Row, Col, } from "antd";

import Banner from "../components/private/banner/banner";
import HomeArticle from "../components/private/homeArticle/home-article";
import Card from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';


class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }


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
              人生来悲欢离合，难逃生老病死之轮回；唯在世匆匆数十载，能无愧于他人，无愧于自己，便是值得的一生。
            </p>
          </div>
        </div>
        <Row gutter={16} className='home-content'>
          <Col className="content-left gutter-row" span={18}>
            <HomeArticle />
          </Col>
          <Col className='content-right gutter-row' span={6}>
            <Card />
            <Follow />
            <Tags />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
