import * as actions from '../actions/actions'
import * as userActions from '../actions/user-actions'
import { handleActions } from 'redux-actions';

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
	currentListeningUrl: null,
	queue: [],
	shuffledQueue: null,
	otherUserProfile:null,
	favouritePlaylist:null
};

export default handleActions (
	{	
		[userActions.registerSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[userActions.registerError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[userActions.loginSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[userActions.loginError]: (state, action) => {
			return {...state, error: action.payload};
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
				return { ...state, queue: [ action.payload, ...state.queue ] };
			}
		},
		[actions.getUserPlaylistsSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[actions.getUserPlaylistsError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getOtherUserPlaylistSuccess]: (state, action) => {
			return {...state, otherUserPlaylist: action.payload.data};
		},
		[actions.getOtherUserPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.createPlaylistSuccess]: (state, action) => {
			let tempPlaylist = [ action.payload.data, ...state.userSavedPlaylists ];
			return {...state, userSavedPlaylists: tempPlaylist};
		},
		[actions.createPlaylistError]: (state, action) => {
			return {...state, error: action.payload.response.data.message};
		},
		[actions.updatePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[actions.updatePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.deletePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[actions.deletePlaylistError]: (state, action) => {
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
			return {...state, currentUser: action.payload.data};
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
		[actions.updateFavPlaylistSuccess]: (state, action) => {
			return {...state, currentUser: action.payload.data.user, favouritePlaylist: action.payload.data.user.favouritePlaylists};
		},
		[actions.updateFavPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getTopPlaylistSuccess]: (state, action) => {
			return {...state, topPlaylists: action.payload.data};
		},
		[actions.getTopPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
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
	},
	initialState
);