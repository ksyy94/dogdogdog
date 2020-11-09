import React from 'react';
import { Link } from 'react-router-dom';
import Board3List from './Board3List';

const Board3 = () => {
	return (
		<div>
			<Link to={"/board3/write"}><button>글쓰기</button></Link>	
			<Board3List/>
			<div>
					
			</div>
			<hr/>
		</div>
	);
};

export default Board3;