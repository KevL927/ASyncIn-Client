import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import QueueTrackList from './QueueTrackList';


class RenderQueue extends Component {
    
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }

    onTrackPlayNow(event, trackLink) {
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(trackLink));

    }

    onClickDeleteQueueTrack(event, trackIndex) {
        event.preventDefault();
        this.props.dispatch(actions.deleteQueueTrack(trackIndex));
    }
    
    moveUpTrackInQueue(event, trackIndex) {
        event.preventDefault();
        let queueList = this.props.playlistObject.tracks;
        
        if(trackIndex === 0) {
            return;
        }
        let newQueueOrder = queueList.slice(0, trackIndex-1)
                           .concat(queueList.slice(trackIndex, trackIndex + 1))
                           .concat(queueList.slice(trackIndex-1, trackIndex))
                           .concat(queueList.slice(trackIndex + 1))
        return this.props.dispatch(actions.moveTrackInQueue(newQueueOrder));
    }
    
    moveDownTrackInQueue(event, trackIndex) {
        event.preventDefault();
        let queueList = this.props.playlistObject.tracks;
        
        if(trackIndex >= queueList.length-1) {
            return;
        }
        let newQueueOrder = queueList.slice(0, trackIndex)
                           .concat(queueList.slice(trackIndex + 1, trackIndex + 2))
                           .concat(queueList.slice(trackIndex, trackIndex + 1))
                           .concat(queueList.slice(trackIndex + 2))
        return this.props.dispatch(actions.moveTrackInQueue(newQueueOrder));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return (
                <QueueTrackList 
                    onTrackItemClick={this.onTrackItemClick.bind(this)} 
                    onClickDeleteQueueTrack={this.onClickDeleteQueueTrack.bind(this)}
                    moveUpTrackInQueue={this.moveUpTrackInQueue.bind(this)}
                    moveDownTrackInQueue={this.moveDownTrackInQueue.bind(this)}
                    onTrackPlayNow={this.onTrackPlayNow.bind(this)} 
                    tracks={this.props.playlistObject.tracks}
                    currentUser={this.props.currentUser} 
                    userSavedPlaylists={this.props.userSavedPlaylists} 
                    error={this.props.error} 
                    feedback={this.props.feedback}
                />
            )
        } 
        return <div></div>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }

}

export default connect()(RenderQueue);
