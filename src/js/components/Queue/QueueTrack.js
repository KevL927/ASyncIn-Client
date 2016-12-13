import React from 'react';

import AddPlaylist from '../AddPlaylist/AddPlaylist';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<button onClick={(event) => onTrackItemClick(event, track)}>Add To Queue</button>
    	<a onClick={(event) => onTrackPlayNow(event, track.link)} id="Q_Track_List">{track.title}</a>
    </li>
  );
        
};