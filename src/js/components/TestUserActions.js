import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


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
	    this.props.dispatch(actions.updateFavouritePlaylist('oge6xtnpj40g0g0o8s00wsggswwc4w8cwg', 'admin1@gmail.com','58439fffb4c017001c500530', 10))
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
		   		<button onClick={this.onClickUpdateFavouritePlaylist.bind(this)}>
				update favorite Playlist
				</button>
	   		</div>
	   		
	   	</div>
	   );
	}
}

const mapStateToProps = (state) => {
  return {
    otherUsers: state.otherUsers,
    otherUserProfile: state.otherUserProfile
  }
}

export default connect(mapStateToProps)(TestUserAction) ;