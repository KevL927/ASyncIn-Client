import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { OverlayTrigger } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import FaVimeo from 'react-icons/lib/fa/vimeo';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import TiPlus from 'react-icons/lib/ti/plus';

import * as actions from '../../actions/actions';
import SearchResult from './SearchResult';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import { tooltip_add, tooltip_play, tooltip_playlist_add } from '../../utils/tooltips';

class SongSearch extends Component {
  state = {
    tempPlaylist: [],
    defaultCheckStatus: null,
    checkedYouTubeArr: [],
    checkedSoundCloudArr: [],
    checkedVimeoArr: []
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
    }), tempPlaylist: []});
  }

  onSubmitSearch(event) {
    event.preventDefault();
    this.onSubmitClearTemp();
    this.props.dispatch(actions.searchAll(this.refs.searchInput.value));
    this.refs.searchInput.value = "";
  }
  onCheckInsert(track, index, event) {
    if(track.source === "YouTube") {
      let checked = this.state.checkedYouTubeArr;
      checked[index] = event.target.checked;
      this.setState({ checkedYouTubeArr: checked });

      if(this.state.checkedYouTubeArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, { $push: [track] });
        this.setState({tempPlaylist: newPlaylist});
      } else if (this.state.checkedYouTubeArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, { $splice: [[index, 1]] });
        this.setState({ tempPlaylist: newPlaylist });
      }
    }
    if(track.source === "Vimeo") {
      let checked = this.state.checkedVimeoArr;
      checked[index] = event.target.checked;
      this.setState({ checkedVimeoArr: checked });

      if(this.state.checkedVimeoArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, { $push: [track] });
        this.setState({ tempPlaylist: newPlaylist });
      } else if(this.state.checkedVimeoArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, { $splice: [[index, 1]] });
        this.setState({ tempPlaylist: newPlaylist });
      }
    }
    if(track.source === "SoundCloud") {
      let checked = this.state.checkedSoundCloudArr;
      checked[index] = event.target.checked;
      this.setState({ checkedSoundCloudArr: checked });

      if(this.state.checkedSoundCloudArr[index] === true) {
        const newPlaylist = update(this.state.tempPlaylist, { $push: [track] });
        this.setState({ tempPlaylist: newPlaylist });
      } else if(this.state.checkedSoundCloudArr[index] === false) {
        const index = this.state.tempPlaylist.indexOf(track);
        const newPlaylist = update(this.state.tempPlaylist, { $splice: [[index, 1]] });
        this.setState({tempPlaylist: newPlaylist});
      }
    }
  }
  
  //when search results are unchecked, the results are passed down as a prop to AddPlaylist Component as a prop to hide
  showPlaylistBox() {
    if(this.state.tempPlaylist.length !== 0) {
      return 'block';
    } else {
      return 'none';
    }
  }
  
  onClickAddToQueue (track, event) {
      event.preventDefault();
      this.props.dispatch(actions.queue(track));
  }

  playTrackOnClick(track, event) {
    event.preventDefault();
    this.props.dispatch(actions.currentListeningUrl(track));
  }

  generateResult(resultArr) {
    let arr = [];
    if(!resultArr) {
      arr = <div></div>;
    } else {
        arr = resultArr.map((track, index) => {
          return (
            <li key={index}>
              <SearchResult track={track}/>
                <OverlayTrigger placement="left" overlay={tooltip_playlist_add}>
                  <input className="result-checkbox" type="checkbox" name="searchResult" ref={track.link} id={track.source} onChange={this.onCheckInsert.bind(this, track, index)} checked={this.renderCheckedIndex(track.source, index)}>
                  </input>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltip_play}>
                  <button className="blackColor" onClick={this.playTrackOnClick.bind(this, track)}><FaPlayCircle size={22} /></button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltip_add}>
                  <button className="blackColor" onClick={this.onClickAddToQueue.bind(this, track)}><TiPlus size={22}/></button>
                </OverlayTrigger>
            </li>
          );
        });
    }
    return arr;
  }

  render() {
    return (
      <div id="songSearch-page">
        <form onSubmit={this.onSubmitSearch.bind(this)}>
          <input type="text" id="search-songs" name="search" ref="searchInput" placeholder="Search.." required/>
        </form>
        <AddPlaylist onSubmitClearTemp={this.onSubmitClearTemp.bind(this)} error={this.props.error} feedback={this.props.feedback} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist} show={this.showPlaylistBox()} />
        <div id="three_platforms">
          <Grid>
            <Row>
              <Col md={4}>
                <h1 className="platform_icons"><FaYoutubePlay size={60} color='#bb0000'/></h1>
                <div className="result_scroll_box">
                  {this.generateResult(this.props.youtubeSearchedSongs)}
                </div>
              </Col>
              <Col md={4}>
                <h1 className="platform_icons"><FaVimeo size={60} color='#4EBBFF'/></h1>
                <div className="result_scroll_box">
                {this.generateResult(this.props.vimeoSearchedSongs)}
                </div>
              </Col>
              <Col md={4}>
                <h1 className="platform_icons"><FaSoundcloud size={60} color='#ff3a00'/></h1>
                <div className="result_scroll_box">
                {this.generateResult(this.props.soundcloudSearchedSongs)}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ youtubeSearchedSongs, soundcloudSearchedSongs, vimeoSearchedSongs, currentListeningUrl, error, feedback }) =>
  ({ youtubeSearchedSongs, soundcloudSearchedSongs, vimeoSearchedSongs, currentListeningUrl, error, feedback })
)(SongSearch);