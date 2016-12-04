import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router';

class UserPlaylist extends Component {
  render() {
    return (
      <div className="UserPlaylist">
        <div className="UserPlaylist-container">
          <UserPlaylists/>
        </div>
      </div>
    );
  }
}

export default App;
