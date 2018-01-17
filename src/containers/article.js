import React, { Component } from "react";

import { Row, Col } from 'antd';

import HomeArticle from '../components/private/homeArticle/home-article';
import Card from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';

class Article extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <div className="articlePage">
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
    </div>;
  }
}

export default Article;
