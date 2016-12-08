import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from './MusicPlayer/playMusicFunc';

class NavigationBar extends Component {
  onSubmit (event) {
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li>Home</li>
            <li>Saved Playlists</li>
            <li><Link to="topplaylists">Explore Playlists</Link></li>
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