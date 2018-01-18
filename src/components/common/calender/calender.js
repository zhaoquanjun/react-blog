import React, { Component } from 'react';
import { Calendar  } from 'antd';
// import moment from 'moment';

import './calender.css';


class MyCalendar extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     value: moment(new Date()),
        //     selectedValue: moment(new Date())
        // }
        this.onPanelChange = this.onPanelChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    onPanelChange(value,mode){
        //console.log(value.mode)
    }

    onDateChange(val){
        //console.log(val)
        // this.setState({
        //     val,
        //     selectedValue: val
        // })
    }

    render() {
        return (
            <div className='myCalenderSlide'>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} onSelect={this.onDateChange}/>
            </div>
        )
    }
}


export default MyCalendar;