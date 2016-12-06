import React from 'react';
import * as actions from '../../actions/actions';

export default ({ index, title, link, thumbnail, source, onTrackItemClick }) => {
  
  return (
    <li key={index} className="track">
      <a onClick={() => onTrackItemClick(link)} href="/#/viewplaylist">{title}</a>
    </li>
  );
        
};