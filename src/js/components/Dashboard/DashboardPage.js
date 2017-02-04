import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/user-actions';
import * as actions from '../../actions/actions';
import FavouritePlaylist from './FavouritePlaylist';
import MyPlaylistsDashboard from './MyPlaylistsDashboard';

class DashboardPage extends Component {
  componentWillMount() {
    if (!this.props.currentUser) {
      if(!sessionStorage.token) {
        this.props.dispatch(userActions.getCurrentUser(this.props.location.query.token, this.props.location.query.access_token));
      } else {
      this.props.dispatch(userActions.getCurrentUser(sessionStorage.token, sessionStorage.access_token));
      }
    }
  }
  
  onSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }
  
  renderComponents() {
    if(this.props.currentUser) {
      return (
        <div>
          <span id="welcome">Welcome, {this.props.currentUser.username}</span>
          <div className="songSearch-container">
            <form onSubmit={this.onSubmitSearch.bind(this)}>
              <input type="text" name="search" ref="searchInput" placeholder="Search.." required/>
            </form>
          </div>
          <MyPlaylistsDashboard userSavedPlaylists={this.props.userSavedPlaylists} currentUser={this.props.currentUser}  queue={this.props.queue}/>
          <span className="my-saved-playlists">Favourite Playlists</span>
          <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylists} currentUser={this.props.currentUser} />
        </div>
      );
    } else {
        return <div>Loading</div>;
    }
  }
  
  render() {
    return (
      <div>
        <div className="DashboardPage">
          {this.renderComponents()}
        </div>
      </div>
    );
  }
}

export default connect(  
  ({ currentUser, userSavedPlaylists, queue }) => 
  ({ currentUser, userSavedPlaylists, queue })
)(DashboardPage);
