import React, { Component } from "react";
import "./index.css";
import "./index.less";
import mirror, { actions, connect, render } from "mirrorx";
import fsztest from "./wecomemodel.jsx";
import Welcome from "./welcomecontainal.jsx";
console.log(fsztest);
mirror.model(fsztest);

export default connect(state => state.fsztest)(Welcome);
