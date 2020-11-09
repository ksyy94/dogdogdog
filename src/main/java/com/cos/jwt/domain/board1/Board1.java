package com.cos.jwt.domain.board1;

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
public class Board1 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String catagory;
	private String title;
	private String place;
	private String addr;
	@Column(length = 10000000)
	private String content;
	private double lat;
	private double lng;

	@Column(length = 10000000)
	private String image1;
	
	@Column(length = 10000000)
	private String image2;	
	
	@JsonIgnoreProperties({"board1s"})
	@JoinColumn(name="userId")
	@ManyToOne
	private User user;
	
	@JsonIgnoreProperties({"user", "board1"})
	@OneToMany(mappedBy = "board1", fetch = FetchType.EAGER)
	private List<Board1Comment> comments;
}
