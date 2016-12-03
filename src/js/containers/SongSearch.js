import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {searchAll} from '../actions/actions';
import {Link} from 'react-router';
import MusicPlayer from './MusicPlayer';

class SongSearch extends Component {
  state = {currentListeningUrl: null}

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
    this.setState({currentListeningUrl: url});
  }

  playMusicOrNot() {
    if(this.state.currentListeningUrl) {
      console.log(this.state);
     return <MusicPlayer url={this.state.currentListeningUrl} />
    }
    return <div>no music</div>
  }

  render() {
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