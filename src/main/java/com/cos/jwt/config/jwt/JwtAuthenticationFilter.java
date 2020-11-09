package com.cos.jwt.config.jwt;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.cos.jwt.domain.DTO.UserDTO;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;


public class JwtAuthenticationFilter implements Filter{

	private UserRepository personRepository;
	
	public JwtAuthenticationFilter(UserRepository personRepository) {
		this.personRepository = personRepository;
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("JwtAuthenticationFilter 작동");
		
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		PrintWriter out = resp.getWriter();
		
		String method = req.getMethod();
		System.out.println(method);
		
		
		
		if(!method.equals("POST")) {
			System.out.println("post 요청이 아니기 때문에 거절");
			out.print("required post method");
			out.flush();
		}else {
			System.out.println("post 요청이 맞습니다.");	
			try {
				ObjectMapper om = new ObjectMapper();//객체를 제이슨 데이터로 바꿔줌 개대박
				User person = om.readValue(req.getInputStream(), User.class);
				System.out.println("person 값 : "+person); 
				// 1번 username, password를 DB에 던짐
				User personEntity = 
				personRepository.findByUsernameAndPassword(person.getUsername(), person.getPassword());
				// 2번 값이 있으면 있다?. 없다?
				if(personEntity == null) {
					System.out.println("유저네임 혹은 패스워드가 틀렸습니다.");	
					out.print("fail");
					out.flush();
				}else {
					System.out.println("인증되었습니다.");		
					personEntity= personRepository.mFindByUsername(person.getUsername());
					String jwtToken = 
							JWT.create()
							.withSubject("토큰제목")
							.withExpiresAt(new Date(System.currentTimeMillis()+1000*60*60))
							.withClaim("id", personEntity.getId())
							.withClaim("username",personEntity.getUsername())
							.sign(Algorithm.HMAC512(JwtProps.secret));
					System.out.println(jwtToken);
					resp.addHeader(JwtProps.header, JwtProps.auth+jwtToken);
					
					UserDTO userDTO= new UserDTO("ok",personEntity.getId(),personEntity.getUsername(),personEntity.getImage());
					String userJson = om.writeValueAsString(userDTO);
					System.out.println("userJson"+userJson);
					
					out.print(userJson);
					//out.print("{image:"+personEntity.getEmail()+", state:"+);
					out.flush();
				}
			} catch (Exception e) {
				System.out.println("오류 : "+e.getMessage());
			}
			
//			StringBuilder data = new StringBuilder();
//			BufferedReader br = req.getReader();
//			String input = "";
//			while((input = br.readLine()) != null) {
//				data.append(input);
//			}
//			System.out.println(data.toString());
//			
//			Gson gson = new Gson();
//			Person person = gson.fromJson(data.toString(), Person.class);
//			System.out.println(person);
		}
	}
}
