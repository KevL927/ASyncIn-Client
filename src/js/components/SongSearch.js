import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {searchYoutube} from '../actions/actions';
// import {Link} from 'react-router';

class SongSearch extends Component {
  onSubmitSearch (event) {
        event.preventDefault();
        console.log(this.refs.searchInput.value);
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSearch: function(search) {
      dispatch(searchYoutube(search));
    }
  };
}
export default connect(null, mapDispatchToProps)(SongSearch) ;