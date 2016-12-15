import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import TiPlus from 'react-icons/lib/ti/plus';


class FavouritePlaylist extends Component {
    onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.currentListeningPlaylist(playlist));
	}
	
    onClickUpdateFavouritePlaylist(playlistObject,event) {
	    event.preventDefault();
	    this.props.dispatch(playlistActions.updateFavouritePlaylist(sessionStorage.access_token, sessionStorage.token, playlistObject._id, playlistObject.rating));
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
            
                      <li key={index}>
	                    <div>
	                        <div>{playlist.name}</div>
                            <button onClick={this.onClickAddToQueue.bind(this, playlist)}>
                                <TiPlus className="blackColor" size={22} />
                            </button>
                            <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlist)}>
                                <FaThumbsOUp className="blackColor" size={22} />
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