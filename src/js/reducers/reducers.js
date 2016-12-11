import { combineReducers } from 'redux';
import * as userReducers from './user-reducers';
import * as playlistReducers from './playlist-reducers'


export default combineReducers ({
		userReducers : userReducers,
		playlistReducers : playlistReducers
	});