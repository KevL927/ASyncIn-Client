import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import SongSearch from '../SearchMusic/SongSearch';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import FavouritePlaylist from '../FavouritePlaylist/FavouritePlaylist';


class DashboardPage extends Component {
  
  componentWillMount(){
    //token, accesstoken
    this.props.dispatch(actions.getCurrentUser('admin@email.com', 'iqz0zrbwsg40sg4ss8co44gww4o8gsg8os'));
  }
  
  renderComponents() {
    console.log(this.props)
    if(this.props.currentUser) {
      return (
        <div>
          <h3>Welcome, {this.props.currentUser.username}</h3>
          <SongSearch />
          <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylists} />
          <AddPlaylist currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists}/>
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

    // <SongSearch />
          // <AddPlaylist />
          // <UserSavedPlaylist />
          // <FavouritePlaylist favouritePlaylists={this.props.currentUser.favouritePlaylist} />