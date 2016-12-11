import * as playlistActions from '../actions/playlist-actions'
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
			return {...state, userSavedPlaylists: tempPlaylist};
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
		}
	},
	initialState
);