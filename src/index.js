import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import App from "./App";
import Route from "./route";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Route />, document.getElementById("root"));
registerServiceWorker();
