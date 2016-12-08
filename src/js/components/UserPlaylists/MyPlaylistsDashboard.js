import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import PlaylistPlayerContainer from '../PlaylistPlayer/PlaylistPlayerContainer';
import RenderTracks from '../PlaylistPlayer/RenderTracks';

class MyPlaylistsDashboard extends Component {
	
	onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.queue(playlist.tracks));
	}



	viewTracks(playlist) {
		if(playlist) {
		 	return <RenderTracks playlistObject={playlist} />
		}
		return;
	}

	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div>
		          <button onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
		          {playlist.name}
		          {this.viewTracks(playlist)}
	          </div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
			
			<div className="UserPlaylist-container">
				<h2>My Saved Playlists</h2>
		     	{this.generateResult(this.props.userSavedPlaylists)}
			</div>
			</div>
		);
	}
}


export default connect(
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl })
)(MyPlaylistsDashboard);
