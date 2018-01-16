import React, { Component } from "react";
import './follow.css';

import { Icon } from 'antd'

const followSource = [
    {key: 'github', path: 'https://github.com/zhaoquanjun'},
    {key: 'weibo-square', path: 'https://weibo.com/u/3516470941/home'}
]

const floowContent = followSource.map(item => (
    <a className='b-follow-item' key={item.key} href={item.path} target='_blank'>
        <Icon type={item.key} />
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