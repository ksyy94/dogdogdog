package com.cos.jwt.domain.board1;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Board1CommentRepository extends JpaRepository<Board1Comment, Integer>{

	@Query(value = "SELECT * FROM BOARD1COMMENT WHERE BOARD1ID=:commentId", nativeQuery = true)
	List<Board1Comment> mList(int commentId);
}
