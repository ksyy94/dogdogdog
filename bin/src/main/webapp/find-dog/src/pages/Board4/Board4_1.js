import React, { useState, useEffect } from 'react';
import Board4MapContainer from '../../components/Board4MapContainer';

const Board4_1 = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");
	const [now,setNow] = useState("");
	const [list,setList] = useState([]);
	//marker ox
	const [markerIdx, setMarkerIdx] = useState(false);

	const onChange = (e) => {
		setInputText(e.target.value);
	};
	useEffect(()=>{
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
	},[])

	const handleSubmit = (e) => {
		e.preventDefault();
		setMarkerIdx(false);
		setNow("");
		setPlace(inputText);
		console.log(1, place);
		setInputText("");
	};
	function setLatLng(lat,lng){
		setNow({
			lat:lat,
			lng:lng
		})
	}
	function test(){
		setMarkerIdx(true);
	}
	function show(){
		test();
	}
	function re(){
		setMarkerIdx(false);
	}
	return (
		<div>
			<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
			/>
			<button onClick={handleSubmit}>위치 검색</button>
			<Board4MapContainer searchPlace={place} list={list} now={now} setLatLng={setLatLng}></Board4MapContainer>


		</div>
	);
};

export default Board4_1;