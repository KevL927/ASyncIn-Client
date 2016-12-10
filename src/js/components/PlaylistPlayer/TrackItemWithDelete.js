import React from 'react';

export default ({ onTrackItemClick, track, onClickDeleteTrack}) => {
  
 
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteTrack(event, track)}>Delete Track</button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};