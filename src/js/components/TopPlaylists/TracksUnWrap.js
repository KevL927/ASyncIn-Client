import React from 'react';

import TrackItem from './TrackItem';

export default ({ tracks, onCheckInsert, renderCheckedIndex, onClickAddToQueue, playTrackOnClick }) => (
  <div>
    {tracks.map((track, index) => (
      <TrackItem 
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
);