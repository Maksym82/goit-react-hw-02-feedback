import React, { Component } from "react";



export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = event => {
    const score = event.target.name;
    this.setState(state => ({ [score]: state[score] + 1}));
  }
}