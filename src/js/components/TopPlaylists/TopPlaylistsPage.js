import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';

import * as actions from '../../actions/actions';
import * as userActions from '../../actions/user-actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderPlaylist from './RenderPlaylist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

class TopPlaylistsPage extends Component {
    componentWillMount() {
        this.props.dispatch(userActions.getCurrentUser(sessionStorage.token, sessionStorage.access_token));
        this.props.dispatch(playlistActions.getTopPlaylist(sessionStorage.access_token));
    }
 
    state = {
        isOpenedArray: [],
        tempPlaylist: [],
        tempTracksArr: []
    }

    renderCheckedIndex(event, track) {
        if(this.state.tempTracksArr.indexOf(track._id) >= 0) {
            return true;
        } else if(this.state.tempTracksArr.indexOf(track._id) === -1) {
            return false;
        }
    }

    onCheckInsert(event, track) {
        if (event.target.checked === true) {
            const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
            const newTracksArr = update(this.state.tempTracksArr, {$push: [track._id]});
            this.setState({tempPlaylist: newPlaylist, tempTracksArr: newTracksArr});
        }
        if (event.target.checked === false) {
            const index = this.state.tempTracksArr.indexOf(track._id);
            const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
            const newTracksArr = update(this.state.tempTracksArr, {$splice: [[index, 1]]});
            this.setState({tempPlaylist: newPlaylist, tempTracksArr: newTracksArr});
        }
    }

    onSubmitClearTemp() {
      this.setState({tempTracksArr: [], tempPlaylist: []})
    }

    onClickAddToQueue(playlist, event){
        this.props.dispatch(actions.queue(playlist.tracks));  
    }

    expandCollapse(arrIndex, event) {
        event.preventDefault();
        if (this.state.isOpenedArray.indexOf(arrIndex) === -1) {
            const tempOpenedArr = update(this.state.isOpenedArray, {$push: [arrIndex]});
            this.setState({isOpenedArray: tempOpenedArr})
        } else {
            const index = this.state.isOpenedArray.indexOf(arrIndex)
            const tempOpenedArr = update(this.state.isOpenedArray, {$splice: [[index, 1]]});
            this.setState({isOpenedArray: tempOpenedArr});
        }   
    }

    checkOpenedOrNot(index) {
        if (this.state.isOpenedArray.indexOf(index) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    showPlaylistBox() {
      if(this.state.tempPlaylist.length !== 0) {
        return 'block';
      } else {
        return 'none';
      }
    }

    renderToplists() {
        if(this.props.topPlaylists) {
            return (
                <div>
                    <RenderPlaylist url={this.props.currentListeningUrl} playlistArray={this.props.topPlaylists.slice(0,3)} playlistArray4To10={this.props.topPlaylists.slice(3,10)} currentUser={this.props.currentUser} favouritePlaylist={this.props.favouritePlaylist} onCheckInsert={this.onCheckInsert.bind(this)} renderCheckedIndex={this.renderCheckedIndex.bind(this)} />
                </div>
            );
        } 
        return <h2>No Playlist</h2>;
    }
    
	render() {
		return (
            <div id="top_page">
                <AddPlaylist onSubmitClearTemp={this.onSubmitClearTemp.bind(this)} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist} error={this.props.error} feedback={this.props.feedback} show={this.showPlaylistBox()} />
                <div>
                    <div>{this.renderToplists()}</div>
                </div>
            </div>
        );
	}
}

export default connect(
    ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist, userSavedPlaylists, error, feedback }) =>
    ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist, userSavedPlaylists, error, feedback })
)(TopPlaylistsPage);