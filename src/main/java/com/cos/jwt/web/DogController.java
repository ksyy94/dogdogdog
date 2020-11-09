package com.cos.jwt.web;

import java.awt.print.Pageable;

import javax.servlet.http.HttpSession;

import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.dog.Dog;
import com.cos.jwt.domain.dog.DogService;
import com.cos.jwt.domain.user.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class DogController {

	private final HttpSession session;
	private final DogService dogService;
	
	//토큰이 있어야 접근 가능
	@PostMapping("/dogJoinProc")
	public ResponseEntity<?> save(@RequestBody Dog dog){
		System.out.println(session.getAttribute("principal"));
		User principal = (User) session.getAttribute("principal");
		dogService.강아지등록(dog, principal);
		return new ResponseEntity<String>("ok",HttpStatus.CREATED);
	}
	
}
