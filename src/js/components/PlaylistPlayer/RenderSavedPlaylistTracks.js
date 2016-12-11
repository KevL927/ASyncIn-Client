import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import TrackListWithDelete from './TrackListWithDelete';
import update from 'react-addons-update';


class RenderTracks extends Component {
    
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }
    
    onClickDeleteTrack(event, track){
         event.preventDefault();
         let tempTracksIdArray = [];
         for(let i=0; i < this.props.playlistObject.tracks.length; i++){
             tempTracksIdArray.push(this.props.playlistObject.tracks[i]._id);
         }
          let trackIndex = tempTracksIdArray.indexOf(track._id);
          console.log(trackIndex);
          const trackArr = update(this.props.playlistObject.tracks, {$splice: [[trackIndex, 1]]});
          const newPlaylistObject = Object.assign({}, this.props.playlistObject, {tracks: trackArr})
          console.log(newPlaylistObject);
          this.props.dispatch(playlistActions.updatePlaylist(newPlaylistObject, this.props.currentUser.accessToken))
        // this.props.dispatch(actions.updatePlaylist(playlistObject));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return <TrackListWithDelete onTrackItemClick={this.onTrackItemClick.bind(this)} onClickDeleteTrack={this.onClickDeleteTrack.bind(this)} tracks={this.props.playlistObject.tracks} />;
        } 
        return <div></div>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }

}

export default connect()(RenderTracks);
