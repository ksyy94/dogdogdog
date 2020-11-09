import React, { useEffect, useState } from 'react';
import TestCard from './item/TestCard.js';
import ModalPage from './ModalPage.js';




// 게시글 - 글번호,글제목,생성시간,장소,글쓴이
// 하단 - 조회,페이징.


const Board2 = () => {

	const [meetings, setMeetings] = useState([]);
	const [page, setPage] = useState({
		p: 1,
	});
	const [maxPage, setMaxPage] = useState([]);
	let b1,b2 = '';

	useEffect(() => {
		fetch("http://localhost:8000/board2/" + page.p).then(res => res.json()).then(
			res => 
				setMeetings(res)
		);
		fetch("http://localhost:8000/board2/count").then(res => res.text()).then(
			res => {
				setMaxPage(res);
			}
		);
	}, [page])


	function down() {
		if (page.p > 1)
			setPage({ p: page.p - 1 });
		else {
			//버튼 비활성화 넣을곳
			b1='disabled';
		}
	}
	function up() {
		if (page.p * 6 < maxPage)
			setPage({ p: page.p + 1 });
		else {
			b2='disabled';
			//버튼 비활성화 넣을곳
		}
	}

	return (

		<div>
			<div>
				<ModalPage />
				<button onClick={down} >왼쪽 이미지</button>

				<h3 style={{ display: "inline" }}>모임 목록</h3>
				<button onClick={up} >오른쪽 이미지</button>
				<hr />
			</div>
			{meetings.map(
				meeting => {
					return <TestCard key={meeting.mtId} meeting={meeting} />
				}
			)}



		</div>
	);
};

export default Board2;