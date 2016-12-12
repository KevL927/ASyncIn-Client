import React from 'react';
import QueueTrack from './QueueTrack';

export default ({ tracks, onTrackItemClick }) => (
  
  <div>
    {tracks.map((track, index) => (
      <QueueTrack onTrackItemClick={onTrackItemClick} track={track} key={index} />
    ))}
  </div>
  
)