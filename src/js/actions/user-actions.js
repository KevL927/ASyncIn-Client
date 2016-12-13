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
              console.log(response)
           hashHistory.push('/dashboard?access_token=' + response.data.user.accessToken +'&token='+ response.data.user.token);
           return {response: '200'}
         
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
                //if email was username, then you can do auth: {username, password}
                username: email, 
                password
            }
        },{headers: {'Content-Type': 'application/json'}})
        .then((response) => {
            dispatch(loginSuccess(response));
            hashHistory.push('/dashboard?access_token=' + response.data.access_token +'&token='+ response.data.token)
           return {response: '200'}
        })
        .catch(err => {
            dispatch(loginError(err));
            return false;
        })
};

export const logout = createAction('LOGOUT');


export const getCurrentUserSuccess = createAction('GET_CURRENT_USER_SUCCESS');
export const getCurrentUserError = createAction('GET_CURRENT_USER_ERROR');
export const getCurrentUser = (token, accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users/login_success/' + token + '?access_token=' + accessToken)
        .then((response) => {
            console.log('in user actions')
            dispatch(getCurrentUserSuccess(response));
           return {response: '200'}
        })
        .catch(err => {
            dispatch(getCurrentUserError(err));
            return false;
        })
};

//*********************************************************************
//-----------------GET ALL USERS ------------------
//*********************************************************************

export const getAllUsersSuccess = createAction('GET_ALL_USERS_SUCCESS');
export const getAllUsersError = createAction('GET_ALL_USERS_ERROR');
export const getAllUsers = (accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken)
        .then((response) => {
            dispatch(getAllUsersSuccess(response));
            return { response }
        })
        .catch(err => {
            dispatch(getAllUsersError(err));
            return false;
        })
}

//*********************************************************************
//-----------------GET user's profile ------------------
//*********************************************************************

export const getUserSuccess = createAction('GET_USER_SUCCESS');
export const getUserError = createAction('GET_USER_ERROR');
export const getUser = (accessToken, token) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/users/'+token+'?access_token=' + accessToken)
        .then((response) => {
            dispatch(getUserSuccess(response));
            return { response }
        })
        .catch(err => {
            dispatch(getUserError(err));
            return false;
        })
}

//*********************************************************************
//-----------------UPDATE username and Password ------------------
//*********************************************************************

export const updateUsernameSuccess = createAction('UPDATE_USERNAME_SUCCESS');
export const updateUsernameError = createAction('UPDATE_USERNAME_ERROR');
export const updateUsername = (newUsername) => (dispatch, getState) => {
    console.log(getState());
    let currentUsername = getState().currentUser.username;
    let accessToken = getState().currentUser.accessToken;
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {currentUsername: currentUsername, newUsername: newUsername})
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
     let accessToken = getState().currentUser.accessToken;
     console.log(getState());
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {currentPassword:currentPassword, newPassword: newPassword})
        .then(response => {
            dispatch(updatePasswordSuccess(response));
        })
        .catch(err => {
            dispatch(updatePasswordError(err));
            return false;
        });
};

