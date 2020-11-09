import React from 'react';
import { Card, Button } from 'react-bootstrap'

const ListItem = ({meeting}) => {
	
// 글번호(필요할까?),글제목,생성시간,장소,글쓴이,현재인원,최대인원 
// 진행바, 
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>{meeting.mtTitle}</Card.Title>
					<Card.Text>
						{meeting.mtContent}
    				</Card.Text>
					<Card.Text>
						{meeting.mtPlace} <br/>
						{meeting.mtCount}/{meeting.maxCount}
					</Card.Text>
					<Button variant="success">상세</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ListItem;