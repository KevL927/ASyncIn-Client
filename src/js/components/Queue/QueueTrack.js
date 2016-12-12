import React from 'react';

export default ({ onTrackItemClick, track, onClickDeleteQueueTrack }) => {
  
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, track)}>Delete Track</button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};