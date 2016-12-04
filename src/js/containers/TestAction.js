import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
// import {Link} from 'react-router';
// import MusicPlayer from './MusicPlayer';

class TestAction extends Component {
	onClickGetMyPlaylists(event) {
		event.preventDefault();
		this.props.dispatch(actions.getUserPlaylists('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
		onClickGetOtherUserPlaylist(event) {
		event.preventDefault();
		this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c', 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
	}
	render() {
		console.log(this.props);
	   return (
	   	<div>
	   		<h1>Test Actions</h1>
	   		<div>
		   		<h2>
		   			My Playlists
		   		</h2>
		   		<button onClick={this.onClickGetMyPlaylists.bind(this)}>
				generate my playlists
				</button>
	   		</div>
	   		<div>
	   			<h2>
	   				Other User's Public Playlist by PlaylistId
	   			</h2>
   				<button onClick={this.onClickGetOtherUserPlaylist.bind(this)} 		
	   			>generate my playlists
	   			</button>
	   		</div>
	   	</div>
	   );
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists,
    otherUserPlaylist: state.otherUserPlaylist
  }
}

export default connect(mapStateToProps)(TestAction) ;