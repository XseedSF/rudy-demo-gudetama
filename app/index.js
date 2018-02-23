import React from "react";
import ReactDOM from "react-dom";
import { Root, Home } from "./components";
import configStore from "./configStore";

var store = configStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));