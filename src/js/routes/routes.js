import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store/store';
import App from '../components/MainPage';
import Login_Page from '../components/Login';

const routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={App} />
					<Route path ="login" component={Login_Page} />
			</Route>
		</Router>
	</Provider>
)

export default routes;