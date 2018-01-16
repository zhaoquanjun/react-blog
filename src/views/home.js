import React, { Component } from "react";
import "../style/home.css";

import { Row, Col, } from "antd";

import Banner from "../components/private/banner/banner";
import HomeArticle from "../components/private/homeArticle/home-article";
import Card from '../components/private/card/card';
import Follow from '../components/private/follow/follow';
import Tags from '../components/private/cloudTags/tags'


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
              毕竟不是作家，写不出那么好的文章 —
              因为没有丰富阅历和经验！闲下来时多看看书，书本里的故事总有我要学的人生。
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
