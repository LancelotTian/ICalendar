package com.smartdot.calendar.service;


import com.smartdot.calendar.beans.UserBean;

public interface UserService {
	/**
	 * 
	 * @param uid - 用户uid
	 * @return	从ldap查找uid指定的用户
	 * @throws RemoteException
	 */
	
	public UserBean getUserFromLdap(String uid) ;
}
