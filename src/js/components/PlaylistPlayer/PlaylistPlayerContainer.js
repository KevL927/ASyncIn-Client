import React, { Component } from 'react';
import '../../../App.css';
import PlaylistPlayer from './PlaylistPlayer'

class PlaylistPlayerPage extends Component {
  render() {
    return (
      <div className="playlistPlayer">
        <div className="playlistPlayer-container">
          <PlaylistPlayer/>
        </div>
      </div>
    );
  }
}

export default PlaylistPlayerPage; 