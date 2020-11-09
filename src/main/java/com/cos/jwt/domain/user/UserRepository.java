package com.cos.jwt.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsernameAndPassword(String username, String password);
	
	@Query(value = "SELECT * FROM user WHERE username= :username",nativeQuery = true)
	User mFindByUsername(String username);
}
