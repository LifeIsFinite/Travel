package com.xingyue.dao;

import java.util.List;

import com.xingyue.entity.Ticket;

public interface Dao {

	List<Ticket> getBoat(int kind);
}
