import * as actions from '../actions/actions'
import * as userActions from '../actions/user-actions'
import * as playlistActions from '../actions/playlist-actions'
import { handleActions } from 'redux-actions';
import update from 'react-addons-update';

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
	queue: [],
	shuffledQueue: null,
	otherUserProfile:null,
	favouritePlaylist:null,
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
			if(action.payload.message == "Request failed with status code 401"){
			return {...state, error: "Incorrect username or password"};
			}
			return {...state, error: action.payload.message};
			
		},
		[userActions.logout]: (state, action) => {
			return {...state, initialState};
		},
		[userActions.getCurrentUserSuccess]: (state, action) => {
			return {...state, currentUser:action.payload.data.user, favouritePlaylist:action.payload.data.user.favouritePlaylists, userSavedPlaylists:action.payload.data.playlist, isAuthenicated:true, queue: action.payload.data.user.queue};
		},
		[userActions.getCurrentUserError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[userActions.getAllUsersSuccess]: (state, action) => {
			return {...state, otherUsers: action.payload.data};
		},
		[userActions.getAllUsersError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[userActions.getUserSuccess]: (state, action) => {
			return {...state, otherUserProfile: action.payload.data};
		},
		[userActions.getUserError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[userActions.updateUsernameSuccess]: (state, action) => {
			let tempUserObject = update(state.currentUser, { username: { $set : action.payload.data.username } })
			return {...state, currentUser: tempUserObject};
		},
		[userActions.updateUsernameError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[userActions.updatePasswordSuccess]: (state, action) => {
			return {...state};
		},
		[userActions.updatePasswordError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.searchAllSuccess]: (state, action) => {
			return {...state, youtubeSearchedSongs: action.payload.data.youtube, vimeoSearchedSongs: action.payload.data.vimeo, soundcloudSearchedSongs: action.payload.data.soundcloud}
		},
		[actions.searchAllError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.currentListeningUrl]: (state, action) => {
			return {...state, currentListeningUrl: action.payload}
		},
		[actions.queue]: (state, action) => {
			if (Array.isArray(action.payload)) {
				return { ...state, queue: [ ...state.queue, ...action.payload ] };
			} else {
				return { ...state, queue: [ ...state.queue, action.payload ] };
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
			return {...state, error: action.payload};
		},
		[playlistActions.getOtherUserPlaylistSuccess]: (state, action) => {
			return {...state, otherUserPlaylist: action.payload.data};
		},
		[playlistActions.getOtherUserPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[playlistActions.createPlaylistSuccess]: (state, action) => {
			let tempPlaylist = [ action.payload.data, ...state.userSavedPlaylists ];
			return {...state, userSavedPlaylists: tempPlaylist, feedback: 'Playlist successfully added'};
		},
		[playlistActions.createPlaylistError]: (state, action) => {
			return {...state, error: action.payload.response.data.message};
		},
		[playlistActions.updatePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[playlistActions.updatePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[playlistActions.deletePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[playlistActions.deletePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[playlistActions.updateFavPlaylistSuccess]: (state, action) => {
			return {...state, currentUser: action.payload.data.user, favouritePlaylist: action.payload.data.user.favouritePlaylists};
		},
		[playlistActions.updateFavPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[playlistActions.getTopPlaylistSuccess]: (state, action) => {
			return {...state, topPlaylists: action.payload.data};
		},
		[playlistActions.getTopPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		}
	},
	initialState
);