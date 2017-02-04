import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';

class SavedPlaylistsDropdown extends Component {
	onClickAddNewPlaylist(newPlaylist, targetPlaylist, event) {
		event.preventDefault();
		let newPlaylistArray = targetPlaylist.tracks.concat(newPlaylist),
			newPlaylistObject = targetPlaylist;
		newPlaylistObject.tracks = newPlaylistArray;
		
		this.props.dispatch(playlistActions.updatePlaylist(newPlaylistObject, sessionStorage.access_token));
		setTimeout(() => {
            this.props.dispatch(actions.clearFeedback());
        }, 5000);
		this.props.dispatch(actions.clearError());
		this.props.onSubmitClearTemp();	
	}
	
	generateResult(resultArr) {
		let arr = [];
		if(!resultArr) {
	    	arr = <div></div>;
		} else {
	    	arr = resultArr.map((playlist, index) => {
		    	return (
					<MenuItem eventKey={index} key={index}>
						<div onClick={this.onClickAddNewPlaylist.bind(this, this.props.newPlaylist, playlist)}>{playlist.name}</div>
					</MenuItem>
		    	);
	    	});
		}
		return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
				<ButtonToolbar>
					<DropdownButton bsSize="xsmall" title="Saved Playlists" id="dropdown-size-large">
				     	{this.generateResult(this.props.userPlaylists)}
					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}
} 

export default connect()(SavedPlaylistsDropdown);