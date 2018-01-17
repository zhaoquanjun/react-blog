import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter } from "react-router-dom";


const render = Component => (
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"))
)

render(App)

registerServiceWorker();