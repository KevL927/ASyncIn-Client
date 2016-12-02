import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';
import {Link} from 'react-router';
import LoadingAni from './Loading';
import {loading} from 'react'

class MainPage extends Component {
  onSubmit (event) {
        event.preventDefault();
    }
  render() {
    return (
      <div className="MainPage">
      {loading ? <LoadingAni/> :
        <div className="MainPage-Header">
          <h2>
          
          <span className="S">S</span>
          <span className="y">y</span>
          <span className="n">n</span>
          <span className="c">c</span>
          <span className="I">I</span>
          <span className="n">n?</span>
          </h2>
          <button className="start-button">
            <Link to="/login">Start</Link>
          </button>
        </div>
      }
      </div>
    );
  }
}

export default MainPage;

//<img src={logo} className="App-logo" alt="logo" />
