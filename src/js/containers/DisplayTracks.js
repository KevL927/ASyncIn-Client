import React from 'react';
import '../../App.css';

export default (props) => {
    return (
      <div className="displayPlaylistTracks">
            <h4>username > {props.otherUserPlaylist.name}</h4>
      </div>
    );
};