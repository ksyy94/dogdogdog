import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';


const Login = (props) => {
	const isLogin = useSelector((store) => store.isLogin);
	const dispatch = useDispatch();

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

					console.log("헤더 찍힘");
					console.log(header);
				} else {
				}
			}
			return res.text();

		}).then(res => {
			if (res === "ok") {
				console.log("2222", user.username, user.password);
				localStorage.setItem("user", user.username);
				alert("로그인 완료");
				console.log("1111");
				// 로그인 상태 값 리덕스 저장
				dispatch(login());
				props.history.push("/");
				console.log(user);
			} else {
				alert('아이디 혹은 비번을 다시 입력하세요!');
			}
		});
		console.log(isLogin);
	}


	const changeValue = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
		console.log(user);
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