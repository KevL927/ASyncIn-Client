import * as actions from '../actions/actions'
import { handleActions } from 'redux-actions';

const initialState = {
	otherUsersPlaylists: [],
	userSavedPlaylists: [],
	youtubeSearchedSongs: null,
	vimeoSearchedSongs:null,
	soundcloudSearchedSongs:null,
	random: [],
	topPlaylists: null,
	isAuthenicated: false,
	currentUser:null, //contains accessToken, username, token(email), userId, favouritePlaylist 
	error: null
};

export default handleActions (
	{	
		[actions.registerError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.loginSuccess]: (state, action) => {
			console.log(action.payload);
			return {...state, currentUser:action.payload.data.user, userSavedPlaylists:action.payload.data.playlist ,isAuthenicated:true};
		},
		[actions.loginError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.searchAllSuccess]: (state, action) => {
			return {...state, youtubeSearchedSongs: action.payload.data.youtube, vimeoSearchedSongs: action.payload.data.vimeo, soundcloudSearchedSongs: action.payload.data.soundcloud}
		},
		[actions.searchAllError]: (state, action) => {
			return {...state, error: action.payload}
		}
	},
	initialState
);