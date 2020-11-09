import React, { useState } from 'react';
import './TestCard.css';
import MemberList from './MemberList';
const TestCard = (props) => {

	let {mtId,mtCreateTime,mtTitle,mtContent,mtPlace,mtTime,mtDate,mtCount,maxCount,mtList,userName} = props.meeting;

	const mtm = {
			mtName : userName,
			mt : mtId,
		};


	const submitInsert = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/board2/mList", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(mtm)
		}).then(res => res.text()).then(
			res => alert(res)

		);
		// window.location.reload(); //페이지 새로고침
	}

	return (
		<div class="dog-card">
			{/* style={{ display: "inline" }} */}

			<MemberList mtId={mtId} userName={userName} /><button onClick={submitInsert}>참가</button>
			<div class="dog-card-header" >
				{/* <button class ="dog-button" onClick= {InsertModal} >aa</button>		 */}
				<div class="dog-card-header-is_closed" >
					<div class="dog-card-header-text" > 모집중 </div >
					<div class="dog-card-header-number" > {mtCount} / {maxCount} </div >
				</div >
				
			</div>
			<div class="dog-card-body">
				<div class="dog-card-body-header">
					<h1 class="dog-card-h1">{mtTitle}</h1>
					<p class="dog-card-body-hashtag">#태그1 #태그2 #태그3</p>
					<p class="dog-card-body-nickname" >
						작성자: {userName}<br/></p>
				</div>
				
				<p class="dog-card-body-description">
					장소 : {mtPlace}<br/>
					일시 : {mtDate} / {mtTime}<br/>
					기타 : {mtContent}<br/>
					
					{/* <button className="dog-button">참가</button> */}
					{/* <button className="dog-button" >참가목록</button> */}
					
					{/* onClick={<MemberList id = {mtId}/>} */}
				</p>

				<div class="dog-card-body-footer" >
					임시자리
				<i class="dog-reg_date" > {mtCreateTime} </i>

				</div>
			</div>
		</div>

	);
};

export default TestCard;