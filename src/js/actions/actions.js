import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

//*********************************************************************
//-----------------LOGIN/LOGOUT AND REGISTER ACTIONS ------------------
//*********************************************************************
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR');
export const registerRequest = (email, username, password) => dispatch => {
    console.log('in')
    return axios.post('https://asyncin.herokuapp.com/api/v1/users',{
    	"email": email,
    	"username": username,
    	"password": password
})
        .then(response => {
            
            dispatch(registerSuccess({response}));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(registerError(err));
            return false;
        });
};

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');
export const loginRequest = (email, password) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users/login/'+email, {
            auth: {
                username: email,
                password: password
            }
        },{headers: {'Content-Type': 'application/json'}})
        .then((response) => {

            dispatch(loginSuccess({response}));
          //  hashHistory.push('/dashboard');
           return {response: '200'}
        })
        .catch(err => {
            dispatch(loginError(err));
            return false;
        })
};

////////////////////////////////////SEARCHALL////////////////////////////////////////
export const searchAllSuccess = createAction('SEARCH_ALL_SUCCESS');
export const searchAllError = createAction('SEARCH_ALL_ERROR');
export const searchAll = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/search', {search: search}, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
            dispatch(searchAllSuccess(response));
            return { response };
        })
        .catch(err => {
            dispatch(searchAllError(err));
            return false;
        })
};


export let currentListeningUrl = createAction('CURRENT_LISTENING_URL', url => url);

//*********************************************************************
//-----------------PLAYLIST ACTIONS ------------------
//*********************************************************************
