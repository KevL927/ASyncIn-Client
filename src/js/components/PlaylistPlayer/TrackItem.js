import React from 'react';

export default ({ index, title, link, thumbnail, source, onTrackItemClick }) => {
  
  return (
    <li key={index} className="track">
      <a onClick={(event) => onTrackItemClick(event, link)} href="">{title}</a>
    </li>
  );
        
};