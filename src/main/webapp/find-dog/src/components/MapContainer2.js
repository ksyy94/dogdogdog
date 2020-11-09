import React, { useEffect} from 'react';

const { kakao } = window;
const MapContainer2 = ({ searchPlace }) => {
	console.log(5, { searchPlace });



	useEffect(() => {
		console.log(5, "MapContainer2");

		const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(35.157579, 129.059402),
			level: 6
		};
		const map = new kakao.maps.Map(container, options);
		const ps = new kakao.maps.services.Places();

		// 키워드로 장소를 검색
		ps.keywordSearch(searchPlace, placesSearchCB);

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
				map.setBounds(bounds);
			}
		}

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

export default MapContainer2;