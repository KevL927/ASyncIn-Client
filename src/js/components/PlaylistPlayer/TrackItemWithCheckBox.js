import React from 'react';

export default ({ onTrackItemClick, track, onCheckInsert }) => {
  return (
    <li className="track">
    	<input type="checkbox" name="track" ref={track.link} className={track.source} id={track.link} onClick={(event) => onCheckInsert(event, track)} ></input>
    	<a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
        
};