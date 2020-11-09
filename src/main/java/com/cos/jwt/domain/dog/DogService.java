package com.cos.jwt.domain.dog;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.cos.jwt.domain.user.User;

import ch.qos.logback.core.ConsoleAppender;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DogService {
	
	private final DogRepository dogRepository;
	
	@Transactional
	public void 강아지등록(Dog dog, User principal) {
		System.out.println("강아지 등록");
		dog.setUser(principal);
		System.out.println(principal+"2222");
		dogRepository.save(dog);
	}

}
