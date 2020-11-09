import React from 'react';
import { HashRouter as Router,Route, Switch } from 'react-router-dom';
import Login from '../pages/login/Login';
import Board1 from '../pages/Board1/Board1';
import Board2 from '../pages/Board2/Board2';
import Board3 from '../pages/Board3/Board3';
import Join from '../pages/join/Join';
import DogJoin from '../pages/join/DogJoin';
import ModalPage from '../pages/Board2/ModalPage';
import Board4_1 from '../pages/Board4/Board4_1';
import Board3Modify from '../pages/Board3/Board3Modify';
import Board3Detail from '../pages/Board3/Board3Detail';
import Board3Write from '../pages/Board3/Board3Write';

import Board1Write from '../pages/Board1/Board1Write';
import Modify from '../pages/join/Modify';
import Home from '../pages/home/Home';
import styled from 'styled-components';
import Board5 from '../pages/Board5Test/Board5';

const MainStyle = styled.div`
	display: grid;
	grid-template-columns: auto;
	margin: 30px;
	//width: 1000px;
`;
const Main = () => {
	return (
		<MainStyle>
			<Switch>
				<Route path="/" exact={true} component={Home}/>
				<Route path="/user/modify/:username" exact={true} component={Modify} />
				<Route path="/login" exact={true} component={Login} />
				<Route path="/join" exact={true} component={Join} />
				<Route path="/joindog" exact={true} component={DogJoin} />
				<Route path="/board1" exact={true} component={Board1} />
				<Route path="/board2" exact={true} component={Board2} />
				<Route path="/board2/modal" exact={true} component={ModalPage} />
				<Route path="/board3" exact={true} component={Board3} />
				<Route path="/board3/detail/:id" exact={true} component={Board3Detail} />
				<Route path="/board3/modify/:id" exact={true} component={Board3Modify} />
				<Route path="/board3/write" exact={true} component={Board3Write} />
				<Route path="/map" exact={true} component={Board4_1} />
				<Route path="/board1/write" exact={true} component={Board1Write}/>
				<Route path="/board5" exact={true} component={Board5}/>
			</Switch>
		</MainStyle>
	);
};

export default Main;