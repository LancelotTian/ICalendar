package com.smartdot.calendar.format;

import java.io.Serializable;

public class Principal implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6216772297360952508L;
	
	private String calId;
	private Boolean isMain;
	private String userId;
	private String userName;
	private String userEmail;
	
	public String getCalId() {
		return calId;
	}
	public void setCalId(String calId) {
		this.calId = calId;
	}
	public Boolean getIsMain() {
		return isMain;
	}
	public void setIsMain(Boolean isMain) {
		this.isMain = isMain;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
}
