import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
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
const Board4Item = (id1) => {
	const [board3,setBoard3] = useState({
		id: "",
		catagory: "",
		name: "",
		bread: "",
		age: "",
		sex: "",
		date:"",
		place: "",
		image1: "",
		image2: "",
		content: "",
		property:"",
		type:"",
		user:""
	});
	useEffect(()=>{
		console.log(123,id1.id);
		fetch("http://localhost:8000/board4/" + id1.id, {
			method: "GET",

		}).then((res) => 	res.json())
			.then((res) => {
				console.log(res);
				setBoard3(res);
			});
	},[id1]);
	
	return (
		<div>
			<SectionStyle id="wanted">
				<Section1Style>{board3.type}를 찾습니다</Section1Style>
				<Section2Style>
					{/* <TextStyle>여러분의 제보가 큰힘이 됩니다.</TextStyle> */}
					<div><ImageStyle src={"\\images\\" + board3.image1} /></div>
					<div><ImageStyle src={"\\images\\" + board3.image2} /></div>
				</Section2Style>
				<Section3Style>
					<div>{board3.bread} ({board3.sex}/{board3.age}살)</div>
					<div>{board3.date},{board3.place} 근처</div>
				</Section3Style>
				<div>내용 : {board3.content}</div>
				<div>특징 : {board3.property}</div>
			</SectionStyle>
		</div>
	);
};
export default Board4Item;