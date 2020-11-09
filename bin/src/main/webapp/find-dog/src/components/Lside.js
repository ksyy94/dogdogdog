import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Lside = () => {

	return (
		<div>
			<Nav defaultActiveKey="/home" className="flex-column">
				<Nav><Link to="/board1">게시판1</Link></Nav>
				<Nav><Link to="/board2">게시판2</Link></Nav>
				<Nav><Link to="/board3">게시판3</Link></Nav>
				<Nav><Link to="/map">지도지도지</Link></Nav>
			</Nav>
		</div>
	);
};

export default Lside;