import * as actions from '../actions/actions'
import { handleActions } from 'redux-actions';

const initialState = {
	otherUsersPlaylists: null,
	userSavedPlaylists: null,
	youtubeSearchedSongs: null,
	vimeoSearchedSongs:null,
	soundcloudSearchedSongs:null,
	random: [],
	topPlaylists: null,
	isAuthenicated: false,
	currentUser:null, //contains accessToken, username, token(email), userId, favouritePlaylist 
	error: null,
	newPlaylist: null,
	currentListeningUrl: null
};

export default handleActions (
	{	
		[actions.registerError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.loginSuccess]: (state, action) => {
			return {...state, currentUser:action.payload.data.user, userSavedPlaylists:action.payload.data.playlist ,isAuthenicated:true};
		},
		[actions.loginError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.registerSuccess]: (state, action) => {
			return {...state, currentUser:action.payload.data.user, userSavedPlaylists:action.payload.data.playlist ,isAuthenicated:true};
		},
		[actions.registerError]: (state, action) => {
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
		[actions.getUserPlaylistsSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[actions.getUserPlaylistsError]: (state, action) => {
			return {...state, error: action.payload};
		}
	},
	initialState
);