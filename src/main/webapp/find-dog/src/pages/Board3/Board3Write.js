import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MapContainer from '../../components/MapContainer';
import styled from "styled-components";

const FormStyle = styled.form`
  display: grid;
  justify-items: left;
`;
const InputBoxStyle = styled.div`
display:grid;
grid-template-columns: auto auto;
`;
const InputStyle = styled.input`
  height: 45px;
  width: 80%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;
const SelectStyle = styled.select`
  height: 45px;
  width: 80%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;
const ButtonStyle = styled.button`
  background-color: #003458;
  color: white;
  width: 80px;
  height: 45px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 6px;
  border: 0px;
  cursor: pointer;
`;
const Board3Write = () => {

	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "", //번호
		image1: "",//이미지1
		image2: "",//이미지2
		catagory: "",//실종, 제보
		type: "",//고양이, 강아지
		name: "",//동물 이름
		bread: "",//동물 종류
		age: "",//나이
		sex: "",//성별
		date: "",//발견날짜
		place: "",//발견장소
		content: "",//내용
		property: "",//특징
	});
	const uploadImg = async (e) => {
		const file = e.target.files[0];
		setBoard3(prevState => {
			return {
				...prevState,
				[e.target.name]: file
			};
		});
	}
	// 이미지 base64 로 변환해서 올리는 방법
	/*
	const uploadImg = async (e) => {
		console.log(e.target.files);
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		console.log(1, base64);
		setBoard3Image({ image: base64 });
		setBoard3(prevState => {
			return {
				...prevState,
				[e.target.name]: base64;
			};
		});
	}
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {

			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		})
	}
	*/
	function inputHandle(e) {
		setBoard3((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}
	function selectHandle(e) {
		setBoard3((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}
	function submitPost(e) {
		e.preventDefault();

		console.log("submitPost() 실행");

		let form = document.getElementById("form");
		const formData = new FormData(form);

		// if (board3.image1 === "" && board3.image2 !== "") {
		// 	formData.append("image1", board3.image2);
		// 	formData.append("image2", board3.image2);	
		// }
		// else if (board3.image1 !== "" && board3.image2 === "") {
		// 	formData.append("image1", board3.image1);
		// 	formData.append("image2", board3.image1);			
		// }
		// else if (board3.image1 === "" && board3.image2 === "") {
		// 	alert("사진을 한장이상 업로드 해주세요!");
		// }
		if (board3.image1 === "" && board3.image2 === "") {
			alert("사진을 한장이상 업로드 해주세요!");
		}
		else {
			console.log("fetch 실행");
			fetch("http://localhost:8000/board3/write", {
				method: "POST",
				headers: {
					"Authorization": localStorage.getItem("Authorization"),
				},
				body: formData
			})
				.then(res => res.text())
				.then(res => {
					if (res === "ok") {
						alert("글이 등록되었습니다.");
						//history.push("/board3");
					} else {
					};
				});
		}
	}
	function setLatLng(lat, lng) {
		console.log(30, lat);
		console.log(30, lng);
		setLocation({
			lat: lat,
			lng: lng
		});
	}
	function showMap() {
		setVisible(true);
	}
	function savePlace() {
		setVisible(false);
		console.log(1000, location);
	}
	const [place, setPlace] = useState("");
	const [visible, setVisible] = useState(false);
	const [location, setLocation] = useState({
		title: "",
		lat: "",
		lng: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		setPlace(board3.place);
		console.log(1, place);
		showMap();
	};
	return (
		<div>
			<FormStyle id="form" encType="multipart/form-data">
				<label>사진 첨부</label>
				<br />
				<InputStyle
					type="file"
					name="image1"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<InputStyle
					type="file"
					name="image2"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<label>카테고리</label>
				<SelectStyle
					name="catagory"
					value={board3.catagory}
					onChange={selectHandle}>
					<option selected value="선택안함">선택안함</option>
					<option value="실종">실종</option>
					<option value="제보">제보</option>
				</SelectStyle>
				<br />
				<label>동물 종류</label>
				<SelectStyle
					name="type"
					value={board3.type}
					onChange={selectHandle}>
					<option selected value="선택안함">선택안함</option>
					<option value="강아지">강아지</option>
					<option value="고양이">고양이</option>
				</SelectStyle>
				<br />
				<label>이름</label>
				<InputStyle
					type="text"
					onChange={inputHandle}
					name="name"
					value={board3.name}
					placeholder="이름을 입력하세요"
				/>
				<br />
				<label>품종</label>
				<InputStyle
					type="text"
					onChange={inputHandle}
					name="bread"
					value={board3.bread}
					placeholder="품종을 입력하세요"
				/>
				<br />
				<label>나이</label>
				<SelectStyle
					name="age"
					value={board3.age}
					onChange={selectHandle}>
					<option selected value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
				</SelectStyle>
				<br />
				<label>성별</label>
				<SelectStyle
					name="sex"
					value={board3.sex}
					onChange={selectHandle}>
					<option selected value="모름">모름</option>
					<option value="수컷">수컷</option>
					<option value="암컷">암컷</option>
					<option value="중성화된 수컷">중성화된 수컷</option>
					<option value="중성화된 암컷">중성화된 암컷</option>
				</SelectStyle>
				<br />
				<label>당시의 시간</label>
				<InputStyle
					type="date"
					onChange={inputHandle}
					value={board3.date}
					name="date" />
				<br />
				<label>당시의 장소</label>
				<InputBoxStyle>
					<InputStyle
						type="text"
						onChange={inputHandle}
						name="place"
						value={board3.place}
						placeholder="장소를 입력하세요"
					/><button onClick={handleSubmit}>검색</button>
				</InputBoxStyle>

				{visible ? <MapContainer searchPlace={place} latLng={setLatLng} /> : null}
				<br />
				{visible ? <button onClick={savePlace}>장소 저장</button> : null}
				<br />
				<br />
				<label>특징을 입력하세요</label>
				<textarea
					onChange={inputHandle}
					name="property"
					defaultValue={board3.property}></textarea>
				<br />
				<label>내용을 입력하세요</label>
				<textarea
					onChange={inputHandle}
					name="content">{board3.content}</textarea>
				<br />
				<input type="hidden" name="lat" value={location.lat} />
				<input type="hidden" name="lng" value={location.lng} />
				<ButtonStyle onClick={submitPost}>등록</ButtonStyle>
			</FormStyle>
		</div>
	);
};

export default Board3Write;