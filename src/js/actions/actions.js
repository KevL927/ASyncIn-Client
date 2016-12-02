import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

//*********************************************************************
//-----------------LOGIN/LOGOUT AND REGISTER ACTIONS ------------------
//*********************************************************************
export const loginRequest = (username, password) => dispatch => {
    console.log("it worked!")
    return axios.get('https://asyncin.herokuapp.com', {
            auth: {
                username,
                password
            }
        })
        .then((response) => {

            dispatch(loginSuccess({ username, password }));
            hashHistory.push('/login');
            return { username, password };
        })
        .catch(err => {
            dispatch(loginError(err));
            return false;
        })
};


export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');

export const youtubeSearchSuccess = createAction('LOGIN_SEARCH_SUCCESS');
export const youtubeSearchError = createAction('LOGIN_SEARCH_ERROR');

export const searchYoutube = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/youtube', {search: search})
        .then((response) => {
            console.log(response);
            dispatch(youtubeSearchSuccess(response));
            hashHistory.push('/search');
            return { response };
        })
        .catch(err => {
            dispatch(youtubeSearchError(err));
            return false;
        })
};


