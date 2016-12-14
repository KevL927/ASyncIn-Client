import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import TrackListWithCheckBox from './TrackListWithCheckBox';


class RenderTracks extends Component {
    
    onTrackItemClick(event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }

    unwrapTracks() {
        if(this.props.playlistObject) {
            return <TrackListWithCheckBox onCheckInsert={this.props.onCheckInsert} 
                    onTrackItemClick={this.onTrackItemClick.bind(this)} 
                    tracks={this.props.playlistObject.tracks} 
                    />;
        } 
        return <div></div>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }

}

export default connect()(RenderTracks);