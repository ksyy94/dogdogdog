import React, { useState, useEffect } from 'react';
import Board4MapContainer from '../../components/Board4MapContainer';
import styled from 'styled-components';
import Board4Item from '../../components/Board4Item';

const MapStyle = styled.div`
display: grid;
grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const Board4_1 = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");
	const [now, setNow] = useState("");
	const [list, setList] = useState([]);
	const [id1, setId1] = useState("");
	const [visible,setVisible] = useState(false);
	//marker ox
	const [markerIdx, setMarkerIdx] = useState(false);

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
				setList(res);
			});
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		setMarkerIdx(false);
		setNow("");
		setPlace(inputText);
		console.log(1, place);
		setInputText("");
	};
	function setLatLng(lat, lng) {
		setNow({
			lat: lat,
			lng: lng
		})
	}
	function test() {
		setMarkerIdx(true);
	}
	function show() {
		test();
	}
	function re() {
		setMarkerIdx(false);
	}
	function set(i) {
		setId1(i);
		setVisible(true);
		console.log("idididi:", id1)
	}
	return (
		<MapStyle>
			<div>
				<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
				/>
				<button onClick={handleSubmit}>위치 검색</button>

				<Board4MapContainer set={set} searchPlace={place} list={list} now={now} setLatLng={setLatLng}></Board4MapContainer>
			</div>
			{visible ? <Board4Item id={id1} /> : null }

		</MapStyle>
	);
};

export default Board4_1;