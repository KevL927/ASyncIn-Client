import React from 'react';
import TrackItemWithCheckBox from './TrackItemWithCheckBox';

export default ({ tracks, onCheckInsert, renderCheckedIndex, onClickAddToQueue, playTrackOnClick }) => (
  
  <div>
    {tracks.map((track, index) => (
      <TrackItemWithCheckBox 
	      	onCheckInsert={onCheckInsert}
	      	renderCheckedIndex={renderCheckedIndex}
	      	track={track} 
	      	key={index} 
	      	index={index} 
	      	onClickAddToQueue={onClickAddToQueue}
	      	playTrackOnClick={playTrackOnClick}
      />
    ))}
  </div>
  
)