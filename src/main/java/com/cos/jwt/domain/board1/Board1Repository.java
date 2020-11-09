package com.cos.jwt.domain.board1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface Board1Repository extends JpaRepository<Board1, Integer>{
	@Query(value = "select * from board1 where catagory=:catagory && addr=:addr", nativeQuery = true)
	List<Board1> mList(String catagory, String addr);
}
