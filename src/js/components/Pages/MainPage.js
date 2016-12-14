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
            <span className="S">S</span>
            <span className="y">y</span>
            <span className="n">n</span>
            <span className="c">c</span>
            <span className="-">-</span>
            <span className="I">I</span>
            <span className="n">n</span>
            <span id="about"> The Ultimate Music Platform</span>
          </div>
              <Link to="/login">
                <img src={play} className='image' alt="play"/> 
              </Link>
      </div>
    );
  }
}

export default MainPage;

