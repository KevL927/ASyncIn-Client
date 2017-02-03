import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../Login/Login';
import './styles.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <div className="LoginPage-container">
                    <Login error={this.props.error}/>
                </div>
          </div>
        );
    }
}

export default connect(
    ({error}) => ({error})
)(LoginPage);