import React, { Component } from 'react';
import RenderPlaylist from './RenderPlaylist';

export default ({ playlistArray }) => (

    // playlistArray.map((playlist, index) => (
    //   console.log(playlist.name)
    // ))
  <div>
    <h2>Top 4 Playlist</h2>
    {playlistArray.map((playlist, index) => (
      <RenderPlaylist key={index} playlistName={playlist.name} />
    ))}
  </div>

);