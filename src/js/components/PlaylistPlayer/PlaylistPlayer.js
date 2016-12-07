import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import TrackList from './TrackList';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import playMusicFunc from '../MusicPlayer/playMusicFunc';

class PlaylistPlayer extends Component {
    
    componentDidMount() {
        this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c','iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    
    onTrackItemClick(url){
        this.props.dispatch(actions.currentListeningUrl(url));
    }
    
    renderTracks() {
        if(this.props.otherUserPlaylist) {
            return <TrackList onTrackItemClick={this.onTrackItemClick.bind(this)} tracks={this.props.otherUserPlaylist.tracks} />;
        } 
        return <h2>Loading Playlist</h2>;
    }
    
    render() {
        return (
            <div>
                {playMusicFunc(this.props.currentListeningUrl)}
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