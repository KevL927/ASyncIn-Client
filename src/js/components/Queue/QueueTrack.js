import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import TiPlus from 'react-icons/lib/ti/plus';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, moveTrackInQueue, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}><FaTrash size={22} /></button>
    	<button onClick={(event) => onTrackItemClick(event, track)}><TiPlus size={22} /></button>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'up')}><FaArrowCircleUp size={22} /></button>
    	<button onClick={(event) => moveTrackInQueue(event, trackIndex, 'down')}><FaArrowCircleDown size={22} /></button>
    	<div onClick={(event) => onTrackPlayNow(event, track.link)} id="Q_Track_List">{track.title}</div>
    </li>
  );
        
};