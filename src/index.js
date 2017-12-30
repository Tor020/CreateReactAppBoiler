import React from "react";
import ReactDom from "react-dom";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import "./index.css";

ReactDom.render(
    <HelloWorld/>,
    document.getElementById('root')
);