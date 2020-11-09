import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';

const { Option } = Select;

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		password: '${label} is not validate password!',
		email: '${label} is not validate email!'
	},
};

const Join = (props) => {
	const [user, setUser] = useState({
		username: "",
		password: "",
		place: "",
		email: "",
		phoneNumber: ""
	});

	const onFinish = (values) => {
		console.log(values);
	};


	function inputHandle(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user)
	}

	function join(e) {
		e.preventDefault();

		fetch("http://localhost:8000/joinProc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.text())
			.then((res) => {
				console.log("22", res);
				if (res === "ok") {
					alert("가입 성공");
					props.history.push("/");
				} else {
					alert("가입 실패");
				}
			});
	}
	return (


		<div>
			<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
				<Form.Item
					name="username"
					label="이름"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input type="text"
						name="username"
						onChange={inputHandle}
						value={user.username} placeholder="이름 입력" />
				</Form.Item>
				<Form.Item
					name={['user', 'password']}
					label="비밀번호"

				>
					<Input type="password"
						name="password"
						onChange={inputHandle}
						value={user.password} placeholder="비밀번호 입력" />
				</Form.Item>


				<Form.Item
					name={['user', 'phoneNumber']}
					label="폰번호"
				>
					<Input type="text"
						name="phoneNumber"
						onChange={inputHandle}
						value={user.phoneNumber} placeholder="폰번호 입력" />
				</Form.Item>

				<Form.Item label="지역" type="text">
					<Select type="text" name="place" onChange={inputHandle}>
						<option name="place" value="진구">진구</option>
						<option name="place" value="남구">남구</option>
					</Select>
				</Form.Item>


				{/* <Form.Item
					name={['user', 'place']}
					label="지역"
				>
					<Input type="text"
						name="place"
						onChange={inputHandle}
						value={user.place} placeholder="지역 입력" />
				</Form.Item> */}


				<Form.Item
					name={['user', 'email']}
					label="이메일"
				>
					<Input type="text"
						name="email"
						onChange={inputHandle}
						value={user.email}
						placeholder="메일 입력" />
				</Form.Item>

				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit" onClick={join}>
						가입하기
        </Button>
				</Form.Item>
			</Form>


			{/* <form>
				<br />
				<h2>회원 정보 입력</h2>
				<input
					type="text"
					name="username"
					onChange={inputHandle}
					value={user.username}
					placeholder="username 입력" />
				<br />

				<input
					type="password"
					name="password"
					onChange={inputHandle}
					value={user.password}
					placeholder="password 입력" />
				<br />

				<input
					type="text"
					name="place"
					onChange={inputHandle}
					value={user.place}
					placeholder="place 입력" />
				<br />

				<input
					type="text"
					name="email"
					onChange={inputHandle}
					value={user.email}
					placeholder="email 입력" />
				<br />
				<button onClick={join}>가입</button>
			</form> */}
		</div>
	);
};

export default Join;