import React from 'react';

export default ({ onTrackItemClick, track, onCheckInsert, renderCheckedIndex, index }) => {
  return (
    <li className="track">
    	<input type="checkbox" name="track" className={track.source} id={track._id} onClick={(event) => onCheckInsert(event, track)} checked={renderCheckedIndex(event, track)}></input>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};