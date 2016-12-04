import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class UserSavedPlaylists extends Component {
	componentWillMount() {
		console.log('ComponentWillMount');
		this.props.dispatch(actions.getUserPlaylists('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}

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
		console.log(this.props);
		return (
			<div className="UserPlaylist">
			<h1>My Saved Playlists</h1>
			<div className="UserPlaylist-container">
		     	{this.generateResult(this.props.userSavedPlaylists)}
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists
  }
}

export default connect(mapStateToProps)(UserSavedPlaylists) ;
