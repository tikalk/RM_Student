import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import Resource from './components/Resource';
import Search from './components/Search';
import registerServiceWorker from './registerServiceWorker';

import "slim-js";
import "webco/components/t-header";
import "webco/components/t-message-box";
import "webco/components/t-message";

render((
	<Router>
		<Route path="/" component={App}>
			<Route path="/resource" component={Resource} />
			<Route path="/search" component={Search} />
		</Route>
	</Router>
), document.getElementById('root'));

registerServiceWorker();