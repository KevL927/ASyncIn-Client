import React from 'react';

export default (props) => {
  return (
      <div className="search-result">

      
      	<div><img className="thumbnail" src={props.track.thumbnail} alt="thumbnail"/>{props.track.title}</div>
      	
      </div>
    );
};