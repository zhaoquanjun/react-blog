import React, {Component} from 'react'
import './style.css'

import API from '../../../api/api'

import { Anchor, Row, Col } from 'antd'

const { Link } = Anchor

const reg = /^\<code/;

const contentList = {
  title: 'Yarn 简述',
  smallSub: '一段关于 Yarn 的自述',
  content: [
    {
      subs: {words: 'Yarn 简介', href: 'fir_parh'},
      parh: [
        '是一款新的包管理器，将取代原有的基于npm客户端的工作流，但同时又保留了npm仓库的兼容性；',
        '它具备原油工作流的所有功能，但相比之下更加快速，安全，可靠。'
      ]
    },
    {
      subs: {words: '相比于 npm ，Yarn 性能优点', href: 'sec_parh'},
      parh: [
        '1、离线模式 --> yarn 会有一个缓冲目录，凡是安装过的包都会缓存下来，再次使用就不用从网上下载了，而是使用本地的即可，大大提高了开发效率，避免网络问题的丢包以及无网络情况下是开发；',
        '2、依赖关系确定性 --> 确保在每一台机器上依赖关系顺序和版本是一致的，避免了npm没有指定版本号时版本不一致导致失败的问题；',
        '3、网络性能优化 --> 下载时候优化请求顺序，避免请求瀑布发生；',
        '4、网络回弹 --> 在某个安装包失败的时候不会像npm直接失败，而是尝试重新请求；',
        '5、多注册来源 --> 所有依赖包，不管被不同的库间接引用多少次，都只会从一个注册源去安装，防止出现混乱不一致；',
        '6、扁平模式 --> 对于多个包依赖于同一个子包的情况，yarn会尽量提取为一个包，防止出现多个副本，浪费空间内存；'
      ]
    },
    {
      subs: {words: 'Yarn 的使用', href: 'thr_parh'},
      parh: [
        '1、创建一个项目',
        '<code yarn init ---> 初始化一个项目，生成一个package.json  （同 npm init）',
        '2、添加、更新、删除一个依赖包文件',
        '<code 1.添加   -->  yarn add [package]@[version]',
        '<code 2.更新   -->  yarn update [package]@[version]',
        '<code 3.删除   -->  yarn remove [package]'
      ]
    },
    {
      subs:{words: 'tips', href: 'for_parh'},
      parh: [
        'yarn add 默认的是安装到 dependencies 中，和 yarn add [package] --save 是一样的功能。'
      ]
    }
  ],
  anchor: [
    {name: '简述', target: '#fir_parh'},
    {name: '性能优劣', target: '#sec_parh'},
    {name: 'Yarn 的使用', target: '#thr_parh'},
    {name: 'tips', target: '#for_parh'},
    // {name: '第五段', target: '#fif_parh'},
    // {name: '44444', target: ''},
    // {name: '55555', target: ''},
    // {
    //   name: '66666', target: '', children: [
    //     {name: '6-1111', target: ''},
    //     {name: '6-2222', target: ''}
    //   ]
    // }
  ]
}


var a;
// 全文内容
const content = contentList.content.map((item, index) => ((
  <div key={index}>
    {articleSubTitle(item)}
    {parhContent(item.parh, index)}
  </div>
)))

// 小标题
function articleSubTitle(it){
  if(it.subs){
    return <h3 id={it.subs.href} className="subs-title"><span>{it.subs.words}</span><a className="anchor" href={'#' + it.subs.href} >   #</a></h3>
  } else {
    return ''
  }
}

// 段落内容
function parhContent(con, firIndex) {
  return con.map((item, index) => {
    if(reg.test(item)){
      return <pre key={firIndex-index} className='detail-comment'>{item.substr(5)}</pre>
    } else {
      return <p key={firIndex-index} className="detail-content">{item}</p>
    }
  })
}


// -------------------------------------------------------
// 锚点定位
const anchorContent = contentList.anchor.map(item => (
  <Link href={item.target} title={item.name} key={item.name}>
    {anchorPos(item)}
  </Link>
))

// 锚点内容
function anchorPos(par){
  if(par.children){
    return par.children.map(it => (<Link href={it.target} title={it.name} key={it.name} />))
  }
}

class ArticleDetail extends Component{
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div className="article-detail-page">
        <Row gutter={16} className='home-content'>
          <Col className="content-left gutter-row" span={18}>
            <div className="detail-container">
              <h2 className="detail-title">{contentList.title}</h2>
              <small className="detail-sub">{contentList.smallSub}</small>
              {content}
            </div>
          </Col>
          <Col className='content-right gutter-row' span={6}>
            <Anchor className="anchor-container">{anchorContent}</Anchor>
          </Col>
        </Row>
      </div>
    )
  }

  componentDidMount() {
    // API.getArticle().then(res => {
    //   console.log(res)
    // })
  }

}
export default ArticleDetail