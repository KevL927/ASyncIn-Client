import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import SongSearch from '../SearchMusic/SongSearch';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist';
import MyPlaylistsDashboard from '../UserPlaylists/MyPlaylistsDashboard';


class DashboardPage extends Component {
  
  componentWillMount(){
    if (!this.props.currentUser) {
      this.props.dispatch(actions.getCurrentUser(this.props.location.query.token, this.props.location.query.access_token));
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
          <h3>Welcome, {this.props.currentUser.username}</h3>
           <div className="songSearch-container">
          <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.."/>
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
