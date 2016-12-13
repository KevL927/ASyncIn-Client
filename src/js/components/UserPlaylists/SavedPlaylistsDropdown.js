import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as playlistActions from '../../actions/playlist-actions';

class SavedPlaylistsDropdown extends Component {
	
	onClickAddNewPlaylist(newPlaylist, targetPlaylist, event){
		console.log('newPlaylist', newPlaylist);
		console.log('targetPlaylist', targetPlaylist);
		event.preventDefault();
		let newPlaylistArray = targetPlaylist.tracks.concat(newPlaylist);
		let newPlaylistObject = targetPlaylist;
		newPlaylistObject.tracks = newPlaylistArray;
		this.props.dispatch(playlistActions.updatePlaylist(newPlaylistObject, this.props.currentUser.accessToken))
	}
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div><button onClick={this.onClickAddNewPlaylist.bind(this, this.props.newPlaylist, playlist)}>{playlist.name}</button></div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
				<h1>Saved Playlists</h1>
				<div className="UserPlaylist-container">
			     	<div id="content">{this.generateResult(this.props.userPlaylists)}</div>
				</div>
			</div>
		);
	}
}

export default connect()(SavedPlaylistsDropdown) ;
