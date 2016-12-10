import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import SongSearch from '../SearchMusic/SongSearch';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist';
import UserSavedPlaylists from '../UserPlaylists/UserSavedPlaylists'
import NavigationBar from '../NavigationBar'




class DashboardPage extends Component {
  
  componentWillMount(){
    this.props.dispatch(actions.getCurrentUser(this.props.location.query.token, this.props.location.query.access_token));
  }
   onSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }
  
  renderComponents() {
    if(this.props.currentUser) {
      return (
  
        <div id="DashboardPage">
          <NavigationBar/>
          <span id="Welcome">Welcome, {this.props.currentUser.username}</span>
           <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.." id="search-song-form"/>
          </form>
           <div className="songSearch-container">
              <UserSavedPlaylists userPlaylists={this.props.userSavedPlaylists} />
              <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylists} />
          </div>
          
        </div>
      );
    }else{
      return <div>Loading</div>;
    }
  }
  
  render() {
    return (
     <div>
      <NavigationBar />
       <div className="DashboardPage">
           {this.renderComponents()}
       </div>
     </div>
    );
  }
  
}


export default connect(  
  ({ currentUser, userSavedPlaylists }) => 
  ({ currentUser, userSavedPlaylists })
)(DashboardPage);
