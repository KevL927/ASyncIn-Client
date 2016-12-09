import React from 'react';
import TrackItemWithDelete from './TrackItemWithDelete';

export default ({ tracks, onTrackItemClick, onClickDeleteTrack }) => (
  
  <div>
    {tracks.map((track, index) => (

      <TrackItemWithDelete onTrackItemClick={onTrackItemClick} onClickDeleteTrack={onClickDeleteTrack} track={track} key={index} />
    ))}
  </div>
  
)