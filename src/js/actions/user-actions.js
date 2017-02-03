import { createAction } from 'redux-actions';
import { hashHistory } from 'react-router';
import axios from 'axios';
import validator from 'validator';

export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR');
export const registerRequest = (email, username, password) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/v1/users',{
    	"email": email,
    	"username": username,
    	"password": password
        })
        .then(response => {
           dispatch(registerSuccess({response}));
           hashHistory.push('/login');
           return {response: '200'};
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
                password
            }
        },{headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
            dispatch(loginSuccess(response));
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('access_token', response.data.access_token);
            hashHistory.push('/dashboard?access_token=' + response.data.access_token +'&token='+ response.data.token);
           return {response: '200'};
        })
        .catch((error) => {
            dispatch(loginError(error));
            return false;
        });
};

export const logout = createAction('LOGOUT');

export const getCurrentUserSuccess = createAction('GET_CURRENT_USER_SUCCESS');
export const getCurrentUserError = createAction('GET_CURRENT_USER_ERROR');
export const getCurrentUser = (token, accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users/login_success/' + token + '?access_token=' + accessToken)
        .then((response) => {
            dispatch(getCurrentUserSuccess(response));
            sessionStorage.setItem('userId', response.data.user.userId);
            if(!validator.isEmail(token)) {
                sessionStorage.setItem('token', response.data.user.token);
                sessionStorage.setItem('access_token', response.data.user.accessToken);
            }
           return {response: '200'};
        })
        .catch(err => {
            dispatch(getCurrentUserError(err));
            return false;
        });
};

export const getAllUsersSuccess = createAction('GET_ALL_USERS_SUCCESS');
export const getAllUsersError = createAction('GET_ALL_USERS_ERROR');
export const getAllUsers = (accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken)
        .then((response) => {
            dispatch(getAllUsersSuccess(response));
            return { response };
        })
        .catch(err => {
            dispatch(getAllUsersError(err));
            return false;
        });
};

export const getUserSuccess = createAction('GET_USER_SUCCESS');
export const getUserError = createAction('GET_USER_ERROR');
export const getUser = (accessToken, token) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users/'+token+'?access_token=' + accessToken)
        .then((response) => {
            dispatch(getUserSuccess(response));
            return { response };
        })
        .catch(err => {
            dispatch(getUserError(err));
            return false;
        });
};

export const updateUsernameSuccess = createAction('UPDATE_USERNAME_SUCCESS');
export const updateUsernameError = createAction('UPDATE_USERNAME_ERROR');
export const updateUsername = (newUsername) => (dispatch, getState) => {
    let currentUsername = getState().currentUser.username;
    let accessToken = sessionStorage.access_token;
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {currentUsername, newUsername})
        .then(response => {
            dispatch(updateUsernameSuccess(response));
        })
        .catch(err => {
            dispatch(updateUsernameError(err));
            return false;
        });
};

export const updatePasswordSuccess = createAction('UPDATE_PASSWORD_SUCCESS');
export const updatePasswordError = createAction('UPDATE_PASSWORD_ERROR');
export const updatePassword = (currentPassword, newPassword) =>(dispatch, getState) => {
     let accessToken = sessionStorage.access_token;
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {currentPassword, newPassword})
        .then(response => {
            dispatch(updatePasswordSuccess(response));
        })
        .catch(err => {
            dispatch(updatePasswordError(err));
            return false;
        });
};

