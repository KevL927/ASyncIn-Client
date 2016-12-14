import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as playlistActions from '../../actions/playlist-actions';
import RenderSavedPlaylistTracks from '../PlaylistPlayer/RenderSavedPlaylistTracks';
import Collapse from 'react-collapse';
import update from 'react-addons-update';
import Feedback from '../Feedback';
import ScrollArea from 'react-scrollbar';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import ToggleButton from 'react-toggle-button';
import FaUnlock from 'react-icons/lib/fa/unlock';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';
import TiPlus from 'react-icons/lib/ti/plus';


const borderRadiusStyle = { borderRadius: 2 };

class MyPlaylistsDashboard extends Component {
	state = {
		isOpenedArray: [],
		editable:null
	}

	onClickAddToQueue(playlist, event){
	    this.props.dispatch(actions.queue(playlist.tracks));  
	}

	expandCollapse(arrIndex, event) {
		event.preventDefault();
		if (this.state.isOpenedArray.indexOf(arrIndex) === -1) {
			const tempOpenedArr = update(this.state.isOpenedArray, {$push: [arrIndex]});
      		this.setState({isOpenedArray: tempOpenedArr})
		} else {
			const index = this.state.isOpenedArray.indexOf(arrIndex)
			const tempOpenedArr = update(this.state.isOpenedArray, {$splice: [[index, 1]]});
			this.setState({isOpenedArray: tempOpenedArr});
		}
	}

	viewTracks(playlist) {
		if(playlist) {
		 	return <ul><RenderSavedPlaylistTracks currentUser={this.props.currentUser} playlistObject={playlist} /></ul>
		}
		return;
	}

	checkOpenedOrNot(index) {
		if (this.state.isOpenedArray.indexOf(index) !== -1) {
			return true;
		} else {
			return false;
		}
	}

	deletePlaylist(playlistObject, event){
		event.preventDefault();
		this.props.dispatch(playlistActions.deletePlaylist(playlistObject, sessionStorage.access_token))
	}
	
	editPlaylistName(playlistObject, event){
		event.preventDefault();
		this.setState({
			editable: playlistObject._id
		})
		return <div>{this.state.editable?<input contentEditable autoFocus ref="input" required/>:null }</div>
		
	}
	
	edit(playlistObject, event){
		event.preventDefault();
		if(this.refs.input.value !== "") {
			const updatedPlaylist = update(playlistObject, {name: {$set:this.refs.input.value}})
			this.props.dispatch(playlistActions.updatePlaylistName(updatedPlaylist, sessionStorage.access_token));
			this.props.dispatch(actions.clearError());
		}
		this.setState({
			editable: null
		})

	}

	isPublicTrueOrFalse(event, playlistObject) {
		let tempPlaylistObject = update(playlistObject, {isPublic: {$set: !playlistObject.isPublic}})
    	this.props.dispatch(playlistActions.updatePlaylist(tempPlaylistObject, sessionStorage.access_token));
	}

	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (

	      	
	        <li key={index} id="user-playlist-buttons-li">
	        	 {this.state.editable == playlist._id ? <form onSubmit={this.edit.bind(this, playlist)}>
	        	 <input type="text" autoFocus contentEditable onBlur={this.edit.bind(this, playlist)} ref="input" required/> 
	        	 </form>: <div>
	        	 
					<h4 onClick={this.expandCollapse.bind(this, index)} ref={index}>{playlist.name}     
					<FaAlignJustify/>
					</h4>
					</div> }
	          	 
		         <Collapse isOpened={this.checkOpenedOrNot(index)}>
		         	{this.viewTracks(playlist)}
		         	<div>

			         	

		         	<div id="playlist_toggle_div">

			        	 <ToggleButton
		                  inactiveLabel={<FaUnlockAlt/>}
		                  activeLabel={<FaUnlock/>}
		                  colors={{active: {
		                        base: 'rgb(0,207,0)'
		                      },
		                        inactive:{
		                        base: 'rgb(186,0,0)'
		                        }
		                    }}
		                   thumbStyle={ borderRadiusStyle }
		                   trackStyle={ borderRadiusStyle } 
		                   value={playlist.isPublic}
		                   onToggle={(isPublic) => {
		                   this.isPublicTrueOrFalse(this, playlist)
						}} />
						</div>
						<button className="user-playlist-buttons" onClick={this.onClickAddToQueue.bind(this, playlist)}><TiPlus class="isBold" size={18} /></button>
			        	 <button className="user-playlist-buttons" onClick={this.deletePlaylist.bind(this, playlist)}><FaTrash class="isBold" size={18} /></button>
			        	 <button className="user-playlist-buttons" onClick={this.editPlaylistName.bind(this, playlist)}><FaEdit class="isBold" size={18} /></button>
			        	 
					</div>
		         </Collapse>
	        </li>
	      
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
		
			<div id="UserPlaylist">
				<span id="my-saved-playlists">My Saved Playlists</span>
					<ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
						<div className="UserPlaylist-container">
							<div>{this.props.error ? <div><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><Feedback feedback="This playlist name already exists" /></div>:<div></div>}</div>
				     		{this.generateResult(this.props.userSavedPlaylists)} 
						</div>
					</ScrollArea>
			</div>
			
		);
	}
}



export default connect(
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl, error }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl, error })
)(MyPlaylistsDashboard);




