package com.cos.jwt.web;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.board3.Board3Repository;
import com.cos.jwt.domain.board3.Board3;
import com.cos.jwt.domain.board3.Board3Comment;
import com.cos.jwt.domain.board3.Board3CommentRepository;
import com.cos.jwt.domain.user.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class Board3CommentController {

	private final Board3CommentRepository commentRepository;
	private final HttpSession session;
	private final Board3Repository board3Repository;

	@GetMapping("/board3/comment/{board3Id}")
	@ResponseBody
	public List<Board3Comment> 댓글목록(@PathVariable int board3Id) {
		System.out.println("댓글목록");
		return commentRepository.mList(board3Id);
	}
	
	@PostMapping("/board3/comment/write/{board3Id}")
	@ResponseBody
	public String 댓글쓰기(@RequestBody Board3Comment comment, @PathVariable int board3Id) {

		System.out.println("댓글 쓰기");
		User principal = (User) session.getAttribute("principal");
		Board3 board3Entity = board3Repository.findById(board3Id).get();
		
		comment.setUser(principal);
		comment.setBoard3(board3Entity);
		commentRepository.save(comment);
		return "ok";
	}

	@Transactional
	@PutMapping("/board3/comment/modify/{commentId}")
	@ResponseBody
	public String 댓글수정(@RequestBody Board3Comment comment, @PathVariable int commentId) {
		System.out.println("댓글 수정");

		Board3Comment commentEntity = commentRepository.findById(commentId).get();
		commentEntity.setContent(comment.getContent());

		return "ok";
	}

	@Transactional
	@DeleteMapping("/board3/comment/delete/{commentId}")
	@ResponseBody
	public String 댓글삭제(@PathVariable int commentId) {
		System.out.println("댓글 삭제");
		commentRepository.deleteById(commentId);
		return "ok";
	}

}
