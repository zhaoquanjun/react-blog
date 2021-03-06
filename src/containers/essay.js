import React, { Component } from "react";
import "../style/essay.css";

import { Card, Row, Col, Timeline, Icon } from 'antd';

import CardList from '../components/common/card/card';
import Follow from '../components/common/follow/follow';
import Tags from '../components/common/cloudTags/tags';
import Calendar from '../components/common/calender/calender';

const TimelineItme = Timeline.Item;

const cardList = [
  {title: '毕业两年多', time: '2018-1-17', color: 'green', content: '转眼间，毕业已经两年多了；辗转流离，还是来到了北京这个我当初并不愿意来到的地方。人生之间，不如意十有八九，淡之、任之、去之，逝去如斯也。'},
  {title: '职业', time: '2018-1-17', content: '对于我来说，其实从小就并没有什么特别明确的目标，小学、初中作文也都是糊弄人的那种什么‘科学家’、‘老师’之类的了；然后这些都不是梦想。直至今日，我依然没有什么明确的梦想。现在想的更多的会是我做什么对于以后发展更好，能赚到更多的钱。人之成年，就再不能随心所欲的想这想那了。责任，是每个人都不能所逃避的。所幸的是，我现在所从事的事业总还算是我有些兴趣的，福利也还算差强人意吧。'},
  {title: '恋爱这种‘小事’', time: '2018-1-17', color:'red', type: 'clock-circle-o', content: '二十多个年头已经过去了，可以说最懵懂、冲动、敢爱敢恨的时间已经是一区不复返了算是；在大学之前呢，对于恋爱这件事并没有什么明确的概念其实是，那是时候想的更多的是要玩什么（打DOTA开黑？打毒奶粉组队刷远古？组团刷新宠龙之谷？兄弟几个梦幻结拜闯出一片天地？...），不好说了，那时候的脑子里只有这些，甚至耽误了学习... 然后大学之后，猛然发现思想不再是这样了，对游戏的兴趣逐渐小了，越来越觉得没什么意思了。这样的情况下，在那个年纪，不用多说，一定是那颗青春的心耐不住寂寞了（哈哈...）。我总觉得，人生经历的爱情不在多，而在时机。我更期待那种一见到白头的爱情，可是现实总是不如人愿；因此我也放弃了。所幸的是，虽然没能从一而终，但是凡是经历过的都也算是刻骨铭心了，每一段，都不从曾后悔。爱情带来的快乐、痛苦都是财富。感觉人生经历中的每个过客，谢谢你们更加完善了我'},
  {title: '幡然醒悟', time: '2018-1-18', color:'blue', type: '', content: '路，唯在脚下和远方，别无捷径！'},
  {title: '随感', time: '2018-1-19', color:'blue', type: '', content: '不忘初心，方得始终！'},
  {title: '是长大了，还是老了？', time: '2018-1-26', color: 'green', type: '', content: '还记得，上高中时候，每次到了星期日中午，一个班里都是躁动的情绪，为了即将到来的一个下午的假期激动难耐；而如今，我可以有两天的周末挥霍，却根本没有丝毫的兴奋可言，因为现在已经不知道还有什么事情可以让我去满心期待的了...'},
  {title: '春节临近了', time: '2018-2-1', color: 'blue', content: '时间这个东西，真的是不经意间；恍惚间，18年春节就要到了，仿佛还停留在17年对年月的唏嘘中，就走完了一个年头的路程；越长大，越感叹时间的匆忙，随之而来的还有越来越大的压力：需要组建自己的家庭，那么就要考虑到房子、车子；需要有自己的孩子，就要面临对孩子的一份责任；父母逐渐年迈，也要多一份对父母的责任；在这个纷乱的时代中，灯红酒绿，车水马龙，需要争取的实在是太多太多了；没有太多喘息的时间，正好现在还处于“正青春”，那么“当远行”貌似才是最适合这个时代的号角吧'},
  {title: 'yarn', time: '2018-2-5', color: 'blue', content: 'yarn 是 facebook 公布的新的 javascript 的包管理工具，用来替代 npm ；yarn 的6大有点： 1、离线模式 - > yarn 会有一个缓冲目录，凡是安装过的包都会缓存下来，再次使用就不用从网上下载了，而是使用本地的即可，大大提高了开发效率，避免网络问题的丢包以及无网络情况下是开发；2、依赖关系确定性 - > 确保在每一台机器上依赖关系顺序和版本是一致的，避免了npm没有指定版本号时版本不一致导致失败的问题；3、网络性能优化 - > 下载时候优化请求顺序，避免请求瀑布发生；4、网络回弹 - > 在某个安装包失败的时候不会像npm直接失败，而是尝试重新请求；5、多注册来源 - > 所有依赖包，不管被不同的库间接引用多少次，都只会从一个注册源去安装，防止出现混乱不一致；6、扁平模式 - > 对于多个包依赖于同一个子包的情况，yarn会尽量提取为一个包，防止出现多个副本，浪费空间内存'}
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
              <Calendar />
              <Tags />
            </Col>
          </Row>
      </div>
    );
  }
}

export default Essay;
