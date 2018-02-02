import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./style/main.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from './store/store'


import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>
    ,document.getElementById("root"))
}


render(App)

registerServiceWorker();