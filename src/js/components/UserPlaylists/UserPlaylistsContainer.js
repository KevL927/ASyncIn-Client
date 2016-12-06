import React, { Component } from 'react';
import '../../../App.css';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import UserPlaylists from './UserPlaylists';
//import {Link} from 'react-router';

class UserPlaylistsPage extends Component {
  render() {
    return (
      <div className="UserPlaylistsPage">
        <div className="UserPlaylistsPage-container">
          
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

export default connect(mapStateToProps)(UserPlaylistsPage);