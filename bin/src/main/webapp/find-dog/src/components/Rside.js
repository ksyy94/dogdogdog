import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Rside = () => {
	return (
		<div>
		<Nav defaultActiveKey="/home" className="flex-column">
				<Nav><Link to="/board1">게시판1</Link></Nav>
				<Nav.Link to="/board2">게시판2</Nav.Link>
				<Nav.Link to="/board3">게시판3</Nav.Link>
			</Nav>
		</div>
	);
};

export default Rside;