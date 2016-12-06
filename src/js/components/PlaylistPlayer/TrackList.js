import React from 'react';
import TrackItem from './TrackItem';

export default ({ tracks, onTrackItemClick }) => (
  
  <div>
    {tracks.map((track, index) => (
      <TrackItem onTrackItemClick={onTrackItemClick} key={index} title={track.title} link={track.link} thumbnail={track.thumbnail} source={track.source} />
    ))}
  </div>
  
)