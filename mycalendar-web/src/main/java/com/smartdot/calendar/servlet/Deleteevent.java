package com.smartdot.calendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smartdot.calendar.base.service.ServiceFactory;
import com.smartdot.calendar.service.ActivityService;
import com.smartdot.calendar.utils.CalendarServletUtils;

public class Deleteevent extends HttpServlet {

	private static final long serialVersionUID = -1966549582366270452L;

	/**
	 * Constructor of the object.
	 */
	public Deleteevent() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
    @Override
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
    @Override
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
    @Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		StringBuilder strBuf = new StringBuilder();
		
		strBuf.append("while(1);[");
		
		strBuf.append(doDeleteActivity(request, response));
		
		strBuf.append(",['_ShowMessage','活动已删除'],['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000']]");
		
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.write(strBuf.toString());
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
    @Override
	public void init() throws ServletException {
		// Put your code here
	}
	
	private String doDeleteActivity(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String scp = request.getParameter("scp");
		String activityId = request.getParameter("eid");
		//String srcCalendarId = request.getParameter("src");
		
		List entriesInResp = new ArrayList();
		
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		
		if(scp==null)
			entriesInResp.add( actService.deleteOneActivity(activityId) );
		else if(scp.equalsIgnoreCase("ONE"))
			entriesInResp.add( actService.deleteOneActivity(activityId) );
		else if(scp.equalsIgnoreCase("TAIL"))
			entriesInResp.addAll( actService.deleteTailActivitiesInSeries(activityId) );
		else if(scp.equalsIgnoreCase("ALL"))
			entriesInResp.addAll( actService.deleteAllActivitiesInSeries(activityId) );
		
		
		CalendarServletUtils.setSessionStateAttr(request, "delete", new Integer(0), entriesInResp);
		
		//生成返回字符串，格式为: ['d','活动1-id'],['d','活动2-id'],......
		StringBuilder ret = new StringBuilder();
		for(int i=0;i<entriesInResp.size();i++){
			if(i>0) ret.append(",");
			ret.append("['d','").append((String) entriesInResp.get(i)).append("']");
		}
		
		return ret.toString();
	}

}