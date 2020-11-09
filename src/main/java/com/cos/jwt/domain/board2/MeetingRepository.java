package com.cos.jwt.domain.board2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {

	
	
	@Query(value = "select * from meeting order by mtid desc", nativeQuery = true)
	List<Meeting> mList();
	
	@Query(value = "select * from meeting order by mtId desc limit :startList ,:listSize", nativeQuery = true)
	List<Meeting> mPageList(int startList, int listSize);
	
	@Query(value = "select count(mtid) from meeting", nativeQuery = true)
	int mPageCount();
	
	
}
