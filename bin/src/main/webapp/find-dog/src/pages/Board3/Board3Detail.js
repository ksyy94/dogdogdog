import React, { useEffect, useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useHistory, Link } from 'react-router-dom';
import styled from "styled-components"
const ImageStyle = styled.img`
  width: 100%;
  height: 200px;
`;
const SectionStyle = styled.div`
background-color:white;
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
`;
const Section2Style = styled.div`
display: grid;
grid-template-columns: auto auto;
background-color:white;
border:2px solid black;
margin: 20px 20px;
`;
const Section3Style = styled.div`
display: grid;
background-color: red;
color: white;
text-align: center;
`;
const TextStyle = styled.div`
display: inline-block;
background-color: rgba(192,192,192,0.5);
position: relative;
/* 겹치듯이 사용할려면 무조건 렐러티브 */
top: 10px;
left: 50px;
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

	useEffect(() => {

		fetch("http://localhost:8000/board3/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBoard3(res);
			});
		fetch("http://localhost:8000/board3/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBoard3(res);
			});
	}, []);

	function submitDelete(e) {
		e.preventDefault();
		console.log("submitDelete() 실행");

		fetch("http://localhost:8000/board3/" + id, {
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
		<div>
			<SectionStyle id="wanted">
				<Section1Style>{board3.type}를 찾습니다</Section1Style>
				<Section2Style>
					{/* <TextStyle>여러분의 제보가 큰힘이 됩니다.</TextStyle> */}
					<div><ImageStyle src={"\\images\\" + board3.image1} alt="" height="200px" /></div>
					<div><ImageStyle src={"\\images\\" + board3.image2} alt="" height="200px" /></div>
				</Section2Style>
				<Section3Style>
					<div>{board3.bread} ({board3.sex}/{board3.age}살)</div>
					<div>{board3.date},{board3.place} 근처</div>
				</Section3Style>
				<div>내용 : {board3.content}</div>
				<div>특징 : {board3.property}</div>
				{board3.user.email}
			</SectionStyle>
			<div><Link to={"/board3/modify/" + id}><button>수정</button></Link></div>
			<div><button onClick={submitDelete}>삭제</button></div>
			<div><button onClick={submitMake}>전단지 만들기</button></div>
			{/* 댓글 */}

		</div>
	);
};

export default Board3Detail;