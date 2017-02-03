import React from 'react';
import MdClear from 'react-icons/lib/md/clear';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';

const tooltip_delete = (
  <Tooltip id="tooltip_delete"><strong>Delete</strong> playlist</Tooltip>
);

const tooltip_up = (
  <Tooltip id="tooltip_up"><strong>Move Up</strong>the playlist </Tooltip>
);

const tooltip_down = (
  <Tooltip id="tooltip_down"><strong>Move Down</strong> the playlist </Tooltip>
);


export default ({ track, trackIndex, playlistIndex, moveTrackInPlaylist, onTrackItemClick, onClickDeleteTrack}) => {
  return (
    <li>
      <div className="col-md-12 track">
        <div className="col-sm-8 track-item">
          <a id="track-names" onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
        </div>
        <div className="col-sm-4 track-buttons">
          <OverlayTrigger placement="bottom" overlay={tooltip_up}>
            <button className="trackButtons" onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'up')}><FaArrowCircleUp size={22} /></button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip_down}>
            <button className="trackButtons" onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'down')}><FaArrowCircleDown size={22} /></button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip_delete}>
             <button className="trackButtons" onClick={(event) => onClickDeleteTrack(event, track)}><MdClear  size={21}/></button>
          </OverlayTrigger>
        </div>
      </div>
    </li>
  );
};