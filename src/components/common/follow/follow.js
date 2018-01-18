import React, { Component } from "react";
import './follow.css';


const followSource = [
    {key: 'github', src: require('../../../assets/github.svg'), path: 'https://github.com/zhaoquanjun'},
    {key: 'weibo', src: require('../../../assets/weibo.svg'), path: 'https://weibo.com/u/3516470941/home'},
    {key: 'boke', src: require('../../../assets/boke.svg'), path: 'https://zhaoquanjun.github.io/'}
]

const floowContent = followSource.map(item => (
    <a className='b-follow-item' key={item.key} href={item.path} target='_blank'>
        <img src={item.src} alt={item.key}/>
    </a>
))

class Follow extends Component{
    render(){
        return (
            <div className='b-follow'>
                <div className='b-follow-header'>FOLLOW ME</div>
                <ul className='b-follow-content'>
                    {floowContent}
                </ul>
            </div>
        )
    }
}

export default Follow;