import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import TiPlus from 'react-icons/lib/ti/plus';

import { tooltip_add, tooltip_play } from '../../utils/tooltips';
import './styles.css';

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
	    	alt="thumbnail" />
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