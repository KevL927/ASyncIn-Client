import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store/store';
import App from '../components/MainPage/MainPage';
import LoginPage from '../components/Login/LoginPage';
import RegisterPage from '../components/Register/RegisterPage';
import NavigationFooterPlayer from '../components/Nav-FooterPlayer/Navigation-FooterPlayer';
import DashboardPage from '../components/Dashboard/DashboardPage';
import TopPlaylists from '../components/TopPlaylists/TopPlaylistsPage';
import SongSearchPage from '../components/SearchMusic/SongSearchPage';
import ContactDev from '../components/AboutUs/ContactsPage';
import AccountSettingsPage from '../components/AccountSettings/AccountSettingsPage';


export default (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRoute component={App} />
				<Route path="login" component={LoginPage} />	
				<Route path="register" component={RegisterPage} />
			</Route>
			<Route path="/dashboard" component={NavigationFooterPlayer}>
				<IndexRoute component={DashboardPage} />
				<Route path="top" component={TopPlaylists} />
				<Route path="search" component={SongSearchPage} />
				<Route path="contact" component={ContactDev} />
				<Route path="settings" component={AccountSettingsPage} />
			</Route>
		</Router>
	</Provider>
);