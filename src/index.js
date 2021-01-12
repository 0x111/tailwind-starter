import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import ReduxExample from "./ReduxExample";


const mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <ReduxExample name="World"/>
    </Provider>, mountNode);