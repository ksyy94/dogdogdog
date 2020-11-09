import React, { useState } from 'react';
import ModalSetting from './ModalSetting';

const UpdateModal = (props) => {

	let {mtId,mtTitle,mtContent,mtPlace,mtTime,mtDate,maxCount,userName} = props.meeting;
	
	const [meeting, setMeeting] = useState({
		mtId : mtId,
		mtTitle: mtTitle,
		maxCount: maxCount,
		mtPlace: mtPlace,
		mtTime: mtTime,
		mtContent: mtContent,
		mtDate: mtDate,
		userName: userName,
	});

	//수정 함수
		const submitUpdate = (e) => {
			e.preventDefault();
			fetch("http://localhost:8000/board2",{
				method : "POST",
				headers : {
					"Content-Type": "application/json; charset=utf-8"
				},
				body : JSON.stringify(meeting)
			}).then(res=> res.text()).then(
				res=> alert(res)
				
			);
			closeModal(); 
			window.location.reload(); //페이지 새로고침
		}


	const changeValue = (e) => {
		setMeeting({
			...meeting,
			[e.target.name]: e.target.value
		});
	}


	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }



	return (
		
		<div>
			
			<button onClick={openModal} className="box-b" >수정</button>
			{
				
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>
					{/* =====모달 바디 시작=====*/}
					<form>
						<div className="box">
						<h5>내용 수정</h5> 
						{/* <div onChange={changeValue} value={meeting.userName} name="userName"/> */}
						제목 : <input onChange={changeValue} value={meeting.mtTitle} name="mtTitle"/><br />
						최대인원 : <input onChange={changeValue} value={meeting.maxCount} name="maxCount"/>명<br />
						장소 : <input onChange={changeValue} value={meeting.mtPlace} name="mtPlace"/><br />
						날짜 : <input type ="date"onChange={changeValue} value={meeting.mtDate} name="mtDate"/><br />
						시간 : <input type ="time"onChange={changeValue} value={meeting.mtTime} name="mtTime"/><br />
						<textarea onChange={changeValue} value={meeting.mtContent} name="mtContent"></textarea><br />
						<button onClick={submitUpdate} className="box-b">수정완료</button>
						</div>
					</form>
				</ModalSetting>
			}
		</div>
	);
};

export default UpdateModal;