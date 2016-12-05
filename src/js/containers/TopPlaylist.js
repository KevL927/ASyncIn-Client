import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class TopPlaylist extends Component {
 
    componentWillMount() {
        this.props.dispatch(actions.getTopPlaylist('iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
    }
    
    renderTopPlaylist(){
        let playlist = [];
        if(!this.props.topPlaylists) {
          playlist = <h2>No Top Playlists</h2>  
        }
        else{
            // return <div>{this.props.topPlaylists[0].name}</div>
            playlist = this.props.topPlaylists.map((playlist, index) => {
                return (
                  <li key={index}>
                        {playlist.name}
                  </li>
                );
            })
            
        }
     
     return playlist;
    }
    

	render() {
		return (
            <div>
                <div>{this.renderTopPlaylist()}</div>
            </div>
		);
	}
}

// const mapStateToProps = (state) => {
//   return {
//     topPlaylists: state.topPlaylists,
//     error: state.error
//   }
// }

export default connect()(TopPlaylist);
