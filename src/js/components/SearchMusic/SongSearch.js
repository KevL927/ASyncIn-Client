import React, { Component } from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import SearchResult from './SearchResult';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import {Grid, Row, Col} from 'react-bootstrap';
import FaVimeo from 'react-icons/lib/fa/vimeo'
import FaSoundcloud from 'react-icons/lib/fa/soundcloud'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'

class SongSearch extends Component {
  state = {
    tempPlaylist: [],
    defaultCheckStatus: null,
    checkedYouTubeArr: [],
    checkedSoundCloudArr: [],
    checkedVimeoArr: [],
  }

  renderCheckedIndex(source, index) {
    if(source === "YouTube") {
      if (this.state.checkedYouTubeArr[index] === true) {
        return true;
      } else if(this.state.checkedYouTubeArr[index] === false) {
        return false;
      } else {
        return false;
      }
    }
    if(source === "Vimeo") {
      if (this.state.checkedVimeoArr[index] === true) {
        return true;
      } else if(this.state.checkedVimeoArr[index] === false) {
        return false;
      } else {
        return false;
      }
    }
    if(source === "SoundCloud") {
      if (this.state.checkedSoundCloudArr[index] === true) {
        return true;
      } else if(this.state.checkedSoundCloudArr[index] === false) {
        return false;
      } else {
        return false;
      }
    }
  }

  onSubmitClearTemp() {
    this.setState({checkedYouTubeArr: this.state.checkedYouTubeArr.map(() => {
      return false;
    }), checkedVimeoArr: this.state.checkedVimeoArr.map(() => {
      return false;
    }), checkedSoundCloudArr: this.state.checkedSoundCloudArr.map(() => {
      return false;
    }), tempPlaylist: []})
  }

  onSubmitSearch(event) {
    event.preventDefault();
    this.onSubmitClearTemp();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
  }
  onCheckInsert(track, index, event) {
    if(track.source === "YouTube") {
      let checked = this.state.checkedYouTubeArr;
      checked[index] = event.target.checked
      this.setState({checkedYouTubeArr: checked});

      if(this.state.checkedYouTubeArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
        this.setState({tempPlaylist: newPlaylist})
      } else if (this.state.checkedYouTubeArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
        this.setState({tempPlaylist: newPlaylist});
      }
    }
    if(track.source === "Vimeo") {
      let checked = this.state.checkedVimeoArr;
      checked[index] = event.target.checked
      this.setState({checkedVimeoArr: checked});

      if(this.state.checkedVimeoArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
        this.setState({tempPlaylist: newPlaylist})
      } else if(this.state.checkedVimeoArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
        this.setState({tempPlaylist: newPlaylist});
      }
    }
    if(track.source === "SoundCloud") {
      let checked = this.state.checkedSoundCloudArr;
      checked[index] = event.target.checked
      this.setState({checkedSoundCloudArr: checked});

      if(this.state.checkedSoundCloudArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, {$push: [track]});
        this.setState({tempPlaylist: newPlaylist})
      } else if(this.state.checkedSoundCloudArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, {$splice: [[index, 1]]});
        this.setState({tempPlaylist: newPlaylist});
      }
    }
  }

  onClickAddToQueue (track, event) {
      event.preventDefault();
      this.props.dispatch(actions.queue(track));
  }

  playTrackOnClick(url, event) {
    event.preventDefault();
    this.props.dispatch(actions.currentListeningUrl(url));
  }

  generateResult(resultArr) {
    let arr = [];
    if(!resultArr) {
      arr = <div></div>
    } else {
        arr = resultArr.map((track, index) => {
        return (
          <li key={index}>
            <input type="checkbox" name="searchResult" ref={track.link} id={track.source} onChange={this.onCheckInsert.bind(this, track, index)} checked={this.renderCheckedIndex(track.source, index)}>
            </input>
            <SearchResult track={track}/>
            <button onClick={this.onClickAddToQueue.bind(this, track)}>Add to Queue</button>
            <button onClick={this.playTrackOnClick.bind(this, track.link)}>Play Preview</button>
          </li>
        );
        })
    }
    return arr;
  }

  render() {
    return (
      <div id="songSearch-page">
        <form onSubmit={this.onSubmitSearch.bind(this)}>
          <input type="text" id="search-songs" name="search" ref="searchInput" placeholder="Search.." required/>
        </form>
        <AddPlaylist onSubmitClearTemp={this.onSubmitClearTemp.bind(this)} error={this.props.error} feedback={this.props.feedback} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist} />
          <div id="three_platforms">
              <Grid>
                <Row>
                
                  <Col md={4}>
                    <h1><FaYoutubePlay size={100} color='#bb0000'/></h1>
                    <div className="ASDF">
                      {this.generateResult(this.props.youtubeSearchedSongs)}
                      </div>
                  </Col>
                

                  <Col md={4}>
                    <h1><FaVimeo size={100} color='#4EBBFF'/></h1>
                    <div className="ASDF">
                    {this.generateResult(this.props.vimeoSearchedSongs)}
                    </div>
                  </Col>
                 
                  <Col md={4}>
                    <h1><FaSoundcloud size={100} color='#ff3a00'/></h1>
                    <div className="ASDF">
                    {this.generateResult(this.props.soundcloudSearchedSongs)}
                    </div>
                  </Col>
                  
                </Row>
              </Grid>
            </div>
  
          </div>
    )
  }
}

export default connect(({ youtubeSearchedSongs, soundcloudSearchedSongs, vimeoSearchedSongs, currentListeningUrl, error, feedback })=>({ youtubeSearchedSongs, soundcloudSearchedSongs, vimeoSearchedSongs, currentListeningUrl, error, feedback }))(SongSearch)