import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

const ItemStyle = styled.div`
  display: grid;
  width: 300px;
  grid-column-gap: 10px;
  //grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
`;
const ImgStyle = styled.img`
	width: 100%;
  height: 200px;
`;
const ButtonStyle= styled.button`
	background-color: #FA827A;
	margin: 10px;
  	color: white;
  	width: 110px;
  	height: 30px;
  	font-size: 15px;
  	//font-weight: 700;
  	border-radius: 6px;
	border: 0px;
	cursor: pointer;
`;
const CategoryStyle =styled.div`

`;
const Board3Item = (props) => {
	const { id, catagory, name, bread, age,date, sex, place, image1, image2, content } = props.board3;
	return (
		<ItemStyle>
			<CategoryStyle>{catagory}</CategoryStyle>
			<ImgStyle src={"\\images\\"+image1} alt="" height="200px" />
			<div>동물 종류 : {bread}</div>
			<div>장소 : {place}</div>
			<div>날짜 : {date}</div>
			<Link to={"/board3/detail/" + id}><ButtonStyle>자세히 보기</ButtonStyle></Link>
		</ItemStyle>
	);
};

export default Board3Item;