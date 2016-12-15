import React from 'react';
import MdClear from 'react-icons/lib/md/clear';

export default ({ track, trackIndex, playlistIndex, moveTrackInPlaylist, onTrackItemClick, onClickDeleteTrack}) => {

  return (
    <li className="track">
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'up')}>Move up</button>
      <button onClick={(event) => moveTrackInPlaylist(event, playlistIndex, trackIndex, 'down')}>Move down</button>
    	<button className="deleteTrack" onClick={(event) => onClickDeleteTrack(event, track)}><MdClear  size={15}/></button>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};