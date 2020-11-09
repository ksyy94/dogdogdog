import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board3CommentItem from '../../components/Board3CommentItem';

const FromStyle = styled.form`
	display : grid;
	grid-template-columns : auto auto auto;
`;
const CommentItemStyle =styled.div`

`;
const ImageStyle =styled.div`
	 width: 50px;
  height: 100%;
`;
const Board3Comment = (props) => {

	const id = props.id;

	//가져올 댓글 선언
	const [comments, setComments] = useState([]);

	//등록할 댓글 초기화
	const [commentInput, setCommentInput] = useState({
		id: "",
		content: "",
		boardId: "",
		userId: ""
	});

	//해당하는 게시글의 댓글 그려줌
	useEffect(() => {

		console.log("해당글의 댓글 목록");

		fetch("http://localhost:8000/board3/comment/" + id, {
			method: "GET",
		}).then((res) => res.json())
			.then((res) => {
				setComments(res);
			});
	}, []);

	function inputHandle(e) {
		setCommentInput((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}
	function submitCommentDelete(commentId) {
		console.log("submitCommentDelete() 실행");
		fetch("http://localhost:8000/board3/comment/delete/" + commentId, {
			method: "DELETE",
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					setComments(comments.filter((comment) => comment.id !== commentId));
					//삭제하고 다른게 있으면 삭제해줌..
					alert("삭제 되었습니다.");
				}
			})
	}

	//댓글 등록
	function submitCommentWrite(e) {
		console.log("submitCommentWrite() 실행");

		fetch("http://localhost:8000/board3/comment/write/" + id, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			},
			body: JSON.stringify(commentInput)

		}).then((res) => res.text())
			.then((res) => {
				console.log("res", res);
				if (res === "ok") {
					// setComments(comments.filter((comment) => comment.id !== ));
					alert("댓글이 등록되었습니다.");
				}
				else {
					alert("댓글등록실패");
				}
			});
	}

	return (
		<div>
			<FromStyle>
				<div><ImageStyle src={"\\images\\" + localStorage.image }alt=""/></div>
				<div>
					<div>
						<div>{localStorage.user}</div>
				<input type="text"
					onChange={inputHandle}
					name="content"
					value={commentInput.content} />
				</div>
				</div>
				<button onClick={submitCommentWrite}>댓글 등록</button>
				<br/>
			</FromStyle>
			<CommentItemStyle>
				{comments.map((comment) => (
					<Board3CommentItem key={comment.id} comment={comment} submitCommentDelete={submitCommentDelete} />
				))}
			</CommentItemStyle>
		</div>
	);
};

export default Board3Comment;