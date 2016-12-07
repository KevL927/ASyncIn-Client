import React from 'react';


export default ({ playlistArray }) => (

    playlistArray.map((playlist, index) => (
      console.log('top3', playlist)
    ))
//   <div>
//     <h2>Top 3 Playlists</h2>
//     {playlistArray.map((playlist, index) => (
//       <RenderTracks key={index} playlistName={playlist.name} />
//     ))}
//   </div>

);