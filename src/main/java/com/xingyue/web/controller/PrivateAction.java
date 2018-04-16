package com.xingyue.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xingyue.common.Result;
import com.xingyue.entity.User;
import com.xingyue.service.PrivateService;

@Controller
@RequestMapping("/pri")
public class PrivateAction {
	
	@Autowired
	private PrivateService privateService;

	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "/editUser", method = RequestMethod.POST)
	public Result editUser(HttpServletRequest req, User user) {
		if(null == user.getId() || user.getId() < 1) return new Result(0, "id为空");
		return privateService.editUser(req, user);
	}
}
