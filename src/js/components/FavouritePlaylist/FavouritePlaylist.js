import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class FavouritePlaylist extends Component {
    onClickRedirect(playlist, event){
	    this.props.dispatch(actions.currentListeningPlaylist(playlist));
	   
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
                      <h3> My Favourite Playlists</h3>
                      <li key={index}>
	                    <div><button onClick={this.onClickRedirect.bind(this, playlist)}>{playlist.name}</button></div>
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