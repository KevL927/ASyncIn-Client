import React, { Component } from 'react';
import {connect} from 'react-redux';
import Register from '../Register/Register';
import './styles.css';

class RegisterPage extends Component {
  render() {
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <Register error={this.props.error}/>
        </div>
      </div>
    );
  }
}

export default connect(({error})=>({error}))(RegisterPage)