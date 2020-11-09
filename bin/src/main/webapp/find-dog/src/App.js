
import './App.css';
import Header from './components/Header';
import React, { useEffect } from 'react';
import { login } from './store';
import { useDispatch } from 'react-redux';
import Main from './components/Main';
import Footer from './components/Footer';
import Lside from './components/Lside';
import Rside from './components/Rside';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiderBar from './components/SiderBar';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
/* 건들지 마시오!
**************************
***************************
**************************
*******건들지 마시오***********
*************************
*************************
**************************
***********************
************************
*/
const MainListStyle = styled.div`
display : grid;
  grid-template-columns: auto auto auto;
`;


const  AppStyle = styled.div`
font-family: "62570체";
`;

function App() {

  //로그인 상태관리
  const dispatch = useDispatch();

  useEffect(() => {
    let jwtToken = localStorage.getItem("Authorization");
    if (jwtToken !== null) {
      dispatch(login());
    }
    console.log(jwtToken);
  });
const { Header1, Content, Sider } = Layout;

  return (
    <AppStyle>
  <Layout>
    <Header/>
    <Layout>
     <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1"  icon={<UserOutlined />}><Link to="/board1">게시판1</Link></Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}><Link to="/board2">게시판2</Link></Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />} ><Link to="/board3">게시판3</Link></Menu.Item>
            <Menu.Item key="4" icon={<NotificationOutlined />} ><Link to="/map">지도</Link></Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Main/>
        </Content>
        <Sider width={200} className="site-layout-background">
  
      <Chat/>
      </Sider>
      </Layout>
    </Layout>
  </Layout>
            <Footer></Footer>
  </AppStyle>
  );
}
export default App;
