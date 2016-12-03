import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store/store';
import App from '../components/MainPage';
import LoginPage from '../components/LoginPage';
import SongSearchPage from '../components/SongSearchPage';
import RegisterPage from '../components/RegisterPage';
import TestAction from '../containers/TestAction';


const routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={App} />
					<Route path="login" component={LoginPage} />
					<Route path="search" component={SongSearchPage} />
					<Route path="register" component={RegisterPage} />
					<Route path="test" component={TestAction} />
			</Route>
		</Router>
	</Provider>
)

export default routes;