import React, { Component } from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions/actions';

class UserSavedPlaylists extends Component {
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div>{playlist.name}</div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
			<h1>My Saved Playlists</h1>
			<div className="UserPlaylist-container">
		     	{this.generateResult(this.props.userPlaylists)}
			</div>
			</div>
		);
	}
}

export default connect()(UserSavedPlaylists) ;
