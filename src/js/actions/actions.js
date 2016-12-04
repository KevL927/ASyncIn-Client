import { createAction } from 'redux-actions';
import axios from 'axios';
// import { hashHistory } from 'react-router';

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
                //if email was username, then you can do auth: {username, password}
                username: email, 
                password
            }
        },{headers: {'Content-Type': 'application/json'}})
        .then((response) => {
            console.log('through')
            dispatch(loginSuccess(response));
          //  hashHistory.push('/dashboard');
         
           return {response: '200'}
        })
        .catch(err => {
            dispatch(loginError(err));
            return false;
        })
};

//*********************************************************************
//---------------------------SEARCH ACTION ----------------------------
//*********************************************************************
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


export const currentListeningUrl = createAction('CURRENT_LISTENING_URL', url => url);

//*********************************************************************
//---------------------------PLAYLIST ACTIONS--------------------------
//*********************************************************************

//GET playlist with accessToken for that user
//GET /api/v1/playlists?access_token=gfhgfhghghghd
export const getUserPlaylistsSuccess = createAction('GET_USER_PLAYLISTS_SUCCESS');
export const getUserPlaylistsError = createAction('GET_USER_PLAYLISTS_ERROR');
export const getUserPlaylists = (accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/playlists?access_token=' + accessToken)
        .then((response) => {
            dispatch(getUserPlaylistsSuccess(response));
            return { response }
        })
        .catch(err => {
            dispatch(getUserPlaylistsError(err));
            return false;
        })
}


//GET playlist by playlistId (when the user uses another user's playlist)
//GET /api/v1/playlists/:playlistId?access_token=<accesstokenOfCurrentlyLoggedInUser>
export const getOtherUserPlaylistSuccess = createAction('GET_OTHER_USER_PLAYLIST_SUCCESS');
export const getOtherUserPlaylistError = createAction('GET_OTHER_USER_PLAYLIST_ERROR');
export const getOtherUserPlaylist = (playlistId, accessToken) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com/api/v1/playlists/' + playlistId + '?access_token=' + accessToken)
        .then((response) => {
            console.log('here');
            dispatch(getOtherUserPlaylistSuccess(response));
            return { response } 
        })
        .catch(err => {
            dispatch(getOtherUserPlaylistError(err));
            return false;
        })
}

//POST playlist of currentUser
//POST /api/v1/playlists/:userId?access_token=gfhgfhghghghd

//PUT/EDIT existing playlist
//PUT /api/v1/playlists/:userId/:playlistId

//DELETE existing playlist
//DELETE /api/v1/:userId/:playlistId