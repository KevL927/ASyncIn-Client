import React, { Component } from 'react';
import {connect} from 'react-redux';
import SongSearch from '../SearchMusic/SongSearch';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

class SongSearchContainer extends Component {
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.userSavedPlaylists){
      return true
    }
    
  }
  render() {
    return (
      <div className="musicPlayer">
        <div className="musicPlayer-container">
          <SongSearch currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    userSavedPlaylists: state.userSavedPlaylists
  }
}

export default connect(mapStateToProps)(SongSearchContainer);