import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import RenderTracks from '../PlaylistPlayer/RenderTracks';

class MyPlaylistsDashboard extends Component {
	
	onClickRedirect(playlist, event){
	    this.props.dispatch(actions.currentListeningPlaylist(playlist));
	    //hashHistory.push('/myplaylist')	
	}
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div><button onClick={this.onClickRedirect.bind(this, playlist)}>{playlist.name}</button></div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}
	

	renderTracksOrNot(){
		if(this.props.currentListeningPlaylist){
			console.log('from userplaylistlist',this.props.currentListeningPlaylist)
			return <RenderTracks playlistObject={this.props.currentListeningPlaylist} />
		}
		else{
			return <div>No playlist selected</div>
		}
	}

	render() {
		return (
			<div id="UserPlaylist-page">
				<div className="UserPlaylist">
					<h1>My Saved Playlists</h1>
				<div className="UserPlaylist-container">
			     	{this.generateResult(this.props.userSavedPlaylists)}
			     	{this.renderTracksOrNot()}
				</div>
				</div>



	render() {
		return (
			<div className="UserPlaylist">
			
			<div className="UserPlaylist-container">
				<h2>My Saved Playlists</h2>
		     	{this.generateResult(this.props.userSavedPlaylists)}
			</div>

			</div>
		);
	}
}


export default connect(

    ({ currentListeningPlaylist, userSavedPlaylists}) => 
    ({ currentListeningPlaylist, userSavedPlaylists })
)(UserPlaylistList);

    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl }) => 
    ({ currentListeningPlaylist, userSavedPlaylists, currentListeningUrl })
)(MyPlaylistsDashboard);

