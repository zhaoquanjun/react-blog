import React, { Component } from "react";
import "../style/essay.css";

import { Card, Row, Col, Timeline, Icon } from 'antd';

import CardList from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';

const TimelineItme = Timeline.Item;

const cardList = [
  {title: '毕业两年多', time: '2018-1-17', color: 'green', content: '转眼间，毕业已经两年多了；辗转流离，还是来到了北京这个我当初并不愿意来到的地方。人生之间，不如意十有八九，淡之、任之、去之，逝去如斯也。'},
  {title: '职业', time: '2018-1-17', content: '对于我来说，其实从小就并没有什么特别明确的目标，小学、初中作文也都是糊弄人的那种什么‘科学家’、‘老师’之类的了；然后这些都不是梦想。直至今日，我依然没有什么明确的梦想。现在想的更多的会是我做什么对于以后发展更好，能赚到更多的钱。人之成年，就再不能随心所欲的想这想那了。责任，是每个人都不能所逃避的。所幸的是，我现在所从事的事业总还算是我有些兴趣的，福利也还算差强人意吧。'},
  {title: '恋爱这种‘小事’', time: '2018-1-17', color:'red', type: 'clock-circle-o', content: '二十多个年头已经过去了，可以说最懵懂、冲动、敢爱敢恨的时间已经是一区不复返了算是；在大学之前呢，对于恋爱这件事并没有什么明确的概念其实是，那是时候想的更多的是要玩什么（打DOTA开黑？打毒奶粉组队刷远古？组团刷新宠龙之谷？兄弟几个梦幻结拜闯出一片天地？...），不好说了，那时候的脑子里只有这些，甚至耽误了学习... 然后大学之后，猛然发现思想不再是这样了，对游戏的兴趣逐渐小了，越来越觉得没什么意思了。这样的情况下，在那个年纪，不用多说，一定是那颗青春的心耐不住寂寞了（哈哈...）。我总觉得，人生经历的爱情不在多，而在时机。我更期待那种一见到白头的爱情，可是现实总是不如人愿；因此我也放弃了。所幸的是，虽然没能从一而终，但是凡是经历过的都也算是刻骨铭心了，每一段，都不从曾后悔。爱情带来的快乐、痛苦都是财富。感觉人生经历中的每个过客，谢谢你们更加完善了我'}
]

const cardListContent = cardList.reverse().map(item => (
  <TimelineItme className='essayItem' key={item.title} color={item.color} dot={item.type && <Icon type={item.type} />}>
    <Card title={item.title} extra={<span>{item.time}</span>}>{item.content}</Card>
  </TimelineItme>
))

class Essay extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="essayPage">
          <Row gutter={16} className='home-content'>
            <Col className="content-left gutter-row" span={18}>  
              <ul className='cardContent'>            
                {cardListContent}
              </ul>
            </Col>
            <Col className='content-right gutter-row' span={6}>
              <CardList />
              <Follow />
              <Tags />
            </Col>
          </Row>
      </div>
    );
  }
}

export default Essay;
