import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import QueueTrackList from './QueueTrackList';

class RenderQueue extends Component {
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }

    onTrackPlayNow(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(track));
    }

    onClickDeleteQueueTrack(event, trackIndex) {
        event.preventDefault();
        this.props.dispatch(actions.deleteQueueTrack(trackIndex));
    }
    
    moveTrackInQueue(event, trackIndex, direction) {
        event.preventDefault();
        this.props.dispatch(actions.moveTrackInQueue({ direction, trackIndex }));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return (
                <QueueTrackList 
                    onTrackItemClick={this.onTrackItemClick.bind(this)} 
                    onClickDeleteQueueTrack={this.onClickDeleteQueueTrack.bind(this)}
                    moveTrackInQueue={this.moveTrackInQueue.bind(this)}
                    onTrackPlayNow={this.onTrackPlayNow.bind(this)} 
                    tracks={this.props.playlistObject.tracks}
                    currentUser={this.props.currentUser} 
                    userSavedPlaylists={this.props.userSavedPlaylists} 
                    error={this.props.error} 
                    feedback={this.props.feedback}
                />
            );
        } 
        return <div></div>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }
}

export default connect()(RenderQueue);
