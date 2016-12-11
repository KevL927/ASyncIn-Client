import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/playlist-actions';
// import {Link} from 'react-router';
// import MusicPlayer from './MusicPlayer';
import TopPlaylist from './Pages/TopPlaylistsPage';

const newPlaylist = {
    userId: "584330db148e20001c34747b",
    name: "taylor swift78",
    tracks: [
      {
      link: "https://soundcloud.com/alibrustofski/bad-blood-taylor-swift-cover-by-ali-brustofski",
      title: "Bad Blood - Taylor Swift - Cover By Ali Brustofski",
      thumbnail: "https://i1.sndcdn.com/artworks-000116241721-tzy7vg-large.jpg",
      source: "SoundCloud"
    	}
    ],
    rating: 10,
    isPublic: true
}

const editPlaylist = {
	_id:"584385efb4c017001c50052b",
    userId: "584330db148e20001c34747b",
    name: "taylor swift edited",
    tracks: [
      {
      link: "https://soundcloud.com/alibrustofski/bad-blood-taylor-swift-cover-by-ali-brustofski",
      title: "Bad Blood - Taylor Swift - Cover By Ali Brustofski",
      thumbnail: "https://i1.sndcdn.com/artworks-000116241721-tzy7vg-large.jpg",
      source: "SoundCloud"
    	}
    ],
    rating: 10,
    isPublic: true
}

const deletePlaylist = {
	_id:"584385efb4c017001c50052b",
	userId: "584330db148e20001c34747b"
}


class TestPlaylistAction extends Component {
	// componentWillMount() {
 //       this.props.dispatch(actions.getTopPlaylist('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
 //   }
	onClickGetMyPlaylists(event) {
		event.preventDefault();
		this.props.dispatch(actions.getUserPlaylists('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
		onClickGetOtherUserPlaylist(event) {
		event.preventDefault();
		this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c', 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
	}
	onClickCreatePlaylist(event) {
		event.preventDefault();
		this.props.dispatch(actions.createPlaylist(newPlaylist, 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
	onClickUpdatePlaylist(event) {
		event.preventDefault();
		this.props.dispatch(actions.updatePlaylist(editPlaylist, 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
		
	}
	onClickDeleteplaylist(event) {
		event.preventDefault();
		this.props.dispatch(actions.deletePlaylist(deletePlaylist, 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
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
	   			>generate playlist by playlist id
	   			</button>
	   		</div>
	   			<div>
	   			<h2>
	   				create playlist
	   			</h2>
   				<button onClick={this.onClickCreatePlaylist.bind(this)} 		
	   			>create
	   			</button>
	   		</div>
	   		<div>
	   			<h2>
	   				update playlist
	   			</h2>
   				<button onClick={this.onClickUpdatePlaylist.bind(this)} 		
	   			>update
	   			</button>
	   		</div>
	   			<div>
	   			<h2>
	   				delete playlist
	   			</h2>
   				<button onClick={this.onClickDeleteplaylist.bind(this)} 		
	   			>delete
	   			</button>
	   		</div>
	   		<div>
	   			<h2>
	   				top playlist
	   			</h2>
   			<TopPlaylist topPlaylists={this.props.topPlaylists} />
	   		</div>
	   	</div>
	   );
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists,
    otherUserPlaylist: state.otherUserPlaylist,
    topPlaylists: state.topPlaylists
  }
}

export default connect(mapStateToProps)(TestPlaylistAction) ;