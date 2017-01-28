import React, { Component } from 'react';
import play from '../../../play.png';
import Beatles from '../../../pics/Beatles.jpg'
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
            <span className="y">Y</span>
            <span className="n">N</span>
            <span className="c">C</span>
            <span className="-">-</span>
            <span className="I">I</span>
            <span className="n">N</span>
            <span id="about"> The Ultimate Music Platform</span>
          </div>
          <div id="disc">
            <Link to="/login">
               Login Page
            </Link>
          </div>
            
        
      </div>
    );
  }
}

export default MainPage;

// <div id="artist_albums_container">
//           <img src={Beatles} className='artist_albums' alt="1"/>
//         </div>