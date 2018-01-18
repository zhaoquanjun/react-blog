import React, { Component } from "react";
import "../style/timeLine.css";

import { Timeline, Row, Col, Icon } from 'antd';

import Card from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';
import Calendar from '../components/common/calender/calender';

const TimelineItme = Timeline.Item;

const eventLists = [
  {text: 'Creating 项目', time: '2017-1-12', key: 'create', color: 'green'},
  {text: 'Finish 基本结构', time: '2017-1-13', key: 'finished the basic constructor', color: 'green'},
  {text: 'Finish the route', time: '2017-1-15', key: 'finish the route', color: 'green', },
  {text: '逐步完善 页面布局', time: '2017-1-17', key: 'optimize the page', color: 'red', type: 'clock-circle-o'},
  {text: 'Completed 公共头、尾部分布局', time: '2017-1-17', key: 'finish the common header and footer', color: 'blue', type: ''},
  {text: 'Finish 首页Banner、每日一句部分', time: '2017-1-18', key: 'finish the banner and words for day', color: 'blue', type: ''},
  {text: 'Complete 公共侧边栏部分', time: '2017-1-18', key: 'finish the slider', color: 'green', type: ''},
  {text: 'Finish 文章页面', time: '2017-1-19', key: 'finish the article', color: 'green', type: ''},
  {text: 'Completing 时间轴页面', time: '2017-1-19', key: 'finish the timeline', color: 'red', type: ''},
  {text: 'Finish 点滴汇', time: '2017-1-20', key: 'finish the tips', color: 'green', type: ''},
  {text: 'Completing 随笔', time: '2017-1-21', key: 'finish the essay', color: 'red', type: ''},
  {text: 'Add 回到顶部', time: '2017-1-22', key: 'add the backtop', color: 'blue', type: ''},
  {text: 'completed 页面动画（animation）', time: '2017-1-23', key: 'complete the animation of page', color: 'blue', type: ''},
]

const eventContent = eventLists.reverse().map(item => (
  <TimelineItme className='timelineItem' key={item.key} color={item.color} dot={item.type && <Icon type={item.type} />}>{item.text} --- {item.time}</TimelineItme>
))

class TimeLine extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="timeLinePage">
        <Row gutter={16} className='home-content'>
          <Col className="content-left gutter-row" span={18}>
            <div className='timelineContent'>
              <Timeline>
                {eventContent}
              </Timeline>
            </div>
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

export default TimeLine;
