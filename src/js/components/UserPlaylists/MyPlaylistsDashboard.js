import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderSavedPlaylistTracks from '../PlaylistPlayer/RenderSavedPlaylistTracks';
import Collapse from 'react-collapse';
import update from 'react-addons-update';
import Feedback from '../Feedback';
import ScrollArea from 'react-scrollbar';
import FaAlignJustify from 'react-icons/lib/fa/align-justify'

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
		return <div>{this.state.editable?<input contentEditable autoFocus ref="input" required/>:null }</div>
		
	}
	
	edit(playlistObject, event){
		event.preventDefault();
		if(this.refs.input.value !== "") {
			const updatedPlaylist = update(playlistObject, {name: {$set:this.refs.input.value}})
			this.props.dispatch(playlistActions.updatePlaylistName(updatedPlaylist, this.props.currentUser.accessToken));
			this.props.dispatch(actions.clearError());
		}
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
	        	 {this.state.editable == playlist._id ? <form onSubmit={this.edit.bind(this, playlist)}>
	        	 <input type="text" autoFocus contentEditable onBlur={this.edit.bind(this, playlist)} ref="input" required/> 
	        	 </form>:<h4 onClick={this.expandCollapse.bind(this, index)} ref={index}>{playlist.name} <FaAlignJustify/></h4> }
	          	 
		         <Collapse isOpened={this.checkOpenedOrNot(index)}>
		         	{this.viewTracks(playlist)}
		         	<button className="user-playlist-buttons" onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
	        	 <button className="user-playlist-buttons" onClick={this.deletePlaylist.bind(this, playlist)}>Delete Playlist</button>
	        	 <button className="user-playlist-buttons" onClick={this.editPlaylistName.bind(this, playlist)}>Edit</button>
		         </Collapse>
	        </li>
	      
	      );
	      })
	  }
	  return arr;
	}

	render() {
		console.log(this.props.error)
		return (
		
			<div className="UserPlaylist">
				<span id="my-saved-playlists">My Saved Playlists</span>
					<ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
						<div className="UserPlaylist-container">
							<div>{this.props.error ? <div><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><Feedback feedback="This playlist name already exists" /></div>:<div></div>}</div>
				     		{this.generateResult(this.props.userSavedPlaylists)} 
						</div>
					</ScrollArea>
			</div>
			
		);
	}
}



export default connect(
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl, error }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl, error })
)(MyPlaylistsDashboard);




