import React, {Component} from 'react';
import Header from './components/Header';
import Siderbar from './components/Siderbar';
import Resource from './components/Resource';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useStrict} from "../node_modules/mobx/lib/mobx";

useStrict(true);

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<div className="flex-container">
					<Siderbar />
					<Resource />
				</div>
			</div>
		);
	}
}

export default App;
