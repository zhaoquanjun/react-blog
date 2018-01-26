import React, { Component } from "react";
import "../style/home.css";

import { Row, Col, } from "antd";

import Banner from "../components/private/banner/banner";
import HomeArticle from "../components/private/homeArticle/home-article";
import Card from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';
import Calendar from '../components/common/calender/calender';

const dailyWords = [
  {key: 'num_01', content: '人生来悲欢离合，难逃生老病死之轮回；唯在世匆匆数十载，能无愧于他人，无愧于自己，便是值得的一生。'},
  {key: 'num_02', content: '我们无故的怀念过去，唏嘘过往，“曾经”让我们更明白我们想要什么，未来我们的路要怎么走...'},
  {key: 'num_02', content: '放弃该放弃的是无奈，放弃不该放弃的是无能，不放弃该放弃的是无知，不放弃不该放弃的是执著！'},
  {key: 'num_02', content: '不论你在什么时候开始，重要的是开始之后就不要停止；不论你在什么时候结束，重要的是结束之后就不要悔恨。'},
  {key: 'num_02', content: '人一生下就会哭，笑是后来才学会的。所以忧伤是一种低级的本能，而快乐是一种更高级的能力'}
];

const randomIndex = Math.ceil(Math.random() * 5 - 1)

const dailyContent = dailyWords.map((item, index) => (
  index === randomIndex && <p className="words-content" key="item.key">{item.content}</p> 
))

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="home-header">
          <div className="home-banner">
            <Banner />
          </div>
          <div className="home-day-words">
            <h2 className="words-title">每日寄语</h2>
            {dailyContent}
          </div>
        </div>
        <Row gutter={16} className='home-content'>
          <Col className="content-left gutter-row" span={18}>
            <HomeArticle />
          </Col>
          <Col className='content-right gutter-row' span={6}>
            <Card />
            <Follow />
            <Calendar />
            <Tags />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
