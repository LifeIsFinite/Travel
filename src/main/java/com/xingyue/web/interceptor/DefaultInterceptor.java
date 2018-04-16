package com.xingyue.web.interceptor;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class DefaultInterceptor extends HandlerInterceptorAdapter {
		
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		HttpSession session = request.getSession();
		if(null != session.getAttribute("signed"))
			if(session.getAttribute("signed").toString().equals("true"))
				return true;
		PrintWriter writer = response.getWriter();
		writer.append("notSinged");
		return false;
	}
}
