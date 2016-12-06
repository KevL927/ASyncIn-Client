import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import TrackList from './TrackList';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

class PlaylistPlayer extends Component {
    
    onTrackItemClick(url){
        this.props.dispatch(actions.currentListeningUrl(url));
    }
    
    componentDidMount() {
        this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c','iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    
    renderTracks() {
        if(this.props.otherUserPlaylist) {
            return <TrackList onTrackItemClick={this.onTrackItemClick.bind(this)} tracks={this.props.otherUserPlaylist.tracks} />;
        } 
        return <h2>Loading Playlist</h2>;
    }
    
    playMusic() {
        if(this.props.currentListeningUrl) {
            return <MusicPlayer url={this.props.currentListeningUrl} />;
        }
        return <MusicPlayer />;
    }
    
    render() {
        return (
            <div>
                {this.playMusic()}
                {this.renderTracks()}
                <div><AddPlaylist /></div>
            </div>
        );
    }
    
}


export default connect(
    ({ otherUserPlaylist, currentListeningUrl }) => 
    ({ otherUserPlaylist, currentListeningUrl })
)(PlaylistPlayer);