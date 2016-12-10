import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderTracks from '../PlaylistPlayer/RenderTracks';
import * as actions from '../../actions/actions';


class NavigationFooterPlayer extends Component {

 logout(){
   this.props.dispatch(actions.logout());
   hashHistory.push('/');
 }

  playMusicOrNot() {
    if(!this.props.currentListeningUrl && this.props.queue.length !== 0 && !this.props.shuffledQueue) {
      return playMusicFunc(this.props.queue[0].link);
    }
    if(this.props.shuffledQueue) {
      return playMusicFunc(this.props.shuffledQueue[0].link);
    }
    return playMusicFunc(this.props.currentListeningUrl);
  }

  render() {
    console.log('inside render ',this.props.shuffledQueue)
    return (
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li className="nav-li"><Link to="/dashboard">Dashboard</Link></li>
            <li className="nav-li"><Link to="/dashboard/search">Search</Link></li>
            <li className="nav-li"><Link to="/dashboard/top">Explore Top Playlists</Link></li>
            <li className="nav-li"><Link to="/contact">Contact Us</Link></li>
            <li onClick={this.logout.bind(this)} className="nav-li">Logout</li>
          </ul>
        </div>
        {this.props.children}
        {this.playMusicOrNot()}
        <div>
        <RenderTracks playlistObject={{tracks: this.props.queue}} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
}

// export default NavigationBar;

export default connect(
    ({ currentListeningUrl, queue, currentUser, shuffledQueue }) =>
    ({ currentListeningUrl, queue, currentUser, shuffledQueue })
)(NavigationFooterPlayer);
