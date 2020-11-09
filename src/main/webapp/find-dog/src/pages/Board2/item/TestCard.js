import React, { useState } from 'react';
import './TestCard.css';
import MemberList from './MemberList';
import UpdateModal from './UpdateModal';
const TestCard = (props) => {

	let {mtId,mtCreateTime,mtTitle,mtContent,mtPlace,mtTime,mtDate,mtCount,maxCount,mtList,userName} = props.meeting;

	let aa = new Date(mtCreateTime).toISOString().replace(/T\w.+/g,'');

	// new Date().toISOString().replace(/T\w.=/g,'');
	

	return (
		<div class="dog-card">
			{/* style={{ display: "inline" }} */}
		
			<MemberList meeting ={props.meeting}/>
			
			{/* 수정버튼 일단 안쓸듯 */}
			{/* {userName === localStorage.user ? <UpdateModal key={props.meeting.mtId} meeting={props.meeting}/> : null} */}
			<div class="dog-card-header" >
				{/* <button class ="dog-button" onClick= {InsertModal} >aa</button>		 */}
				<div class="dog-card-header-is_closed" >
					<div class="dog-card-header-text" > 모집중 </div >
					<div class="dog-card-header-number" > {mtCount} / {maxCount} </div >
				</div >
				
			</div>
			<div class="dog-card-body">
				<div class="dog-card-body-header">
					<h1 class="dog-card-h1" >{mtTitle}</h1>
					{/* <p class="dog-card-body-hashtag">#태그1 #태그2 #태그3</p> */}
					<p class="dog-card-username" >
						작성자: {userName}<br/></p>
				</div>
				
				<p class="dog-card-body-description">
					장소 : {mtPlace}<br/>
					일시 : {mtDate} / {mtTime}<br/>
					<div className="dog-text">
					기타 : {mtContent}<br/>
					</div>
					
					{/* <button className="dog-button">참가</button> */}
					{/* <button className="dog-button" >참가목록</button> */}
					
					{/* onClick={<MemberList id = {mtId}/>} */}
				</p>

				<div class="dog-card-body-footer" >
					<i class="dog-reg_date" > {toString().replace(aa)} </i>

				</div>
			</div>
		</div>

	);
};

export default TestCard;