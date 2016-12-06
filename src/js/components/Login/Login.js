import React, { Component } from 'react';
import '../../../App.css';
import * as actions from '../../actions/actions';
import play from '../../../play.png';
import { connect } from 'react-redux';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import {Link} from 'react-router';


class Login extends Component {
   onSubmit(event) {
        event.preventDefault();
   		this.props.dispatch(actions.loginRequest(this.refs.emailText.value, this.refs.passwordText.value));    
        // this.refs.emailText.value = "";
        // this.refs.passwordText.value = "";
    }
    render() {
        return (
            <div className="Login-page">
            <img src={play} className='image-login' alt="play"/>
            <span className="title">Sync-In</span>
            <img src={play} className='image-login2' alt="play"/>
            <MusicPlayer/>
                <form className="login-container">
                    <label className="username">Email:</label>

                    <input type="text" id="username" className="input" ref="emailText" required />
                    
                    <label className="password">Password:</label>

                    <input type="password" className="input" name="password" ref="passwordText" required />


                    <button id="register-button" onClick={this.onSubmit.bind(this)} value="Submit" type="submit" className="register-button">Submit</button>
                    <Link to="/register" id="registerlink"> Dont have an account? Let's hook you up, man. </Link>
                </form>

            </div>
        );
    }
};

export default connect()(Login);


