import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import TiPlus from 'react-icons/lib/ti/plus';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const tooltip_add = (
  <Tooltip id="tooltip_add"><strong>Add</strong> playlist to queue</Tooltip>
);
const tooltip_unfavourite = (
  <Tooltip id="tooltip_unfavourite"><strong>Unfavourite</strong> playlist </Tooltip>
);

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
	                        	<OverlayTrigger placement="bottom" overlay={tooltip_add}>
                                    <button onClick={this.onClickAddToQueue.bind(this, playlist)}>
                                        <TiPlus className="blackColor" size={22} />
                                    </button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={tooltip_unfavourite}>
                                    <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlist)}>
                                        <FaThumbsOUp className="blackColor" size={22} />
                                    </button>
                                </OverlayTrigger>
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