import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

	const dispatch = useDispatch();
	const history = useHistory();

	//디자인
	const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 16,
		},
	};
	const tailLayout = {
		wrapperCol: {
			offset: 8,
			span: 16,
		},
	};


	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const submitLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(user)
		}).then(res => {
			// 로컬 스토리지 저장
			for (let header of res.headers.entries()) {
				if (header[0] === "authorization") {
					localStorage.setItem("Authorization", header[1]);
				} else {
				}
			}
			return res.json();
		}).then(res => {
			
			if (res.state === "ok") {
				localStorage.setItem("user", user.username);
				localStorage.setItem("email",res.email);
				localStorage.setItem("place",res.place);
				localStorage.setItem("phoneNumber",res.phoneNumber);
				localStorage.setItem("image",res.image);
				alert("로그인 완료");

				// 로그인 상태 값 리덕스 저장
				dispatch(login());
				history.push("/board1");
			} else {
				alert('아이디 혹은 비번을 다시 입력하세요!');
			}
		});
	}

	const changeValue = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}
	
	return (
		<div>

			<Form
				{...layout}
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input type="username" onChange={changeValue} value={user.username} name="username" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password type="password" onChange={changeValue} value={user.password} name="password" />
				</Form.Item>

				<Form.Item {...tailLayout} name="remember" valuePropName="checked" >
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit" onClick={submitLogin} >
						로그인
        </Button>
				</Form.Item>
			</Form>

			{/* <form>
				<input type="text" onChange={changeValue} value={user.username} name="username" placeholder="아이디를 입력하세요." />
				<input type="password" onChange={changeValue} value={user.password} name="password" placeholder="아이디를 입력하세요." />
				<button onClick={submitLogin}>로그인</button>
				<button ><Link to="Join">회원가입</Link></button>
			</form> */}
		</div>
	);
};


export default Login;