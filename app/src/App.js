import React, {Component} from 'react';
import Siderbar from './components/Siderbar';
import Resource from './components/Resource';
import {observer} from "mobx-react";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useStrict} from "../node_modules/mobx/lib/mobx";

useStrict(true);

@observer
class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="header"></div>
				<div className="flex-container">
					<Siderbar />
					<Resource />
				</div>
			</div>
		);
	}
}

export default App;
