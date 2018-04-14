package com.xingyue.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xingyue.common.Result;
import com.xingyue.entity.User;
import com.xingyue.service.UserService;

@Controller
@RequestMapping("/user")	
@SuppressWarnings("rawtypes")
public class UserController {
	
	@Autowired
	private UserService userService;

	@ResponseBody
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	private String list(HttpServletRequest request) {
		return "list";
	}

	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	private Result login(HttpServletRequest request, User user) {
		return userService.login(request, user);
	}
	
	@ResponseBody
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	private Result register(HttpServletRequest request, User user) {
		return userService.register(request, user);
	}
}
