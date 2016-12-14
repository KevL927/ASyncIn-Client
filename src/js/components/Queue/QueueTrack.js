import React from 'react';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, moveTrackInQueue, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<button onClick={(event) => onTrackItemClick(event, track)}>Add To Queue</button>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'up')}>Move up</button>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'down')}>Move down</button>
    	<div onClick={(event) => onTrackPlayNow(event, track.link)} id="Q_Track_List">{track.title}</div>
    </li>
  );
        
};