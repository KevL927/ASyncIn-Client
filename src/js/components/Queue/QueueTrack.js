import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import TiPlus from 'react-icons/lib/ti/plus';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const tooltip_delete = (
  <Tooltip id="tooltip_delete"><strong>Delete</strong> playlist</Tooltip>
);
const tooltip_add = (
  <Tooltip id="tooltip_add"><strong>Add</strong> playlist to queue</Tooltip>
);
const tooltip_up = (
  <Tooltip id="tooltip_up"><strong>Move Up</strong></Tooltip>
);
const tooltip_down = (
  <Tooltip id="tooltip_down"><strong>Move Down</strong> playlist to queue</Tooltip>
);

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, moveTrackInQueue, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    <OverlayTrigger placement="top" overlay={tooltip_add}>
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}><FaTrash size={22} /></button>
    </OverlayTrigger>
    <OverlayTrigger placement="top" overlay={tooltip_delete}>
    	<button onClick={(event) => onTrackItemClick(event, track)}><TiPlus size={22} /></button>
    </OverlayTrigger>
    <OverlayTrigger placement="top" overlay={tooltip_up}>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'up')}><FaArrowCircleUp size={22} /></button>
    </OverlayTrigger>
    <OverlayTrigger placement="top" overlay={tooltip_down}>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'down')}><FaArrowCircleDown size={22} /></button>
    </OverlayTrigger>
    	<div onClick={(event) => onTrackPlayNow(event, track.link)} id="Q_Track_List">{track.title}</div>

    </li>
  );
        
};