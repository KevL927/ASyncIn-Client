import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store/store';
import App from '../components/MainPage';
import LoginContainer from '../components/Login/LoginContainer';
import PlaylistPlayerContainer from '../components/PlaylistPlayer/PlaylistPlayerContainer';
import SongSearchContainer from '../components/SearchMusic/SongSearchContainer';
import RegisterContainer from '../components/Register/RegisterContainer';
import TestPlaylistAction from '../components/TestPlaylistAction';
import TestUserAction from '../components/TestUserActions';

const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRoute component={App} />
					<Route path="login" component={LoginContainer} />
					<Route path="search" component={SongSearchContainer} />
					<Route path="register" component={RegisterContainer} />
					<Route path="test/playlists" component={TestPlaylistAction} />
					<Route path="test/users" component={TestUserAction} />
					<Route path="viewplaylist" component={PlaylistPlayerContainer} />
			</Route>
		</Router>
	</Provider>
);

export default routes;