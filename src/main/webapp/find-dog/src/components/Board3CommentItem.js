import React from 'react';
import styled from 'styled-components';

const CommentItemStyle = styled.div`
	display: grid;
	grid-template-columns: 20% 80%;
	border: 2px solid #003458;
	border-radius: 6px;
	margin: 5px 5px;
`;
const UserImageStyle = styled.img`
	 width: 100%;
  height: 50px;
`;
const CommentContentStyle= styled.div`
	display: grid;
	grid-template-rows: auto auto;
`;
const NameStyle = styled.div`
	//text-align:center;
	font-weight:bold;
`;
const Board3CommentItem = (props) => {

	const comment = props.comment;
	const submitCommentDelete = props.submitCommentDelete;

	return (
		<CommentItemStyle>
			<div><UserImageStyle src={"\\images\\" + comment.user.image }alt=""/></div>
			<CommentContentStyle>
				<NameStyle>{comment.user.username}</NameStyle>
				<div>{comment.content}</div>
			<div>
				{comment.user.username === localStorage.user ?
					<button onClick={() => submitCommentDelete(comment.id)}>삭제 </button>
					: null}
			</div>
			</CommentContentStyle>
		</CommentItemStyle>
	);
};

export default Board3CommentItem;