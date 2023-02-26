import React from 'react';
import Game from './Square.js';
import DayCalc from './DayCalculation.js';
import {Link} from "react-router-dom";
import Agenda from './agenda.js';
import './App.css';

class Home extends React.Component{
	render()
	{
		return(
			<div>
				<h1>React Learning</h1>
				 <ul>
                    <li>
                        <Link to="/ticTacToe">Tic Tac Toe</Link>
                    </li>
                    <li>
                        <Link to="/DayCalculation">Day Calculation</Link>
                    </li>
					<li>
                        <Link to="/lifeCycle">Life Cycle Methods</Link>
                    </li>
					<li>
                        <Link to="/ReduxActions">Redux Actions increment</Link>
                    </li>
					<li>
                        <Link to="/Agenda">Agenda</Link>
                    </li>
                 </ul>
			</div>
		);
	}
}

export default Home;