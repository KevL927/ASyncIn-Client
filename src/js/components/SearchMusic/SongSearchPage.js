import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/user-actions';
import SongSearch from '../SearchMusic/SongSearch';
import './styles.css';

class SongSearchContainer extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.getCurrentUser(sessionStorage.token, sessionStorage.access_token));
  }
  
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.userSavedPlaylists){
      return true;
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

export default connect(
  ({ currentUser, userSavedPlaylists }) =>
  ({ currentUser, userSavedPlaylists })
)(SongSearchContainer);