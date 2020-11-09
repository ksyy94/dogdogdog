// import React from 'react';

let PageInfo = (a, b, c)=>{
	//page=현재 페이지정보, range=현재페이지범위정보, listCnt=게시물의 총숫자)
	let listSize = 10; // 초기값으로 목록개수를 10으로 셋팅

	let rangeSize = 10; // 초기값으로 페이지범위를 10으로 셋팅

	let page=a;

	let range=b;

	let listCnt=c;

	// 전체 페이지수
	let pageCnt = Math.ceil(listCnt / listSize);
	// 시작 페이지
	let startPage = (range - 1) * rangeSize + 1;
	// 끝 페이지
	let endPage = range * rangeSize;
	// 게시판 시작번호
	let startList = (page - 1) * listSize;
	// 이전 버튼 상태
	let prev = (range === 1 ? false : true);

	// 다음 버튼 상태
	let next = endPage > pageCnt ? false : true;
	if (endPage > pageCnt)
	{
		let endPage = pageCnt;
		let next = false;
	}
};

export default PageInfo;