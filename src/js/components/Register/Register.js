import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import validator from 'validator';
import * as userActions from '../../actions/user-actions';
import Feedback from '../Feedback';
import play from '../../../play.png';


class Register extends Component {
    
    state = {error: false}
    onSubmitRegister (event) {
        event.preventDefault();
        let emailText = ReactDOM.findDOMNode(this.refs.emailText).value;
        let displayNameText = ReactDOM.findDOMNode(this.refs.displayNameText).value;
        let passwordText = ReactDOM.findDOMNode(this.refs.passwordText).value;
        let confirmPasswordText = ReactDOM.findDOMNode(this.refs.confirmPasswordText).value;

        if(!validator.isEmail(emailText) || emailText.length <= 6) {
            this.props.dispatch(userActions.registerError({message:'Invalid email'}));
            return;
        }
        
        if(!validator.isAlphanumeric(displayNameText) || displayNameText.length <= 4) {
            this.props.dispatch(userActions.registerError({message:'Please enter text and/or numbers only longer than length of 4.'}));
            this.refs.displayNameText.value = "";
            return ;
        }
        
        if(passwordText.length <= 5) {
            this.props.dispatch(userActions.registerError({message:'Password length must be longer than 5'}));
            this.refs.passwordText.value = "";
            this.refs.confirmPasswordText.value = "";
            return;
        }
        
        if(passwordText !== confirmPasswordText) {
            this.props.dispatch(userActions.registerError({message:'Password does not match. Please type again.'}));
            this.refs.passwordText.value = "";
            this.refs.confirmPasswordText.value = "";
            return;
        } else {
        return this.props.dispatch(userActions.registerRequest(emailText, displayNameText, passwordText));
        }
    }
    

    render () {
        return (
            <div className="Register-page">
            <span className="title">Sync-In</span>
                <form className="Register-form" onSubmit={this.onSubmitRegister.bind(this)}>
                    <p className="stranger">Welcome, Stranger. :)</p>
                    <label className="email">Email Address:</label>
                    <input type="email" id="email-input" className="input" ref="emailText" required />
                    <label className="username">Create Display Name:</label>
                    <input type="text" id="displayName" className="input" ref="displayNameText" required />
                    <label className="password">Create Password:</label>
                    <input type="password" className="input" name="password" ref="passwordText" required />
                    <label className="password">Verify Password:</label>
                    <input type="password" className="input" name="password" ref="confirmPasswordText" required />
                    {this.props.error?<div><Feedback feedback={this.props.error} /></div> : <div></div>}
                    <button id="register-button" type="submit"className="register-button">Submit</button>
                </form>
            </div>
        );
    }
    
};

export default connect()(Register);
