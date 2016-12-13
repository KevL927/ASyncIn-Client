import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user-actions';
import * as actions from '../../actions/actions';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist';
import MyPlaylistsDashboard from '../UserPlaylists/MyPlaylistsDashboard';


class DashboardPage extends Component {
  
  componentWillMount(){
    if (!this.props.currentUser) {
      this.props.dispatch(userActions.getCurrentUser(this.props.location.query.token, this.props.location.query.access_token));
    }
  }
   onSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }
  
  renderComponents() {
    if(this.props.currentUser) {
      return (
        <div className="DashboardPage">
          <span id="welcome">Welcome, {this.props.currentUser.username} </span>
           <div className="songSearch-container">
          <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.." required/>
          </form>
        </div>
          <MyPlaylistsDashboard userSavedPlaylists={this.props.userSavedPlaylists} currentUser={this.props.currentUser}  queue={this.props.queue}/>
          <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylists} />
        </div>
      );
    }else{
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
  ({ currentUser, userSavedPlaylists,  queue }) => 
  ({ currentUser, userSavedPlaylists, queue })
)(DashboardPage);
