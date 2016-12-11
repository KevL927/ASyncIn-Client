import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';


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
            console.log(response)
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





//PUT favorite playlist
// /api/v1/users/:token?access_token=dslfkjsalkfjslajf
/*
{
    "playlistId":"5841da9b38d6f14e07339d60",
    "rating":28
}
*/
export const updateFavPlaylistSuccess = createAction('UPDATE_FAV_PLAYLIST_SUCCESS');
export const updateFavPlaylistError = createAction('UPDATE_FAV_PLAYLIST_ERROR');
export const updateFavouritePlaylist = (accessToken,token, playlistId, rating) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/users/'+token+'?access_token=' + accessToken, 
                {playlistId: playlistId,
                    rating:rating
                })
        .then(response => {
            console.log(response.data);
            dispatch(updateFavPlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(updateFavPlaylistError(err));
            return false;
        });
};

//Top Playlist
export const getTopPlaylistSuccess = createAction('GET_TOP_PLAYLIST_SUCCESS');
export const getTopPlaylistError = createAction('GET_TOP_PLAYLIST_ERROR');
export const getTopPlaylist = (accessToken) => dispatch => {
    
    return axios.get('https://asyncin.herokuapp.com/api/v1/playlists?access_token=' + accessToken)
        .then(response => {
            dispatch(getTopPlaylistSuccess(response));
           // hashHistory.push('/dashboard');
        })
        .catch(err => {
            dispatch(getTopPlaylistError(err));
            return false;
        });
};