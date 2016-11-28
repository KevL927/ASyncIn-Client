import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

const routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={App} />
			</Route>
		</Router>
	</Provider>
)

export default routes;