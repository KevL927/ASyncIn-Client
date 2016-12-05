import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';
import DisplayTracks from './DisplayTracks';
import {connectTo} from '../utils/connector';


class PlaylistPlayer extends Component {
    
    componentDidMount() {
        this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c','iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }

        
    renderStateOrNot() {
        if(this.props.otherUserPlaylist) {
            return (
                <DisplayTracks otherUserPlaylist={this.props.otherUserPlaylist} />
            );
        }
        return <div>Loading Playlist</div>;
    }
    
    generateResult(resultArr) {
        let arr = [];
        if(!resultArr) {
        arr = <div></div>;
        } else {
            arr = resultArr.map((track, index) => {
            return (
              <li key={index}>
                <div>{track.title}</div>
                <div>{track.link}</div>
                <div>{track.thumbnail}</div>
                <button onClick={this.playTrackOnClick.bind(this, track.link)}>click</button>
              </li>
            );
        });
    }
    return arr;
}

    render() {
        return (
            <div className="playlistPlayer">
                <div>{this.renderStateOrNot()}</div>
            </div>
        );
    }
    
}

export default connectTo(PlaylistPlayer);