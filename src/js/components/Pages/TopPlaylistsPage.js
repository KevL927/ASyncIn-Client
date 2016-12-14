import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as userActions from '../../actions/user-actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderPlaylist from '../TopPlaylists/RenderPlaylist';
import update from 'react-addons-update';
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

    onCheckInsert(event, track) {
        if(event.target.checked === true) {
            const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
            const newTracksArr = update(this.state.tempTracksArr, {$push: [track.link]});
            this.setState({tempPlaylist: newPlaylist, tempTracksArr: newTracksArr});
        }
        if(event.target.checked === false) {
            const index = this.state.tempTracksArr.indexOf(track.link);
            const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
            const newTracksArr = update(this.state.tempTracksArr, {$splice: [[index, 1]]});
            this.setState({tempPlaylist: newPlaylist, tempTracksArr: newTracksArr});
        }
    }

    onClickAddToQueue(playlist, event){
        this.props.dispatch(actions.queue(playlist.tracks));  
    }

    expandCollapse(index, event) {
        event.preventDefault();
        if (this.state.isOpenedArray.indexOf(index) === -1) {
            const tempOpenedArr = update(this.state.isOpenedArray, {$push: [index]});
            this.setState({isOpenedArray: tempOpenedArr})
        } else {
            const index = this.state.isOpenedArray.indexOf(index)
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

    renderToplists() {
        if(this.props.topPlaylists) {
            return (
                <div>
                    <RenderPlaylist url={this.props.currentListeningUrl} playlistArray={this.props.topPlaylists.slice(0,3)} playlistArray4To10={this.props.topPlaylists.slice(3,10)} currentUser={this.props.currentUser} favouritePlaylist={this.props.favouritePlaylist} onCheckInsert={this.onCheckInsert.bind(this)} />
                </div>
            );
        } 
        return <h2>No Playlist</h2>;
    }
    
	render() {
	    console.log('topplaylist from toplaylistpage', this.props.topPlaylists)
	    console.log('favoritePlaylist from TopplaylistPage',this.props.favouritePlaylist)
		return (

            <div id="top_page">
            <AddPlaylist currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist} error={this.props.error} feedback={this.props.feedback} />
                
                <div>
                    <div>{this.renderToplists()}</div>
                </div>
            </div>
        );
	}
	
}


export default connect(
    ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist, userSavedPlaylists, error, feedback }) => ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist, userSavedPlaylists, error, feedback })
)(TopPlaylistsPage);