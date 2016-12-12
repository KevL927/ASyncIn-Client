import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';


class AccountSettings extends Component {

    submitDisplayNameForm(event) {
        event.preventDefault();
        let displayNameText = ReactDOM.findDOMNode(this.refs.displayNameText).value;

        if(!validator.isAlphanumeric(displayNameText) || displayNameText.length <= 4) {
            console.log('username no good')
            return <span>Please enter text and numbers only.</span>;
        }
        //Make AJAX call
    }
    
    submitNewPasswordForm(event) {
        event.preventDefault();
        let currentPasswordText = ReactDOM.findDOMNode(this.refs.currentPasswordText).value;
        let newPasswordText = ReactDOM.findDOMNode(this.refs.newPasswordText).value;
        let confirmNewPasswordText = ReactDOM.findDOMNode(this.refs.confirmNewPasswordText).value;

        if(currentPasswordText.length <= 5) {
            console.log('type current password');
            return <span>Incorrect current password. Please check and type again.</span>;
        }
        
        if(newPasswordText !== confirmNewPasswordText || newPasswordText.length <= 5) {
            return <span>New password and confirm password mismatch. Please check and type again.</span>;
        }
        //Make AJAX call
    }

  
    render () {
        return (
            <div className="account-settings">
                <span className="title">Account Settings</span>
                <form className="update-display-name-form" onSubmit={this.submitDisplayNameForm.bind(this)}>
                    <span className="title">Update Display Name</span>
                    <label className="display-name">New Display Name:</label>
                    <input type="text" id="display-name-input" className="input" ref="displayNameText" />
                    <button id="register-button" type="submit"className="register-button">Update display name</button>
                </form>
                <form className="update-password-form" onSubmit={this.submitNewPasswordForm.bind(this)}>
                    <span className="title">Update Password</span>
                    <label className="current-password">Current password:</label>
                    <input type="password" className="input" name="current-password" ref="currentPasswordText" />
                    <label className="new-password">New Password:</label>
                    <input type="password" className="input" name="new-password" ref="newPasswordText" />
                    <label className="confirm-new-password">Confirm Password:</label>
                    <input type="password" className="input" name="confirm-new-password" ref="confirmNewPasswordText" />
                    <button id="register-button" type="submit"className="register-button">Set new password</button>
                </form>
            </div>
        );
    }
};

export default AccountSettings;