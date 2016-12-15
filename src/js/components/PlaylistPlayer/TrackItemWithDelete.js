import React from 'react';

export default ({ onTrackItemClick, track, onClickDeleteTrack, trackIndex, moveTrackInPlaylist, playlistIndex }) => {
  
  return (
    <li className="track">
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'up')}>Move up</button>
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'down')}>Move down</button>
    	<button onClick={(event) => onClickDeleteTrack(event, track)}>Delete Track</button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};