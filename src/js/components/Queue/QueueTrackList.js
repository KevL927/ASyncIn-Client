import React from 'react';
import QueueTrack from './QueueTrack';

export default ({ currentUser, userSavedPlaylists, error, feedback, tracks, onTrackItemClick, onClickDeleteQueueTrack, onTrackPlayNow, moveUpTrackInQueue, moveDownTrackInQueue }) => (
  
  <ul>
    {tracks.map((track, index) => (
      <QueueTrack currentUser={currentUser} userSavedPlaylists={userSavedPlaylists} error={error} feedback={feedback} onTrackItemClick={onTrackItemClick} onClickDeleteQueueTrack={onClickDeleteQueueTrack} onTrackPlayNow={onTrackPlayNow} moveUpTrackInQueue={moveUpTrackInQueue} moveDownTrackInQueue={moveDownTrackInQueue} track={track} trackIndex={index} key={index} />
    ))}
  </ul>
  
)