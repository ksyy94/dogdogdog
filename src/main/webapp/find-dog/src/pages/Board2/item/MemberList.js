import React, { useState, useEffect } from 'react';
import ModalSetting from './ModalSetting';
import './MemberList.css';
import UpdateModal from './UpdateModal';


const MemberList = (props) => {
	let { mtId, userName } = props.meeting;
	const [mtmList, setMtmList] = useState([]);

	
	// @GetMapping("/board2/mList/{id}")



	useEffect(() => {
		fetch("http://localhost:8000/board2/mList/" + mtId).then(res => res.json()).then(
			res => {
				setMtmList(res);
			}
		);
	}, [])



	const mtm = {
		userName: localStorage.user,
		mtId: mtId,
	};


	//참가 버튼
	const submitInsert = () => {

		// e.preventDefault();
		fetch("http://localhost:8000/board2/mList", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(mtm)
		}).then(res => res.text()).then(
			res => alert(res)

		);
		window.location.reload(); //페이지 새로고침
	}

	//참가 취소버튼
	const submitCancel = () => {

		// e.preventDefault();
		fetch("http://localhost:8000/board2/mList", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(mtm)
		}).then(res => res.text()).then(
			res => alert(res)

		);
		window.location.reload(); //페이지 새로고침
	}

	//게시글 삭제
	const submitDelete = () => {
		console.log(mtm);
		fetch("http://localhost:8000/board2/", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(mtm)
		}).then(res => res.text()).then(
			res => alert(res)

		);
		window.location.reload(); //페이지 새로고침
	}


	//모달
	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }


	// const [type, settype] = useState(
	// 	1
	// );


	return (
		<div>
			<button onClick={openModal} className="box-b">참가현황</button>
			{mtmList.indexOf(localStorage.user) ? <button onClick={submitInsert} className="box-b">참가</button> :
				<button onClick={submitCancel} className="box-b" style={{ backgroundColor: "red" }}>취소</button>
			}


			{
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>

					<div className="box">
						<h5 >참가자</h5>
						<ul>
							{mtmList.map(
								member =>
									<li><span>1</span>{member}</li>
							)}
						</ul>
						{userName === localStorage.user ? <UpdateModal key={props.meeting.mtId} meeting={props.meeting} /> : null}
						{userName === localStorage.user ? <button className="box-b" onClick={submitDelete}>삭제</button> : null}
					</div>





				</ModalSetting>
			}
		</div>
	)






};

export default MemberList;