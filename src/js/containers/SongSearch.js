import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {searchAll, currentListeningUrl} from '../actions/actions';
import {Link} from 'react-router';
import MusicPlayer from './MusicPlayer';

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
            <button onClick={this.playTrackOnClick.bind(this, track.link)}>click</button>
          </li>
        );
        })
    }
    return arr;
  }

  playTrackOnClick(url, event) {
    event.preventDefault();
    this.props.onClickPlayUrl(url);
  }

  playMusicOrNot() {
    if(this.props.currentListeningUrl) {
      console.log(this.props);
     return <MusicPlayer url={this.props.currentListeningUrl} />
    }
    return <div>no music</div>
  }

  render() {
    console.log(this.props)
    return (
      <div className="songSearch">
        <div className="songSearch-container">
          <form onSubmit={this.onSubmitSearch.bind(this)}>
            <input type="text" name="search" ref="searchInput" placeholder="Search.."/>
          </form>
        </div>
          {this.playMusicOrNot()}
          <ul>
            <h1>Youtube</h1>
            <ul>{this.generateResult(this.props.youtubeResults)}</ul>
            <h1>Vimeo</h1>
            <ul>{this.generateResult(this.props.vimeoResults)}</ul>
            <h1>SoundCloud</h1>
            <ul>{this.generateResult(this.props.soundcloudResults)}</ul>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    youtubeResults: state.youtubeSearchedSongs,
    soundcloudResults: state.soundcloudSearchedSongs,
    vimeoResults: state.vimeoSearchedSongs,
    currentListeningUrl: state.currentListeningUrl
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSearch: function(search) {
      dispatch(searchAll(search));
    },
    onClickPlayUrl: function (url) {
      dispatch(currentListeningUrl(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch) ;