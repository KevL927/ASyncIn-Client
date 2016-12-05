import React from 'react';
import '../../App.css';

export default (props) => {
    console.log(props);
        return (
          <div className="displayPlaylistTracks">
            <div>
                <h4>username > {props.otherUserPlaylist.name}</h4>
            </div>
          </div>
        );
};