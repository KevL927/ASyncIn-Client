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


//*********************************************************************
//-----------------SEARCH SONGS YOUTUBE/VIMEO/SC- --------------------
//*********************************************************************
export const searchYoutubeSuccess = createAction('SEARCH_YOUTUBE_SUCCESS');
export const searchYoutubeError = createAction('SEARCH_YOUTUBE_ERROR');
export const searchYoutube = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/youtube', {search: search})
        .then((response) => {
            dispatch(searchYoutubeSuccess(response.data));
            //hashHistory.push('/search');
            return { response };
        })
        .catch(err => {
            dispatch(searchYoutubeError(err));
            return false;
        })
};
/////////////////////////////////SOUNDCLOUD///////////////////////////////////
export const searchSoundcloudSuccess = createAction('SEARCH_SOUNDCLOUD_SUCCESS');
export const searchSoundcloudError = createAction('SEARCH_SOUNDCLOUD_ERROR');
export const searchSoundcloud = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/soundcloud', {search: search})
        .then((response) => {
            dispatch(searchSoundcloudSuccess(response.data));
            //hashHistory.push('/search');
            return { response };
        })
        .catch(err => {
            dispatch(searchSoundcloudError(err));
            return false;
        })
};
////////////////////////////////////VIMEO////////////////////////////////////////
export const searchVimeoSuccess = createAction('SEARCH_VIMEO_SUCCESS');
export const searchVimeoError = createAction('SEARCH_VIMEO_ERROR');
export const searchVimeo = (search) => dispatch => {
    return axios.post('https://asyncin.herokuapp.com/api/vimeo', {search: search})
        .then((response) => {
            dispatch(searchVimeoSuccess(response.data));
            //hashHistory.push('/search');
            return { response };
        })
        .catch(err => {
            dispatch(searchVimeoError(err));
            return false;
        })
};


// export const searchAllSuccess = createAction('SEARCH_ALL_SUCCESS');
// export const searchAllError = createAction('SEARCH_ALL_ERROR');
export const searchAll = (search) => dispatch => {
   dispatch(searchYoutube(search));
   dispatch(searchVimeo(search));
   dispatch(searchSoundcloud(search));
};
