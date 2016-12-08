import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import PlaylistPlayerContainer from '../PlaylistPlayer/PlaylistPlayerContainer';
import RenderTracks from '../PlaylistPlayer/RenderTracks';
import Collapse from 'react-collapse';

class MyPlaylistsDashboard extends Component {
	state = {
		isOpened: false
	}

	onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.queue(playlist.tracks));
	}

	expandCollapse(event) {
		event.preventDefault();
		this.setState({isOpened: !this.state.isOpened})
	}

	viewTracks(playlist) {
		if(playlist) {
		 	return <ul><RenderTracks playlistObject={playlist} /></ul>
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
	        	{playlist.name}
	        	 <button onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
	          <button onClick={this.expandCollapse.bind(this)}>
	          	 Expand
		         <Collapse isOpened={this.state.isOpened}>
		         	{this.viewTracks(playlist)}
		         </Collapse>
		          
	          </button>
	        </li>
	      );
	      })
	  }
	  return arr;
	}


/*
 <div onClick={this.expandCollapse.bind(this)}>
	 Click expand
	 <Collapse isOpened={this.state.isOpened}>
	   <p>Paragraph of text</p>
	   <p>Another paragraph is also OK</p>
	   <p>Images and any other content are ok too</p>
	   <img src="nyancat.gif" />
	 </Collapse>

</div>
*/

	render() {
		console.log(this.state)
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
