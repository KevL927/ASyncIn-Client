import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import PlaylistPlayerContainer from '../PlaylistPlayer/PlaylistPlayerContainer';

class UserPlaylistList extends Component {
	
	onClickRedirect(playlist, event){
	    this.props.dispatch(actions.currentListeningPlaylist(playlist));
	   
	}
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div><button onClick={this.onClickRedirect.bind(this, playlist)}>{playlist.name}</button></div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}
	
	renderTracksOrNot(){
		if(this.props.currentListeningPlaylist){
			console.log('from userplaylistlist', this.props.currentListeningPlaylist)
			return (
				<div>
					<h1>My Playlists</h1>
					<PlaylistPlayerContainer playlistObject={this.props.currentListeningPlaylist} url={this.props.currentListeningUrl}/>
				</div>
			);
		}
		else{
			return <div>No playlist selected</div>
		}
	}

	render() {
		return (
			<div className="UserPlaylist">
			
			<div className="UserPlaylist-container">
		     	{this.generateResult(this.props.userSavedPlaylists)}
		     	{this.renderTracksOrNot()}
			</div>
			</div>
		);
	}
}


export default connect(
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl })
)(UserPlaylistList);
