package com.smartdot.calendar.service.impl;


import org.apache.log4j.Logger;

import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.service.UserService;

public class UserServiceImpl implements UserService {
	
	private static Logger logger = Logger.getLogger(UserServiceImpl.class);

	public UserBean getUserFromLdap(String uid)   {
		UserBean ret = null;

		
		ret = new UserBean();
		ret.setUserId(uid);
		ret.setUserName("测试用户");
		ret.setEmail("tianliang@smartdot.com");
		ret.setMobile("13683389409");
		
		
//		try {
//			RemoteFactory fac = com.smartdot.ldap.ejb.client.RemoteFactory.getInstance();
//
//			UserDAO userDao = fac.getUserDAO();
//
//			com.smartdot.ldap.bean.UserBean ldapUser = userDao.getUser(uid);
//
//			if (ldapUser != null) {
//				ret = new UserBean();
//				ret.setUserId(uid);
//				ret.setUserName(ldapUser.getCn());
//				ret.setEmail(ldapUser.getMail());
//				ret.setMobile(ldapUser.getMobile());
//			}
//		} catch (RemoteException e) {
//			logger.fatal("### Can not read user info from LDAP ! Please confirm ldap connection or ldapEJB. User [uid=" + uid + "] ###");
//		}

		return ret;
	}

}
