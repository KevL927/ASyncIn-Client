import React from 'react';

export default ({ onTrackItemClick, track, onCheckInsert, renderCheckedIndex, index }) => {
  return (
    <li className="track">
    	
    	<img className="trackThumbnail" src={track.thumbnail} alt="thumbnail"/>
    	<input type="checkbox" name="track" className={track.source} id={track._id} onClick={(event) => onCheckInsert(event, track)} checked={renderCheckedIndex(event, track)}></input>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};