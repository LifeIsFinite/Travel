package com.xingyue.service;

import javax.servlet.http.HttpServletRequest;

import com.xingyue.common.Result;
import com.xingyue.entity.User;

@SuppressWarnings("rawtypes")
public interface UserService {

	Result login(HttpServletRequest request, User user);
	
	Result register(HttpServletRequest request, User user);
}
