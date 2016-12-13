import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import validator from 'validator';
import Feedback from '../Feedback';
import * as userActions from '../../actions/user-actions'


class AccountSettings extends Component {

    submitDisplayNameForm(event) {
        event.preventDefault();
        let displayNameText = ReactDOM.findDOMNode(this.refs.displayNameText).value;

        if(!validator.isAlphanumeric(displayNameText) || displayNameText.length <= 4) {
            this.props.dispatch(userActions.updateUsernameError({message:'Please enter display name only longer than length of 4.'}));
            return;
        }
        return this.props.dispatch(userActions.updateUsername(this.refs.displayNameText.value));
    }
    
    submitNewPasswordForm(event) {
        event.preventDefault();
        let currentPasswordText = ReactDOM.findDOMNode(this.refs.currentPasswordText).value;
        let newPasswordText = ReactDOM.findDOMNode(this.refs.newPasswordText).value;
        let confirmNewPasswordText = ReactDOM.findDOMNode(this.refs.confirmNewPasswordText).value;

        if(currentPasswordText.length <= 5) {
            this.props.dispatch(userActions.updatePasswordError({message:'Incorrect current password. Please check and type again.'}));
            return ;
        }
        
        if(newPasswordText !== confirmNewPasswordText || newPasswordText.length <= 5) {
            this.props.dispatch(userActions.updatePasswordError({message:'New password and confirm password mismatch. Please check and type again.'}));
            return ;
        }
        return this.props.dispatch(userActions.updatePassword(currentPasswordText, newPasswordText));
    }

    localOrThirdPartySignInCheck() {
        if(validator.isEmail(this.props.currentUser.token)) {
            console.log('local sign-in user')
        } else {
            console.log('third party sign-in check')
        }
    }
  
  
    render () {
        return (
            <div className="account-settings">
                <span className="title">Account Settings</span>
                {this.localOrThirdPartySignInCheck()}
                <div className="update-password-display-name">
                <form className="update-display-name-form" onSubmit={this.submitDisplayNameForm.bind(this)}>
                    <label className="title">Update Display Name</label>
                    <label className="display-name">New Display Name:</label>
                    <input type="text" id="display-name-input" className="input" ref="displayNameText" />
                    <button id="update-display-name-button" type="submit"className="update-display-name-button">Update display name</button>
                </form>
                {this.props.error?<div><Feedback feedback={this.props.error} /></div> : <div></div>}
                <form className="update-password-form" onSubmit={this.submitNewPasswordForm.bind(this)}>
                    <label className="title">Update Password</label>
                    <label className="current-password">Current password:</label>
                    <input type="password" className="input" name="current-password" ref="currentPasswordText" />
                    <label className="new-password">New Password:</label>
                    <input type="password" className="input" name="new-password" ref="newPasswordText" />
                    <label className="confirm-new-password">Confirm Password:</label>
                    <input type="password" className="input" name="confirm-new-password" ref="confirmNewPasswordText" />
                    <button id="update-display-name-button" type="submit"className="update-display-name-button">Set new password</button>
                </form>
                </div>
            </div>
        );
    }
};

export default connect(
    ({ currentUser }) => ({ currentUser })
)(AccountSettings);