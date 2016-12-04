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
            console.log('actions');
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

export const createPlaylistSuccess = createAction('CREATE_PLAYLIST_SUCCESS');
export const createPlaylistError = createAction('CREATE_PLAYLIST_ERROR');
export const createPlaylist = (playlistObject, accessToken) => dispatch => {
    
    return axios.post('https://asyncin.herokuapp.com/api/v1/playlists/' + playlistObject.userId + '?access_token=' + accessToken, playlistObject)
        .then(response => {
            dispatch(createPlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(createPlaylistError(err));
            return false;
        });
};



//PUT/EDIT existing playlist
//PUT /api/v1/playlists/:userId/:playlistId

export const updatePlaylistSuccess = createAction('UPDATE_PLAYLIST_SUCCESS');
export const updatePlaylistError = createAction('UPDATE_PLAYLIST_ERROR');
export const updatePlaylist = (playlistObject, accessToken) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/playlists/' + playlistObject.userId +'/'+ playlistObject._id + '?access_token=' + accessToken, playlistObject)
        .then(response => {
            dispatch(updatePlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(updatePlaylistError(err));
            return false;
        });
};


//DELETE existing playlist
//DELETE /api/v1/:userId/:playlistId

export const deletePlaylistSuccess = createAction('DELETE_PLAYLIST_SUCCESS');
export const deletePlaylistError = createAction('DELETE_PLAYLIST_ERROR');
export const deletePlaylist = (playlistObject, accessToken) => dispatch => {
    
    return axios.delete('https://asyncin.herokuapp.com/api/v1/playlists/' + playlistObject.userId +'/'+ playlistObject._id + '?access_token=' + accessToken)
        .then(response => {
            dispatch(deletePlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(deletePlaylistError(err));
            return false;
        });
};



//GET all users in our database
//GET /api/v1/users?access_token=gfhgfhghghghd

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

//GET user's profile
//GET /api/v1/users/:token?access_token=gfhgfhghghghd
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

/*
PUT /api/v1/users?access_token=gfhgfhghghghd
{
    "newUsername":"user"
    EITHER
    "newPassword": paswordhere
}
*/
export const updateUsernameSuccess = createAction('UPDATE_USERNAME_SUCCESS');
export const updateUsernameError = createAction('UPDATE_USERNAME_ERROR');
export const updateUsername = (accessToken,newUsername) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {newUsername: newUsername})
        .then(response => {
            dispatch(updateUsernameSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(updateUsernameError(err));
            return false;
        });
};

export const updatePasswordSuccess = createAction('UPDATE_PASSWORD_SUCCESS');
export const updatePasswordError = createAction('UPDATE_PASSWORD_ERROR');
export const updatePassword = (accessToken,newPassword) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/users?access_token=' + accessToken, 
                {newPassword: newPassword})
        .then(response => {
            dispatch(updatePasswordSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(updatePasswordError(err));
            return false;
        });
};



//PUT favorite playlist
// /api/v1/users/:token?access_token=dslfkjsalkfjslajf
/*
{
    "playlistId":"5841da9b38d6f14e07339d60",
    "rating":28
}
*/
export const updateFavouritePlaylistSuccess = createAction('UPDATE_FAVOURITE_PLAYLIST_SUCCESS');
export const updateFavouritePlaylistError = createAction('UPDATE_FAVOURITE_PLAYLIST_ERROR');
export const updateFavouritePlaylist = (accessToken,token, playlistId, rating) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/users/'+token+'?access_token=' + accessToken, 
                {playlistId: playlistId,
                    rating:rating
                })
        .then(response => {
            dispatch(updateFavouritePlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(updateFavouritePlaylistError(err));
            return false;
        });
};


