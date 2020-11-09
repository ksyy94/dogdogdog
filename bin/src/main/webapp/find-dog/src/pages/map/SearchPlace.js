import React, { useState, useEffect } from 'react';
import MapContainer from '../../components/MapContainer';

const SearchPlace = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");
	const [visible, setVisible] = useState(false);
	const [location, setLocation] = useState({
		title: "",
		lat: "",
		lng: "",
	});

	function setLatLng(title, lat, lng) {
		console.log(30, title);
		console.log(30, lat);
		console.log(30, lng);
		setLocation({
			title: title,
			lat: lat,
			lng: lng
		});
	}
	function show() {
		console.log(40, location);
		localStorage.setItem("loc", location.title);
	}
	function showMap(){
		setVisible(true);
	}
	

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setPlace(inputText);
		console.log(1, place);
		setInputText("");
	};


	return (
		<>
			<form className="inputForm" onSubmit={handleSubmit}>
				<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
				/>
				<button type="submit" onClick={showMap}>검색</button>
			</form>
			{visible ? <MapContainer searchPlace={place} latLng={setLatLng} /> : null}
			<button onClick={show}>show Location</button>
			<input type="text" name="lat"></input>
			<input type="text" name="lng"></input>
		</>
	);
};

export default SearchPlace;