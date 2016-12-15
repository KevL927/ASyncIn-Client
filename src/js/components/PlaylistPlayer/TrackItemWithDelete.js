import React from 'react';
import MdClear from 'react-icons/lib/md/clear';

export default ({ onTrackItemClick, track, onClickDeleteTrack}) => {
  
 
  return (
    <li className="track">
    	<button className="deleteTrack" onClick={(event) => onClickDeleteTrack(event, track)}><MdClear  size={15}/></button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};