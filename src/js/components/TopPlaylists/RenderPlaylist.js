import React, { Component } from 'react';
import RenderTracks from '../PlaylistPlayer/RenderTracks';


class RenderPlaylists extends Component {
  
  render(props) {
    if(this.props.playlistArray.length < 4) {
      console.log(this.props.playlistArray);
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
  }
  
}

export default RenderPlaylists;