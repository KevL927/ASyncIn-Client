import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class AddPlaylist extends Component {
    state = {
        showInput: false
    }
    
    onClickGenerateInput(event) {
        event.preventDefault();
        this.setState({showInput: true})
    }
    renderInput() {
        if(this.state.showInput === true) {
            return (
                <div>
                    <form>
                        <input type="text" id="new-playlist-input" className="input" ref="playlistInputText" required />
                    </form>
                </div>
            )
        }
        return <div></div>
    }
	render() {
	    console.log(this.state);
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
    userSavedPlaylists: state.userSavedPlaylists
  }
}

export default connect(mapStateToProps)(AddPlaylist) ;
