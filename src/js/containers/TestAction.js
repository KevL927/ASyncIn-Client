import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
// import {Link} from 'react-router';
// import MusicPlayer from './MusicPlayer';

class TestAction extends Component {
	onClickDispatch(event) {
		event.preventDefault();
		this.props.dispatch(actions.getUserPlaylists('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
	render() {
		console.log(this.props);
	   return (
	   	<div>
	   		<h1>Test Actions</h1>
	   		<h2>
	   			My Playlists
	   		</h2>
	   		<button onClick={this.onClickDispatch.bind(this)} 		
	>generate my playlists</button>
	   	</div>
	   );
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists
  }
}

export default connect(mapStateToProps)(TestAction) ;