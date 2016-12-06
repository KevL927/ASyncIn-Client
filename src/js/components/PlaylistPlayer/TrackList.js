import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <ul className="track-list">
      {this.props.tracks}
    </ul>
    );
};

  // if(!this.props.tracks) {
  //   return <div>Loading Playlist</div>
  // } else {
  //   this.props.tracks.map((track, index) => {
  //       return (
  //           <ul className="track-list">
  //             {track}
  //           </ul>
  //       );
  //   });
  // }