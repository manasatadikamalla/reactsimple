// JavaScript source code
import React from 'react';
import Routing from './routes.js';
import './App.css';
import { Link } from "react-router-dom";

class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
  }

  componentDidMount() {
      console.log("inside componentDidMount() method")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
  }

  componentWillUnmount() {
        console.log("inside componentWillUnmount() method")
        clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ticTacToe">Tic Tac Toe</Link></li>
                <li><Link to="/DayCalculation">Day Calculation</Link></li>
                <li><Link to="/lifeCycle">Life Cycle Methods</Link></li>
                <li><Link to="/ReduxActions">Redux Actions increment</Link></li>
            </ul>
        </div>
      </div>
    );
  }

}


export default LifeCycle;