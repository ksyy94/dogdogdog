import React, { useEffect, useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useHistory, Link } from 'react-router-dom';
import styled from "styled-components"
import Board3Comment from './Board3Comment';

const DetailStyle = styled.div`
display : grid;
grid-template-columns : auto auto;
`;
const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
`;
const SectionStyle = styled.div`
display : grid;
grid-template-columns: auto;
background-color:white;
width: 700px;
height: 800px;
`;
const Section1Style = styled.div`
display: grid;
grid-template-columns: auto;
color: red;
border: 2px solid black;
background-color:white;
font-size: 65px;
font-weight:bold;
text-shadow: 3px 3px black;
text-align: center;
align-content: center;
`;
const Section2Style = styled.div`
display: grid;
grid-template-columns: auto auto;
background-color:white;
border:2px solid black;
margin: 10px 10px;
`;
const Section3Style = styled.div`
display: grid;
background-color: red;
padding: 10px,10px;
color: white;
text-align: center;
text-shadow: 1px 1px black;
font-size: 25px;
font-weight: bold;
align-content:center;
`;

const Section4Style = styled.div`
`;
const TextStyle = styled.div`
display:grid;
text-align: center;
background-color:rgba(192,192,192,0.5);
/* 겹치듯이 사용할려면 무조건 렐러티브 */
`;
const DateStyle = styled.div`
color : blue;
`;
const ButtonBoxStyle = styled.div`
 display: grid;
 width: 700px;
  grid-template-columns: auto;
  justify-content: end;

`;
const Board3CommentStyle = styled.div`
display: grid;
margin-left : 20px;
	width: 600px;
`;
const Board3Detail = (props) => {

	const id = props.match.params.id;
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "",
		catagory: "",
		name: "",
		bread: "",
		age: "",
		sex: "",
		date: "",
		place: "",
		image1: "",
		image2: "",
		content: "",
		property: "",
		type: "",
		user: ""
	});

	//해당하는 페이지의 데이터를 들고옴
	useEffect(() => {
		fetch("http://localhost:8000/board3/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setBoard3(res);
			});

	}, []);

	//삭제버튼 눌렀을때 실행
	function submitDelete(e) {

		e.preventDefault();
		console.log("submitDelete() 실행");

		fetch("http://localhost:8000/board3/delete/" + id, {
			method: "DELETE",
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("삭제 되었습니다.");
					history.push("/board3");
				}
			})
	}

	//전단지만들기 버튼 눌렀을때 실행
	function submitMake(e) {
		e.preventDefault();
		domtoimage.toBlob(
			document.getElementById('wanted')
			, { width: 1080, height: 1080 })
			.then(function (blob) {
				console.log(blob);
				saveAs(blob, 'myImage.png');
				//history.push("/board3/detail/" + id);
			});
	}
	return (
		<DetailStyle>
			<div>
			<SectionStyle id="wanted">
				<Section1Style>{board3.type}를 찾습니다</Section1Style>
				<Section2Style>
					<div><ImageStyle src={"\\images\\" + board3.image1} alt=""  /></div>
					<div><ImageStyle src={"\\images\\" + board3.image2} alt=""  /></div>
				</Section2Style>
				<TextStyle>여러분의 제보가 큰 힘이 됩니다!</TextStyle>
				<Section3Style>
					<div>{board3.bread} ({board3.sex}/{board3.age}살)</div>
					<div>{board3.date}, {board3.place} 근처</div>
				</Section3Style>
				<Section4Style>
				<DateStyle>날짜 : {board3.date}</DateStyle>
				<div>내용 : {board3.content}</div>
				<div>특징 : {board3.property}</div>
				<div>* 동물을 찾으면 직접 전단지를 수거하겠습니다. 떼지 말아주세요! </div>
				</Section4Style>
				<div>연락처 : {board3.user.phoneNumber}</div>
			</SectionStyle>
			<br/>
			<ButtonBoxStyle>
			{board3.user.username === localStorage.user ?
				<Link to={"/board3/modify/" + id}><button>수정</button></Link> : null}
			{board3.user.username === localStorage.user ? <button onClick={submitDelete}>삭제</button> : null}

			<div><button onClick={submitMake}>전단지 만들기</button></div>
			</ButtonBoxStyle>
			</div>
				<Board3CommentStyle>
			<Board3Comment id={id} />
			</Board3CommentStyle>
		</DetailStyle >
	);
};

export default Board3Detail;