import React from 'react';

export default ({ track }) => {
  return (
    <div className="search-result">
    	<div><img className="thumbnail" src={track.thumbnail} alt="thumbnail"/>{track.title}</div>
    </div>
  );
};