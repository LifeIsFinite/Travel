package com.xingyue.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xingyue.common.Result;
import com.xingyue.entity.Ticket;
import com.xingyue.service.TicketService;

@SuppressWarnings({ "unchecked", "rawtypes" })
@Controller
@RequestMapping("/ticket")
public class TicketController {
	
	@Autowired
	private TicketService ticketService;

	@ResponseBody
	@RequestMapping(value = "/boat", method = RequestMethod.GET)
	private Result boat(HttpServletRequest request) {
		List<Ticket> list = ticketService.get(0);
		if(list.size() > 0) {
			System.out.println(list.get(0).getsTime());
			return new Result(1,"success",list);
		}
		return new Result(0,"error");
	}
	
	@ResponseBody
	@RequestMapping(value = "/bus", method = RequestMethod.GET)
	private Result bus(HttpServletRequest request) {
		List<Ticket> list = ticketService.get(1);
		if(list.size() > 0) {
			System.out.println(list.get(0).getsTime());
			return new Result(1,"success",list);
		}
		return new Result(0,"error");
	}
	
	@ResponseBody
	@RequestMapping(value = "/train", method = RequestMethod.GET)
	private Result train(HttpServletRequest request) {
		List<Ticket> list = ticketService.get(2);
		if(list.size() > 0) {
			System.out.println(list.get(0).getsTime());
			return new Result(1,"success",list);
		}
		return new Result(0,"error");
	}
	
	@ResponseBody
	@RequestMapping(value = "/plane", method = RequestMethod.GET)
	private Result plane(HttpServletRequest request) {
		List<Ticket> list = ticketService.get(3);
		if(list.size() > 0) {
			System.out.println(list.get(0).getsTime());
			return new Result(1,"success",list);
		}
		return new Result(0,"error");
	}
}
