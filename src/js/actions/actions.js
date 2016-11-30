import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

//*********************************************************************
//-----------------------LOGIN AND REGISTER ACTIONS -------------------
//*********************************************************************
export const REGISTER_REQUEST = = (username, password) => dispatch => {
    return axios.post('https://polar-escarpment-86427.herokuapp.com/api/v1/users', { username, password })
        .then(function(response) {
            console.log(response);
            hashHistory.push('/login');
        })
        .catch(function(error) {
            console.log(error);
        });
};
export const registerError = createAction('REGISTER_ERROR');

export const loginRequest = (username, password) => dispatch => {
    return axios.get('https://asyncin.herokuapp.com', {
            auth: {
                username,
                password
            }
        })
        .then((response) => {
            dispatch(loginSuccessful({ username, password }));
            hashHistory.push('/message');
            return { username, password };
        })
        .catch(err => {
            dispatch(loginError(err));
            return false;
        })
};


export const loginSuccessful = createAction('LOGIN_SUCCESSFUL');
export const loginError = createAction('LOGIN_ERROR');

//*********************************************************************
//-----------------------PLAYLIST ACTIONS -----------------------------
//*********************************************************************
export const fetchPlaylist = (currentUser) => dispatch => {
    return axios.get('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId)
        .then((response) => {
            dispatch(fetchPlaylistSuccess())
        })
        .catch(err => {
            dispatch(fetchPlaylistError(err));
            return false;
        });
};
export const fetchPlaylistSuccess = createAction('FETCH_PLAYLIST_SUCCESS');
export const fetchPlaylistError = createAction('FETCH_PLAYLIST_ERROR');
////////////////////////////////////////////////////////////////
export const POST_PLAYLIST = 'POST_PLAYLIST';
export const postPlaylist = (title, content) => dispatch => {
    return axios.post('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
            playlistId: playlistId
        })
        .then((response) => {
            dispatch(postPlaylistSuccess())
        })
        .catch(err => {
            dispatch(postPlaylistError(err));
            return false;
        });
};
export const postPlaylistSuccess = createAction('POST_PLAYLIST_SUCCESS');
export const postPlaylistError = createAction('POST_PLAYLIST_ERROR');
/////////////////////////////////////////////////////////////////
export const editPlaylist = (playlistId, title, content) => dispatch => {
    return axios.put('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
            playlistId: playlistId
        })
        .then((response) => {
            dispatch(editPlaylistSuccess())
        })
        .catch(err => {
            dispatch(editPlaylistError(err));
            return false;
        });
};
export const editPlaylistSuccess = createAction('EDIT_PLAYLIST_SUCCESS');
export const editPlaylistError = createAction('EDIT_PLAYLIST_ERROR');
//////////////////////////////////////////////////////////////////////
export const deletePlaylist = (playlistId) => dispatch => {
    return axios.delete('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
            playlistId: playlistId
        })
        .then((response) => {
            dispatch(deletePlaylistSuccess())
        })
        .catch(err => {
            dispatch(deletePlaylistError(err));
            return false;
        });
};
export const deletePlaylistSuccess = createAction('DELETE_PLAYLIST_SUCCESS');
export const deletePlaylistError = createAction('DELETE_PLAYLIST_ERROR');
/////////////////////////////////////////////////////////////////////////
export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () =>{
    return function(dispatch, getState) {
        if (!getState().isAuthenticated) {
            dispatch(logoutUserFail());
        } else {
            dispatch(logoutUserNow(getState().currentUser));
        }
    };
}
export const logouotUserError = 'LOGOUT_USER_ERROR';

//*********************************************************************
//-----------------------SONG ACTIONS -----------------------------
//*********************************************************************
export const fetchTrack = (currentUser) => dispatch => {
    return axios.get('/dashboard/' + currentUserId + 'track' + trackId)
        .then((response) => {
            dispatch(fetchTrackSuccess())
        })
        .catch(err => {
            dispatch(fetchTrackError(err));
            return false;
        });
};
export const fetchTrackSuccess = createAction('FETCH_TRACK_SUCCESS');
export const fetchTrackError = createAction('FETCH_TRACK_ERROR');
////////////////////////////////////////////////////////////////
export const addTrack = (currentUser) => dispatch => {
  return axios.get('/dashboard/' + currentUserId + 'track' + trackId)
      .then((response) => {
        dispatch(addTrackSuccess());
        return false;
      })
      .catch(err => {
        dispatch(addTrackError(err));
      })
};
export const addTrackSuccess = createAction('ADD_TRACK_SUCCESS');
export const addTrackError = createAction('ADD_TRACK_ERROR');
//////////////////////////////////////////////////////////////////////
export const deleteTrack = (playlistId) => dispatch => {
    return axios.delete('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId {
            trackId: trackId
        })
        .then((response) => {
            dispatch(deleteTrackSuccess())
        })
        .catch(err => {
            dispatch(deleteTrackError(err));
            return false;
        });
};
export const deleteTrackSuccess = createAction('DELETE_TRACK_SUCCESS');
export const deleteTrackError = createAction('DELETE_TRACK_ERROR');
/////////////////////////////////////////////////////////////////////////
export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () =>{
    return function(dispatch, getState) {
        if (!getState().isAuthenticated) {
            dispatch(logoutUserFail());
        } else {
            dispatch(logoutUserNow(getState().currentUser));
        }
    };
}
export const logouotUserError = 'LOGOUT_USER_ERROR';