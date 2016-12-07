import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import TrackList from './TrackList';


class RenderTracks extends Component {
    
    onTrackItemClick(event, url) {
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(url));
    }
    
    unwrapTracks() {
        if(this.props.playlistObject) {
            return <TrackList onTrackItemClick={this.onTrackItemClick.bind(this)} tracks={this.props.playlistObject.tracks} />;
        } 
        return <h2>Loading Playlist</h2>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }

}

export default connect()(RenderTracks);