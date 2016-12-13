import React, { Component } from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import SearchResult from './SearchResult';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import {Grid, Row, Col, thumbnail} from 'react-bootstrap';
import FaVimeo from 'react-icons/lib/fa/vimeo'
import FaSoundcloud from 'react-icons/lib/fa/soundcloud'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'

class SongSearch extends Component {
  state = {
    tempPlaylist: [],

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
            <input type="checkbox" name="searchResult" ref={track.link} id={track.source} onClick={this.onCheckInsert.bind(this, track)}>

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
        <AddPlaylist error={this.props.error} feedback={this.props.feedback} currentUser={this.props.currentUser} userSavedPlaylists={this.props.userSavedPlaylists} newPlaylist={this.state.tempPlaylist} />
          <div id="three_platforms">
              <Grid>
                <Row>
                
                  <Col md={4}>
                    <h1><FaYoutubePlay size={100} color='#bb0000'/></h1>
                    <div className="ASDF">
                      {this.generateResult(this.props.youtubeResults)}
                      </div>
                  </Col>
                

                  <Col md={4}>
                    <h1><FaVimeo size={100} color='#4EBBFF'/></h1>
                    <div className="ASDF">
                    {this.generateResult(this.props.vimeoResults)}
                    </div>
                  </Col>
                 
                  <Col md={4}>
                    <h1><FaSoundcloud size={100} color='#ff3a00'/></h1>
                    <div className="ASDF">
                    {this.generateResult(this.props.soundcloudResults)}
                    </div>
                  </Col>
                  
                </Row>
              </Grid>
            </div>
  
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    youtubeResults: state.youtubeSearchedSongs,
    soundcloudResults: state.soundcloudSearchedSongs,
    vimeoResults: state.vimeoSearchedSongs,
    currentListeningUrl: state.currentListeningUrl,
    error: state.error,
    feedback: state.feedback
  }
}

export default connect(mapStateToProps)(SongSearch) ;