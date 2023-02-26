import React from 'react';
import Home from './home.js';
import Game from './Square.js';
import DayCalc from './DayCalculation.js';
import LifeCycle from './LifeCycle.js';
import Agenda from './agenda.js';
import App from './App';
import './App.css';
import {HashRouter, Routes, Route
} from "react-router-dom";

export default function Routing()
{
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/ticTacToe" element={<Game/>}/>
				<Route path="/DayCalculation" element={<DayCalc/>}/>
				<Route path="/lifeCycle" element={<LifeCycle/>}/>
				<Route path="/ReduxActions" element={<App/>}/>
				<Route path="/Agenda" element={<Agenda/>}/>
			</Routes>
		</HashRouter>
	);
}