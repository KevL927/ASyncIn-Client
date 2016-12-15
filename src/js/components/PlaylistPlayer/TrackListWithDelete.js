import React from 'react';
import TrackItemWithDelete from './TrackItemWithDelete';

export default ({ tracks, onTrackItemClick, onClickDeleteTrack, moveTrackInPlaylist, playlistIndex }) => (

  <div>
    {tracks.map((track, index) => (

      <TrackItemWithDelete onTrackItemClick={onTrackItemClick} onClickDeleteTrack={onClickDeleteTrack} moveTrackInPlaylist={moveTrackInPlaylist} playlistIndex={playlistIndex} track={track} trackIndex={index} key={index} />
    ))}
  </div>
  
);