import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from '../MusicPlayer/playMusicFunc';

class NavigationBar extends Component {
 
  render() {
    return (
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li><Link to="/home">Dashboard</Link></li>
            <li>Saved Playlists</li>
            <li><Link to="/home/top">Explore Playlists</Link></li>
            <li>Contact Us</li>
            <li>Logout</li>
          </ul>
        </div>
        {this.props.children}
        <div> {playMusicFunc(this.props.currentListeningUrl)}</div>
      </div>
    );
  }
}

// export default NavigationBar;

export default connect(
    ({ currentListeningUrl }) => ({ currentListeningUrl })
)(NavigationBar);