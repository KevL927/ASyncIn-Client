import React from 'react';

import TrackItemWithDelete from './TrackItemWithDelete';

export default ({ tracks, playTrackOnClick, onTrackItemClick, onClickDeleteTrack, moveTrackInPlaylist, playlistIndex }) => (
  <div>
    {tracks.map((track, index) => (
      <TrackItemWithDelete playTrackOnClick={playTrackOnClick} onTrackItemClick={onTrackItemClick} onClickDeleteTrack={onClickDeleteTrack} moveTrackInPlaylist={moveTrackInPlaylist} playlistIndex={playlistIndex} track={track} trackIndex={index} key={index} />
    ))}
  </div>
);