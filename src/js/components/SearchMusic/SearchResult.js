import React from 'react';
import Thumbnail from 'react-bootstrap'

export default (props) => {
  return (
      <div className="search-result">

      <img className="thumbnail" src={props.track.thumbnail}/>
      	<div>{props.track.title}</div>
      	
      </div>
    );
};
//<div>{props.track.link}</div>
//