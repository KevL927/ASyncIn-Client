import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import QueueTrackList from './QueueTrackList';


class RenderQueue extends Component {
    
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return <QueueTrackList onTrackItemClick={this.onTrackItemClick.bind(this)} tracks={this.props.playlistObject.tracks} />;
        } 
        return <div></div>;
    }
    
    render() {
        console.log('renderTracks queue', this.props.playlistObject)
        return <div>{this.unwrapTracks()}</div>;
    }

}

export default connect()(RenderQueue);
