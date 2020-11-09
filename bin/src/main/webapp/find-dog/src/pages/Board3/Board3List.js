import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Board3Item from '../../components/Board3Item';

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  //padding: 20px 250px;
`;
const Board3List = () => {

	const [board3s, setBoard3s] = useState([]);

	useEffect(() => {

		console.log("board3 목록");

		fetch("http://localhost:8000/board3", {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setBoard3s(res);
			});
	}, []);

	return (
		<ListStyle>
			{board3s.map((board3) => (
				<Board3Item key={board3.id} board3={board3} />
			))}
		</ListStyle>
	);
};

export default Board3List;