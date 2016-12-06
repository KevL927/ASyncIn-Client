import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import TrackList from './TrackList';


class PlaylistPlayer extends Component {  
    
    componentWillMount() {
        this.props.dispatch(actions.getOtherUserPlaylist('58433240148e20001c34747c','iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    
        //     if(!this.props.otherUserPlaylist) {
        //     return <div>hello</div>
        // } if(this.props.otherUserPlaylist) {
        //     return (
        //         <div>
        //             <TrackList tracks={this.props.otherUserPlaylist} />
        //         </div>
        //     );
        // }
    
    render() {
        <div>
            <TrackList tracks={this.props.otherUserPlaylist} />
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        otherUserPlaylist: state.otherUserPlaylist
    }
}

export default connect()(PlaylistPlayer);