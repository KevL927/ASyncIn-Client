import React from 'react';

import AddPlaylist from '../AddPlaylist/AddPlaylist';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, moveUpTrackInQueue, moveDownTrackInQueue, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<button onClick={(event) => onTrackItemClick(event, track)}>Add To Queue</button>
    	<button onClick={(event) => moveUpTrackInQueue(event, trackIndex)}>Move up</button>
    	<button onClick={(event) => moveDownTrackInQueue(event, trackIndex)}>Move down</button>
    	<a onClick={(event) => onTrackPlayNow(event, track.link)} id="Q_Track_List">{track.title}</a>
    </li>
  );
        
};