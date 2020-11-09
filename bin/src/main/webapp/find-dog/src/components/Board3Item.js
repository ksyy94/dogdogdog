import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

const ItemStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  //grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
`;
const Board3Item = (props) => {
	const { id, catagory, name, bread, age,date, sex, place, image1, image2, content } = props.board3;

	return (
		<ItemStyle>
			<div>{catagory}</div>
			<img src={"\\images\\"+image1} alt="" height="200px" />
			<div>동물 종류 : {bread}</div>
			<div>장소 : {place}</div>
			<div>날짜 : {date}</div>
			<Link to={"/board3/detail/" + id}><button>자세히 보기</button></Link>
		</ItemStyle>
	);
};

export default Board3Item;