import React, { Component } from 'react';
import './tags.css'

import {Tag} from 'antd';

const tagsLists = [
    {key: 'React', text: 'React', type: 'red'},
    {key: 'Redux', text: 'Redux', type: 'orange'},
    {key: 'Vue', text: 'Vue', type: 'blue'},
    {key: 'jQuery', text: 'jQuery', type: 'green'},
    {key: 'Angular', text: 'Angular', type: 'purple'},
    {key: 'HTML5', text: 'HTML5', type: '#f50'},
    {key: 'CSS3', text: 'CSS3', type: '#2db7f5'},
    {key: 'NODE', text: 'NODE', type: '#87d068'},
    {key: '循环性能', text: '循环性能', type: '#108ee9'}
]

const tagContent = tagsLists.map(item => (
    <li className='b-tags-item' key={item.key}><Tag color={item.type}>{item.text}</Tag></li>
))

class Tags extends Component{

    render(){
        return (
            <div className='b-tags'>
                <div className='b-tags-header'>Cloud Tags</div>
                <ul className='b-tags-content'>
                    {tagContent}
                </ul>
            </div>
        )
    }
}

export default Tags