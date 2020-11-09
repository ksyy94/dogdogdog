import React, { useState, useEffect } from 'react';
import Board1Item from '../../components/Board1Item';
import styled from 'styled-components';
import update from 'react-addons-update';


const ListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  justify-content:left;
  //padding: 20px 250px;
`;
const Board1List = (props) => {
	const addr = props.addr;
	const board1s = props.board1s;
	console.log("addddr", addr);

	const [boardParks, setBoardParks] = useState([]);
	const [boardCafes, setBoardCafes] = useState([]);
	const [test, setTest] = useState([]);
	let arrayParks = [];
	let arrayCafes = [];


	useEffect(() => {
		fetch("http://localhost:8000/board1/공원/"+addr, {
			method: "POST",

		})
		.then((res) => {
			return res.json()
		})
		.then((res) =>{
			console.log("rrreeesss : ",res);
			setBoardParks(res);
		});
		fetch("http://localhost:8000/board1/카페/"+addr, {
			method: "POST",

		})
		.then((res) => {

			return res.json()
		})
		.then((res) =>{
			console.log("rrreeesss : ",res);
			setBoardCafes(res);
		});
	},[addr])
	console.log("boardParks : ",boardParks);
	console.log("boardCafes : ",boardCafes);


	return (
		<div>
			<h5>공원</h5>
			<hr />
			<ListStyle>
				{boardParks.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} />)
				))}
			</ListStyle>
			<hr />
			<h5>카페</h5>
			<hr />
			<ListStyle>
				{boardCafes.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} />)
				))}
			</ListStyle>
		</div>
	);
};

export default Board1List;