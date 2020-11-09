import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Board1List from './Board1List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const Board3ListStyle = styled.div`
	display:grid;
	grid-template-columns:auto;
	padding: 20px;
`;
const TitleStyle = styled.div`
	font-size: 30px;
	font-weight: 10;
`;
const SubtitleStyle = styled.div`
	font-size: 15px;
	font-weight: 10;
`;
const ButtonBoxStyle = styled.div`
	display: grid;
	grid-template-columns: auto;
	justify-content: end;
`;
const Board3IndexBoxStyle = styled.div`
	display:grid;
	grid-template-columns: 90% 10%;	
	padding-bottom:15px;
	`;
const ButtonStyle = styled.button`
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
const SelectStyle = styled.select`
  height: 45px;
  width: 100px;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;


const Board1 = () => {
	const [place, setPlace] = useState("부산진구");
	const isLogin = useSelector((store) => store.isLogin);
	function inputHandle(e) {
		setPlace(e.target.value);
		console.log(place);

	}


	return (
		<div>
			<Board3ListStyle>
				<Board3IndexBoxStyle>
					<div>
						<TitleStyle>우리동네 정보를 공유합니다<br /></TitleStyle>
						<SelectStyle type="text" name="place" onChange={inputHandle}>
							<option name="place" value="부산진구">부산진구</option>
							<option name="place" value="남구">남구</option>
							<option name="place" value="강서구">강서구</option>
							<option name="place" value="해운대구">해운대구</option>
							<option name="place" value="서구">서구</option>
							<option name="place" value="북구">북구</option>
							<option name="place" value="수영구">수영구</option>
							<option name="place" value="동래구">동래구</option>
							<option name="place" value="금정구">금정구</option>
						</SelectStyle>
					</div>
					{isLogin ?
					(
					<ButtonBoxStyle><Link to={"/board1/write"}><ButtonStyle>글쓰기</ButtonStyle></Link>	</ButtonBoxStyle>
					)
					:
					(null)}
				</Board3IndexBoxStyle>
				<Board1List addr={place} />
				<hr />
			</Board3ListStyle>
		</div>
	);
};

export default Board1;