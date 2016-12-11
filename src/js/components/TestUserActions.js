import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/user-actions';
import * as playlistActions from '../actions/playlist-actions';



class TestUserAction extends Component {
	onClickGetAllUsers(event) {
		event.preventDefault();
		this.props.dispatch(actions.getAllUsers('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
	onClickGetUser(event) {
	    event.preventDefault();
	    this.props.dispatch(actions.getUser('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os', 'admin1@gmail.com'))
	}
	onClickUpdateUsername(event) {
	    event.preventDefault();
	    this.props.dispatch(actions.updateUsername('9yayvsx0zkwckc0o0o4ckc48ksskk4osk4', 'Michelle'))
	}
	onClickUpdatePassword(event){
		event.preventDefault();
	    this.props.dispatch(actions.updatePassword('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os', 'pass'))
	}
	onClickUpdateFavouritePlaylist(event){
		event.preventDefault();
		//access_token, token, playlistId, rating
	    this.props.dispatch(playlistActions.updateFavouritePlaylist('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os', 'admin@email.com','58433240148e20001c34747c', 67))
	}
	
	render() {
		console.log(this.props);
	   return (
	   	<div>
	   		<h1>Test Actions</h1>
	   		<div>
		   		<h2>
		   			All Users
		   		</h2>
		   		<button onClick={this.onClickGetAllUsers.bind(this)}>
				get all users
				</button>
	   		</div>
	   		
	   		<div>
		   		<h2>
		   			My Playlists
		   		</h2>
		   		<button onClick={this.onClickGetUser.bind(this)}>
				get specific
				</button>
	   		</div>
	   		<div>
		   		<h2>
		   			update username
		   		</h2>
		   		<button onClick={this.onClickUpdateUsername.bind(this)}>
				update username
				</button>
	   		</div>
	   		<div>
		   		<h2>
		   			update password
		   		</h2>
		   		<button onClick={this.onClickUpdatePassword.bind(this)}>
				update password
				</button>
	   		</div>
	   		<div>
		   		<h2>
		   			Update Favorite Playlist
		   		</h2>
		   		{console.log(this.props.currentUser)}
		   		<button onClick={this.onClickUpdateFavouritePlaylist.bind(this)}>
				favorite Playlist
				</button>
	   		</div>
	   		
	   	</div>
	   );
	}
}

const mapStateToProps = (state) => {
  return {
  	currentUser: state.currentUser,
    otherUsers: state.otherUsers,
    otherUserProfile: state.otherUserProfile
  }
}

export default connect(mapStateToProps)(TestUserAction) ;