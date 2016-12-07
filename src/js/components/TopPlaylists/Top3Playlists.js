import React from 'react';
import RenderTracks from '../PlaylistPlayer/RenderTracks';

export default ({ playlistArray }) => {

    // playlistArray.map((playlist, index) => (
    //   console.log('top3', playlist)
    // ))

    return (
      <div>
        <h2>Top 3 Playlists</h2>

        {playlistArray.map((playlist, index) => (
        <RenderTracks key={index} playlistName={playlist.name} />
        ))}
      </div>
    );
};