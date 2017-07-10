import React, {Component} from 'react';
import Siderbar from './Components/Siderbar';
import Resource from './Components/Resource';
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
				<t-header ref={(e) => { this.tHeader = e; }} logo-name="logoName" logo-url="http://pach.com" user-url="http://avatar.jpg" user-name="Sefi"></t-header>
				<div className="flex-container">
					<Siderbar />
					<Resource />
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.tHeader.messages = [
			{
				avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
				text: 'this is the message 123',
				date: '27/8/16',
				isNew: true
			},
			{
				avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
				text: 'another message another message 56747',
				date: '26/8/16',
				isNew: false
			}];
	}
}

export default App;
