import React, {Component} from 'react';
import '../App.css';

class Resource extends Component {
	render() {
		return (
			<div className="resource">
				resource
				<iframe title="resource" id="resourceFrame" ref={(e) => { this.resourceFrame = e; }}></iframe>
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('message', this.handleMessage, false);
		this.postProgressMessage({
			'progress': [{
				'stage': 1,
				'resource': 3
			},{
				'stage': 2,
				'resource': 4
			}]
		});
	}

	handleMessage(event) {
		// console.log(event);
		// event.data.updateResourceState
	}

	postProgressMessage(payload) {
		this.resourceFrame.contentWindow.postMessage({
			currentResourceState: payload
		}, '*');
	}
}

export default Resource;
