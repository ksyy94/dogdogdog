package com.cos.jwt.web;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.board2.Meeting;
import com.cos.jwt.domain.board2.MeetingMember;
import com.cos.jwt.domain.board2.MeetingMemberRepository;
import com.cos.jwt.domain.board2.MeetingRepository;
import com.cos.jwt.domain.board2.PageInfo;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MeetingController {

	private final MeetingRepository mtRepository;
	private final MeetingMemberRepository mtmRepository;

	// 특정 페이지 출력
	@GetMapping("/board2/{page}")
	public List<Meeting> mtList(@PathVariable int page) {
		int page2 = 6;
		page = (page - 1) * 6;
		return mtRepository.mPageList(page, page2);
	}

//	전체게시글 확인용
	@GetMapping("/board2/count")
	public int mtPageCount() {
		return (int) mtRepository.count();
	}

	// 게시글 등록
	@PostMapping("/board2")
	public String mtInsert(@RequestBody Meeting meeting) {
		try {
			mtRepository.save(meeting);
			return "등록완료";
		} catch (Exception e) {
			return "등록실패";
		}
	}

	
	
//	@PutMapping("/board2/{id}")
//	public void mtmInsert(@PathVariable int id, String name) {
//		mtmRepository.mInsertMember(name, id);
//	}

	// 게시글 삭제
	@DeleteMapping("/board2")
	public String mtDelete(@RequestBody Meeting mt) {
		try {
			mtRepository.deleteById(mt.getMtId());
			return "삭제 성공";
		} catch (Exception e) {
			return "삭제 실패";
		}

	}

	// 참가
	@PostMapping("/board2/mList")
	public String mtmInsert(@RequestBody Meeting mtm) {
		Meeting mt = mtRepository.findById(mtm.getMtId()).get();		
		MeetingMember mtm2 = MeetingMember.builder().userName(mtm.getUserName()).mt(mt).build();
		int count = mt.countUp();
		if (count == 1) {
			mtRepository.save(mt);
			mtmRepository.save(mtm2);
			return "참가완료";
		} else if (count == 2)
			return "인원만석";
		else
			return "문제발생";
	}

//	참가취소
	@DeleteMapping("/board2/mList")
	public String mtmDelete(@RequestBody Meeting mtm) {
		Meeting mt = mtRepository.findById(mtm.getMtId()).get();
//			mtmRepository.mCancelMember(mtm.getUserName(), mtm.getMtId());
			
			
			for (MeetingMember mtmT : mt.getMtList()) {
				if(mtmT.getUserName() == mtm.getUserName()) {
//					mtmRepository.deleteById(mtmT.getMtmId());
					mtmRepository.deleteById(mtm.getMtId());
					mt.countDown();
					mtRepository.save(mt);
				return "취소완료";
				}
			}
//			MeetingMember mtm3 = mtm2.indexOf(mtm.getUserName());
				return "취소실패";
	}

	// 게시글 id 기준 참가인원 출력
	@GetMapping("/board2/mList/{id}")
	public List<String> mtmList(@PathVariable int id) {
		return mtmRepository.mList(id);
	}

}
