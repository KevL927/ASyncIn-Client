import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router';
import { loginRequest } from '../actions/actions';
import { connect } from 'react-redux';
import MusicPlayer from './ReactPlayer'

class Login extends Component {
   onSubmit(event) {
        event.preventDefault();
        console.log(this)
        console.log(this.refs.passwordText.value)
   		this.props.onSubmitLogin(this.refs.usernameText.value, this.refs.passwordText.value);    
        this.refs.usernameText.value = "";
        this.refs.passwordText.value = "";
    }
    render() {
        return (
            <div className="Register-page">
            <MusicPlayer/>
                <form className="Register-form">
                    <legend>Fill out the Form, Asshole.</legend>

                    <span className="username">Username:</span>

                    <input type="text" id="username" className="input" ref="usernameText" required />
                    
                    <span className="password">Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />


                    <button id="register-button" onClick={this.onSubmit.bind(this)} value="Submit" className="register-button">Submit</button>
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


export default connect(null, mapDispatchToProps)(Login);


