import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class DayCalc extends React.Component{
	constructor()
	{
		super();
		this.state={
			date:'',
			day: 'Not Calculated'
		}
	}
	calculateDay = () =>
	{
		const dateValue = this.state.date;
		const words = dateValue.split('-');
		const year = +words[0];
		const monthValue = +words[1];
		const dateGiven = parseInt(words[2]);
		var yearCal;
		if(((year-1) % 400) >= 100 && ((year-1) % 400) < 200)
			yearCal = 5 + parseInt(((year-1) % 400)%100 + (((year-1) % 400)%100)/4) % 7;
		else if(((year-1) % 400) >= 200 && ((year-1) % 400) < 300)
			yearCal = 3 + parseInt(((year-1) % 400)%200 + (((year-1) % 400)%200)/4) % 7;
        else if(((year-1) % 400) >= 300 && ((year-1) % 400) < 400)
			yearCal = 1 + parseInt(((year-1) % 400)%100 + (((year-1) % 400)%100)/4) % 7;
        else
		    yearCal = parseInt((year-1) % 400 + ((year-1) % 400)/4) % 7;

		var monthODTotal = 0;
		var month = 0;
		for(var cnt = (monthValue - 1); cnt > 0; cnt--)
		{
			month = cnt;
			if(month === 1)
				monthODTotal = monthODTotal + 3;
			else if(month === 2)
			{
				if(this.leapYear(year))
					monthODTotal = monthODTotal + 1;
				else
					monthODTotal = monthODTotal + 0;
			}
			else if(month === 3)
				monthODTotal = monthODTotal + 3;
			else if(month === 4)
				monthODTotal = monthODTotal + 2;
			else if(month === 5)
				monthODTotal = monthODTotal + 3;
			else if(month === 6)
				monthODTotal = monthODTotal + 2;
			else if(month === 7)
				monthODTotal = monthODTotal + 3;
			else if(month === 8)
				monthODTotal = monthODTotal + 3;
			else if(month === 9)
				monthODTotal = monthODTotal + 2;
			else if(month === 10)
				monthODTotal = monthODTotal + 3;
			else if(month === 11)
				monthODTotal = monthODTotal + 2;
			else if(month === 12)
				monthODTotal = monthODTotal + 3;
		}
		var dayValue = (yearCal + (monthODTotal % 7) + (dateGiven % 7)) % 7;
		var dayH = {};
		dayH[0] = "Sunday"
		dayH[1] = "Monday"
		dayH[2] = "Tuesday"
		dayH[3] = "Wednesday"
		dayH[4] = "Thursday"
		dayH[5] = "Friday"
		dayH[6] = "Saturday"
		this.setState({day:dayH[dayValue]})
	}

	setDate = (e) => 
	{
		this.setState({date:e.target.value})
	}

	leapYear = (year) =>
	{
		return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	}

	render()
	{
		return (
			<div>
				<h1>Day Calculation</h1>
				Enter date: <input type="date" onChange={this.setDate}></input>
				<button onClick={this.calculateDay}>Submit</button>
				<p>Day selected is {this.state.day}</p>
				<p>{this.setDate === null ? 'value is null' : 'value is not null'}</p>
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

export default DayCalc;