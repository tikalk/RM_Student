import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import Resource from './Components/Resource';
import Search from './Components/Search';
import registerServiceWorker from './registerServiceWorker';

import "slim-js";
import "webco/components/t-header";
import "webco/components/t-message-box";
import "webco/components/t-message";

render((
	<Router>
		<Switch>
			<Route path="/" component={App}/>
			<Route path="/resource" component={Resource} />
			<Route path="/search" component={Search} />
		</Switch>
	</Router>
), document.getElementById('root'));

registerServiceWorker();