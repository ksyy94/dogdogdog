import React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const SiderBar = () => {
	return (
		<div>
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
		</div>
	);
};

export default SiderBar;