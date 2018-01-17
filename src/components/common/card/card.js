import React,{ Component } from 'react'
import './card.css'

import { Icon } from 'antd';

const masterAvator = require('../../../assets/avator.jpg')

class Card extends Component{
    // constructor(props){
    //     super(props);
    // }

    render (){
        return(
            <div className='b-card'>
                <div className='card-header'></div>
                <div className='card-avator'>
                    <img src={masterAvator} alt='Carlton' />
                </div>
                <div className='card-name'><Icon type='man' style={{color:'red'}} />  Carlton</div>
                <div className='card-intro'>双鱼座男生，有轻微代码洁癖；轻度选择困难症，前端领域小虾米</div>
                <div></div>
            </div>
        )
    }
}

export default Card;