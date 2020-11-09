import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board4MapContainer from '../../components/Board4MapContainer';
import Board4Item from '../../components/Board4Item';
import Board5MapContainer2 from '../../components/Board5MapContainer2';
import { Button } from 'antd';

const MapStyle = styled.div`
display: grid;
grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const Board5 = () => {
	const [inputText, setInputText] = useState("");
	const [board3s, setBoard3s] = useState([]);
	let arrayParks = [];
	let arrayCafes = [];
	const [boardParks, setBoardParks] = useState([]);
	const [boardCafes, setBoardCafes] = useState([]);
	const [place, setPlace] = useState();
	const [center, setCenter] = useState({
		lat: "",
		lng: ""
	});
	const onChange = (e) => {
		setInputText(e.target.value);
	};
	useEffect(() => {
		fetch("http://localhost:8000/board4", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			},

		}).then((res) => res.json())
			.then((res) => {
				setBoard3s(res);
			});
		fetch("http://localhost:8000/board1", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			},

		}).then((res) => res.json())
			.then((res) => {
				for (let board1 of res) {
					if (board1.catagory === "공원") {
						arrayParks.push(board1);
					}
					if (board1.catagory === "카페") {
						arrayCafes.push(board1);
					}
				}
			});
		setBoardParks(arrayParks);
		setBoardCafes(arrayCafes);
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		setUpdate(1);
		setPlace(inputText);
		setInputText("");
	};
	const [category, setCategory] = useState();
	const [update, setUpdate] = useState();
	const [level, setLevel] = useState();
	const [id1, setId1] = useState("");
	const [visible, setVisible] = useState(false);
	function set(i) {
		setId1(i);
		setVisible(true);
		console.log("idididi:", id1)
	}
	function parks() {
		setUpdate(2);
		setCategory("공원");
	}
	function cafes() {
		setUpdate(3);
		setCategory("카페");
	}
	function missing() {
		setUpdate(4);
		setCategory("실종");
	}
	function setLatLng(lat, lng) {
		console.log("lat : ", lat);
		console.log("lng : ", lng);
		setCenter({
			lat: lat,
			lng: lng
		})
	}

	return (
		<div>
			<MapStyle>
				<div>
					<input
						placeholder="Search Place..."
						onChange={onChange}
						value={inputText}
					/>
					<button onClick={handleSubmit}>위치 검색</button>

					<Board5MapContainer2 set={set} level={level} setLevel={setLevel} update={update} center={center} setLatLng={setLatLng} searchPlace={place} category={category} boardParks={boardParks} boardCafes={boardCafes} board3s={board3s}></Board5MapContainer2>
				</div>
				{visible ? <Board4Item id={id1} /> : null}

			</MapStyle>
			<div>
				<Button onClick={parks}>공원</Button>
				<Button onClick={cafes}>카페</Button>
				<Button onClick={missing}>실종</Button>
			</div>
		</div>
	);
};

export default Board5;