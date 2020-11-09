package com.cos.jwt.domain.board3;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Board3CommentRepository extends JpaRepository<Board3Comment, Integer>{

	@Query(value = "SELECT * FROM BOARD3COMMENT WHERE BOARD3ID=:commentId", nativeQuery = true)
	List<Board3Comment> mList(int commentId);
}
