import ReactDOM from 'react-dom';

import routes from './js/routes/routes';
import './index.css';

document.addEventListener(
	'DOMContentLoaded',
	function() {
		ReactDOM.render(
			routes, document.getElementById('root')
		);
	}
);