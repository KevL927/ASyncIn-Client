import React, { Component } from 'react';
import play from '../../../play.png';
import {Link} from 'react-router';

class MainPage extends Component {
  onSubmit (event) {
        event.preventDefault();
  }
  
  render() {
    return (
      <div className="MainPage">
          <div className="MainPage-Header">
            <span className="title">Sync-In</span>
            <span id="about">Share Good Music™</span>
          </div>
          <div id="disc">
            <Link to="/login">
              <img src={play} className='image' alt="play"/> 
            </Link>
          </div>
      </div>
    );
  }
}

export default MainPage;