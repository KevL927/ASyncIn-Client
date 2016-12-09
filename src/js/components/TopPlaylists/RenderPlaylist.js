import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import RenderTracks from '../PlaylistPlayer/RenderTracks';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import Collapse from 'react-collapse';
import update from 'react-addons-update';

class RenderPlaylist extends Component {
    state = {
      isOpenedArray: []
    }
  	onClickUpdateFavouritePlaylist(playlistObject,event){
      console.log('clicked', playlistObject);
	    event.preventDefault();
	    this.props.dispatch(actions.updateFavouritePlaylist(this.props.currentUser.accessToken, this.props.currentUser.token, playlistObject._id, playlistObject.rating));
	}
	
    onClickAddToQueue(playlist, event){
        this.props.dispatch(actions.queue(playlist.tracks));
    }
    
    favouriteOrUnfavourite(playlistObject) {

      if(this.props.favouritePlaylist.length == 0){ return <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlistObject)}>Favourite</button>}

      let favouritePlaylistIdArray = [];

      for(let i=0; i<this.props.favouritePlaylist.length; i++){ 
        favouritePlaylistIdArray.push(this.props.favouritePlaylist[i]._id);
        }
        
        if( favouritePlaylistIdArray.indexOf(playlistObject._id) >= 0){
          return <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlistObject)}>Unfavourite</button>
        }
        else{
          return <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlistObject)}>Favourite</button>
        }
      
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

    viewTracks(playlist) {
      if(playlist) {
        return <ul><RenderTracks playlistObject={playlist} /></ul>
      }
      return;
    }

  rendertheStuff() {
    if(this.props.playlistArray.length < 4) {
      return (
        <div>
          <h2>Top 3 Playlists</h2>
          {this.props.playlistArray.map((playlist, index) => (
            <div key={index}>
              <li>#{index+1} - {playlist.name}</li>
              <li>favourites: {playlist.rating}</li>
              {this.favouriteOrUnfavourite(playlist)}
              <button onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
              <RenderTracks key={index} playlistObject={playlist} />
            </div>
          ))}
        </div>
      );
    }
    
    if(this.props.playlistArray.length > 3) {
      return (
        <div>
          <h2>Top 4-10 Playlists</h2>
          {this.props.playlistArray.map((playlist, index) => (
            <div key={index}>
              <li onClick={this.expandCollapse.bind(this, index)} ref={index}>
                #{index+4} - {playlist.name}
              </li>
              <li>
                favourites: {playlist.rating}
              </li>
              {this.favouriteOrUnfavourite(playlist)}
              <button onClick={this.onClickAddToQueue.bind(this, playlist )}>Add to Queue</button>
              <Collapse isOpened={this.checkOpenedOrNot(index)}>
              {this.viewTracks(playlist)}
             </Collapse>
            </div>
          ))}
        </div>
      );
    }
  }
  
  render() {
    return <div>{this.rendertheStuff()}</div>  
  }
  
};

export default connect()(RenderPlaylist);