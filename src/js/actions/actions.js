import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

//*********************************************************************
//-----------------LOGIN/LOGOUT AND REGISTER ACTIONS ------------------
//*********************************************************************
export const registerError = createAction('REGISTER_ERROR');
export const registerRequest = (displayname,username, password) => dispatch => {
    return axios.post('https://polar-escarpment-86427.herokuapp.com/api/v1/users', { displayname, username, password })
        .then(function(response) {
            console.log(response);
            hashHistory.push('/register');
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');
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

////////////////////////////////////SEARCHALL////////////////////////////////////////
export const searchAllSuccess = createAction('SEARCH_ALL_SUCCESS');
export const searchAllError = createAction('SEARCH_ALL_ERROR');
export const searchAll = (search) => dispatch => {
    return axios.post('http://localhost:8080/api/search', {search: search}, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
            dispatch(searchAllSuccess(response));
            return { response };
        })
        .catch(err => {
            dispatch(searchAllError(err));
            return false;
        })
};

