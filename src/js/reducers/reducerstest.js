import actions from '../actions/actions'
import loginSuccess from './actions/actions'
import { handleActions } from 'redux-actions';

const initialState = {
	otherUsersPlaylist: [],
	userPlaylist: [],
	searchedSongs: [],
	random: [],
	top3: [],
	tracks: {},
	isAuthenicated: false,
	currentUser:null,
	error: null,
	accessToken: null
};


export default handleActions ({
	// [actions.registerError]: (state, action) => {
	// 	return {...state, error: "This is an error"};
	// },
	[actions.loginSuccess]: (state, action) => {
		return {...state, isAuthenicated:true};
	},
	[actions.loginError]: (state, action) => {
		return {...state, error: action.payload};
	}
// 	[actions.fetchPlaylistError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchPlaylistSuccess]: (state, action) => {
// 		return {...state, userPlaylist: action.payload};
// 	},
// 	[actions.postPlaylistError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.postPlaylistSuccess]: (state, action) => {
// 		return {...state, playlistTitle: action.payloadTitle};
// 	},
// 	[actions.editPlaylistError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.editPlaylistSuccess]: (state, action) => {
// 		return {newState};
// 	},
// 	[actions.deletePlaylistError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.deletePlaylistSuccess]: (state, action) => {
// 		return {newState};
// 	},
// 	[actions.fetchTrackError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchTrackSuccess]: (state, action) => {
// 		return {...state, tracks: {action.payload}}
// 	},
// 	[actions.addTrackError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.addTrackSuccess]: (state, action) => {
// 		return {...state, trackId: action.payloadtrackId};
// 	},
// 	[actions.deleteTrackError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.deleteTrackSuccess]: (state, action) => {
// 		return {...state, newState};
// 	},
// 	[actions.fetchSearchedTrackError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchSearchedTrackSuccess]: (state, action) => {
// 		return {...state, searchedSongs: action.payload};
// 	},
// 	[actions.addSearchedTrackError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.addSearchedTrackSuccess]: (state, action) => {
// 		return {...state, playlist: action.payloadContent };
// 	},
// 	[actions.fetchOtherUsersPlaylistError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchOtherUsersPlaylistSuccess]: (state, action) => {
// 		return {...state, otherUsersPlaylist: action.payload};
// 	},
// 	[actions.addOtherUsersTracksError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.addOtherUsersTracksSuccess]: (state, action) => {
// 		return {...state, playlist: action.payloadContent};
// 	},
// 	[actions.fetchRandomPlaylistsError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchRandomPlaylistsSuccess]: (state, action) => {
// 		return {...state, random: action.payload};
// 	},
// 	[actions.fetchTopThreePlaylistsError]: (state, action) => {
// 		return {...state, error: action.payload};
// 	},
// 	[actions.fetchTopThreePlaylistsSuccess]: (state, action) => {
// 		return {...state, top3: action.payload};
// 	}


},
initialState)


//set up loading to be false and when loading put to true