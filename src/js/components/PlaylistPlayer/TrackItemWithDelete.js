import React from 'react';
import MdClear from 'react-icons/lib/md/clear';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';


const tooltip_delete = (
  <Tooltip id="tooltip_delete"><strong>Delete</strong> playlist</Tooltip>
);

export default ({ track, trackIndex, playlistIndex, moveTrackInPlaylist, onTrackItemClick, onClickDeleteTrack}) => {

  return (
    <li className="track">
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'up')}>Move up</button>
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'down')}>Move down</button>
      <OverlayTrigger placement="bottom" overlay={tooltip_delete}>
    	  <button className="deleteTrack" onClick={(event) => onClickDeleteTrack(event, track)}><MdClear  size={15}/></button>
      </OverlayTrigger>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};