import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import validator from 'validator';

import Feedback from '../Feedback';
import * as userActions from '../../actions/user-actions';
import * as actions from '../../actions/actions';

class AccountSettings extends Component {
    componentWillMount() {
        this.props.dispatch(userActions.getCurrentUser(sessionStorage.token, sessionStorage.access_token));
    }
    
    submitDisplayNameForm(event) {
        event.preventDefault();
        this.props.dispatch(actions.clearFeedback());
        this.props.dispatch(actions.clearError());
        let displayNameText = ReactDOM.findDOMNode(this.refs.displayNameText).value;

        if(!validator.isAlphanumeric(displayNameText) || displayNameText.length <= 4) {
            this.props.dispatch(userActions.updateUsernameError({message:'Please enter display name only longer than length of 4.'}));
            return;
        }
        this.props.dispatch(userActions.updateUsername(this.refs.displayNameText.value));
        setTimeout(() => {
        this.props.dispatch(actions.clearFeedback());
        }, 5000);
        this.refs.displayNameText.value = "";
        return this.props.dispatch(actions.clearError());
    }
    
    submitNewPasswordForm(event) {
        event.preventDefault();
        this.props.dispatch(actions.clearFeedback());
        this.props.dispatch(actions.clearError());
        let currentPasswordText = ReactDOM.findDOMNode(this.refs.currentPasswordText).value,
            newPasswordText = ReactDOM.findDOMNode(this.refs.newPasswordText).value,
            confirmNewPasswordText = ReactDOM.findDOMNode(this.refs.confirmNewPasswordText).value;

        if(currentPasswordText.length <= 5) {
            this.props.dispatch(userActions.updatePasswordError({message:'Incorrect current password. Please check and type again.'}));
            return;
        }
         if(newPasswordText.length <= 5) {
            this.props.dispatch(userActions.registerError({message:'Password length must be longer than 5'}));
            this.refs.newPasswordText.value = "";
            this.refs.confirmNewPasswordText.value = "";
            return;
        }
        if(newPasswordText !== confirmNewPasswordText) {
            this.props.dispatch(userActions.updatePasswordError({message:'New password and confirm password mismatch. Please check and type again.'}));
            return;
        }
        this.props.dispatch(userActions.updatePassword(currentPasswordText, newPasswordText));
        setTimeout(() => {
            this.props.dispatch(actions.clearFeedback());
        }, 5000);
        this.refs.currentPasswordText.value = "";
        this.refs.newPasswordText.value = "";
        this.refs.confirmNewPasswordText.value = "";
        
        return this.props.dispatch(actions.clearError());
    }

    renderLocalOrThirdPartyClassName() {
        if(!validator.isEmail(sessionStorage.token)) {
            return 'update-third-party-display-name-form';
        }
        return 'update-display-name-form';
    }

    renderUpdatePasswordForm() {
        if(validator.isEmail(sessionStorage.token)) {
            return (
                <div className="update-password">
                    <form className="update-password-form" onSubmit={this.submitNewPasswordForm.bind(this)}>
                        <label className="update-title">Update Password</label>
                        <label className="current-password">Current password:</label>
                        <input type="password" className="input" name="current-password" ref="currentPasswordText" />
                        <label className="new-password">New Password:</label>
                        <input type="password" className="input" name="new-password" ref="newPasswordText" />
                        <label className="confirm-new-password">Confirm New Password:</label>
                        <input type="password" className="input" name="confirm-new-password" ref="confirmNewPasswordText" />
                        <button id="update-display-name-button" type="submit"className="update-display-name-button">Set new password</button>
                    </form>
                </div>
            );
        }
    }
  
    render() {
        return (
            <div className="account-settings">
                { this.props.error ? <div><Feedback feedback={this.props.error} /></div> : <div></div> }
                { this.props.feedback ? <div><Feedback feedback={this.props.feedback} /></div> : <div></div> }
                <div className="update-display-name">
                    <form className={this.renderLocalOrThirdPartyClassName()} onSubmit={this.submitDisplayNameForm.bind(this)}>
                        <label className="update-title">Update Display Name</label>
                        <label className="new-display-name">New Display Name:</label><br/>
                        <input type="text" id="username" className="input" ref="displayNameText" />
                        <button id="update-display-name-button" type="submit"className="update-display-name-button">Update display name</button>
                    </form>
                </div>
                {this.renderUpdatePasswordForm()}
            </div>
        );
    }
}

export default connect(
    ({ currentUser }) => ({ currentUser })
)(AccountSettings);