import React, { Component } from "react";
import "../style/tips.css";

import { Row, Col } from 'antd';

import Card from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';
import Calendar from '../components/common/calender/calender';

const tipsLists = [
  {title: 'Javascript 中的 this', time: '2017-1-1', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'Javascript 中的 循环', time: '2017-1-2', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'CSS 中的 移除隐藏', time: '2017-1-3', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'HTML5给我们带来了什么', time: '2017-1-4', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: '世界眼中的JS', time: '2017-1-10', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'Vue SPA 单页应用', time: '2017-1-5', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'Vue 的优势', time: '2017-1-6', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'React 更适合什么项目', time: '2017-1-7', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'React 全家桶对于新人的友好程度', time: '2017-1-8', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: '前端编程的发展前景', time: '2017-1-9', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'NodeJs 能做到取代 JAVA、PHP 吗？', time: '2017-1-10', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'jQuery 是否真的已经被大多数人所放弃', time: '2017-1-11', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'jQuery 结合 React 是优解吗？', time: '2017-1-12', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: '为什么大公司前端都在套用模板', time: '2017-1-13', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'IOS 8.0 对于默认参数的兼容性', time: '2017-1-14', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'Audio、Vedio 对于 IOS 和 Android 的兼容性', time: '2017-1-15', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},
  {title: 'Iphone X 的屏幕给前端适配带来了新难题', time: '2017-1-16', author: 'Carlton',  desc: 'Javascript 中的 this 是一个在工作中经常会遇到的点，而由此也给我们的工作带来了不少的困扰，今天就我所认识的 this 来做一个力所能及的探讨'},

]

const tipsContent = tipsLists.map(item => (
  <li className='tipsContentItem' key={item.title}>
    <h3 className='itemTitle'>{item.title}</h3>
    <small>{item.time}</small>
    <p className='desc'>{item.desc}</p>
    <span className='author'>{item.author}</span>
  </li>
))

class Tips extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="tipsPage">
          <Row gutter={16} className='home-content'>
            <Col className="content-left gutter-row" span={18}>
              <ul className='tipsListContent'>
                {tipsContent}
              </ul>
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

export default Tips;
