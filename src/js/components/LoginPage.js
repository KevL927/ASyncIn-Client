import React from 'react';
import '../../App.css';
import Login from '../containers/Login';

export default () => {
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <Login/>
        </div>
      </div>
    );
};