import React from 'react';
import { Link } from 'react-router';

import play from './img/play.png';
import './styles.css';

export default () => {
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
};