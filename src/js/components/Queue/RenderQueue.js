import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import QueueTrackList from './QueueTrackList';
import playMusicFunc from '../MusicPlayer/playMusicFunc';


class RenderQueue extends Component {
    
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }

    onTrackPlayNow(event, trackLink) {
        console.log('trackLink', trackLink);
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(trackLink));

    }

    onClickDeleteQueueTrack(event, trackIndex) {
        event.preventDefault();
        this.props.dispatch(actions.deleteQueueTrack(trackIndex));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return (
                <QueueTrackList 
                    onTrackItemClick={this.onTrackItemClick.bind(this)} 
                    onClickDeleteQueueTrack={this.onClickDeleteQueueTrack.bind(this)} 
                    onTrackPlayNow={this.onTrackPlayNow.bind(this)} 
                    tracks={this.props.playlistObject.tracks} 
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
