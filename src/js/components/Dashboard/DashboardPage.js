import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import SongSearch from '../SearchMusic/SongSearch';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist';


class DashboardPage extends Component {
  
  componentWillMount(){
    this.props.dispatch(actions.getCurrentUser(this.props.location.query.token, this.props.location.query.access_token));
  }
  
  renderComponents() {
    console.log(this.props)
    if(this.props.currentUser) {
      return (
        <div>
          <h3>Welcome, {this.props.currentUser.username}</h3>
          <SongSearch currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} />
          <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylists} />
        </div>
      );
    }else{
      return <div>Loading</div>;
    }
  }
  
  render() {
    return (
      <div className="DashboardPage">
          {this.renderComponents()}
      </div>
    );
  }
  
}


export default connect(  
  ({ currentUser, userSavedPlaylists }) => 
  ({ currentUser, userSavedPlaylists })
)(DashboardPage);
