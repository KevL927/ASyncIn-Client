import React, { Component } from 'react';
import {connect} from 'react-redux';
import RenderTracks from '../PlaylistPlayer/RenderTracks';
import playMusicFunc from '../MusicPlayer/playMusicFunc';

class RenderPlaylist extends Component {
  
  rendertheStuff() {
    if(this.props.playlistArray.length < 4) {
      return (
        <div>
          <h2>Top 3 Playlists</h2>
          {this.props.playlistArray.map((playlist, index) => (
            <div>
              <li>#{index+1} - {playlist.name}</li>
              <RenderTracks key={index} playlistObject={playlist} />
            </div>
          ))}
        </div>
      );
    }
    
    if(this.props.playlistArray.length > 3) {
      return (
        <div>
          <h2>Top 4-10 Playlists</h2>
          {this.props.playlistArray.map((playlist, index) => (
            <div>
              <li>#{index+4} - {playlist.name}</li>
            </div>
          ))}
        </div>
      );
    }
  }
  
  render() {
    return <div>{this.rendertheStuff()}</div>  
  }
  
};

export default connect(
    ({ currentListeningUrl }) => ({ currentListeningUrl })
)(RenderPlaylist);