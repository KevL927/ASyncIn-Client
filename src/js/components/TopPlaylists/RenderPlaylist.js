import React, { Component } from 'react';
import RenderTracks from '../PlaylistPlayer/RenderTracks';


export default ({ playlistArray }) => {
    
  if(playlistArray.length < 4) {
    return (
      <div>
        <h2>Top 3 Playlists</h2>
        {playlistArray.map((playlist, index) => (
          <div>
            <li>#{index+1} - {playlist.name}</li>
            <RenderTracks key={index} playlistObject={playlist} />
          </div>
        ))}
      </div>
    );
  }
  
  if(playlistArray.length > 3) {
    return (
      <div>
        <h2>Top 4-10 Playlists</h2>
        {playlistArray.map((playlist, index) => (
          <div>
            <li>#{index+4} - {playlist.name}</li>
          </div>
        ))}
      </div>
    );
  }

};