import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import FaTrash from 'react-icons/lib/fa/trash';
import TiPlus from 'react-icons/lib/ti/plus';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';

import { tooltip_add, tooltip_delete, tooltip_up, tooltip_down } from '../../utils/tooltips';
import './styles.css';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, moveTrackInQueue, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="queue_track">
    	<div className="col-sm-6 queue-track-name" onClick={(event) => onTrackPlayNow(event, track)} id="Q_Track_List">{track.title}</div>
    	<div className="col-sm-6 queueTrackButton">
         <OverlayTrigger placement="top" overlay={tooltip_add}>
        	<button onClick={(event) => onTrackItemClick(event, track)}><TiPlus size={22} /></button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip_up}>
        	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'up')}><FaArrowCircleUp size={22} /></button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip_down}>
        <button onClick={(event) => moveTrackInQueue(event, trackIndex, 'down')}><FaArrowCircleDown size={22} /></button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip_delete}>
          <button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}><FaTrash size={22} /></button>
        </OverlayTrigger>
      </div>
    </li>
  );
};