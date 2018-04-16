package com.xingyue.service;

import javax.servlet.http.HttpServletRequest;

import com.xingyue.common.Result;
import com.xingyue.entity.User;

public interface PrivateService {

	@SuppressWarnings("rawtypes")
	Result editUser(HttpServletRequest req, User user);
}
