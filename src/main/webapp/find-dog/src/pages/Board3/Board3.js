import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Board3List from './Board3List';
import { useSelector } from 'react-redux';

const Board3ListStyle= styled.div`
	display:grid;
	grid-template-columns:auto;
	padding: 20px;
`;
const TitleStyle= styled.div`
	font-size: 30px;
	font-weight: 10;
`;
const SubtitleStyle= styled.div`
	font-size: 15px;
	font-weight: 10;
`;
const ButtonBoxStyle = styled.div`
	display: grid;
	grid-template-columns: auto;
	justify-content: end;
`;
const Board3IndexBoxStyle= styled.div`
	display:grid;
	grid-template-columns: 90% 10%;	
	padding-bottom:15px;
	`;
const ButtonStyle= styled.button`
	background-color: #FA827A;
	margin: 10px;
  	color: white;
  	width: 80px;
  	height: 40px;
  	font-size: 15px;
  	//font-weight: 700;
  	border-radius: 6px;
	border: 0px;
	cursor: pointer;
`;
const Board3 = () => {

	
	const isLogin = useSelector((store) => store.isLogin);
	return (
		<Board3ListStyle>
			<Board3IndexBoxStyle>
				<div>
				<TitleStyle>실종 동물 긴급찾습니다.<br/></TitleStyle>
				<SubtitleStyle>글을 작성하시면 전단지가 생성되며, 인쇄하여 사용하실수 있습니다.!</SubtitleStyle>
				</div>
				{isLogin ?
					(
				<ButtonBoxStyle><Link to={"/board3/write"}><ButtonStyle>글쓰기</ButtonStyle></Link>	</ButtonBoxStyle>
					)
					:
					(null)
				}
			</Board3IndexBoxStyle>
					
			<Board3List/>
			<hr/>
		</Board3ListStyle>
	);
};

export default Board3;