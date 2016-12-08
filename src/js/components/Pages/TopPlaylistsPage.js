import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import RenderPlaylist from '../TopPlaylists/RenderPlaylist';


class TopPlaylistsPage extends Component {
 
    componentWillMount() {
        this.props.dispatch(actions.getTopPlaylist('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }

    renderToplists() {
        if(this.props.topPlaylists) {
            return (
                <div>
                    <RenderPlaylist url={this.props.currentListeningUrl} playlistArray={this.props.topPlaylists.slice(0,3)} />
                    <RenderPlaylist playlistArray={this.props.topPlaylists.slice(4,10)} />
                </div>
            );
        } 
        return <h2>No Playlist</h2>;
    }
    
	render() {

		return (

            <div>
                <div>{this.renderToplists()}</div>
            </div>
        );
	}
	
}


export default connect(
    ({ topPlaylists, currentListeningUrl }) => ({ topPlaylists, currentListeningUrl })
)(TopPlaylistsPage);