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
    console.log('this.props.queue', this.props.queue)
    if(this.props.queue.length === 0) {
      return <div></div>
    }
    return playMusicFunc(this.props.queue[0].link);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/search">Search</Link></li>
            <li><Link to="/dashboard/top">Explore Top Playlists</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li onClick={this.logout.bind(this)}>Logout</li>
          </ul>
        </div>
        {this.props.children}
        <div>
          <div> {this.playMusicOrNot()}</div>
         <RenderTracks playlistObject={this.props.currentListeningPlaylist} />
        </div>
      </div>
    );
  }
}

// export default NavigationBar;

export default connect(
    ({ currentListeningUrl, currentListeningPlaylist, queue }) => ({ currentListeningUrl, currentListeningPlaylist, queue })
)(NavigationFooterPlayer);