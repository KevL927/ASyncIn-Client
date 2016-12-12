import React from 'react';
import QueueTrack from './QueueTrack';

export default ({ currentUser, userSavedPlaylists, error, feedback, tracks, onTrackItemClick, onClickDeleteQueueTrack, onTrackPlayNow }) => (
  
  <div>
    {tracks.map((track, index) => (
      <QueueTrack currentUser={currentUser} userSavedPlaylists={userSavedPlaylists} error={error} feedback={feedback} onTrackItemClick={onTrackItemClick} onClickDeleteQueueTrack={onClickDeleteQueueTrack} onTrackPlayNow={onTrackPlayNow} track={track} trackIndex={index} key={index} />
    ))}
  </div>
  
)