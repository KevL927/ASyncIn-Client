import React, { Component } from 'react';
import '../../App.css';
import Login from '../containers/Login'
//import {Link} from 'react-router';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <Login/>
        </div>
      </div>
    );
  }
}

export default LoginPage; 