import React, { useEffect, useState } from 'react';
import { InfoWindow } from 'google-maps-react';

const { kakao } = window;
const MapContainer = ({ searchPlace, latLng }) => {
	console.log(5, { searchPlace });
	const [addr,setAddr] = useState("");


	useEffect(() => {
		console.log(5, "MapContainer");

		const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(35.157579, 129.059402),
			level: 6
		};
		const map = new kakao.maps.Map(container, options);
		const ps = new kakao.maps.services.Places();
		const geocoder = new kakao.maps.services.Geocoder();
		// 키워드로 장소를 검색
		ps.keywordSearch(searchPlace, placesSearchCB);


		// 키워드 검색 완료 시 호출되는 콜백함수
		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					displayMarker(data[i]);
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정
				map.setBounds(bounds);
				searchAddrFromCoords(map.getCenter(), displayCenterInfo);
			}
		}
		kakao.maps.event.addListener(map, 'dragend', function () {
			let level = map.getLevel();
			let latlng = map.getCenter();
			console.log(10, level);
			console.log(11, latlng);
			searchAddrFromCoords(map.getCenter(), displayCenterInfo);
		});
		
		function searchAddrFromCoords(coords, callback) {
			// 좌표로 행정동 주소 정보를 요청합니다
			geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
		}
		let addr = "";
		function displayCenterInfo(result, status) {
			if (status === kakao.maps.services.Status.OK) {

				for (var i = 0; i < result.length; i++) {
					// 행정동의 region_type 값은 'H' 이므로
					if (result[i].region_type === 'H') {
						//setAddr(result[i].address_name);
						addr = result[i].address_name;
						console.log("addr:", addr);
						break;
					}
				}
			}
		}

		function displayMarker(place) {
			var marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x)
			});

			// 마커에 클릭이벤트를 등록합니다
			kakao.maps.event.addListener(marker, 'click', function () {
				// 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
				infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
				infowindow.open(map, marker);
				latLng(place.place_name,addr,place.y,place.x);
				//searchAddrFromCoords(place.coords, displayCenterInfo);
				console.log("addr" ,addr);
			});
		}

		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

	}, [searchPlace]);


	return (
		<div id='myMap' style={{
			width: '500px',
			height: '500px'
		}}>
			{}

		</div>
	);
};

export default MapContainer;