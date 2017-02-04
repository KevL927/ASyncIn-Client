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

class Login extends Component {
    componentWillMount() {
        this.props.dispatch(actions.clearError());
    }
    
    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.clearFeedback());
        this.props.dispatch(actions.clearError());
        let emailText = ReactDOM.findDOMNode(this.refs.emailText).value,
            passwordText = ReactDOM.findDOMNode(this.refs.passwordText).value;
            
        if(!validator.isEmail(emailText) || emailText.length <= 6) {
            return ;
        }
        this.refs.emailText.value = "";
        this.refs.passwordText.value = "";
        this.props.dispatch(actions.clearError());
        return this.props.dispatch(userActions.loginRequest(emailText, passwordText));
    }
    
    render() {
        return (
            <div className="Login-page">
                <div id="login"><span className="title">Sync-In</span></div>
                <form className="login-container" onSubmit={this.onSubmit.bind(this)}>
                    { this.props.error ? <div className="error"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><Feedback feedback={this.props.error} /></div> : <div></div> }
                    <label className="email">Email:</label>
                    <input type="email" id="email" className="input" ref="emailText" placeholder="Type your e-mail address" required />
                    <label className="password">Password:</label>
                    <input type="password" className="input" name="password" ref="passwordText" placeholder="Type your password" required />
                    <button id="login-button" value="Submit" type="submit" className="login-button">Submit</button>
                    <div>
                        <p>Don't have an account? <Link to="/register" id="registerlink">Register Here</Link></p>
                        <div id="login-icons">
                            <a id="google-login" href="https://asyncin.herokuapp.com/auth/google" className="google-login"><FaGooglePlusSquare size={50} color="#dd4b39"/></a>
                            <a id="facebook-login" href="https://asyncin.herokuapp.com/auth/facebook" className="facebook-login"><FaFacebookOffical size={50} color="#3b5998"/></a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(Login);