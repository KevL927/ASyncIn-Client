import React, { Component } from 'react';

import Register from '../Register/Register';
//import {Link} from 'react-router';

class RegisterPage extends Component {
  render() {
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <Register/>
        </div>
      </div>
    );
  }
}

export default RegisterPage;