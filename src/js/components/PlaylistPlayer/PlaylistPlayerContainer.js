import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderTracks from './RenderTracks';

class PlaylistPlayerContainer extends Component {
    
    componentDidMount() {
        this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c','iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    
    render() {
        return (
            <div>
                {playMusicFunc(this.props.currentListeningUrl)}
                <RenderTracks playlistObject={this.props.otherUserPlaylist} />
                <AddPlaylist />
            </div>
        );
    }
    
}


export default connect(
    ({ otherUserPlaylist, currentListeningUrl }) => 
    ({ otherUserPlaylist, currentListeningUrl })
)(PlaylistPlayerContainer);