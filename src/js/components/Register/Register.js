import React, { Component } from 'react';

// import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Feedback from '../Feedback';
import play from '../../../play.png';

class Register extends Component {
    state = {error: false}
    onSubmitRegister (event) {
        event.preventDefault();
        if (this.refs.passwordText.value === this.refs.confirmPasswordText.value){
            
       		this.props.dispatch(actions.registerRequest(this.refs.emailText.value, this.refs.displayNameText.value, this.refs.passwordText.value));
            this.refs.displayNameText.value = "";
            this.refs.passwordText.value = "";
            this.refs.confirmPasswordText.value = "";
            this.refs.emailText.value = "";
        }
        else {
            this.setState({error: true})
        }
    }
    
    renderFeedback() {
        if(this.state.error) {
            return  <Feedback feedback={'password do not match'} />
        } else {
            return <div></div>
        }
    }
    
    render () {
        return (
            <div className="Register-page">
            
            <span className="title">Sync-In</span>
            
                <form className="Register-form">

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

                    <button id="register-button" onClick={this.onSubmitRegister.bind(this)} type="submit"className="register-button">Submit</button>
                </form>
            </div>
        );
    }
};

export default connect()(Register);
