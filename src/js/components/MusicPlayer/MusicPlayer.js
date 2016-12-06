import ReactPlayer from 'react-player'
import React, { Component } from 'react'


class MusicPlayer extends Component {
  render () {
    return (
    	<div>
    		<ReactPlayer url={this.props.url} playing/>
    	</div>
    )
  }
}

export default MusicPlayer;