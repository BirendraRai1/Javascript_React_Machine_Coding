import React, { useState } from "react";

class CounterClass extends React.Component {
  constructor() {
    // calling super was optional
    super(props);
    this.state = {
      count: 0,
    };
  }
  // handler function
  handleIncrement = () => {
    this.setState({ count: this.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.count - 1 });
  };
  // ui is printed
  render() {
    return (
      <div className="container">
        <button onClick={this.handleIncrement}>+</button>
        <p>Count {this.state.count}</p>
        <button onClick={this.handleDecrement}>-</button>
        <h1>Hello</h1>
        <h2>I am atext</h2>
      </div>
    );
  }
}

export default CounterClass;
