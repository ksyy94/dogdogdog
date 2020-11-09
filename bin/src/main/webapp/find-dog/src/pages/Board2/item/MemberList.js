import React, { useState, useEffect } from 'react';
import ModalSetting from './ModalSetting';

const MemberList = (props) => {
	let { mtId, userName } = props;
	const [mtmList, setMtmList] = useState([]);
	// @GetMapping("/board2/mList/{id}")

	

	useEffect(() => {
		fetch("http://localhost:8000/board2/mList/" + mtId).then(res => res.json()).then(
			res => {
				setMtmList(res);
			}
		);
	}, [])

	//모달
	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }



	return (
		<div>
			<button onClick={openModal} >상세보기</button>

			{
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>
					<h5 >참가자</h5>
					<div style={{ border: "3px solid blue" }}>
						{mtmList.map(
							member =>
								<li>{member}</li>
						)}
					</div>
					<button>수정</button>
					{userName ===localStorage.user ? <button>삭제</button>: null}
				

				</ModalSetting>
			}
		</div>
	)






};

export default MemberList;