package net.tl.icalendar.beans;

import java.io.Serializable;

public class UserBean implements Serializable{
	private static final long serialVersionUID = 5787754648156818445L;
	
	/** 用户id **/
	private String userId;
	
	/** 用户名称 **/
	private String userName;
	
	/** 用户邮箱 **/
	private String email;
	
	/** 用户密码 **/
	private String password; 
	
	/** 用户手机号 **/
	private String mobile;
	
	/** 用户的默认主日历id **/
	private String mainCalId;
	
	
	//getter() setter()
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getMainCalId() {
		return mainCalId;
	}
	public void setMainCalId(String mainCalId) {
		this.mainCalId = mainCalId;
	}
	
	
}
