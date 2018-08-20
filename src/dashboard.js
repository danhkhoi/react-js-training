import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dashboard extends Component {
 
  constructor(props) {
    super(props);
  }

  onClick(){
      console.log('on click dashboard');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Dashboard page
        </p>
        <button onClick={this.onClick} />
        
      </div>
    );
  }
}

export default Dashboard;
