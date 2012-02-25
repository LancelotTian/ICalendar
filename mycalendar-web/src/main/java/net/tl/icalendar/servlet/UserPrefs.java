package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.business.UserPrefsBuzz;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.utils.CalendarServletUtils;

/**
 * 
 * @author tianliang
 * 设置日历显示样式
 *
 */
public class UserPrefs extends HttpServlet {

	private static final long serialVersionUID = 4181999125253573903L;

	/**
	 * Constructor of the object.
	 */
	public UserPrefs() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		
		String eup = request.getParameter("eup");
		String secid = request.getParameter("secid");
		StringBuffer str = new StringBuffer();
		int index1 = eup.indexOf("/");
		
//		*******************张林修改****************************
		////若为主日历则domodifycalendar(),为share则domodifysharecalendar,否则更改displayconfig.
		
		
		//当设置日历中活动的显示颜色和是否隐藏活动时。要修改Calendar类中对应的属性。
		
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		SCalendar calendar = calService.getCalendarById(eup.split("/")[0]);
		
		
		if(index1>0){
			str.append(doModifyCalendar(request));
//			if(calendar.getUserId().equals(secid)){
//				str.append(doModifyCalendar(request));
//			}else{
//				str.append(doModifyShareCalendar(request));
//			}
			
		}else{//当设置日历显示的其它配置时。需要修改CalendarDisplayConfig类中的对应属性。
			secid = request.getParameter("secid");
			
			if(secid==null || secid.equalsIgnoreCase("")){
				secid = CalendarServletUtils.getUserIdByRequest(request);
				if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Cookie secid has been expired ! Must logon again.");
				else response.addCookie(new Cookie("secid",secid));
			}
			str.append(doModifyCalendarDisplayConfig(request,secid));
		}
		
		////*****张林修改****************
		
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.write(str.toString());
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}
	
	private String doModifyCalendar(HttpServletRequest request) throws ServletException,IOException{
		String[] eups = request.getParameterValues("eup"); 
		String responseStr = "";
		
		String secid = request.getParameter("secid");
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		
		
		if(eups != null && eups.length != 0) {
			for(int i = 0; i < eups.length; i++) {
				String eup = eups[i];
				int index1 = eup.indexOf("/");
				int index2 = eup.indexOf(":");
				String calendarId = eup.substring(0,index1);		//日历标识
				String attrName = eup.substring(index1+1,index2);
				String attrValue = eup.substring(index2+1).trim();
				

				SCalendar calendar = calService.getCalendarById(calendarId);
				if(calendar.getUserId().equals(secid)) {
					calService.modifyCalendar(calendarId,attrName,attrValue);
				} else {
					calService.modifyShareCalendar(calendarId,attrName, attrValue, secid);
				}
			}
			
			responseStr = new UserPrefsBuzz().createResponseStr(eups);
		}
		
		//"while(1);[['u',[['" + calendarId + "/" + attrName + "','" + attrValue + "']]]]";
		
		return responseStr;
	}
	
	public String doModifyCalendarDisplayConfig(HttpServletRequest request,String secid) throws ServletException,IOException{
		String[] eup = request.getParameterValues("eup");
		//String secid = request.getParameter("secid");
		
		Map attrMap = new HashMap();
		String tempStr = "";
		for(int i=0;i<eup.length;i++){
			int tempIndex = eup[i].indexOf(":");
			String attrName = eup[i].substring(0,tempIndex).trim();
			String attrValue =  eup[i].substring(tempIndex+1).trim();
			attrMap.put(attrName, attrValue);
			if(i>0) tempStr += ",";
			tempStr += "['" + attrName + "','" + attrValue + "']";
		}
		
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		calService.modifyUserCalDisplayConfig(secid,attrMap);
		
		return "while(1);[['u',[" + tempStr + "]]]";
	}
	/////////**********张林添加*********************************
	public String doModifyShareCalendar(HttpServletRequest request)throws ServletException,IOException{
		
			String eup = request.getParameter("eup");
			String secid = request.getParameter("secid");
			StringBuffer str = new StringBuffer();
			int index1 = eup.indexOf("/");
			int index2 = eup.indexOf(":");
			String calendarId = eup.substring(0,index1);
			String attrName = eup.substring(index1+1,index2);
			String attrValue =  eup.substring(index2+1).trim();
			
			CalendarService calService = ServiceFactory.getInstance().getCalendarService();
			calService.modifyShareCalendar(calendarId,attrName, attrValue, secid);
			str.append("while(1);[['u',[['" + calendarId + "/" + attrName + "','" + attrValue + "']]]]");
			
			return str.toString();
	}

}
