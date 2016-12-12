import React from 'react';
import QueueTrack from './QueueTrack';

export default ({ tracks, onTrackItemClick, onClickDeleteQueueTrack }) => (
  
  <div>
    {tracks.map((track, index) => (
      <QueueTrack onTrackItemClick={onTrackItemClick} onClickDeleteQueueTrack={onClickDeleteQueueTrack} track={track} trackIndex={index} />
    ))}
  </div>
  
)