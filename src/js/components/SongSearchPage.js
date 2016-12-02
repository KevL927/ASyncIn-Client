import React, { Component } from 'react';
import '../../App.css';
// import {Link} from 'react-router';
import SongSearch from '../containers/SongSearch'

class SongSearchPage extends Component {
  render() {
    return (
      <div className="musicPlayer">
        <div className="musicPlayer-container">
          <SongSearch/>
        </div>
      </div>
    );
  }
}

export default SongSearchPage;