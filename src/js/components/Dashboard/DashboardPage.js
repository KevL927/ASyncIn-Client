import React, { Component } from 'react';
import Dashboard from '../containers/Dashboard'
import SongSearch from '../containers/SongSearch';
import AddPlaylist from '../containers/AddPlaylist';

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <div className="DashboardPage-container">
          <SongSearch />
          <AddPlaylist />
          <UserSavedPlaylist />
        </div>
      </div>
    );
  }
}

export default DashboardPage;