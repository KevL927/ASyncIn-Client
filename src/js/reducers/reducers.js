import { handleActions } from 'redux-actions';
import update from 'react-addons-update';

import * as actions from '../actions/actions';
import * as userActions from '../actions/user-actions';
import * as playlistActions from '../actions/playlist-actions';

const initialState = {
	otherUserPlaylist: null,
	otherUsers:null,
	userSavedPlaylists: null,
	youtubeSearchedSongs: null,
	vimeoSearchedSongs:null,
	soundcloudSearchedSongs:null,
	random: [],
	topPlaylists: null,
	isAuthenicated: false,
	currentUser:null, 
	error: null,
	feedback: null,
	currentListeningUrl: null,
	currentListeningTitle: null,
	queue: [],
	shuffledQueue: null,
	otherUserProfile: null,
	favouritePlaylist: null,
	updatedPlaylistIndex: null,
	playing: false
};

export default handleActions (
	{	
		[userActions.registerSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[userActions.registerError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[userActions.loginSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[userActions.loginError]: (state, action) => {
			if(action.payload.message === "Request failed with status code 401"){
			return {...state, error: "Incorrect username or password"};
			}
			return {...state, error: action.payload.message};
		},
		[userActions.logout]: (state, action) => {
			return {initialState};
		},
		[userActions.getCurrentUserSuccess]: (state, action) => {
			return {...state, currentUser:action.payload.data.user, favouritePlaylist:action.payload.data.user.favouritePlaylists, userSavedPlaylists:action.payload.data.playlist, isAuthenicated:true, queue: action.payload.data.user.queue};
		},
		[userActions.getCurrentUserError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[userActions.getAllUsersSuccess]: (state, action) => {
			return {...state, otherUsers: action.payload.data};
		},
		[userActions.getAllUsersError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[userActions.getUserSuccess]: (state, action) => {
			return {...state, otherUserProfile: action.payload.data};
		},
		[userActions.getUserError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[userActions.updateUsernameSuccess]: (state, action) => {
			let tempUserObject = update(state.currentUser, { username: { $set : action.payload.data.username } })
			return {...state, currentUser: tempUserObject, feedback:"Your username has been updated"};
		},
		[userActions.updateUsernameError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[userActions.updatePasswordSuccess]: (state, action) => {
			return {...state,feedback:"Your password has been successfully updated"};
		},
		[userActions.updatePasswordError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[actions.searchAllSuccess]: (state, action) => {
			return {...state, youtubeSearchedSongs: action.payload.data.youtube, vimeoSearchedSongs: action.payload.data.vimeo, soundcloudSearchedSongs: action.payload.data.soundcloud}
		},
		[actions.searchAllError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[actions.currentListeningUrl]: (state, action) => {
			return {...state, currentListeningUrl: action.payload.link, currentListeningTitle: action.payload.title, playing: true}
		},
		[actions.playSong]: (state, action) => {
			return {...state, playing: true}
		},
		[actions.pauseSong]: (state, action) => {
			return {...state, playing: false}
		},
		[actions.queue]: (state, action) => {
			if (Array.isArray(action.payload)) {
				return { ...state, queue: [ ...state.queue, ...action.payload ] };
			} else {
				return { ...state, queue: [ ...state.queue, action.payload ] };
			}
		},
		[actions.moveTrackInQueue]: (state, action) => {
			let direction = action.payload.direction,
				trackIndex = action.payload.trackIndex,
				queue = state.queue
			if(direction === 'up') {
				if(trackIndex === 0) {
            		return { ...state };
        		}
    			let newQueueOrder = [
    								...queue.slice(0, trackIndex-1),
		                            queue[trackIndex],
		                            queue[trackIndex-1],
		                            ...queue.slice(trackIndex+1)
		                            ]
			                            
				return { ...state, queue: newQueueOrder };
			}
			if(direction === 'down') {
				if(trackIndex >= queue.length-1) {
    				return { ...state };
				}
				let newQueueOrder = [ 
									...queue.slice(0, trackIndex),
                    				queue[trackIndex+1],
                    				queue[trackIndex],
                    				...queue.slice(trackIndex+2)
                    				]
                      
				return { ...state, queue: newQueueOrder };
			}
		},
		[actions.moveTrackInPlaylist]: (state, action) => {
			let direction = action.payload.direction,
				trackIndex = action.payload.trackIndex,
				playlistIndex = action.payload.playlistIndex,
				playlist = state.userSavedPlaylists[action.payload.playlistIndex].tracks;

			if(direction === 'up') {
				if(trackIndex === 0) {
            		return { ...state };
        		}
    			let newPlaylistOrder = [
	    								...playlist.slice(0, trackIndex-1),
			                            playlist[trackIndex],
			                            playlist[trackIndex-1],
			                            ...playlist.slice(trackIndex+1)
			                            ]
		                            
			    let newUserSavedPlaylist = update(state.userSavedPlaylists[playlistIndex], { tracks: { $set: newPlaylistOrder } });
			    let newUserSavedPlaylists = state.userSavedPlaylists.map((playlist, index) => {
			    	if(index === action.payload.playlistIndex) {
			    		return newUserSavedPlaylist
			    	}
			    	return playlist;
			    })
				return { ...state, userSavedPlaylists: newUserSavedPlaylists, updatedPlaylistIndex: playlistIndex };
			}
			if(direction === 'down') {
				if(trackIndex >= playlist.length-1) {
    				return { ...state };
				}
				let newPlaylistOrder = [ 
										...playlist.slice(0, trackIndex),
	                    				playlist[trackIndex+1],
	                    				playlist[trackIndex],
	                    				...playlist.slice(trackIndex+2)
	                    				]
                      
			    let newUserSavedPlaylist = update(state.userSavedPlaylists[action.payload.playlistIndex], { tracks: { $set: newPlaylistOrder } });
			    let newUserSavedPlaylists = state.userSavedPlaylists.map((playlist, index) => {
			    	if(index === action.payload.playlistIndex) {
			    		return newUserSavedPlaylist
			    	}
			    	return playlist;
			    })
				return { ...state, userSavedPlaylists: newUserSavedPlaylists, updatedPlaylistIndex: playlistIndex };
			}
		},
		[actions.deleteQueueTrack]: (state, action) => {
			const index = action.payload			
			let newQueue = update(state.queue, {$splice: [[index, 1]]});
			return { ...state, queue: newQueue};
		},
		[actions.updateQueueSuccess]: (state, action) => {
			return {...state};
		},
		[actions.updateQueueError]: (state, action) => {
			return {...state};
		},
		[actions.shuffledQueue]: (state, action) => {
			return {...state, shuffledQueue: action.payload};
		},
		[actions.clearUpdatedPlaylistIndex]: (state, action) => {
			return { ...state, updatedPlaylistIndex: null};
		},
		[actions.clearError]: (state, action) => {
			return {...state, error: null}
		},
		[actions.clearFeedback]: (state, action) => {
			return {...state, feedback: null}
		},
		[playlistActions.getUserPlaylistsSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[playlistActions.getUserPlaylistsError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[playlistActions.getOtherUserPlaylistSuccess]: (state, action) => {
			return {...state, otherUserPlaylist: action.payload.data};
		},
		[playlistActions.getOtherUserPlaylistError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[playlistActions.createPlaylistSuccess]: (state, action) => {
			let tempPlaylist = [ action.payload.data, ...state.userSavedPlaylists ];
			return {...state, userSavedPlaylists: tempPlaylist, feedback: 'Playlist successfully added'};
		},
		[playlistActions.createPlaylistError]: (state, action) => {
			return {...state, error: action.payload.response.data.message};
		},
		[playlistActions.updatePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data, feedback:"The tracks have been successfully added"};
		},
		[playlistActions.updatePlaylistError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[playlistActions.deletePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[playlistActions.deletePlaylistError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[playlistActions.updateFavPlaylistSuccess]: (state, action) => {
			return {...state, currentUser: action.payload.data.user, favouritePlaylist: action.payload.data.user.favouritePlaylists};
		},
		[playlistActions.updateFavPlaylistError]: (state, action) => {
			return {...state, error: action.payload.message};
		},
		[playlistActions.getTopPlaylistSuccess]: (state, action) => {
			return {...state, topPlaylists: action.payload.data};
		},
		[playlistActions.getTopPlaylistError]: (state, action) => {
			return {...state, error: action.payload.message};
		}
	},
	initialState
);