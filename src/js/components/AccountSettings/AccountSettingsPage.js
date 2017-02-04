import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountSettings from '../AccountSettings/AccountSettings';
import './styles.css';

class AccountSettingsPage extends Component {
  render() {
    return (
      <div className="AccountSettingsPage">
        <div className="AccountSettingsPage-container">
          <AccountSettings error={this.props.error} feedback={this.props.feedback}/>
        </div>
      </div>
    );
  }
}

export default connect(
  ({error, feedback}) =>
  ({error, feedback})
)(AccountSettingsPage);