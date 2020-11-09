package com.cos.jwt.web;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {

	private final UserRepository personRepository;
	private final HttpSession session;

	private String 이미지저장(MultipartFile file) throws IllegalStateException, IOException {
		File path = new File("");// 상대경로 찾을려고 임의로 기본 파일주소를 찍어봄
		String uploadFolder = path.getAbsolutePath() + "\\src\\main\\webapp\\find-dog\\public\\images"; // 거기에 images
																										// 폴더로 설정
		File uploadPath = new File(uploadFolder/* , getFolder() */);// 여기에 설정
		if (uploadPath.exists() == false) {// 없을 때 images 폴더 설정
			uploadPath.mkdirs();
		}
		UUID uuid = UUID.randomUUID();
		String uploadFileName = uuid.toString() + "-" + file.getOriginalFilename();
		File saveFile = new File(uploadPath, uploadFileName);
		file.transferTo(saveFile);
		return uploadFileName;
	}

	// 회원정보 등록
	@PostMapping(value = "/joinProc", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 회원가입(@RequestParam("username") String username, @RequestParam("password") String password,
			@RequestParam("place") String place, @RequestParam("phoneNumber") String phoneNumber,
			@RequestParam("email") String email, @RequestParam("image") MultipartFile image)
			throws IllegalStateException, IOException {
		String imageName = 이미지저장(image);

		User user = new User().builder().username(username).place(place).password(password).email(email)
				.phoneNumber(phoneNumber).image(imageName).build();

		personRepository.save(user);
		return "ok";
	}

	// 수정 등록
	@Transactional
	@PostMapping(value = "/modifyProc/{username}", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 회원정보수정(@RequestParam("username") String username, @RequestParam("password") String password,
			@RequestParam("place") String place, @RequestParam("phoneNumber") String phoneNumber,
			@RequestParam("email") String email, @RequestParam("image") MultipartFile image)
			throws IllegalStateException, IOException {
		System.out.println("회원정보 수정~~");
		
		User userEntity = personRepository.mFindByUsername(username);
		String imageName = 이미지저장(image);
		
		userEntity.setUsername(username);
		userEntity.setEmail(email);
		userEntity.setPlace(place);
		userEntity.setPassword(password);
		userEntity.setPhoneNumber(phoneNumber);
		userEntity.setImage(imageName);

		return "ok";
	}

	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		System.out.println("2223s");
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}

//	@GetMapping("/user/{username}")
//	public ResponseEntity<?> 회원정보(@PathVariable int id, HttpServletRequest request) {
//		HttpSession session = request.getSession();
//		System.out.println("회원정보 조회");
//		if (session.getAttribute("principal") != null) {
//			User personEntity = personRepository.findById(id).get();
//			System.out.println(personEntity);
//			return new ResponseEntity<User>(personEntity, HttpStatus.OK);
//		}
//		return new ResponseEntity<String>("You don't have authorization", HttpStatus.FORBIDDEN);
//
//	}

	@GetMapping("/user/{username}")
	@ResponseBody
	public ResponseEntity<?> detail(@PathVariable String username) {

		System.out.println("회원정보 조회" + username);
//		User personEntity = personRepository.mFindByUsername(username);
//		System.out.println(personEntity);
		// userRepository.mFindByUsername(username);
		return new ResponseEntity<User>(personRepository.mFindByUsername(username), HttpStatus.OK);
	}
}
