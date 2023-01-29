import React, { Component } from "react";
import ChildComp from "./ChildComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Hossain",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        firstName: "Nadia",
      });
    }, 1000);
  }
  render() {
    console.log("parent");
    return (
      <div>
        <ChildComp firstName={this.state.firstName} />
      </div>
    );
  }
}
