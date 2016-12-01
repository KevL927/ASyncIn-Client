import actions from '../actions/actions'
import { handleActions } from 'redux-actions';

const initialState = {
	isAuthenicated: false,
	currentUser:null,
	error: null,
	accessToken: null
};


export default handleActions ({
	[actions.registerError]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions.loginError]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions.logoutUserError]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},
	[actions. ]: (state, action) => {
		return [...state, error: action.payload];
	},

},
initialState)


//set up loading to be false and when loading put to true