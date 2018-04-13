package com.xingyue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xingyue.dao.Dao;
import com.xingyue.entity.Ticket;
import com.xingyue.service.TicketService;

@Service
public class TicketServiceImpl implements TicketService {
	
	@Autowired
	private Dao dao;

	public List<Ticket> get(int kind) {
		return dao.getBoat(kind);
	}

	public Integer edit() {
		// TODO Auto-generated method stub
		return null;
	}

}
