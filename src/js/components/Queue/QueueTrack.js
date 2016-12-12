import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

export default ({ currentUser, userSavedPlaylists, error, feedback, track,  onTrackItemClick, onClickDeleteQueueTrack, trackIndex, onTrackPlayNow }) => {
  return (
    <li className="track">
    	<button onClick={(event) => onClickDeleteQueueTrack(event, trackIndex)}>Delete Track</button>
    	<button onClick={(event) => onTrackItemClick(event, track)}>Add To Queue</button>
    	<a onClick={(event) => onTrackPlayNow(event, track.link)} >{track.title}</a>
		<AddPlaylist error={error} feedback={feedback} currentUser={currentUser} userSavedPlaylists={userSavedPlaylists} newPlaylist={[track]} />
    </li>
  );
        
};