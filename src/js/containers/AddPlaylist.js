import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import UserSavedPlaylists from './UserSavedPlaylists'

class AddPlaylist extends Component {
    state = {
        showInput: false,
        showError: false
    }
    
    changeState() {
        this.setState({
            showInput: !this.state.showInput
        });
    }
    
    onClickGenerateInput(event) {
        event.preventDefault();
        this.changeState();
    }

    onSubmitAddPlaylist(event) {
		event.preventDefault();
	    let newPlaylist = {
        	    userId: this.props.currentUser.userId,
        	    name: this.refs.playlistInputText.value,
        	    tracks: [],
        	    rating: 0,
        	    isPublic: true
    	    }
        this.changeState();
		this.props.dispatch(actions.createPlaylist(newPlaylist, this.props.currentUser.accessToken));

	}
    renderInput() {
        return (
            <div>
                <form onSubmit={this.onSubmitAddPlaylist.bind(this)}>
                    <input type="text" id="new-playlist-input" className="input" ref="playlistInputText" required />
                </form>
            </div>
        )
    }
    renderError() {     
            return <div>{this.props.error}</div>
    }

	render() {
        console.log(this.props);
		return (
            <div>
                <button className="add-playlist-button" onClick={this.onClickGenerateInput.bind(this)}>New Playlist</button>
                {(this.state.showInput == true) ? this.renderInput(): ''}
                {(this.props.error) ? this.renderError(): ''}
                <UserSavedPlaylists userPlaylists={this.props.userSavedPlaylists}/>
            </div>
            
		);
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists,
    currentUser: state.currentUser,
    error: state.error
  }
}

export default connect(mapStateToProps)(AddPlaylist) ;
