import React, { Component } from 'react';

import AccountSettings from '../AccountSettings/AccountSettings';
//import {Link} from 'react-router';

class AccountSettingsPage extends Component {
  render() {
    return (
      <div className="AccountSettingsPage">
        <div className="AccountSettingsPage-container">
          <AccountSettings />
        </div>
      </div>
    );
  }
}

export default AccountSettingsPage;