package com.cos.jwt.domain.user;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.cos.jwt.domain.board3.Board3;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(unique = true)
	private String username; 
	private String password;
	private String email;
	private String place;
	private String phoneNumber;
	private String image;

	@JsonIgnoreProperties({"user","content"}) //무시하고 싶은 변수명 
	@OneToMany(mappedBy = "user", fetch= FetchType.LAZY)//Post 오브젝트의 user 변수
	private List<Board3> board3s;
	
	@JsonIgnoreProperties({"user"}) //무시하고 싶은 변수명 
	@OneToMany(mappedBy = "user", fetch= FetchType.LAZY)//Post 오브젝트의 user 변수
	private List<Board3> board1s;
	
}

