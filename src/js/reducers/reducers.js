import * as actions from '../actions/actions'
import { handleActions } from 'redux-actions';

const initialState = {
	otherUsersPlaylist: [],
	userPlaylist: [],
	youtubeSearchedSongs: [],
	vimeoSearchedSongs:[],
	soundcloudSearchedSongs:[],
	random: [],
	top3: [],
	tracks: {},
	isAuthenicated: false,
	currentUser:null,
	error: null,
	accessToken: null
};

export default handleActions (
	{
		[actions.loginSuccess]: (state, action) => {
			return {...state, isAuthenicated:true};
		},
		[actions.loginError]: (state, action) => {
			return {...state, error: action.payload};
		},
		[actions.searchYoutubeSuccess]: (state, action) => {
			return {...state, youtubeSearchedSongs: action.payload};
		},
		[actions.searchYoutubeError]: (state, action) => {
			return {...state, error: action.payload};
		},
	},
	initialState
);