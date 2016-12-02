import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {searchYoutube, searchSoundcloud, searchVimeo, searchAll} from '../actions/actions';
// import {Link} from 'react-router';

const SongSearch = React.createClass({
  getInitialState () {
    return {
      allResultsReturned: false
    }
  },
  changeState() {
    this.setState({
      allResultsReturned: !this.state.allResultsReturned
    });
  },
  // shouldComponentUpdate(newProps, newState) {
  //   console.log(newProps, newState);
  //   if(newProps.soundcloudResults !== []|| newProps.youtubeResults !== [] || newProps.vimeoResults !== []) {
  //     return false;
  //   }
  //   this.changeState();
  //   return true;
  // },
  // componentWillMount() {
  //   console.log('componentWillMount');
  // },
  //  componentDidMount() {
  //   console.log('componentDidMount');
  // },
  onSubmitSearch(event) {
        event.preventDefault();
        this.props.onSubmitSearch(this.refs.searchInput.value);
        this.changeState();
  },
  render() {
    console.log('this.props', this.props, 'this.state', this.state)

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
})

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
      // dispatch(searchYoutube(search));
      // dispatch(searchSoundcloud(search));
      // dispatch(searchVimeo(search));
      dispatch(searchAll(search));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch) ;