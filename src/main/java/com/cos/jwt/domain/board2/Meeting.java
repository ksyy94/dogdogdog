package com.cos.jwt.domain.board2;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Meeting { //Board2 테이블 객체.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mtId; //기본키
	@CreationTimestamp
	private Timestamp mtCreateTime; //게시글생성시간
	private String mtTitle; // 게시글제목
	private String mtContent; //게시글기타내용
	private String mtPlace; //장소
	private String mtTime; //만날시간
	private String mtDate; //만날날짜
	private int mtCount; //현재인원 초기값 0
	private int maxCount; // 최대인원
	private String userName;//작성자 이름 저장.
	
	@JsonIgnoreProperties({"mt"})
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "mt")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private List<MeetingMember> mtList; 
	
	public int countUp() {
		if(mtCount < maxCount) {
		mtCount += 1;
		return 1;
		}else
		return 2;
	}
	public void countDown() {
		mtCount -= 1;
	}
	
	
}
