import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import PlaylistPlayerContainer from '../PlaylistPlayer/PlaylistPlayerContainer';
import RenderTracks from '../PlaylistPlayer/RenderTracks';
import Collapse from 'react-collapse';
import update from 'react-addons-update';

class MyPlaylistsDashboard extends Component {
	state = {
		isOpenedArray: []
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
		 	return <ul><RenderTracks playlistObject={playlist} /></ul>
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

	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	        	
	        	 <button onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>

	          	 <h4 onClick={this.expandCollapse.bind(this, index)} ref={index}>{playlist.name}</h4>
		         <Collapse isOpened={this.checkOpenedOrNot(index)}>
		         	{this.viewTracks(playlist)}
		         </Collapse>
		          
	        </li>
	      );
	      })
	  }
	  return arr;
	}
	updateServerQueue() {
		if(this.props.currentUser && this.props.queue.length !== 0) {
			this.props.dispatch(actions.updateQueue(this.props.currentUser.accessToken, this.props.currentUser.token, this.props.queue));
		}
	}

	render() {
		console.log(this.state)
		return (
			<div className="UserPlaylist">
			
			<div className="UserPlaylist-container">
				<h2>My Saved Playlists</h2>
		     	{this.generateResult(this.props.userSavedPlaylists)}
		     	{this.updateServerQueue()};
			</div>
			</div>
		);
	}
}


export default connect(
    ({ userSavedPlaylists, currentListeningUrl, currentUser, queue }) => 
    ({ userSavedPlaylists, currentListeningUrl, currentUser, queue })
)(MyPlaylistsDashboard);
