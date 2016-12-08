import * as actions from '../actions/actions'
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
	currentUser:null, //contains accessToken, username, token(email), userId, favouritePlaylist 
	error: null,
	currentListeningUrl: null,
	currentListeningPlaylist: null,
	otherUserProfile:null,
	temporaryPlaylist:null
};

export default handleActions (
	{	
		[actions.registerSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[actions.registerError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.loginSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[actions.loginError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getCurrentUserSuccess]: (state, action) => {
			return {...state, currentUser:action.payload.data.user, userSavedPlaylists:action.payload.data.playlist, isAuthenicated:true};
		},
		[actions.getCurrentUserError]: (state, action) => {
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
		[actions.currentListeningPlaylist]: (state, action) => {
			return {...state, currentListeningPlaylist: action.payload}
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
			console.log(action.payload.data);
			return {...state, userSavedPlaylists: action.payload.data};
		},
		[actions.updatePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.deletePlaylistSuccess]: (state, action) => {
			return {...state, userSavedPlaylists: action.payload};
		},
		[actions.deletePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getAllUsersSuccess]: (state, action) => {
			return {...state, otherUsers: action.payload.data};
		},
		[actions.getAllUsersError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getUserSuccess]: (state, action) => {
			return {...state, otherUserProfile: action.payload.data};
		},
		[actions.getUserError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.updateUsernameSuccess]: (state, action) => {
			return {...state, currentUser: action.payload.data};
		},
		[actions.updateUsernameError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.updatePasswordSuccess]: (state, action) => {
			return {...state};
		},
		[actions.updatePasswordError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.updateFavouritePlaylistSuccess]: (state, action) => {
			return {...state, currentUser: action.payload.data.user, temporaryPlaylist: action.payload.data.playlist};
		},
		[actions.updateFavouritePlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.getTopPlaylistSuccess]: (state, action) => {
			return {...state, topPlaylists: action.payload.data};
		},
		[actions.getTopPlaylistError]: (state, action) => {
			return {...state, error: action.payload};
		}
	},
	initialState
);