import React from 'react';

export default (props) => {
  return (
      <div className="search-result">
      	<img className="thumbnail" src={props.track.thumbnail}/>
      	<div>{props.track.title}</div>
      	
      </div>
    );
};
//<div>{props.track.link}</div>