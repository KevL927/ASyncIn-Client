import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Duration from './Duration'


class MusicPlayer extends Component {
	
	state = {
		playing: true,
		volume: 0.8,
		played: 0,
		loaded: 0,
		duration: 0
	}
	
	// load = url => {
	// 	this.setState({
	// 		played: 0,
	// 		loaded: 0
	// 	})
	// }
	
	playPause = () => {
		this.setState({ playing: !this.state.playing })
	}
	stop = () => {
		this.setState({ url: null, playing: false })
	}
	setVolume = e => {
		this.setState({ volume: parseFloat(e.target.value) })
	}
	onSeekMouseDown = e => {
		this.setState({ seeking: true })
	}
	onSeekChange = e => {
		this.setState({ played: parseFloat(e.target.value) })
	}
	onSeekMouseUp = e => {
		this.setState({ seeking: false })
		this.player.seekTo(parseFloat(e.target.value))
	}
	onProgress = state => {
		// We only want to update time slider if we are not currently seeking
		if (!this.state.seeking) {
		this.setState(state)
	}
	}
	onClickFullscreen = () => {
		screenfull.request(findDOMNode(this.player))
	}

	render() {
		const {
	      playing, volume,
	      played, loaded, duration,
	    } = this.state
	    const SEPARATOR = ' · ';
	    
		return (
	    	<footer id="react-player">
	    		<div id="video-pic-viewer">
		    		<ReactPlayer 
		    			ref={player => { this.player = player }}
	            		className='react-player'
	            		width={480}
		            	height={270}
		    			url={this.props.url} 
		    			playing={playing}
	            		volume={volume}
	            		onReady={() => console.log('onReady')}
	            		onStart={() => console.log('onStart')}
	            		onPlay={() => this.setState({ playing: true })}
	            		onPause={() => this.setState({ playing: false })}
	            		onBuffer={() => console.log('onBuffer')}
	            		onEnded={() => this.setState({ playing: false })}
	            		onError={e => console.log('onError', e)}
	            		onProgress={this.onProgress}
	            		onDuration={duration => this.setState({ duration })}
		    		/>
		    	</div>
		    	<div id="video-controller">
		    		<button onClick={this.stop}>Stop</button>
	                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
	                <button onClick={this.onClickFullscreen}>Fullscreen</button>
	            </div>
	            <div id="video-seek">
	            <h3>Seek</h3>
	            	<input
	                  type='range' min={0} max={1} step='any'
	                  value={played}
	                  onMouseDown={this.onSeekMouseDown}
	                  onChange={this.onSeekChange}
	                  onMouseUp={this.onSeekMouseUp}
                	/>
                </div>
                <div id="video-volume">
                <h3>Volume</h3>
                	<input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
            	</div>
	    	</footer>
	    );
	}
}

export default MusicPlayer;