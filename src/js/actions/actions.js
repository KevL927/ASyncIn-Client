import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';


//*********************************************************************
//---------------------------SEARCH ACTION ----------------------------
//*********************************************************************
export const searchAllSuccess = createAction('SEARCH_ALL_SUCCESS');
export const searchAllError = createAction('SEARCH_ALL_ERROR');
export const searchAll = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/search', {search: search}, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
            dispatch(searchAllSuccess(response));
            hashHistory.push('/dashboard/search');
            return { response };
        })
        .catch(err => {
            dispatch(searchAllError(err));
            return false;
        })
};

export const clearError = createAction('CLEAR_ERROR');

export const clearFeedback = createAction('CLEAR_FEEDBACK');

export const currentListeningUrl = createAction('CURRENT_LISTENING_URL', url => url);

export const currentListeningPlaylist = createAction('CURRENT_LISTENING_PLAYLIST', playlist => playlist);

export const queue = createAction('QUEUE', queue => queue);

export const deleteQueueTrack = createAction('DELETE_QUEUE_TRACK', track => track);

export const moveTrackInQueue = createAction('moveTrackInQueue');

export const moveTrackInPlaylist = createAction('moveTrackInPlaylist');

export const updateQueueSuccess = createAction('UPDATE_QUEUE_SUCCESS');
export const updateQueueError = createAction('UPDATE_QUEUE_ERROR');
export const updateQueue = (accessToken, token, queue) => dispatch => {
    
    return axios.put('https://asyncin.herokuapp.com/api/v1/users/queue/'+token+'?access_token=' + accessToken, 
                {queue:queue})
        .then(response => {
            dispatch(updateQueueSuccess(response));
        })
        .catch(err => {
            dispatch(updateQueueSuccess(err));
            return false;
        });
};



export const shuffledQueue = createAction('shuffledQueue');