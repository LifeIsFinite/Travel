package com.xingyue.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.xingyue.common.Result;
import com.xingyue.dao.Dao;
import com.xingyue.entity.User;
import com.xingyue.service.PrivateService;

@Service
@SuppressWarnings( {"rawtypes", "unchecked"} )
public class PrivateServiceImpl implements PrivateService {
	
	@Autowired
	private Dao dao;

	public Result editUser(HttpServletRequest req, User user) {
		if(null != user.getOldpsd() && !StringUtils.isEmpty(user.getOldpsd())) {
			User _user = dao.getUserById(user.getId());
			if(!user.getOldpsd().equals(_user.getPassword()))
				return new Result(0, "密码不正确");
		}
		try {
			dao.editUser(user);
		} catch(Exception e) {
			return new Result(0, "修改失败");
		}
		return new Result(1, "success", dao.getUserById(user.getId()));
	}

}
