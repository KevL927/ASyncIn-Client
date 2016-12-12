import React from 'react';
import QueueTrack from './QueueTrack';

export default ({ tracks, onTrackItemClick, onClickDeleteQueueTrack, onTrackPlayNow }) => (
  
  <div>
    {tracks.map((track, index) => (
      <QueueTrack onTrackItemClick={onTrackItemClick} onClickDeleteQueueTrack={onClickDeleteQueueTrack} onTrackPlayNow={onTrackPlayNow} track={track} trackIndex={index} key={index} />
    ))}
  </div>
  
)