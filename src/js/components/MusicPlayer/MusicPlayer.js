import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Duration from './Duration';
import * as actions from '../../actions/actions';
import playMusicFunc from '../MusicPlayer/playMusicFunc';


class MusicPlayer extends Component {
	
    // componentWillReceiveProps(nextProps) {
    //   this.props.url !== nextProps.url // Check if it's a new user, you can also use some unique, like the ID
    // }  
	
	state = {
		playing: false,
		volume: 0.8,
		played: 0,
		loaded: 0,
		duration: 0,
		currentPlayingIndexInQueue: 1
	}
	
	playPause = () => {
		this.setState({ playing: !this.state.playing })
	}
	next = () => {
		if(this.props.queue.length <= this.state.currentPlayingIndexInQueue) {
			return console.log('no more tracks on queue');
		}
		this.setState({ currentPlayingIndexInQueue: this.state.currentPlayingIndexInQueue + 1 })
		return this.props.dispatch(actions.currentListeningUrl(this.props.queue[this.state.currentPlayingIndexInQueue].link));
	}
	prev = () => {
		if(this.state.currentPlayingIndexInQueue <= 0) {
			return console.log('no more tracks on queue');
		}
		this.setState({ currentPlayingIndexInQueue: this.state.currentPlayingIndexInQueue - 1 })
		return this.props.dispatch(actions.currentListeningUrl(this.props.queue[this.state.currentPlayingIndexInQueue].link));
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
	      played, duration,
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
		    	<div id="video-controller-1">
	                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
	                <button onClick={this.onClickFullscreen}>Fullscreen</button>
	            </div>
	            <div id="video-controller-2">
	            	<button onClick={this.prev}>Prev</button>
		    		<button onClick={this.next}>Next</button>
	                <button onClick={this.shuffle}>Fullscreen</button>
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
                	<Duration seconds={duration * played} /> / <Duration seconds={duration} />
                </div>
                <div id="video-volume">
                <h3>Volume</h3>
                	<input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
            	</div>
	    	</footer>
	    );
	}
}

export default connect(
  ({ queue }) => 
  ({ queue })
)(MusicPlayer);