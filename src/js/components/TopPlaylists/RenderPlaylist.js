import React from 'react';

export default ({ playlistName, key }) => {

  return (
    <li key={key} className="playlist-name">
      <a href="/#/viewplaylist">{playlistName}</a>
    </li>
  );
        
};