package com.cos.jwt.domain.board3;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.cos.jwt.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Board3 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String catagory;
	private String type;
	private String name;
	private String bread;
	private String age;
	private String sex;
	private String date;
	private String place;
	
	@Column(length = 10000000)
	private String content;
	private String property;
	private double lat;
	private double lng;

	@Column(length = 10000000)
	private String image1;
	
	@Column(length = 10000000)
	private String image2;	
	
	@JsonIgnoreProperties({"board3s"})
	@JoinColumn(name="userId")
	@ManyToOne
	private User user;
	
	@JsonIgnoreProperties({"user", "board3"})
	@OneToMany(mappedBy = "board3", fetch = FetchType.EAGER)
	private List<Board3Comment> comments;
}
