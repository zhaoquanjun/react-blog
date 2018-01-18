import React, { Component } from 'react';
import '../style/404.css';

const pit404 = require('../assets/404.svg');

class Page404 extends Component{

    render() {
        return (
            <div className='errPage'>
                <img src={pit404} alt='404页面' />
            </div>
        )
    }
}

export default Page404;