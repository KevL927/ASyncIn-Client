import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';

import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import TrackListWithDelete from './TrackListWithDelete';

class RenderTracks extends Component {
    playTrackOnClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(track));
    }
    
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
        const trackArr = update(this.props.playlistObject.tracks, {$splice: [[trackIndex, 1]]});
        const newPlaylistObject = Object.assign({}, this.props.playlistObject, {tracks: trackArr});
        this.props.dispatch(playlistActions.updatePlaylist(newPlaylistObject, sessionStorage.access_token));
    }
    
    moveTrackInPlaylist(event, playlistIndex, trackIndex, direction) {
        event.preventDefault();
        this.props.dispatch(actions.moveAndUpdateTrackInPlaylist(direction, playlistIndex, trackIndex));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return (
                <TrackListWithDelete
                    playTrackOnClick={this.playTrackOnClick.bind(this)}
                    onTrackItemClick={this.onTrackItemClick.bind(this)} 
                    onClickDeleteTrack={this.onClickDeleteTrack.bind(this)} 
                    moveTrackInPlaylist={this.moveTrackInPlaylist.bind(this)}
                    playlistIndex={this.props.playlistIndex}
                    tracks={this.props.playlistObject.tracks}
                />
            );
        } 
        return <div></div>;
    }
    
    render() {
        return <div className="tracks-list">{this.unwrapTracks()}</div>;
    }
}

export default connect()(RenderTracks);