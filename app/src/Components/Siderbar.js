import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';

class Siderbar extends Component {
	render() {
		return (
			<div className="sidebar">
				<ListGroup>
					<ListGroupItem href="#" tag="a">Search Roadmap <i class="icon-people" /></ListGroupItem>
					<ListGroupItem href="#" tag="a">My Roadmaps <i class="icon-people" /></ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

export default Siderbar;