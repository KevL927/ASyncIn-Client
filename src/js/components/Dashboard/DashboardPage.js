import React, { Component } from 'react';
import Dashboard from '../containers/Dashboard'
import SongSearch from '../containers/SongSearch';
import AddPlaylist from '../containers/AddPlaylist';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist'

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <div className="DashboardPage-container">
          <SongSearch />
          <AddPlaylist />
          <UserSavedPlaylist />
          <FavouritePlaylist />
        </div>
      </div>
    );
  }
}

export default DashboardPage;