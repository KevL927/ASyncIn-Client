import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router';

class Register extends Component {
   onSubmit (event) {
        event.preventDefault();
   		this.props.onSubmitRegister(this.refs.usernameText.value, this.refs.passwordText.value);
        this.refs.usernameText.value = "";
        this.refs.passwordText.value = "";
    }
    render () {
        return (
            <div className="Register-page">
                <form className="Register-form">
                    <legend>Fill out the Form, Asshole.</legend>

                    <span className="email">Email Address:</span>

                    <input type="text" id="email-input" className="input" ref="emailText" required />

                    <span className="username">Create Username:</span>

                    <input type="text" id="username" className="input" ref="usernameText" required />
                    
                    <span className="password">Create Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />

                    <span className="password">Verify Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />

                    <button id="register-button" onClick={this.onSubmit.bind(this)} value="Submit" className="register-button"></button>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitLogin: function(username, password) {
            dispatch(loginRequest(username, password));
        }
    };
}


export default connect(null, mapDispatchToProps)(Register);

export default Register;