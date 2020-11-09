package com.cos.jwt.web;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.DTO.LocationDTO;
import com.cos.jwt.domain.board3.Board3;
import com.cos.jwt.domain.board3.Board3Repository;
import com.cos.jwt.domain.user.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class Board3Controller {

	private final Board3Repository board3Repository;
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
	@PostMapping(value = "/board3/write", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 글쓰기(@RequestParam("catagory") String catagory, @RequestParam("name") String name,
			@RequestParam("bread") String bread, @RequestParam("age") String age, @RequestParam("sex") String sex,
			@RequestParam("place") String place, @RequestParam("lat") double lat, @RequestParam("lng") double lng,
			@RequestParam("content") String content, @RequestParam("type") String type,
			@RequestParam("property") String property, @RequestParam("date") String date,
			@RequestParam("image1") MultipartFile image1, @RequestParam("image2") MultipartFile image2)
			throws IllegalStateException, IOException {
		System.out.println("실종/제보 글쓰기");
		String image1name="";
		String image2name="";
		
		if ("".equals(image1.getOriginalFilename()) == true) {
			image2name = 이미지저장(image2);
			image1name = image2name;
		} else if ("".equals(image2.getOriginalFilename()) == true) {
			image1name = 이미지저장(image1);
			image2name = image1name;
		} else {
			image1name = 이미지저장(image1);
			image2name = 이미지저장(image2);
		}
		User principal = (User) session.getAttribute("principal");

		Board3 board3 = new Board3().builder().catagory(catagory).name(name).bread(bread).age(age).sex(sex).place(place)
				.date(date).lat(lat).user(principal).lng(lng).type(type).property(property).content(content)
				.image1(image1name).image2(image2name).build();

		board3Repository.save(board3);
		return "ok";
	}
	@GetMapping("/board3")
	public List<Board3> 글목록() {
		System.out.println("실종/제보 글목록");
		return board3Repository.findAll();
	}
	@GetMapping("/board3/{board3Id}")
	public Board3 글상세(@PathVariable int board3Id) {
		System.out.println("실종/제보 상세글");
		Board3 board3 = board3Repository.findById(board3Id).get();
		return board3;
	}
	
	@Transactional
	@PostMapping(value = "/board3/modify/{board3Id}", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 글수정(@PathVariable int board3Id, @RequestParam("catagory") String catagory,
			@RequestParam("name") String name, @RequestParam("bread") String bread, @RequestParam("age") String age,
			@RequestParam("sex") String sex, /*
												 * @RequestParam("place") String place, @RequestParam("lat") double lat,
												 * 
												 * @RequestParam("lng") double lng,
												 */ @RequestParam("content") String content,
			@RequestParam("type") String type, @RequestParam("property") String property,
			@RequestParam("date") String date, @RequestParam("image1") MultipartFile image1,
			@RequestParam("image2") MultipartFile image2) throws IllegalStateException, IOException {

		System.out.println("실종/제보 글 수정하기");

		Board3 board3Entity = board3Repository.findById(board3Id).get();

		if ("".equals(image1.getOriginalFilename()) == false) {
			String image1name = 이미지저장(image1);
			board3Entity.setImage1(image1name);
		}
		if ("".equals(image2.getOriginalFilename()) == false) {
			String image2name = 이미지저장(image2);
			board3Entity.setImage1(image2name);
		}

		board3Entity.setCatagory(catagory);
		board3Entity.setName(name);
		board3Entity.setBread(bread);
		board3Entity.setAge(age);
		board3Entity.setType(type);
		board3Entity.setSex(sex);
		// board3Entity.setPlace(place);
		board3Entity.setContent(content);
		board3Entity.setDate(date);
		board3Entity.setProperty(property);

		return "ok";
	}

	@Transactional
	@DeleteMapping("/board3/delete/{board3Id}")
	@ResponseBody
	public String 글삭제(@PathVariable int board3Id) {
		board3Repository.deleteById(board3Id);
		return "ok";
	}

	@GetMapping("/board4")
	public List<Board3> 지도목록() {
		System.out.println("지도 목록 검색");
		return board3Repository.findAll();
	}

	@GetMapping("/board4/{id}")
	public Board3 지도글(@PathVariable int id) {
		System.out.println("지도글");
		Board3 board3 = board3Repository.findById(id).get();
		return board3;
	}
}
