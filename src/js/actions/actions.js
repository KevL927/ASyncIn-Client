import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

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