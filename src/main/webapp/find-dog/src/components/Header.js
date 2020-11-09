import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const HeaderStyle = styled.div`
	display: grid;
	background-color: #FA827A;
	grid-template-columns: auto 15% 15% 15% 15% auto 15% auto;
	padding: 10px 10px;
	//border: 2px solid skyblue;
`;
const LinkStyle = styled.a`
	color: white;
	width:300px;
	height:30px;
	color: white;
`;
const Header = () => {
	return (
			<HeaderStyle>
				<div></div>
				<Link to="/board1"><LinkStyle>정보를 알려드립니다.</LinkStyle></Link>
				<Link to="/board2"><LinkStyle>갱얼쥐칭구들아 만나자</LinkStyle></Link>
				<Link to="/board3"><LinkStyle>가족을 찾습니다.</LinkStyle></Link>
				<Link to="/board5"><LinkStyle>지도로 찾기</LinkStyle></Link>
				<div></div>
				<div></div>
				<div></div>
		</HeaderStyle>
	);
};

export default Header;

