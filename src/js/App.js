import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

class App extends Component {
  onSubmit (event) {
        event.preventDefault();
        
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="a">a</span>
          <span className="d">d</span>
          <span className="y">y</span>
          <span className="t">t</span>
          <span className="o">o</span>
          <span className="S">S</span>
          <span className="y">y</span>
          <span className="n">n</span>
          <span className="c">c</span>
          <span className="I">I</span>
          <span className="n">n?</span>
          </h2>
          <input type="submit" id="submit" onClick={this.onSubmit} value="Start" className="start-button"></input>
        </div>
      </div>
    );
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />
