import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	text-align: center;
`;
const Footer = () => {
	return (
		<FooterStyle >
			<h6 >PETGRAM</h6><br/>
			<h6 >참여자 : 곽형갑 이태규 김소연 이동우</h6><br/>
			<h6 >부산 IT 교육센터</h6>
		</FooterStyle>
	);
};

export default Footer;