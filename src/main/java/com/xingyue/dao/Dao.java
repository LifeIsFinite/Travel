package com.xingyue.dao;

import java.util.List;

import com.xingyue.entity.Ticket;
import com.xingyue.entity.User;

public interface Dao {

	List<Ticket> getBoat(int kind);
	
	User getUser(User user);
	
	User getUserById(Integer id);
	
	Integer addUser(User user);
	
	Integer editUser(User user);
}
