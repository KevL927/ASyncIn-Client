import ReactDOM from 'react-dom';
import './index.css';

import routes from './js/routes/routes';

document.addEventListener(
	'DOMContentLoaded',
	function() {
		ReactDOM.render(
			routes, document.getElementById('root')
		);
	}
);
