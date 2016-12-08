import ReactPlayer from 'react-player';
import React, { Component } from 'react';


class MusicPlayer extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.url === this.props.url) {
			return false;
		}
		return true;
	}

	render() {
		return (
    	<div>
    		<ReactPlayer url={this.props.url} playing/>
    	</div>
    	);
	}
}

export default MusicPlayer;