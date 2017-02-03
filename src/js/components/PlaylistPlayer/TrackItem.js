import React from 'react';

export default ({ onTrackItemClick, track }) => {
  return (
    <li className="track">
      <a onClick={(event) => onTrackItemClick(event, track)} href="">{track.title}</a>
    </li>
  );
};