import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as playlistActions from '../../actions/playlist-actions';
import * as actions from '../../actions/actions'
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

class SavedPlaylistsDropdown extends Component {
	
	onClickAddNewPlaylist(newPlaylist, targetPlaylist, event){
		console.log('newPlaylist', newPlaylist);
		console.log('targetPlaylist', targetPlaylist);
		event.preventDefault();
		let newPlaylistArray = targetPlaylist.tracks.concat(newPlaylist);
		let newPlaylistObject = targetPlaylist;
		newPlaylistObject.tracks = newPlaylistArray;
		this.props.dispatch(playlistActions.updatePlaylist(newPlaylistObject, this.props.currentUser.accessToken))
		 setTimeout(() => {
            this.props.dispatch(actions.clearFeedback());
        }, 5000);
		this.props.dispatch(actions.clearError());
		
	}
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	          <MenuItem eventKey={index} key={index}>
	          <div onClick={this.onClickAddNewPlaylist.bind(this, this.props.newPlaylist, playlist)}>{playlist.name}</div>
	          </MenuItem>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
			<ButtonToolbar>
				<DropdownButton bsSize="large" title="Saved Playlists" id="dropdown-size-large">
					
			     	{this.generateResult(this.props.userPlaylists)}
				</DropdownButton>
			</ButtonToolbar>
			</div>
		);
	}
}

export default connect()(SavedPlaylistsDropdown) ;
