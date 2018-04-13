package com.xingyue.common;

public class Result<T> {

	private int errcode;
	private String errmsg;
	private T data;
	public int getErrcode() {
		return errcode;
	}
	public void setErrcode(int errcode) {
		this.errcode = errcode;
	}
	public String getErrmsg() {
		return errmsg;
	}
	public void setErrmsg(String errmsg) {
		this.errmsg = errmsg;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public Result() {
		// TODO Auto-generated constructor stub
	}
	public Result(int errcode, String errmsg) {
		this.errcode = errcode;
		this.errmsg = errmsg;
	}
	public Result(int errcode, String errmsg, T data) {
		this.errcode = errcode;
		this.errmsg = errmsg;
		this.data = data;
	}
}
