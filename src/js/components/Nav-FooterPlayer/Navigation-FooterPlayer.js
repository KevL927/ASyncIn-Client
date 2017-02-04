import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Tooltip, OverlayTrigger, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import FaHome from 'react-icons/lib/fa/home';
import FaSearch from 'react-icons/lib/fa/search';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaCog from 'react-icons/lib/fa/cog';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import MdLineWeight from 'react-icons/lib/md/line-weight';
import ScrollArea from 'react-scrollbar';

import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderQueue from '../Queue/RenderQueue';
import * as actions from '../../actions/actions';
import * as userActions from '../../actions/user-actions';
import './styles.css';

const tooltip_queue = (
  <Tooltip id="tooltip_queue"><strong>Queue List</strong></Tooltip>
);

class NavigationFooterPlayer extends Component {
  updateServerQueue() {
		if(this.props.currentUser && this.props.queue.length !== 0) {
			this.props.dispatch(actions.updateQueue(sessionStorage.access_token, sessionStorage.token, this.props.queue));
		}
	}

  logout(){
     this.props.dispatch(userActions.logout());
  }

  playMusicOrNot() {
    if(!this.props.currentListeningUrl && this.props.queue.length !== 0 && !this.props.shuffledQueue) {
      return (
        <div className="play-track">
          <div className="track-title">{this.props.queue[0].title}</div> 
          <div>{playMusicFunc(this.props.queue[0].link)}</div>
        </div>
      );
    }
    if(!this.props.currentListeningUrl && this.props.shuffledQueue) {
      return (
        <div className="play-track">
          <div className="track-title">
            {this.props.shuffledQueue[0].title}
          </div>
          <div>
            {this.playMusicFunc(this.props.shuffledQueue[0].link)}
          </div>
        </div>
      );
    }
    return (
      <div className="play-track">
        <div className="track-title">
          {this.props.currentListeningTitle}
        </div>
        <div>
          {playMusicFunc(this.props.currentListeningUrl)}
        </div>
      </div>
    );
  }
  
  renderQueueOrShuffled() {
    if(!this.props.shuffledQueue) {
      return this.props.queue;
    }  
    return this.props.shuffledQueue;
  }
  
  state = {
    menuOpen: false
  }

  dropdownToggle(newValue) {
      if (this.forceOpen){
          this.setState({ menuOpen: true });
          this.forceOpen = false;
      } else {
          this.setState({ menuOpen: newValue });
      }
  }
  
  menuItemClickedThatShouldntCloseDropdown() {
      this.forceOpen = true;
  }

  render() {
    return (
      <div>
        <div>
          <div className="NavigationBar">
            <ul className="NavUL">
              <li title="Home"><Link to="/dashboard"><FaHome size={30}/><span className="nav-label">Home</span></Link></li>
              <li title="Search"><Link to="/dashboard/search"><FaSearch size={30}/><span className="nav-label">Search</span></Link></li>
              <li title="Top Playlists"><Link to="/dashboard/top"><FaGlobe size={30}/><span className="nav-label">Top Playlists</span></Link></li>
              <li title="About Us"><Link to="/dashboard/contact"><FaEnvelope size={30}/><span className="nav-label">About Us</span></Link></li>
              <li className="right-side" title="Logout"><Link to="/" onClick={this.logout.bind(this)}><FaSignOut size={30}/><span className="nav-label">Logout</span></Link></li>
              <li className="right-side" title="Settings"><Link to="/dashboard/settings"><FaCog size={30}/><span className="nav-label">Settings</span></Link></li>
            </ul>
          </div>
        {this.props.children}
        {this.updateServerQueue()}
        </div>
        <footer id="react-player">
          <div id="Q-list">
            <ButtonToolbar>
              <OverlayTrigger placement="bottom" overlay={tooltip_queue}>
                <DropdownButton open={this.state.menuOpen} onToggle={val => this.dropdownToggle(val)} bsStyle="default" title={<MdLineWeight/>} noCaret dropup pullRight id="queue-list">
                  <MenuItem onClick={() => this.menuItemClickedThatShouldntCloseDropdown()}>
                    <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
                      <RenderQueue playlistObject={{tracks: this.renderQueueOrShuffled()}} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} error={this.props.error} feedback={this.props.feedback}/>
                    </ScrollArea>
                  </MenuItem>
                </DropdownButton>
              </OverlayTrigger>
            </ButtonToolbar>
          </div>
          {this.playMusicOrNot()}
        </footer>
      </div>
    );
  }
}

export default connect(
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, currentListeningTitle, queue, currentUser, shuffledQueue }) =>
    ({ userSavedPlaylists, error, feedback, currentListeningUrl, currentListeningTitle, queue, currentUser, shuffledQueue })
)(NavigationFooterPlayer);