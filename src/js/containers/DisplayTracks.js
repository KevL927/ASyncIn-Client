import React from 'react';
import '../../App.css';

export default (props) => {
    console.log(props);
        return (
          <div className="musicPlayer">
            <div>
                <h4>username > {props.otherUserPlaylist.name}</h4>
            </div>
          </div>
        );
};