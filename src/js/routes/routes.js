import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store/store';
import App from '../components/Pages/MainPage';
import LoginPage from '../components/Pages/LoginPage';
import RegisterPage from '../components/Pages/RegisterPage';
import NavigationBar from '../components/Pages/NavigationBar';
import DashboardPage from '../components/Pages/DashboardPage';
import TopPlaylists from '../components/Pages/TopPlaylistsPage';
import SongSearchPage from '../components/Pages/SongSearchPage';
import ContactsPage from '../components/Pages/ContactsPage';


import TestPlaylistAction from '../components/TestPlaylistAction';
import TestUserAction from '../components/TestUserActions';





const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRoute component={App} />
					<Route path="login" component={LoginPage} />	
					<Route path="register" component={RegisterPage} />
					<Route path="contact" component={ContactsPage} />
			</Route>

			<Route path="/dashboard" component={NavigationBar}>
				<IndexRoute component={DashboardPage}/>
				<Route path="top" component={TopPlaylists} />
				<Route path="search" component={SongSearchPage} />

			</Route>
		</Router>
	</Provider>
);

export default routes;


/*

	<Route path="/">
				<IndexRoute component={App} />
					<Route path="login" component={LoginContainer} />
					<Route path="dashboard" component={Dashboard} />	
					<Route path="search" component={SongSearchContainer} />
					<Route path="register" component={RegisterContainer} />
					<Route path="test/playlists" component={TestPlaylistAction} />
					<Route path="test/users" component={TestUserAction} />
					<Route path="viewplaylist" component={PlaylistPlayerContainer} />
					<Route path="topplaylists" component={TopPlaylists} />
					<Route path="myplaylists" component={UserPlaylistList} />
			</Route>
*/