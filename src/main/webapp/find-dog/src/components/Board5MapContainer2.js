import React, { useEffect, useState } from 'react';
import { InfoWindow } from 'google-maps-react';

const { kakao } = window;
const Board5MapContainer2 = (props) => {
	const boardParks = props.boardParks;
	const boardCafes = props.boardCafes;
	const board3s = props.board3s;
	const searchPlace = props.searchPlace;
	const category = props.category;
	const center = props.center;
	const setCenter = props.setCenter;
	const update = props.update;
	const setLatLng = props.setLatLng;
	const level = props.level;
	const setLevel = props.setLevel;
	const set = props.set;
	const [place, setPlace] = useState({
		lat: "",
		lng: "",
	})
	console.log("Parks : ", boardParks);
	console.log("Board1s : ", board3s);
	console.log("Cafes : ", boardCafes);
	const [idx, setIdx] = useState(1);
	console.log("center초기값 : ", center);
	//console.log("category 값",update);
	console.log("category 값 : ", category);

	useEffect(() => {
		console.log("update : ", update);
		var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });


		const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(35.157579, 129.059402),
			level: 6
		};
		const map = new kakao.maps.Map(container, options);
		const ps = new kakao.maps.services.Places();

		//지도 위치 옮길 때마다 지도 중심좌표 place에 저장
		kakao.maps.event.addListener(map, 'dragend', function () {
			let level = map.getLevel();
			let latLng = map.getCenter();
			console.log(10, level);
			console.log(11, latLng);
			setLevel(level);
			setLatLng(latLng.Ja, latLng.Ia);
		});
		var moveLatLon = new kakao.maps.LatLng(center.lat, center.lng);
		console.log("moveLatLon : ", moveLatLon);
		if (update === 1) { // 검색어 입력시
			console.log("검색 if문까지");
			ps.keywordSearch(searchPlace, placesSearchCB);
		}
		else if (update === 2) { //공원 클릭시
			console.log("공원클릭시");
			map.setLevel(level);
			map.setCenter(moveLatLon);
			for (let board of boardParks) {
				displayMarker(board);
			}
		}
		else if (update === 3) { //카페 클릭시
			console.log("카페 클릭시");
			map.setLevel(level);
			map.setCenter(moveLatLon);
			for (let board of boardCafes) {
				displayMarker(board);
			}
		}
		// }
		else if (update === 4) { //실종 클릭시
			console.log("실종클릭시");
			map.setLevel(level);
			map.setCenter(moveLatLon);
			for (let board of board3s) {
				displayMarker(board);
			}
		}
		function displayMarker(place) {
			var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

			var imageSize = new kakao.maps.Size(24, 35);
			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
			var marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.lat, place.lng),
				title: place.place,
				image: markerImage

			});
			if (update === 4) {
				kakao.maps.event.addListener(marker, 'click', function () {
					console.log("여기도", place.image1);

					set(place.id);
					console.log("place.id:" + place.id);
					// infowindow.setContent('<div><img src=\\images\\' + place.image1 + ' height="200px" /></div>');
					infowindow.setContent(place.name);
					infowindow.open(map, marker);
				});
			}

		}

		// 키워드 검색 완료 시 호출되는 콜백함수
		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}
				for (let board of boardParks) {
					displayMarker(board);
				}

				map.setBounds(bounds);
				let level = map.getLevel();
				let latLng = map.getCenter();
				setLevel(level);
				setLatLng(latLng.Ja, latLng.Ia);
				console.log("여기", latLng);


			}
		}


	}, [searchPlace, category]);



	return (
		<div>
			<div id='myMap' style={{
				width: '400px',
				height: '400px'
			}}>
				{}
			</div>
		</div>
	);
};

export default Board5MapContainer2;