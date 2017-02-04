import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import validator from 'validator';
import FaFacebookOffical from 'react-icons/lib/fa/facebook-official';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';

import * as userActions from '../../actions/user-actions';
import * as actions from '../../actions/actions';
import Feedback from '../Feedback';

class Register extends Component {
    state = { error: false }
    
    componentWillMount() {
        //clear out errors before loading
        this.props.dispatch(actions.clearError());
    }
    
    onSubmitRegister (event) {
        event.preventDefault();
        this.props.dispatch(actions.clearFeedback());
        this.props.dispatch(actions.clearError());
        let emailText = ReactDOM.findDOMNode(this.refs.emailText).value,
            displayNameText = ReactDOM.findDOMNode(this.refs.displayNameText).value,
            passwordText = ReactDOM.findDOMNode(this.refs.passwordText).value,
            confirmPasswordText = ReactDOM.findDOMNode(this.refs.confirmPasswordText).value;

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
                <div id="register"><span className="title">Sync-In</span></div>
                <form className="Register-form" onSubmit={this.onSubmitRegister.bind(this)}>
                    {this.props.error?<div className="error"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><Feedback feedback={this.props.error} /></div> : <div></div>}
                    <label className="email">Email Address:</label>
                    <input type="email" id="email-input" className="input" ref="emailText" placeholder="Type your e-mail address" required />
                    <label className="username">Create Display Name:</label>
                    <input type="text" id="displayName" className="input" ref="displayNameText" placeholder="Set a display name" required />
                    <label className="password">Create Password:</label>
                    <input type="password" className="input" name="password" ref="passwordText" placeholder="Password must be longer than 5 characters" required />
                    <label className="password">Verify Password:</label>
                    <input type="password" className="input" name="password" ref="confirmPasswordText" placeholder="Please retype your password" required />
                    <button id="register-button" type="submit"className="register-button">Submit</button>
                    <p>Already have an account? <Link to="/login" id="loginlink">Log In Here</Link></p>
                    <div id="login-icons">
                        <a id="google-login" href="https://asyncin.herokuapp.com/auth/google" className="google-login"><FaGooglePlusSquare size={50} color="#dd4b39"/></a>
                        <a id="facebook-login" href="https://asyncin.herokuapp.com/auth/facebook" className="facebook-login"><FaFacebookOffical size={50} color="#3b5998"/></a>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(Register);