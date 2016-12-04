import React, { Component } from 'react';
import '../../App.css';
// import {Link} from 'react-router';
import SongSearch from '../containers/SongSearch';
import UserSavedPlaylists from '../containers/UserSavedPlaylists';

class SongSearchPage extends Component {
  render() {
    return (
      <div className="musicPlayer">
        <div className="musicPlayer-container">
          <SongSearch />
          <UserSavedPlaylists />
        </div>
      </div>
    );
  }
}

export default SongSearchPage;