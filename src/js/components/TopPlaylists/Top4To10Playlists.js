import React from 'react';
import RenderPlaylist from './RenderPlaylist';

export default ({ playlistArray }) => (

  <div>
    <h2>Top 4 Playlists</h2>
    {playlistArray.map((playlist, index) => (
      <RenderPlaylist key={index} playlistName={playlist.name} />
    ))}
  </div>

);