import React, { Component } from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import SearchResult from './SearchResult';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

class SongSearch extends Component {
  state = {
    tempPlaylist: [],
    checkedYouTube: false
  

  }
  onSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }
  onCheckInsert(track, event) {
    if(this.refs[track.link].checked) {
      const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
      this.setState({tempPlaylist: newPlaylist})
    }
    if(this.refs[track.link].checked === false) {
      const index = this.state.tempPlaylist.indexOf(track)
      const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
      this.setState({tempPlaylist: newPlaylist})
    }
  }

  onCheckGroup(event) {
    if (this.refs.youtubeBox.checked) {
      this.setState({checkedYouTube: true})
    }
  }

  generateResult(resultArr) {
    let arr = [];
    if(!resultArr) {
      arr = <div></div>
    } else {
        arr = resultArr.map((track, index) => {
        return (
          <li key={index}>
            <input type="checkbox" name="searchResult" ref={track.link} id={track.source} onClick={this.onCheckInsert.bind(this, track)}></input>
            
            <SearchResult track={track}/>

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
    return (
      <div id="songSearch-page">
        <NavigationBar/>
          <div className="songSearch">
            <div className="songSearch-container">
              <form onSubmit={this.onSubmitSearch.bind(this)}>
                <input type="text" id="search-songs" name="search" ref="searchInput" placeholder="Search.."/>
              </form>
            </div>
              {this.playMusicOrNot()}
              <ul>
                <h1>Youtube</h1>
                <input type="checkbox" name="searchGroup" ref="youtubeBox" onClick={this.onCheckGroup.bind(this)} ></input>
                <ul>{this.generateResult(this.props.youtubeResults)}</ul>
                <h1>Vimeo</h1>
                <ul>{this.generateResult(this.props.vimeoResults)}</ul>
                <h1>SoundCloud</h1>
                <ul>{this.generateResult(this.props.soundcloudResults)}</ul>
              </ul>
              <AddPlaylist currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist}/>
          </div>
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