import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import TiPlus from 'react-icons/lib/ti/plus';
import './styles.css';

const tooltip_add = (
 	<Tooltip id="tooltip_add"><strong>Add</strong> to the queue</Tooltip>
);
const tooltip_play = (
 	<Tooltip id="tooltip_play"><strong>Play</strong></Tooltip>
);
const tooltip_playlist_add = (
 	<Tooltip id="tooltip_playlist_add"><strong>Check Off</strong> then click playlist</Tooltip>
);

export default ({ track, onCheckInsert, renderCheckedIndex, index, onClickAddToQueue, playTrackOnClick }) => {
  return (
    <li className="track">
    	<input 
    		type="checkbox" 
    		name="track" 
    		className={'Song_Checkbox ' + track.source} 
    		id={track._id} 
    		onClick={(event) => onCheckInsert(event, track)} 
    		checked={renderCheckedIndex(event, track)}>
    	</input>
    	<img 
	    	className="trackThumbnail" 
	    	src={track.thumbnail} 
	    	alt="thumbnail"/>
    	<a className="track_link" 
    		onClick={(event) => playTrackOnClick(event, track)} 
    		href="">{track.title}</a>
    	<OverlayTrigger 
    		placement="bottom" 
    		overlay={tooltip_add}>
    	  	<button 
    	  		className="function_buttons blackColor" 
    	  		onClick={event => onClickAddToQueue(event, track)}
    	  	>
    	  		<TiPlus size={22}/>
    	  	</button>
    	</OverlayTrigger>
    	<OverlayTrigger 
    		placement="bottom" 
    		overlay={tooltip_play}>
    	  	<button 
    	  		className="function_buttons blackColor" 
    	  		onClick={event => playTrackOnClick(event, track)}
    	  	>
    	  		<FaPlayCircle size={22} />
    	  	</button>
    	</OverlayTrigger>
    </li>
  );
};