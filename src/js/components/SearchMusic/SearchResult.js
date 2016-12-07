import React from 'react';

export default (props) => {
  return (
      <div className="search-result">
      	<div>{props.track.title}</div>
      	<div>{props.track.link}</div>
      	<div>{props.track.thumbnail}</div>
      </div>
    );
};