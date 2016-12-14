import React from 'react';
import TrackItemWithCheckBox from './TrackItemWithCheckBox';

export default ({ tracks, onTrackItemClick, onCheckInsert, renderCheckedIndex }) => (
  
  <div>
    {tracks.map((track, index) => (
      <TrackItemWithCheckBox onCheckInsert={onCheckInsert} onTrackItemClick={onTrackItemClick} renderCheckedIndex={renderCheckedIndex} track={track} key={index} index={index} />
    ))}
  </div>
  
)