package com.smartdot.calendar.utils;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.smartdot.calendar.beans.UserBean;

public class CalendarServletUtils {
	
	private static Logger logger = Logger.getLogger(CalendarServletUtils.class);
	
	public static final String INDICAL_USER = "indiCal_User";
	public static final String INDICAL_RENDERPROPS = "indiCal_RenderProps";
	
	public static String getUserIdByRequest(HttpServletRequest request) throws ServletException{
		String userId = null;
		
		logger.debug("Get userid from request parameter...");
		userId = request.getParameter("secid");
		logger.debug("Get userid from request parameter Userid=>"+ userId);
		if(userId==null || userId.trim().equals("")){
			logger.debug("Get userid from request cookie...");
			Cookie[] cookies = request.getCookies();
			if(cookies!=null){
				for(int i=0;i<cookies.length;i++){
					String name = cookies[i].getName();
					logger.debug("   cookie name=>"+name);
					if(name.equals("secid")){
						userId = cookies[i].getValue();
						break;
					}
				}
			}
			logger.debug("Get userid from request cookie Userid=>"+ userId);
			
			if(userId==null || userId.trim().equals("")){
				logger.debug("Get userid from request Principal...");
				//在WAS的用户信息中查找
				try{
					userId = request.getUserPrincipal().getName();
				}catch (Exception e) {
				}
				logger.debug("Get userid from request Principal Userid=>"+ userId);
				if(userId==null || userId.trim().equals("")){
					logger.debug("Get userid from request session...");
					UserBean user = (UserBean) request.getSession(true).getAttribute(CalendarServletUtils.INDICAL_USER);
					if(user!=null) userId = user.getUserId();
					logger.debug("Get userid from request session Userid=>"+ userId);
				}
			}
		}
		logger.debug("Userid=>"+ userId);
		if(userId==null || userId.trim().equals("")) throw new ServletException("用户登录超时！");
		
		return userId;
	}
	
	/**
	 * @param 
	 * @return	清除session中用于标识最近的操作类型、发送load次数、操作对象（日程）3个属性
	 */
	public static boolean clearSessionStateAttr(HttpServletRequest request){
		HttpSession session = request.getSession(true);
		if(session.getAttribute("action") != null) session.removeAttribute("action");
		if(session.getAttribute("loadtime") != null) session.removeAttribute("loadtime");
		if(session.getAttribute("entry") != null) session.removeAttribute("entry");
		return true;
	}
	
	/**
	 * @param request	
	 * @param action	操作类型
	 * @param loadtime	load发送的此数
	 * @param entry	操作对象
	 * @return	设置session中的属性
	 */
	public static boolean setSessionStateAttr(HttpServletRequest request,String action,Integer loadtime,Object entry){
		HttpSession session = request.getSession(true);
		session.setAttribute("action", action);
		session.setAttribute("loadtime",loadtime );
		session.setAttribute("entry", entry);
		return true;
	}
	
	/**
	 * @param request
	 * @return	将load次数加1
	 * @throws Exception
	 */
	public static int addSessionLoadTimeAttr(HttpServletRequest request) throws Exception{
		HttpSession session = request.getSession();
		if(session == null) throw new Exception("session未被初始化");
		int curLoadTime = ((Integer)session.getAttribute("loadtime")).intValue() + 1;
		session.setAttribute("loadtime", new Integer(curLoadTime));
		return curLoadTime;
	}
}
