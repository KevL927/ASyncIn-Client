import React from 'react';
import TrackItemWithDelete from './TrackItemWithDelete';

export default ({ tracks, onTrackItemClick }) => (
  
  <div>
    {tracks.map((track, index) => (

      <TrackItemWithDelete onTrackItemClick={onTrackItemClick} track={track} key={index} />
    ))}
  </div>
  
)