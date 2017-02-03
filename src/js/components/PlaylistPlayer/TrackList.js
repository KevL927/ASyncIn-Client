import React from 'react';

import TrackItem from './TrackItem';

export default ({ tracks, onTrackItemClick }) => (
  <div>
    {tracks.map((track, index) => (
      <TrackItem onTrackItemClick={onTrackItemClick} track={track} key={index} />
    ))}
  </div>
);