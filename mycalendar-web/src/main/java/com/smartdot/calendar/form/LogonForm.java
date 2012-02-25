package com.smartdot.calendar.form;


import org.apache.struts.action.ActionForm;

public class LogonForm extends ActionForm {
	/**
	 * 
	 */
	private static final long serialVersionUID = -2936341522148103889L;
	private String userid;
	private String password;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	
}
