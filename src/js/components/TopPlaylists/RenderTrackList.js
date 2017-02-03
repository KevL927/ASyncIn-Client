import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import TracksUnWrap from './TracksUnWrap';

class RenderTrackList extends Component {
    onClickAddToQueue (event, track) {
        event.preventDefault();
        this.props.dispatch(actions.queue(track));
    }

    playTrackOnClick (event, track) {
        event.preventDefault();
        this.props.dispatch(actions.currentListeningUrl(track));
    }

    unwrapTracks() {
        if(this.props.playlistObject) {
            return  <TracksUnWrap 
                        renderCheckedIndex={this.props.renderCheckedIndex} 
                        onCheckInsert={this.props.onCheckInsert} 
                        tracks={this.props.playlistObject.tracks}
                        onClickAddToQueue={this.onClickAddToQueue.bind(this)}
                        playTrackOnClick={this.playTrackOnClick.bind(this)} 
                    />;
        } 
        return <div></div>;
    }
    
    render() {
        return <div>{this.unwrapTracks()}</div>;
    }
}

export default connect()(RenderTrackList);