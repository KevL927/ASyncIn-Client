import React from 'react';

export default ({ onTrackItemClick, track, onClickDeleteQueueTrack, trackIndex }) => {
  
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};