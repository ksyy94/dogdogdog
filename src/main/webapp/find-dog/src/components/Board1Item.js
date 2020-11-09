import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  //grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
  width: 300px;
`;
const ImgStyle = styled.img`
	width: 100%;
  height: 200px;
`;
const Board1Item = (props) => {
	const { id, catagory, title, place, image1, image2, content,user } = props.board1;

	return (
		<ItemStyle>
			<div>
				<div>{catagory}</div>
				<ImgStyle src={"\\images\\" + image1} alt="" height="200px" />
				<div>제목 : {title}</div>
				<div>작성자 : {user.username}</div>
				<div><p width="200px">장소 : {place}</p></div>
				<Link to={"/board1/detail/" + id}><button>자세히 보기</button></Link>
			</div>
		</ItemStyle>
	);
};

export default Board1Item;