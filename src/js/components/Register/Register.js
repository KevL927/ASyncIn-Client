import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import validator from 'validator';
import * as userActions from '../../actions/user-actions';
import Feedback from '../Feedback';


class Register extends Component {
    
    state = {error: false}
    onSubmitRegister (event) {
        event.preventDefault();
        let emailText = ReactDOM.findDOMNode(this.refs.emailText).value;

        if(!validator.isEmail(emailText) || emailText.length <= 6) {
            console.log('Invalid email.')
            return;
        }
        if (this.refs.passwordText.value === this.refs.confirmPasswordText.value){
       		this.props.dispatch(userActions.registerRequest(this.refs.emailText.value, this.refs.displayNameText.value, this.refs.passwordText.value));
            this.refs.displayNameText.value = "";
            this.refs.passwordText.value = "";
            this.refs.confirmPasswordText.value = "";
            this.refs.emailText.value = "";
        }
        else {
            this.setState({error: true});
        }
    }
    
    
    renderFeedback() {
        if(this.state.error) {
            return  <Feedback feedback={'password does not match'} />;
        } else {
            return <div></div>;
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
                    {this.renderFeedback()}
                    <button id="register-button" type="submit"className="register-button">Submit</button>
                </form>
            </div>
        );
    }
    
}

export default connect()(Register);
