import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Top3Playlists from './Top3Playlists';
import Top4To10Playlists from './Top4To10Playlists';


class TopPlaylists extends Component {
 
    componentWillMount() {
        this.props.dispatch(actions.getTopPlaylist('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    // <Top3Playlists playlistObject={this.props.topPlaylists.slice(0,3)} />,
    renderToplists() {
        if(this.props.topPlaylists) {
            return (
                
                <Top4To10Playlists playlistArray={this.props.topPlaylists.slice(4,10)} />
            );
        } 
        return <h2>Loading Playlist</h2>;
    }
    
	render() {
		return <div>{this.renderToplists()}</div>;
	}
	
}


export default connect(
    ({ topPlaylists }) => ({ topPlaylists })
)(TopPlaylists);