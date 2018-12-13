import React from "react";

import MyContext from "./MyContext";

export default class ContextEater extends React.Component {
  render() {
    if (this.context.hasOwnProperty("client")) {
      throw new Error("Supposed to recieve a context of type MyContext. Got one of ApolloClient.");
    }
    return `Context: ${this.context} | Data: ${this.props.data.id}`
  }
}

ContextEater.contextType = MyContext;
