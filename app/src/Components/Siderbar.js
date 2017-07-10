import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';

class Siderbar extends Component {
	render() {
		return (
			<div className="sidebar">
				<ListGroup>
					<ListGroupItem href="#" tag="a">Search Roadmap <i className="icon-people" /></ListGroupItem>
					<ListGroupItem href="#" tag="a">My Roadmaps <i className="icon-people" /></ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

export default Siderbar;