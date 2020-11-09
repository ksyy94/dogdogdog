import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import styled from 'styled-components';

const RsideStyle = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 15px;
border: 2px #FA827A;
justify-content: end;
padding: 10px 10px;
//justify-content:end;
//transform:  rotate(90deg);
`;
const Rside = () => {
	
	const isLogin = useSelector((store) => store.isLogin);
	const user = localStorage.getItem("user")
	const dispatch = useDispatch();
	const logoutbutton = () => {
		localStorage.removeItem("Authorization");
		localStorage.removeItem("user");
		dispatch(logout());
		console.log(isLogin);
	}
	return (
		<RsideStyle>
		
		{isLogin ?
					(
						<>
							<Link to="joindog">강아지 등록</Link>
							<div onClick={logoutbutton}>로그아웃</div>
							<div><Link to={"/user/modify/"+user}>{user}님 환영합니다!</Link></div>
						</>
					)
					:
					(
						<>
						<div><Link to="login">로그인</Link></div>
						<div><Link to="join">회원가입</Link></div>
							
						</>
					)
				}
		</RsideStyle>
	);
};

export default Rside;