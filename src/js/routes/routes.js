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
import DashboardPage from '../components/Pages/DashboardPage';
import TopPlaylists from '../components/Pages/TopPlaylistsPage';
import UserPlaylistList from '../components/UserPlaylists/UserPlaylistList';
import NavigationBar from '../components/Pages/NavigationBar';
import test1 from '../components/Test/test1'; 
import test2 from '../components/Test/test2'; 
import test3 from '../components/Test/test3'; 
import test4 from '../components/Test/test4'; 


const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRoute component={App} />
					<Route path="login" component={LoginContainer} />	
					<Route path="register" component={RegisterContainer} />
			</Route>

			<Route path="/home" component={NavigationBar}>
				<IndexRoute component={DashboardPage}/>
				<Route path="top" component={TopPlaylists} />
				<Route path="tester" component={test4} />

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