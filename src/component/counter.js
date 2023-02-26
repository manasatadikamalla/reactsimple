import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
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
export default Counter;