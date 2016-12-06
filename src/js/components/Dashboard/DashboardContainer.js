import React, { Component } from 'react';

import {Link} from 'react-router';

class Dashboard extends Component {
  onSubmit (event) {
        event.preventDefault();
    }
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-container">
          <button className="start-button">
          </button>
        </div>
      </div>
    );
  }
}

export default App;
