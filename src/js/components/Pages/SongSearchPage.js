import React, { Component } from 'react';
import {connect} from 'react-redux';
import SongSearch from '../SearchMusic/SongSearch';
import * as userActions from '../../actions/user-actions';


class SongSearchContainer extends Component {
  
  componentWillMount() {
    this.props.dispatch(userActions.getCurrentUser(sessionStorage.token, sessionStorage.access_token));
  }
  
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.userSavedPlaylists){
  //     return true
  //   }
  // }
  
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