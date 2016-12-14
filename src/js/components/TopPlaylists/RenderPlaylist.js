import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderTracks from '../PlaylistPlayer/RenderTracksTopPlaylist';
import Collapse from 'react-collapse';
import update from 'react-addons-update';
import ScrollArea from 'react-scrollbar';

class RenderPlaylist extends Component {
  
    state = {
      isOpenedArray: []
    }
    
  	onClickUpdateFavouritePlaylist(playlistObject,event){
	    event.preventDefault();
	    this.props.dispatch(playlistActions.updateFavouritePlaylist(sessionStorage.access_token, sessionStorage.token, playlistObject._id, playlistObject.rating));
	  }
	
    onClickAddToQueue(playlist, event){
        this.props.dispatch(actions.queue(playlist.tracks));
    }
    
    favouriteOrUnfavourite(playlistObject) {
      if(this.props.currentUser.userId === playlistObject.userId) {
        return <div><i className="fa fa-user" aria-hidden="true"></i></div>
      }
      let favouritePlaylistIdArray = [];

      for(let i=0; i<this.props.favouritePlaylist.length; i++) {
        favouritePlaylistIdArray.push(this.props.favouritePlaylist[i]._id);
      }
      return (
        <button onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlistObject)}>
          {favouritePlaylistIdArray.indexOf(playlistObject._id) >= 0 ? 'Unfavourite' : 'Favourite'}
        </button>
      )
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
        return <ul><RenderTracks playlistObject={playlist} onCheckInsert={this.props.onCheckInsert} renderCheckedIndex={this.props.renderCheckedIndex} /></ul>
      }
      return;
    }

  renderTop3And4To10Playlists(topPlaylist) {
    if(topPlaylist === this.props.playlistArray) {
      return (
        <div>
          <h2>Top 3 Playlists</h2>
          <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
          {this.props.playlistArray.map((playlist, index) => (
            <div key={index}>
              <li>#{index+1} - {playlist.name}</li>
              <li>favourites: {playlist.rating}</li>
              {this.favouriteOrUnfavourite(playlist)}
              <button onClick={this.onClickAddToQueue.bind(this, playlist)}>Add to Queue</button>
              {this.viewTracks(playlist)}
            </div>
          ))}
          </ScrollArea>
        </div>
      );
    }
    if(this.props.playlistArray4To10) {
      return (
        <div>
          <h2>Top 4-10 Playlists</h2>
          <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
          {this.props.playlistArray4To10.map((playlist, index) => (
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
          </ScrollArea>
        </div>
      );
    }
  }
  
  render() {
    console.log(sessionStorage, this.props);
    return (
      <div>
        <div>{this.renderTop3And4To10Playlists(this.props.playlistArray)}</div>
        <div>{this.renderTop3And4To10Playlists(this.props.playlistArray4To10)}</div>
      </div>
    ); 
  }
  
};

export default connect()(RenderPlaylist);