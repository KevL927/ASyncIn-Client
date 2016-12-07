import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class FavouritePlaylist extends Component {
    
    renderFavouritePlaylist(){
        let playlist = [];
        if(!this.props.favouritePlaylists) {
          playlist = <h2>No Favourite Playlists</h2>  
        }
        else{
            playlist = this.props.favouritePlaylists.map((playlist, index) => {
                return (
                    <div>
                      <h3>Favourite Playlists</h3>
                      <li key={index}>
                            {playlist.name}
                      </li>
                    </div>
                );
            })
            
        }
     
     return playlist;
    }
    

	render() {
	    console.log(this.props.favouritePlaylists)
		return (
            <div>
                <div>{this.renderFavouritePlaylist()}</div>
            </div>
		);
	}
}

export default connect()(FavouritePlaylist);