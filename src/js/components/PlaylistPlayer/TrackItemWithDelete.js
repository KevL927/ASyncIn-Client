import React from 'react';
import MdClear from 'react-icons/lib/md/clear';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';


const tooltip_delete = (
  <Tooltip id="tooltip_delete"><strong>Delete</strong> playlist</Tooltip>
);

export default ({ onTrackItemClick, track, onClickDeleteTrack}) => {
  
 
  return (
    <li className="track">
      <OverlayTrigger placement="bottom" overlay={tooltip_delete}>
    	  <button className="deleteTrack" onClick={(event) => onClickDeleteTrack(event, track)}><MdClear  size={15}/></button>
    	 </OverlayTrigger>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};