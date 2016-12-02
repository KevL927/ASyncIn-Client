import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';




//////////////////////////////////////////////////////////////////////
export const loginRequest = (username, password) => dispatch => {
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

// /////////////////////////////////////////////////////////////////////////
// export const LOGOUT_USER = 'LOGOUT_USER';
// export const logoutUser = () =>{
//     return function(dispatch, getState) {
//         if (!getState().isAuthenticated) {
//             dispatch(logoutUserError());
//         } else {
//             dispatch(logoutUserSuccess(getState().currentUser));
//         }
//     };
// }
// export const logoutUserSuccess = 'LOGOUT_USER_SUCCESS';
// export const logoutUserError = 'LOGOUT_USER_ERROR';

//*********************************************************************
//-----------------------PLAYLIST ACTIONS -----------------------------
//*********************************************************************
// export const fetchPlaylist = (currentUser) => dispatch => {
//     return axios.get('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId)
//         .then((response) => {
//           hashHistory.push('/userplaylists');
//             dispatch(fetchPlaylistSuccess())
//         })
//         .catch(err => {
//             dispatch(fetchPlaylistError(err));
//             return false;
//         });
// };
// export const fetchPlaylistSuccess = createAction('FETCH_PLAYLIST_SUCCESS');
// export const fetchPlaylistError = createAction('FETCH_PLAYLIST_ERROR');
// ////////////////////////////////////////////////////////////////
// export const postPlaylist = (title, content) => dispatch => {
//     return axios.post('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
//             playlistId: playlistId
//         })
//         .then((response) => {
//             dispatch(postPlaylistSuccess())
//         })
//         .catch(err => {
//             dispatch(postPlaylistError(err));
//             return false;
//         });
// };
// export const postPlaylistSuccess = createAction('POST_PLAYLIST_SUCCESS');
// export const postPlaylistError = createAction('POST_PLAYLIST_ERROR');
// /////////////////////////////////////////////////////////////////
// export const editPlaylist = (playlistId, title, content) => dispatch => {
//     return axios.put('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
//             playlistId: playlistId
//         })
//         .then((response) => {
//             dispatch(editPlaylistSuccess())
//         })
//         .catch(err => {
//             dispatch(editPlaylistError(err));
//             return false;
//         });
// };
// export const editPlaylistSuccess = createAction('EDIT_PLAYLIST_SUCCESS');
// export const editPlaylistError = createAction('EDIT_PLAYLIST_ERROR');
// //////////////////////////////////////////////////////////////////////
// export const deletePlaylist = (playlistId) => dispatch => {
//     return axios.delete('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId {
//             playlistId: playlistId
//         })
//         .then((response) => {
//             dispatch(deletePlaylistSuccess())
//         })
//         .catch(err => {
//             dispatch(deletePlaylistError(err));
//             return false;
//         });
// };
// export const deletePlaylistSuccess = createAction('DELETE_PLAYLIST_SUCCESS');
// export const deletePlaylistError = createAction('DELETE_PLAYLIST_ERROR');


// //*********************************************************************
// //-----------------------SONG ACTIONS -----------------------------
// //*********************************************************************
// export const fetchTrack = (currentUser) => dispatch => {
//     return axios.get('/dashboard/' + currentUserId + 'track' + trackId)
//         .then((response) => {
//             dispatch(fetchTrackSuccess())
//         })
//         .catch(err => {
//             dispatch(fetchTrackError(err));
//             return false;
//         });
// };
// export const fetchTrackSuccess = createAction('FETCH_TRACK_SUCCESS');
// export const fetchTrackError = createAction('FETCH_TRACK_ERROR');
// ////////////////////////////////////////////////////////////////
// export const addTrack = (currentUser) => dispatch => {
//   return axios.post('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId)
//       .then((response) => {
//         dispatch(addTrackSuccess());
//         return false;
//       })
//       .catch(err => {
//         dispatch(addTrackError(err));
//       })
// };
// export const addTrackSuccess = createAction('ADD_TRACK_SUCCESS');
// export const addTrackError = createAction('ADD_TRACK_ERROR');
// //////////////////////////////////////////////////////////////////////
// export const deleteTrack = (playlistId) => dispatch => {
//     return axios.delete('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId {
//             trackId: trackId
//         })
//         .then((response) => {
//             dispatch(deleteTrackSuccess())
//         })
//         .catch(err => {
//             dispatch(deleteTrackError(err));
//             return false;
//         });
// };
// export const deleteTrackSuccess = createAction('DELETE_TRACK_SUCCESS');
// export const deleteTrackError = createAction('DELETE_TRACK_ERROR');

// //*********************************************************************
// //------------------- SEARCHING/ADDING FOR SONGS ----------------------
// //*********************************************************************
// export const fetchSearchedTrack = (currentUser) => dispatch => {
//   return axios.get('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId)
//       .then((response) => {
//         dispatch(fetchSearchedTrackSuccess());
//         return false;
//       })
//       .catch(err => {
//         dispatch(fetchSearchedTrackError(err));
//       })
// };

// export const fetchSearchedTrackSuccess = createAction('FETCH_SEARCHED_TRACK_SUCCESS');
// export const fetchSearchedTrackError = createAction('FETCH_SEARCHED_TRACK_ERROR');
// ///////////////////////////////////////////////////////////////////////
// export const addSearchedTrack = (currentUser) => dispatch => {
//   return axios.post('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId)
//       .then((response) => {
//         dispatch(addSearchedTrackSuccess());
//         return false;
//       })
//       .catch(err => {
//         dispatch(addSearchedTrackError(err));
//       })
// };
// export const addSearchedTrackSuccess = createAction('ADD_SEARCHED_TRACK_SUCCESS');
// export const addSearchedTrackError = createAction('ADD_SEARCHED_TRACK_ERROR');

// //*********************************************************************
// //-------------- SEARCHING FOR OTHER USERS' PLAYLIST/TRACKS -----------
// //*********************************************************************
// export const fetchOtherUsersPlaylist = (currentUser) => dispatch => {
//     return axios.get('/dashboard/' + currentUserId + 'track' + trackId)
//         .then((response) => {
//             dispatch(fetchOtherUsersPlaylistSuccess())
//         })
//         .catch(err => {
//             dispatch(fetchOtherUsersPlaylistError(err));
//             return false;
//         });
// };
// export const fetchOtherUsersPlaylistSuccess = createAction('FETCH_OTHER_USERS_PLAYLIST_SUCCESS');
// export const fetchOtherUsersPlaylistError = createAction('FETCH_OTHER_USERS_PLAYLIST_ERROR');
// ////////////////////////////////////////////////////////////////
// export const addOtherUsersTracks = (currentUser) => dispatch => {
//   return axios.post('/dashboard/' + currentUserId + '?access_token=' + accessToken + '/playlist' + playlistId + '/track' + trackId)
//       .then((response) => {
//         dispatch(addOtherUsersTracksSuccess());
//         return false;
//       })
//       .catch(err => {
//         dispatch(addOtherUsersTracksError(err));
//       })
// };
// export const addOtherUsersTracksSuccess = createAction('ADD_OTHER_USERS_TRACK_SUCCESS');
// export const addOtherUsersTracksError = createAction('ADD_OTHER_USERS_TRACK_ERROR');

// //*********************************************************************
// //-------------------- RANDOMLY GENERATED PLAYLISTS --------------------
// //*********************************************************************
// export const fetchRandomPlaylists = (currentUser) => dispatch => {
//     return axios.get('/dashboard/' + currentUserId +'?access_token=' + accessToken + '/random/playlists' + playlistId)
//         .then((response) => {
//             dispatch(fetchRandomPlaylistsSuccess())
//         })
//         .catch(err => {
//             dispatch(fetchRandomPlaylistsError(err));
//             return false;
//         });
// };
// export const fetchRandomPlaylistsSuccess = createAction('FETCH_RANDOM_PLAYLISTS_SUCCESS');
// export const fetchRandomPlaylistsError = createAction('FETCH_RANDOM_PLAYLISTS_ERROR');

// //*********************************************************************
// //---------------------- TOP 3 GENERATED PLAYLISTS --------------------
// //*********************************************************************
// export const fetchTopThreePlaylists = (currentUser) => dispatch => {
//     return axios.get('/dashboard/' + currentUserId + '?access_token=' + accessToken +  'top3playlists' + playlistId)
//         .then((response) => {
//             dispatch(fetchTopThreePlaylistsSuccess())
//         })
//         .catch(err => {
//             dispatch(fetchTopThreePlaylistsError(err));
//             return false;
//         });
// };
// export const fetchTopThreePlaylistsSuccess = createAction('FETCH_TOP_THREE_PLAYLISTS_SUCCESS');
// export const fetchTopThreePlaylistsError = createAction('FETCH_TOP_THREE_PLAYLISTS_ERROR');