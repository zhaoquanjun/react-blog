import React, {Component} from 'react'
import './home-article.css'

import { message } from 'antd';


const contentLists = [
    {
      title: 'Javascript 的秘密', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    },
    {
      title: '探索 Vue', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    },
    {
      title: 'React 的发展历程', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    },
    {
      title: 'jQuery 曾经的辉煌', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    },
    {
      title: '为什么不喜欢 Angular', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    },
    {
      title: '作为一个前端的责任', path: '/', sub: 'post @ 2018-1-16 category: Javascript', text: 'Javascript 是一种轻量级的脚本语言，相比于后端语言更加的凸显自由、简介的编程方法。以 V8 引擎做底层，在 Chrome 这种 webkit 内核的浏览器上更如神助，速度简直不可同日而语；他的出现促使互联网向前迈进了一大步，实现了前后端的分离，前度业务逻辑的自我完善、飞跃。'
    }
  ]

class HomeArticle extends Component{
  constructor(props){
      super(props)
      this.handleReadOver = this.handleReadOver.bind(this);
  }

  handleReadOver(e){
    message.info("I'm sorry for that will come soon ...")
  }
  

  render(){
    const artContent = contentLists.map(item => (
      <li className="listItem" key={item.title}>
        <h3 className='listItem-title'  onClick={this.handleReadOver}>{item.title}</h3>
        <small className='listItem-subTitle'>{item.sub} </small>
        <p className='listItem-content'>{item.text}</p>
        <span className='readOver' onClick={this.handleReadOver}>阅读全文 >></span>
      </li>
    ))

    return (
      <div>
          {artContent}   
      </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  }
}
export default HomeArticle
