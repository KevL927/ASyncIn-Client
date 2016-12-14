import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as playlistActions from '../../actions/playlist-actions';
import * as actions from '../../actions/actions';
import SavedPlaylistsDropdown from '../UserPlaylists/SavedPlaylistsDropdown';
import Feedback from '../Feedback';
import ToggleButton from 'react-toggle-button';
import FaUnlock from 'react-icons/lib/fa/unlock'
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt'
const borderRadiusStyle = { borderRadius: 2 };

class AddPlaylist extends Component {
    state = {
        showInput: false,
        showError: false,
        isPublic: true
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
        if(this.refs.playlistInputText.value !== "") {
            let newPlaylist = {
                userId: this.props.currentUser.userId,
                name: this.refs.playlistInputText.value,
                tracks: [],
                rating: 0,
                isPublic: this.state.isPublic
            }
            this.props.dispatch(actions.clearError());
            this.props.dispatch(playlistActions.createPlaylist(newPlaylist, sessionStorage.access_token));
        }
        this.props.dispatch(actions.clearError());
        setTimeout(() => {
            this.props.dispatch(actions.clearFeedback());
        }, 5000);
         setTimeout(() => {
             this.setState({ isPublic:true})
        }, 1000);
       
         this.setState({showInput: false})
	}
    renderInput() {
        return (
            <div>
                <form onSubmit={this.onSubmitAddPlaylist.bind(this)}>
                    <input autoFocus onBlur={this.onSubmitAddPlaylist.bind(this)} type="text" id="new-playlist-input" className="input" ref="playlistInputText" required />
                </form>
            </div>
        )
        
    }
	render() {
		return (
            <div id="lock_new_saved_playlists">
                <button className="add-playlist-button" onClick={this.onClickGenerateInput.bind(this)}>New Playlist</button>
                {(this.state.showInput === true || this.props.error) ? this.renderInput(): ''}
               <ToggleButton
                  inactiveLabel={<FaUnlockAlt/>}
                  activeLabel={<FaUnlock/>}
                  colors={{active: {
                        base: 'rgb(0,207,0)'
                      },
                        inactive:{
                        base: 'rgb(186,0,0)'
                        }
                    }}
                   thumbStyle={ borderRadiusStyle }
                   trackStyle={ borderRadiusStyle } 
                  value={this.state.isPublic}
                  onToggle={(isPublic) => {
                    this.setState({
                      isPublic: !isPublic,
    })
  }} />
                {(this.props.error) ? <div><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><Feedback feedback={this.props.error} /></div>: <div></div>}
                {(this.props.feedback) ?<div><i className="fa fa-check-square-o" aria-hidden="true"></i><Feedback feedback={this.props.feedback}/></div>: <div></div>}
                <SavedPlaylistsDropdown onSubmitClearTemp={this.props.onSubmitClearTemp} userPlaylists={this.props.userSavedPlaylists} newPlaylist={this.props.newPlaylist} currentUser={this.props.currentUser}/>
            </div>
		);
	}
}

export default connect()(AddPlaylist) ;
