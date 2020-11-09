import React, { useEffect, useState } from 'react';
import { InfoWindow } from 'google-maps-react';

const { kakao } = window;
const Board4MapContainer = ({ id, set, searchPlace, setLatLng, setMarkerIdx, setId, list, markerIdx, now }) => {

	const [place, setPlace] = useState({
		lat: "",
		lng: "",
	})
	const [idx, setIdx] = useState(1);
	const [temp, setTemp] = useState(false);

	useEffect(() => {
		console.log(5, "MapContainer2");
		console.log(200, { searchPlace });
		console.log(500, now);
		//false = marker X, true = marker O
		console.log(600, markerIdx);
		console.log("now", now);
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
			setPlace({
				lat: latLng.Ha,
				lng: latLng.Ga
			});
			setLatLng(latLng.Ha, latLng.Ga);
		});

		ps.keywordSearch(searchPlace, placesSearchCB);
		function displayMarker(place) {
			var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

			var imageSize = new kakao.maps.Size(24, 35);
			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
			var marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.lat, place.lng),
				title: place.name,
				image: markerImage

			});

			kakao.maps.event.addListener(marker, 'click', function () {
				console.log("여기도", place.image1);

				set(place.id);
				console.log("place.id:" + place.id);
				console.log("idid:", id);
				// infowindow.setContent('<div><img src=\\images\\' + place.image1 + ' height="200px" /></div>');
				infowindow.setContent(place.name);
				infowindow.open(map, marker);
			});

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

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정
				console.log(4, (bounds.da + bounds.ia) / 2);
				console.log(5, (bounds.ka + bounds.ja) / 2);
				for (let i = 0; i < list.length; i++) {
					console.log("리스트for", list[i]);
					displayMarker(list[i]);
				}
				map.setBounds(bounds);
				
			}
		}


	}, [searchPlace]);
	function showMarker() {
		setIdx(idx + 1);
	}


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

export default Board4MapContainer;