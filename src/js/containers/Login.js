import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';
import {Button, Form, FormGroup, FormControl, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class Login extends Component {
   onSubmit(event) {
        event.preventDefault();
        console.log(this.refs.emailText.getInputDOMNode().value);
   		this.props.dispatch(actions.loginRequest(this.refs.emailText.value, this.refs.passwordText.value));    
        // this.refs.emailText.value = "";
        // this.refs.passwordText.value = "";
    }
    render() {
        return (
            <div className="Login-page">
            <MusicPlayer/>
                    <p>Fill out the Form, Asshole.</p>

                    <span className="username">Username:</span>

                    <input type="text" id="username" className="input" ref="usernameText" required />
                    
                    <span className="password">Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />


                    <button id="register-button" onClick={this.onSubmit.bind(this)} value="Submit" className="register-button">Submit</button>
            </div>
        );
    }
};

export default connect()(Login);


