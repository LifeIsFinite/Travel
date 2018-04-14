package com.xingyue.dao;

import java.util.List;

import com.xingyue.entity.Ticket;
import com.xingyue.entity.User;

public interface Dao {

	List<Ticket> getBoat(int kind);
	
	User getUser(User user);
	
	Integer addUser(User user);
}
