package com.xingyue.service;

import java.util.List;

import com.xingyue.entity.Ticket;

public interface TicketService {

	List<Ticket> get(int kind);
	
	Integer edit();
}
