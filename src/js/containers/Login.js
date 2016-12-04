import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';

class Login extends Component {
   onSubmit(event) {
        event.preventDefault();
   		this.props.dispatch(actions.loginRequest(this.refs.emailText.value, this.refs.passwordText.value));    
        this.refs.emailText.value = "";
        this.refs.passwordText.value = "";
    }
    render() {
        return (
            <div className="Login-page">
            <MusicPlayer/>
                <form className="Login-form">
                    <legend>Fill out the Form, Asshole.</legend>

                    <span className="email">Email: </span>

                    <input type="text" id="email" className="input" ref="emailText" required />
                    
                    <span className="password">Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />


                    <button id="login-button" onClick={this.onSubmit.bind(this)} value="Submit" className="login-button">Submit</button>
                </form>
            </div>
        );
    }
};

export default connect()(Login);


