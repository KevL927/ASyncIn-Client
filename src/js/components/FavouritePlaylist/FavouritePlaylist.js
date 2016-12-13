import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import FaStar from 'react-icons/lib/fa/star';


class FavouritePlaylist extends Component {
    onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.currentListeningPlaylist(playlist));
	}
	
    onClickUpdateFavouritePlaylist(playlistObject,event) {
	    event.preventDefault();
	    this.props.dispatch(playlistActions.updateFavouritePlaylist(this.props.currentUser.accessToken, this.props.currentUser.token, playlistObject._id, playlistObject.rating));
	}
	
    renderFavouritePlaylist(){
        let playlist = [];
        if(!this.props.favouritePlaylists) {
          playlist = <h2>No Favourite Playlists</h2>  
        }
        else{
            playlist = this.props.favouritePlaylists.map((playlist, index) => {
                return (
                    <div key={index}>
                      <h3> <FaStar/> My Favourite Playlists</h3>
                      <li key={index}>
	                    <div>
	                        <div>{playlist.name}</div>
                            <button onClick={this.onClickAddToQueue.bind(this, playlist)}>
                                Add To Queue
                            </button>
                            <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlist)}>
                                Unfavourite playlist
                            </button>
                        </div>
	                </li>
                </div>
                );
            })
            
        }
     
     return playlist;
    }
    

	render() {
		return (
            <div>
                <div>{this.renderFavouritePlaylist()}</div>
            </div>
		);
	}
}

export default connect()(FavouritePlaylist);