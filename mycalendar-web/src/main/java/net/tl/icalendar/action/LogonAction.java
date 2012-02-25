package net.tl.icalendar.action;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.form.LogonForm;
import net.tl.icalendar.service.UserService;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.CalendarCfg;
import net.tl.icalendar.utils.CalendarServletUtils;

public class LogonAction extends Action {
	private static Logger logger = Logger.getLogger(LogonAction.class);

	public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.debug("-------------- LogonAction --------------");
		String userId = null;
		
		if(CalendarCfg.getCertifyType().equals("native")){
			LogonForm lf = (LogonForm)form;
			userId = lf.getUserid();
		}
		
		/** 
		 * 错误列表	 
		 * 错误码 			含义
		 * 	0				用户没有登录 
		 *  1				用户在ldap中不存在
		 *  2				无法与ldap ejb 通信
		 *  3				render.jsp中没有找到日历初始化属性或session中没有用户信息
		 */
		if(userId==null || userId.trim().equals("")){
			try{
				userId = CalendarServletUtils.getUserIdByRequest(request);
			}catch(Exception e){}
		}
		
		
		
		if(userId==null || userId.equalsIgnoreCase("")){
			request.setAttribute("message", new Integer(0));
			return mapping.findForward("Message");
		}
			
		
		UserService userService = ServiceFactory.getInstance().getUserService();
		
		UserBean userBean = null;
		try{
			userBean = userService.getUserFromLdap(userId);
		}catch (Exception e) {
			request.setAttribute("message", new Integer(2));
			return mapping.findForward("Message");
		}
		
		
		if( userBean != null ){
			request.getSession(true).setAttribute(CalendarServletUtils.INDICAL_USER, userBean);
			
			
			String curPeriod = CalendarBeanUtil.getDatePeriod();
			List rendProps = ServiceFactory.getInstance().getCalendarService().getRenderProps(userBean,CalendarBeanUtil.dateStrToDate(curPeriod.split("/")[0]), CalendarBeanUtil.dateStrToDate(curPeriod.split("/")[1]));
			rendProps.add(curPeriod);
			
			request.setAttribute(CalendarServletUtils.INDICAL_RENDERPROPS, rendProps);
			
			Cookie cookie_secid = new Cookie("secid",userId);
			//当关闭浏览器时cookie自动清除
			cookie_secid.setMaxAge(-1);
			
			String mainCalId = ((SCalendar)rendProps.get(1)).getId();
			Cookie cookie_mainCalId = new Cookie("maincalid",mainCalId);
			cookie_mainCalId.setMaxAge(-1);
			
			
			response.addCookie(cookie_secid);
			response.addCookie(cookie_mainCalId);
			
			return mapping.findForward("Render");
		}
		else{
			request.setAttribute("message", new Integer(1));
			return mapping.findForward("Message");
		}
	}
}
