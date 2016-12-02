import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {searchAll} from '../actions/actions';
// import {Link} from 'react-router';

class SongSearch extends Component {
  onSubmitSearch(event) {
        event.preventDefault();
        this.props.onSubmitSearch(this.refs.searchInput.value);
  }
  render() {
    return (
      <div className="songSearch">
        <div className="songSearch-container">
          <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.."/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    youtubeResults: state.youtubeSearchedSongs,
    soundcloudResults: state.soundcloudSearchedSongs,
    vimeoResults: state.vimeoSearchedSongs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSearch: function(search) {
      dispatch(searchAll(search));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch) ;