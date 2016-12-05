import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import UserSavedPlaylists from './UserSavedPlaylists'

class AddPlaylist extends Component {
    state = {
        showInput: false,
        newPlaylist: null
    }
    
    componentWillMount() {
        console.log('ComponentWillMount');
        this.props.dispatch(actions.getUserPlaylists('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'))
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
		return (
            <div>
                <button className="add-playlist-button" onClick={this.onClickGenerateInput.bind(this)}>New Playlist</button>
                {this.renderInput()}
                <UserSavedPlaylists userPlaylists={this.props.userSavedPlaylists}/>
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
