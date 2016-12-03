import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
// import MusicPlayer from './MusicPlayer';

class TestAction extends Component {
 
  render() {
   return <h1>Test Actions</h1>
}
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestAction) ;