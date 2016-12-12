import React from 'react';

export default ({ onTrackItemClick, track, onClickDeleteQueueTrack, trackIndex, onTrackPlayNow }) => {
  
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<button onClick={(event) => onTrackItemClick(event, track)}>Add To Queue</button>
    	<a onClick={(event) => onTrackPlayNow(event, track.link)} >{track.title}</a>
    </li>
  );
        
};