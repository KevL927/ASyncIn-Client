import React, { Component } from 'react';
//import {Link} from 'react-router';

class NavigationBar extends Component {
  onSubmit (event) {
        event.preventDefault();
    }
  render() {
    return (
      <div className="NavigationBar">
        <ul className="NavUL">
        	<li>Home</li>
        	<li>Saved Playlists</li>
        	<li>Explore Playlists</li>
        	<li>Contact Us</li>
        	<li>Logout</li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;