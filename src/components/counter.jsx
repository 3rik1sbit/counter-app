import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  }

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  }

  render() { 
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.incrementCount} className="btn btn-secondary btn sm m-2">+
        </button>
        <button onClick={this.decrementCount} className="btn btn-secondary btn sm m-2">-
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.state.count) === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  decrementCount = () => {
    this.setState(this.state.count === 0 ? {count: this.state.count} : {count: this.state.count - 1}) ;
  }
}

export default Counter;