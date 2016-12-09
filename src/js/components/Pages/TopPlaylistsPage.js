import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import RenderPlaylist from '../TopPlaylists/RenderPlaylist';
import update from 'react-addons-update';

class TopPlaylistsPage extends Component {
 
    state = {
        isOpenedArray: []
    }

shouldComponentUpdate(nextProps, nextState){
    console.log('next',nextProps.favouritePlaylist);
  if(nextProps.favouritePlaylist)
  return true;
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

    componentWillMount() {
        this.props.dispatch(actions.getTopPlaylist(this.props.currentUser.accessToken));
    }

    renderToplists() {
        if(this.props.topPlaylists) {
            return (
                <div>
                    <RenderPlaylist url={this.props.currentListeningUrl} playlistArray={this.props.topPlaylists.slice(0,3)} currentUser={this.props.currentUser} favouritePlaylist={this.props.favouritePlaylist}/>
                    <RenderPlaylist playlistArray={this.props.topPlaylists.slice(4,10)} currentUser={this.props.currentUser} favouritePlaylist={this.props.favouritePlaylist}/>
                </div>
            );
        } 
        return <h2>No Playlist</h2>;
    }
    
	render() {
		return (

            <div>
                <div>{this.renderToplists()}</div>
            </div>
        );
	}
	
}


export default connect(
    ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist }) => ({ topPlaylists, currentListeningUrl, currentUser, favouritePlaylist })
)(TopPlaylistsPage);