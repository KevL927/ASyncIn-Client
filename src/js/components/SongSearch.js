import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import {Link} from 'react-router';


const trackIds = ['tracks from apis will go here'];

class SongSearch extends Component {
  onSubmit (event) {
        event.preventDefault();
    }
  render() {
    return (
      <div className="songSearch">
        <div className="songSearch-container">
          <form onSubmit={this.handleFormSubmit>
            <input type="text" name="search" placeholder="Search..">
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSumbit: function(title,content) {
      dispatch(fetchSearchedTrack(title, content));
    }
  };
}
export default connect(mapDispatchToProps)(SongSearch) ;