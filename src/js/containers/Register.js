import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import registerRequest from '../actions/actions';



class Register extends Component {
   onSubmitRegister (event) {
        event.preventDefault();
        if (this.refs.passwordText.value === this.refs.confirmpasswordText.value){
       		this.props.onSubmitRegister(this.refs.usernameText.value, this.refs.passwordText.value, this.refs.emailText.value);
            this.refs.usernameText.value = "";
            this.refs.passwordText.value = "";
            this.refs.emailText.value = "";
        }
        else {
    
            
        }
    }
    render () {
        return (
            <div className="Register-page">
                <form className="Register-form">
                    <legend>Fill out the Form, Asshole.</legend>

                    <span className="email">Email Address:</span>

                    <input type="email" id="email-input" className="input" ref="emailText" required />

                    <span className="username">Create Username:</span>

                    <input type="text" id="username" className="input" ref="usernameText" required />
                    
                    <span className="password">Create Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />

                    <span className="password">Verify Password:</span>

                    <input type="password" className="input" name="password" ref="confirmpasswordText" required />

                    <button id="register-button" onClick={this.onSubmitRegister.bind(this)} className="register-button">Submit</button>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitRegister: function(email, username, password) {
            dispatch(registerRequest(email, username, password));
        }
    };
}


export default connect(null, mapDispatchToProps)(Register);
