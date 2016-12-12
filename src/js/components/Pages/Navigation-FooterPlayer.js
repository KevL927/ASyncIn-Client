import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderQueue from '../Queue/RenderQueue';
import * as actions from '../../actions/actions';
import * as userActions from '../../actions/user-actions';
import {ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';


class NavigationFooterPlayer extends Component {
  
  updateServerQueue() {
		if(this.props.currentUser && this.props.queue.length !== 0) {
			this.props.dispatch(actions.updateQueue(this.props.currentUser.accessToken, this.props.currentUser.token, this.props.queue));
		}
	}

  logout(){
     this.props.dispatch(userActions.logout());
     hashHistory.push('/');
  }

  playMusicOrNot() {
    if(!this.props.currentListeningUrl && this.props.queue.length !== 0 && !this.props.shuffledQueue) {
      return playMusicFunc(this.props.queue[0].link);
    }
    if(!this.props.currentListeningUrl && this.props.shuffledQueue) {
      return playMusicFunc(this.props.shuffledQueue[0].link);
    }
    return playMusicFunc(this.props.currentListeningUrl);
  }
  
  renderQueueOrShuffled() {
    if(!this.props.shuffledQueue) {
      return this.props.queue;
    }  
    return this.props.shuffledQueue;
  }
  
  state={
    menuOpen: false
  }

  dropdownToggle(newValue){
      if (this._forceOpen){
          this.setState({ menuOpen: true });
          this._forceOpen = false;
      } else {
          this.setState({ menuOpen: newValue });
      }
  }
  menuItemClickedThatShouldntCloseDropdown(){
      this._forceOpen = true;
  }


  render() {
    return (
      <div>
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/search">Search</Link></li>
            <li><Link to="/dashboard/top">Explore Top Playlists</Link></li>
            <li><Link to="/dashboard/contact">Contact Us</Link></li>
            <li><Link to="/dashboard/settings">Account Settings</Link></li>
            <li onClick={this.logout.bind(this)} className="nav-li">Logout</li>
          </ul>
        </div>
        {this.props.children}
        {this.playMusicOrNot()}
        {this.updateServerQueue()}
        </div>
  
        <div id="Q-list">

        <ButtonToolbar>
          <SplitButton open={this.state.menuOpen} onToggle={val => this.dropdownToggle(val)} bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
          <MenuItem onClick={() => this.menuItemClickedThatShouldntCloseDropdown()}>
            <RenderQueue playlistObject={{tracks: this.renderQueueOrShuffled()}} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} error={this.props.error} feedback={this.props.feedback}/>
            </MenuItem>
          </SplitButton>
        </ButtonToolbar>
        </div>
        </div>

    );
  }
}

//export default NavigationBar;

export default connect(
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, queue, currentUser, shuffledQueue }) =>
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, queue, currentUser, shuffledQueue })
)(NavigationFooterPlayer);

//<RenderQueue playlistObject={{tracks: this.renderQueueOrShuffled()}} currentUser={this.props.currentUser} queue={this.props.queue} />
