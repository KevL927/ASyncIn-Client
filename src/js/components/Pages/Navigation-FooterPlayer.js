import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderQueue from '../Queue/RenderQueue';
import * as actions from '../../actions/actions';
import * as userActions from '../../actions/user-actions';
import {ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';
import FaHome from 'react-icons/lib/fa/home'
import FaSearch from 'react-icons/lib/fa/search'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaCog from 'react-icons/lib/fa/cog'


class NavigationFooterPlayer extends Component {
  
  updateServerQueue() {
		if(this.props.currentUser && this.props.queue.length !== 0) {
			this.props.dispatch(actions.updateQueue(sessionStorage.access_token, sessionStorage.token, this.props.queue));
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
      if (this.forceOpen){
          this.setState({ menuOpen: true });
          this.forceOpen = false;
      } else {
          this.setState({ menuOpen: newValue });
      }
  }
  menuItemClickedThatShouldntCloseDropdown(){
      this.forceOpen = true;
  }

  render() {
    return (
      <div>
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li><Link to="/dashboard"><FaHome size={30}/></Link></li>
            <li><Link to="/dashboard/search"><FaSearch size={30}/></Link></li>
            <li><Link to="/dashboard/top"><FaGlobe size={30}/></Link></li>
            <li><Link to="/dashboard/settings"><FaCog size={30}/></Link></li>
            <li><Link to="/dashboard/contact"><FaEnvelope size={30}/></Link></li>
            <li><a onClick={this.logout.bind(this)}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        {this.props.children}
        
        {this.updateServerQueue()}
        </div>
        <footer id="react-player">
        {this.playMusicOrNot()}

        <div id="Q-list">

        <ButtonToolbar>
          <SplitButton open={this.state.menuOpen} onToggle={val => this.dropdownToggle(val)} bsStyle="primary" title="Song Queue" dropup pullRight id="split-button-dropup-pull-right">
          <MenuItem onClick={() => this.menuItemClickedThatShouldntCloseDropdown()}>
            <RenderQueue playlistObject={{tracks: this.renderQueueOrShuffled()}} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} error={this.props.error} feedback={this.props.feedback}/>
            </MenuItem>
          </SplitButton>
        </ButtonToolbar>
        </div>
        </footer>
        </div>


    );
  }
}


export default connect(
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, queue, currentUser, shuffledQueue }) =>
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, queue, currentUser, shuffledQueue })
)(NavigationFooterPlayer);