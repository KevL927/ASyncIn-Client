import ReactPlayer from 'react-player'
import React, { Component } from 'react'


class MusicPlayer extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
  }
}

export default MusicPlayer;