import React from "react";

import MyContext from "./MyContext";

export default class ContextEater extends React.Component {
  render() {
    return `the value of the context is ${this.context}`
  }
}

ContextEater.contextType = MyContext;
