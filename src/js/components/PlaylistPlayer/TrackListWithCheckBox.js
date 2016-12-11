import React from 'react';
import TrackItemWithCheckBox from './TrackItemWithCheckBox';

export default ({ tracks, onTrackItemClick, onCheckInsert }) => (
  
  <div>
    {tracks.map((track, index) => (
      <TrackItemWithCheckBox onCheckInsert={onCheckInsert} onTrackItemClick={onTrackItemClick} track={track} key={index} />
    ))}
  </div>
  
)