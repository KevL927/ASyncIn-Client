import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router';

class Login_Page extends Component {
   onSubmit (event) {
        event.preventDefault();
   		this.props.onAddSubmit(this.refs.usernameText.value, this.refs.passwordText.value);
        this.refs.usernameText.value = "";
        this.refs.passwordText.value = "";
    }
    render () {
        return (
            <div className="Login-page">
                <form className="login-form">
                    <legend>Login to your account</legend>

                    <span className="username">Username:</span>

                    <input type="text" id="username" className="input" ref="usernameText" required />
                    
                    <span className="password">Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />

                    <input type="submit" id="submit" onClick={this.onSubmit} value="Submit" className="submit-button"></input>

                    
					<a className="Google-Login" href="/auth/google">Register/Log In with Google</a>
				    <a className="Faceebook Login" href="">Register/Log In with Google</a>
                    

                </form>
            </div>
        );
    }
};
export default Login_Page;