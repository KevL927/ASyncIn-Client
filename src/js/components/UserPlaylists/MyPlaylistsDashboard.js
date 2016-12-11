import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderSavedPlaylistTracks from '../PlaylistPlayer/RenderSavedPlaylistTracks';
import Collapse from 'react-collapse';
import update from 'react-addons-update';
import ScrollArea from 'react-scrollbar';

class MyPlaylistsDashboard extends Component {
	state = {
		isOpenedArray: [],
		editable:null
	}

	onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.queue(playlist.tracks));  
	}

	expandCollapse(index, event) {
		event.preventDefault();
		if (this.state.isOpenedArray.indexOf(index) === -1) {
			const tempOpenedArr = update(this.state.isOpenedArray, {$push: [index]});
      		this.setState({isOpenedArray: tempOpenedArr})
		} else {
			const index = this.state.isOpenedArray.indexOf(index)
			const tempOpenedArr = update(this.state.isOpenedArray, {$splice: [[index, 1]]});
			this.setState({isOpenedArray: tempOpenedArr});
		}
	}

	viewTracks(playlist) {
		if(playlist) {
		 	return <ul><RenderSavedPlaylistTracks currentUser={this.props.currentUser} playlistObject={playlist} /></ul>
		}
		return;
	}

	checkOpenedOrNot(index) {
		if (this.state.isOpenedArray.indexOf(index) !== -1) {
			return true;
		} else {
			return false;
		}
	}

	deletePlaylist(playlistObject, event){
		event.preventDefault();
		this.props.dispatch(playlistActions.deletePlaylist(playlistObject, this.props.currentUser.accessToken))
	}
	
	editPlaylistName(playlistObject, event){
		event.preventDefault();
		this.setState({
			editable: playlistObject._id
		})
		return <div>{this.state.editable?<input contentEditable  ref="input" />:null }</div>
		
	}
	edit(playlistObject, event){
		console.log(playlistObject);
		const updatedPlaylist = update(playlistObject, {name: {$set:this.refs.input.value}})
	this.props.dispatch(playlistActions.updatePlaylist(updatedPlaylist, this.props.currentUser.accessToken));
	this.setState({
			editable: null
		})
	}

	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index} id="user-playlist-buttons-li">
	        	 <button className="user-playlist-buttons" onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
	        	 <button className="user-playlist-buttons" onClick={this.deletePlaylist.bind(this, playlist)}>Delete Playlist</button>
	        	 <button className="user-playlist-buttons" onClick={this.editPlaylistName.bind(this, playlist)}>Edit</button>
	        	 {this.state.editable == playlist._id ?<input contentEditable onBlur={this.edit.bind(this, playlist)} ref="input" />:<h4 onClick={this.expandCollapse.bind(this, index)} ref={index}>{playlist.name}</h4> }
	          	 
		         <Collapse isOpened={this.checkOpenedOrNot(index)}>
		         	{this.viewTracks(playlist)}
		         </Collapse>
	        </li>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		{	console.log(this.state.editable)}
		return (
		
			<div className="UserPlaylist">
				<span id="my-saved-playlists">My Saved Playlists</span>
					<ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
						<div className="UserPlaylist-container">
				     		{this.generateResult(this.props.userSavedPlaylists)}
						</div>
					</ScrollArea>
			</div>
			
		);
	}
}



export default connect(
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl })
)(MyPlaylistsDashboard);




