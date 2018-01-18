import React, { Component } from 'react';
import './tags.css'

import { Tag, notification } from 'antd';

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

const openNotification = () => {
    notification.open({
        message: '陛下',
        description: 'It has not completed yet now, please wait a while; I promise it will come soon ~'
    })
}

// const tagContent = tagsLists.map(item => (
//     <li onClick={this.handleDetail} className='b-tags-item' key={item.key}><Tag color={item.type}>{item.text}</Tag></li>
// ))


class Tags extends Component{
    constructor(props){
        super(props);
        this.handleDetail = this.handleDetail.bind(this)
    }

    handleDetail(e){
        openNotification();
    }

    render(){
        return (
            <div className='b-tags'>
                <div className='b-tags-header'>Cloud Tags</div>
                <ul className='b-tags-content'>
                    {tagsLists.map(item => (
                    <li onClick={this.handleDetail} className='b-tags-item' key={item.key}>
                    <Tag color={item.type}>{item.text}</Tag>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Tags