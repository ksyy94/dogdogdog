package com.cos.jwt.domain.board2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MeetingMemberRepository extends JpaRepository<MeetingMember, Integer> {

	@Query(value = "select userName from meetingmember where mtId= :id", nativeQuery = true)
	List<String> mList(int id);
	
//	@Query(value = "insert into meetingmember(username,mtid) values (:name,:id)", nativeQuery = true)
//	void mInsertMember(String name, int id);
	
//	@Query(value = "delete from meetingmember where userName= :name and mtid= :id", nativeQuery = true)
//	void mDeleteMember(String name, int id);
	
	@Query(value = "delete from meetingmember where username = :userName and mtid = :id", nativeQuery = true)
	void mCancelMember(String userName, int id);
	
	

}
