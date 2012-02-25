package com.smartdot.calendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smartdot.calendar.base.service.ServiceFactory;
import com.smartdot.calendar.beans.Activity;
import com.smartdot.calendar.format.Activity2Js;
import com.smartdot.calendar.service.CalendarService;
import com.smartdot.calendar.service.SearchService;
import com.smartdot.calendar.util.CalendarBeanUtil;
import com.smartdot.calendar.utils.CalendarServletUtils;

public class Search extends HttpServlet {

private static final long serialVersionUID = -4364491727080325140L;
	

	/**
	 * Constructor of the object.
	 */
	public Search() {
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

		/**	查询截面中，而有些则始终会出现
		 * as_cal						srcCalendarId
		 * as_myuids	                srcCalendarId
		 * as_q           String        text
		 * as_tp                        basic
		 * ctz            String        Asia/Shanghai
		 * hl             String        zh_CN
		 * secid                        id
		 */
		
		String secid = request.getParameter("secid");
		if(secid==null || secid.equalsIgnoreCase("")){
			secid = CalendarServletUtils.getUserIdByRequest(request);
			if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Cookie secid has been expired ! Must logon again.");
			else response.addCookie(new Cookie("secid",secid));
		}
		
		
		String as_tp=request.getParameter("as_tp");
		StringBuffer strBuf = new StringBuffer();
		//as_tp为basic时，为简单查询，advanced为高级查询
		if(as_tp.equals("basic")) 
			strBuf.append(doBasicSearch(request,secid));
		else strBuf.append(doAdvancedSearch(request,secid));
			
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
	public void init() throws ServletException {
		// Put your code here
	}
	
	private String doBasicSearch(HttpServletRequest request,String userid) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		
		Set calIdSet = new HashSet();
		
		String searchScope = request.getParameter("as_cal");
		
		this.copyIdToSet(searchScope.split(";"),calIdSet);
		
		String as_q = request.getParameter("as_q");				//活动的text
		
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		SearchService searchService = ServiceFactory.getInstance().getSearchService();
		
		
		Map aclMap = calService.getCalAccessLevelForUser(userid, calIdSet);
		
		List actsList = new ArrayList();
		Iterator it = calIdSet.iterator();
		while(it.hasNext()){
			String curCalId = (String) it.next();
			actsList.addAll(searchService.searchActivitiesByText(curCalId,as_q));
		}
		
		return this.getEntriesStrExpress(actsList,userid,aclMap);
	}
	
	private void copyIdToSet(String[] calIds, Set calIdSet) {
		if(calIds==null) return;
		for(int i=0;i<calIds.length;i++){
			calIdSet.add(calIds[i]);
		}
	}

	public String doAdvancedSearch(HttpServletRequest request,String userid) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		
		
		Set calIdSet = new HashSet();
		
		String searchScope = request.getParameter("as_cal");
		
		if(searchScope.equalsIgnoreCase("all")){
			String[] myCalIds = request.getParameterValues("as_myuids");
			String[] otherCalIds = request.getParameterValues("as_otheruids");
			this.copyIdToSet(myCalIds,calIdSet);
			this.copyIdToSet(otherCalIds,calIdSet);
		}else if(searchScope.equalsIgnoreCase("my")){
			String[] myCalIds = request.getParameterValues("as_myuids");
			this.copyIdToSet(myCalIds,calIdSet);
		}else if(searchScope.equalsIgnoreCase("other")){
			String[] otherCalIds = request.getParameterValues("as_otheruids");
			this.copyIdToSet(otherCalIds,calIdSet);
		}else{
			calIdSet.add(searchScope);
		}
		
		
		String as_ttl = request.getParameter("as_ttl");	//活动 text包含
		String as_ppl = request.getParameter("as_ppl");	//活动 参加者
		String as_loc = request.getParameter("as_loc");	//活动 地点
		String as_eq = request.getParameter("as_eq");	//活动 text不包含
		String as_sdt = request.getParameter("as_sdt");	//活动 开始时间
		String as_edt = request.getParameter("as_edt");	//活动 结束时间
		String as_cal = request.getParameter("as_cal");	//活动搜索范围？
		
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		SearchService searchService = ServiceFactory.getInstance().getSearchService();
		
		Map aclMap = calService.getCalAccessLevelForUser(userid, calIdSet);
		
		List actsList = new ArrayList();
		Iterator it = calIdSet.iterator();
		while(it.hasNext()){
			String curCalId = (String) it.next();
			actsList.addAll(searchService.searchActivitiesByMultiConditions(curCalId, as_ttl, as_ppl, as_loc, as_eq, CalendarBeanUtil.dateStrToDate(as_sdt), CalendarBeanUtil.dateStrToDate(as_edt), as_cal));
		}
	
		
		return this.getEntriesStrExpress(actsList,userid,aclMap);
	}
	
	private String getEntriesStrExpress(List list,String userid,Map aclMap){
		
		StringBuffer strBuf = new StringBuffer();
		
		StringBuffer jsArrayStr = new StringBuffer("[");
		for(int i=0;i<list.size();i++){
			Activity curAct = (Activity)list.get(i);
			Integer curCalAcl = (Integer) aclMap.get(curAct.getSrcCalendarId());
			if( i>0 ) jsArrayStr.append(",");
			String curActStr = new Activity2Js(userid,curCalAcl,curAct).toSearchRespString();
			jsArrayStr.append(curActStr);
			
		}
		jsArrayStr.append("]");
		
		
		strBuf.append("while(1);");
		strBuf.append(jsArrayStr.toString());
		return strBuf.toString();
	}

}

