import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollArea from 'react-scrollbar';
import { OverlayTrigger } from 'react-bootstrap';
import TiPlus from 'react-icons/lib/ti/plus';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';

import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import { tooltip_add, tooltip_unfavourite } from '../../utils/tooltips';

class FavouritePlaylist extends Component {
    onClickAddToQueue(playlist, event) {
        this.props.dispatch(actions.queue(playlist.tracks));
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
    	                        <h4>{playlist.name}</h4>
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
            });
        }
     return playlist;
    }
    
	render() {
		return (
            <div>
                <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
                    <div>{this.renderFavouritePlaylist()}</div>
                </ScrollArea>
            </div>
		);
	}
}

export default connect()(FavouritePlaylist);