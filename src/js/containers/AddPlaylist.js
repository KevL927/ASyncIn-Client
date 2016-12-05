import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class AddPlaylist extends Component {
    state = {
        showInput: false,
        newPlaylist: null
    }
    
    
    onClickGenerateInput(event) {
        event.preventDefault();
        this.setState({showInput: true})
    }
    onSubmitAddPlaylist(event) {
		event.preventDefault();
	    let newPlaylist = {
        	    userId: '584330db148e20001c34747b',
        	    name: this.refs.playlistInputText.value,
        	    tracks: [],
        	    rating: 0,
        	    isPublic: true
    	    }
        console.log(newPlaylist);
		this.props.dispatch(actions.createPlaylist(newPlaylist, 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
	}
    renderInput() {
        if(this.state.showInput === true) {
            return (
                <div>
                    <form onSubmit={this.onSubmitAddPlaylist.bind(this)}>
                        <input type="text" id="new-playlist-input" className="input" ref="playlistInputText" required />
                    </form>
                </div>
            )
        }
        return <div></div>
    }
	render() {
	    console.log(this.props.userSavedPlaylists);
		return (
            <div>
                <button className="add-playlist-button" onClick={this.onClickGenerateInput.bind(this)}>New Playlist</button>
                {this.renderInput()}
            </div>
            
		);
	}
}

const mapStateToProps = (state) => {
  return {
    userSavedPlaylists: state.userSavedPlaylists,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(AddPlaylist) ;
