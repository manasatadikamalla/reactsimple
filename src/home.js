import React from 'react';

import {Link} from "react-router-dom";

import './App.css';

class Home extends React.Component{
	render()
	{
		return(
			<div>
				<h1 style={{
                    color:'magenta'
                }}>React Learning</h1>
				 
                    <button style={{
          width: 200
        }}>
                        <Link to="/ticTacToe">Tic Tac Toe</Link>
                    </button>
                    <button style=
                    {{width:200}}>
                        <Link to="/DayCalculation">Day Calculation</Link>
                    </button>
					<button style=
                    {{width:200}}>
                        <Link to="/lifeCycle">Life Cycle Methods</Link>
                    </button>
					<button style=
                    {{width:200}}>
                        <Link to="/ReduxActions">Redux Actions increment</Link>
                    </button>
					<button style=
                    {{width:200}}>
                        <Link to="/Agenda">Agenda</Link>
                    </button>
                    <button style=
                    {{width:200}}>
                        <Link to="/Products">Products</Link>
                    </button>
                 
			</div>
		);
	}
}

export default Home;