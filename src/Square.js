// JavaScript source code
import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Board extends React.Component {
    constructor()
    {
        super();
        this.state={
            status:'o',
            count:0,
            box0:'',
            box1:'',
            box2:'',
            box3:'',
            box4:'',
            box5:'',
            box6:'',
            box7:'',
            box8:'',
            winner:''
        }
    }
    
    handleClick = (e) =>
    {
        var key=e.target.name;
        const count = this.state.count;
        this.setState({ count: count + 1 });
        if(key === 0){   
        if(this.state.count%2 === 0)
        {
            this.setState({box0:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box0:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 1){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box1:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box1:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 2){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box2:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box2:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 3){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box3:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box3:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 4){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box4:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box4:'x'})
            this.setState({status:'0'})
        }
        }
        else if(key === 5){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box5:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box5:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 6){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box6:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box6:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 7){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box7:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box7:'x'})
            this.setState({status:'o'})
        }
        }
        else if(key === 8){
    
        if(this.state.count%2 === 0)
        {
            this.setState({box8:'o'})
            this.setState({status:'x'})
        }
        else
        {
            this.setState({box8:'x'})
            this.setState({status:'o'})
        }
        }
    }
    
  renderSquare = (i) => { 
    var value=this.state.status;
    if(i==0)
    {
        value=this.state.box0;
    }
    else if(i === 1)
    {
        value=this.state.box1;
    }
    else if(i === 2)
    {
        value=this.state.box2;
    }
    else if(i === 3)
    {
        value=this.state.box3;
    }
    else if(i === 4)
    {
        value=this.state.box4;
    }

    else if(i === 5)
    {
        value=this.state.box5;
    }
    else if(i === 6)
    {
        value=this.state.box6;
    }
    else if(i === 7)
    {
        value=this.state.box7;
    }
    else if(i === 8)
    {
        value=this.state.box8;
    }
    return <button name={i} className="square" style={{padding:15}} onClick={this.handleClick}>{value}</button>;
  }
  winner = ()=>
  {
      var s0=this.state.box0;
      var s1=this.state.box1;
      var s2=this.state.box2;
      var s3=this.state.box3;
      var s4=this.state.box4;
      var s5=this.state.box5;
      var s6=this.state.box6;
      var s7=this.state.box7;
      var s8=this.state.box8;
      var condx = (s0=='x' && s1=='x' && s2=='x') || (s3=='x' && s4=='x' && s5=='x') || (s6=='x' && s7=='x' && s8=='x') || (s0=='x' && s3=='x' && s6=='x') || (s1=='x' && s4=='x' && s7=='x') || (s2=='x' && s5=='x' && s8=='x') || (s2=='x' && s4=='x' && s6=='x') || (s0=='x' && s4=='x' && s8=='x')
      var condo = (s0=='o' && s1=='o' && s2=='o') || (s3=='x' && s4=='o' && s5=='o') || (s6=='o' && s7=='o' && s8=='o') || (s0=='o' && s3=='o' && s6=='o') || (s1=='o' && s4=='o' && s7=='o') || (s2=='o' && s5=='o' && s8=='o') || (s2=='o' && s4=='o' && s6=='o') || (s0=='o' && s4=='o' && s8=='o')

      if(condx)
      {
          return <div><p>winner is x</p><p>GAME OVER</p></div>
      }
      else if(condo)
      {
          return <div><p>winner is o</p><p>GAME OVER</p></div>
      }
      else
      {
          return <div></div>
      }
  }

  

  render() {

    let status = 'Current player: '+this.state.status;

    return (
      <div>
  

        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>{this.winner()}</div>
      </div>
    );
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game" >
        <h1>Tic tac Toe</h1>
        <div className="game-board">
          <Board />
        </div>
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


export default Game;