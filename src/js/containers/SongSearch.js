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
  generateResult(resultArr) {
    let arr = [];
    if(!resultArr) {
      arr = <div></div>
    } else {
        arr = resultArr.map((track, index) => {
        return (
          <li key={index}>
            <div>{track.title}</div>
            <div>{track.link}</div>
            <div>{track.thumbnail}</div>
          </li>
        );
        })
    }
    return arr;
  }
  render() {
    return (

      <div className="songSearch">
        <div className="songSearch-container">
          <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.."/>
          </form>
          <ul>
            <h1>Youtube</h1>
            <ul>{this.generateResult(this.props.youtubeResults)}</ul>
            <h1>Vimeo</h1>
            <ul>{this.generateResult(this.props.vimeoResults)}</ul>
            <h1>SoundCloud</h1>
            <ul>{this.generateResult(this.props.soundcloudResults)}</ul>
          </ul>
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