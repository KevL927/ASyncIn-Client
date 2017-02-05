import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapse from 'react-collapse';
import update from 'react-addons-update';
import ScrollArea from 'react-scrollbar';
import { OverlayTrigger } from 'react-bootstrap';
import TiPlus from 'react-icons/lib/ti/plus';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';

import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderTrackList from './RenderTrackList';
import { tooltip_add, tooltip_favourite, tooltip_unfavourite, tooltip_my_playlist } from '../../utils/tooltips';

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
    if(sessionStorage.userId === playlistObject.userId) {
      return <OverlayTrigger placement="bottom" overlay={tooltip_my_playlist}><i className="fa fa-user fa-2x" aria-hidden="true"></i></OverlayTrigger>;
    }
    let favouritePlaylistIdArray = [];

    for(let i=0; i<this.props.favouritePlaylist.length; i++) {
      favouritePlaylistIdArray.push(this.props.favouritePlaylist[i]._id);
    }
    return (
      <button className="user-playlist-buttons" onClick={this.onClickUpdateFavouritePlaylist.bind(this, playlistObject)}>
        {favouritePlaylistIdArray.indexOf(playlistObject._id) >= 0 ? 
          <OverlayTrigger placement="bottom" overlay={tooltip_unfavourite}><FaThumbsOUp size={22} /></OverlayTrigger> : 
          <OverlayTrigger placement="bottom" overlay={tooltip_favourite}><FaThumbsUp size={22} /></OverlayTrigger>}
      </button>
    );
  }

  expandCollapse(arrIndex, event) {
    event.preventDefault();
    if (this.state.isOpenedArray.indexOf(arrIndex) === -1) {
        const tempOpenedArr = update(this.state.isOpenedArray, {$push: [arrIndex]});
        this.setState({isOpenedArray: tempOpenedArr});
    } else {
        let index = this.state.isOpenedArray.indexOf(arrIndex);
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
      return <ul className="top-playlist-tracks"><RenderTrackList playlistObject={playlist} onCheckInsert={this.props.onCheckInsert} renderCheckedIndex={this.props.renderCheckedIndex} /></ul>;
    }
    return;
  }

  renderTop3And4To10Playlists(topPlaylist) {
    //swap playlist position and assign rank
    let temp = this.props.playlistArray[1];
        this.props.playlistArray[1] = this.props.playlistArray[0];
        this.props.playlistArray[0] = temp;
        this.props.playlistArray[1].rank = 1;
        this.props.playlistArray[0].rank = 2;
        this.props.playlistArray[2].rank = 3;
        
    if(topPlaylist === this.props.playlistArray) {
      return (
        <div className="top3 " id="top-playlist-render">
          <h2>Top 3 Playlists</h2>
          {this.props.playlistArray.map((playlist, index) => (
                <ScrollArea key={index} speed={0.8} className="area" contentClassName="content" horizontal={false} >
                <div key={index} className="playlist_favourites">
                  <div className="playlistControls">
                    <div className="playlist-rating">
                      <li className="topTitle"><h3>#{playlist.rank} - {playlist.name}</h3></li>
                      <li>favourites: {playlist.rating-1}</li>
                    </div>
                    <div className="playlist-favourite">{this.favouriteOrUnfavourite(playlist)}
                      <OverlayTrigger placement="bottom" overlay={tooltip_add}>
                        <button className="user-playlist-buttons" onClick={this.onClickAddToQueue.bind(this, playlist)}><TiPlus size={22}/></button>
                      </OverlayTrigger>
                    </div>
                  </div>
                  {this.viewTracks(playlist)}
                </div>
                </ScrollArea>
          ))}
        </div>
      );
    }
    if(this.props.playlistArray4To10) {
      return (
        <div className="top4to10">
          <h2>Other Playlists</h2>
          <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
          {this.props.playlistArray4To10.map((playlist, index) => (
            <div key={index} className="playlist_favourites">
            <div className="playlistControls">
              <li onClick={this.expandCollapse.bind(this, index)} ref={index}>
                <h3 className="transition">#{index+4} - {playlist.name}</h3>
              </li>
              <li>
                favourites: {playlist.rating-1}
              </li>
              <div className="playlist-favourite">
                {this.favouriteOrUnfavourite(playlist)}
                <button className="user-playlist-buttons" onClick={this.onClickAddToQueue.bind(this, playlist)}><TiPlus size={22}/></button>
            </div>
             </div>
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
    return (
      <div>
        <div>{this.renderTop3And4To10Playlists(this.props.playlistArray)}</div>
        <div>{this.renderTop3And4To10Playlists(this.props.playlistArray4To10)}</div>
      </div>
    ); 
  }
}

export default connect()(RenderPlaylist);