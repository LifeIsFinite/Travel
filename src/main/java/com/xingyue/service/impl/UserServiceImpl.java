package com.xingyue.service.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xingyue.common.Result;
import com.xingyue.dao.Dao;
import com.xingyue.entity.User;
import com.xingyue.service.UserService;

@Service
@SuppressWarnings({"rawtypes","unchecked"})
public class UserServiceImpl implements UserService {
	
	@Autowired
	private Dao dao;

	public Result login(HttpServletRequest request, User user) {
		user = dao.getUser(user);
		if(null == user) {
			return new Result(0, "账号或密码错误");
		}
		HttpSession session = request.getSession();
		session.setAttribute("signed", "true");
		return new Result(1, "success", user);
	}

	public Result register(HttpServletRequest request, User user) {
		user.setNickname(user.getAccount());
		try {
			dao.addUser(user);
		} catch(Exception e) {
			return new Result(0, "账号已存在，请更换账号");
		}
		return new Result(1, "success", dao.getUser(user));
	}

}
