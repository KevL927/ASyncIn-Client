import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

class SongSearch extends Component {
  state = {
    tempPlaylist: []
  }
  onSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }

  onCheckInsert(track) {
    console.log('track', track);
    this.state.tempPlaylist.push(track);
    console.log('this.state', this.state);
  }

  generateResult(resultArr) {
    let arr = [];
    if(!resultArr) {
      arr = <div></div>
    } else {
        arr = resultArr.map((track, index) => {
        return (
          <li key={index}>
            <input type="checkbox" name="searchResult" value={index} onClick={this.onCheckInsert.bind(this, track)}></input>
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
    this.props.dispatch(actions.currentListeningUrl(url));
  }

  playMusicOrNot() {
    if(this.props.currentListeningUrl) {
     return <MusicPlayer url={this.props.currentListeningUrl} />
    }
    return <div>no music</div>
  }

  render() {
    console.log(this.state);
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

export default connect(mapStateToProps)(SongSearch) ;