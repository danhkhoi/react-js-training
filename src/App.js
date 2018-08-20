import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
  }

  navigateToDashboard() {
    console.log(this.props);
    const { history } = this.props;
    history && history.push('/dashboard');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.navigateToDashboard} > Nhấn nút </button>
      </div>
    );
  }
}

export default App;