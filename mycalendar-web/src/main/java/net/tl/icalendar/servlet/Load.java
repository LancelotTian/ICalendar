package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.format.Activity2Js;
import net.tl.icalendar.service.ActivityService;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.CalendarCfg;
import net.tl.icalendar.utils.CalendarServletUtils;

public class Load extends HttpServlet {

	private static final long serialVersionUID = -5544431288768926390L;

	private static Logger logger = Logger.getLogger(Load.class);
	
	/**
	 * Constructor of the object.
	 */
	public Load() {
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
			throws ServletException, IOException {

	}

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
		
		strBuf.append(this.doLoadRequest(request,response));
		
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.write(strBuf.toString());
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
	
	
	private String doLoadRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
//		CalendarService calService = ServiceFactory.getInstance().getCalendarServiceImpl();
		
		String userId = request.getParameter("secid");
		if(userId==null||userId.equalsIgnoreCase("")){
			userId = CalendarServletUtils.getUserIdByRequest(request);
			if(userId==null||userId.equalsIgnoreCase("")) throw new ServletException("******Cookie user id not found!Try to longon again.");
		}
		
		StringBuilder strBuf = new StringBuilder();
		
		HttpSession mySession = request.getSession();
		
		String emf = request.getParameter("emf");
		String[] emfArray = emf.split("\n");
		
		String[] calIds = emf.split(" ");
 		String calId = calIds[0];
		
		if(this.emfIsLoadActivityEvent(emfArray))
			strBuf.append(this.doLoadActs(request,response));
		else{//前一个操作的后续load响应

			if(mySession.getAttribute("action")==null){ 	//session中的action尚未初始化尚未初始化
				strBuf.append("while(1);[");
				strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
				strBuf.append("]");
			}
			else{
				String loadToAction = (String) mySession.getAttribute("action");
				Integer loadTime = (Integer) mySession.getAttribute("loadtime");
				
				if(loadToAction.equalsIgnoreCase("caldetails")){	//初始化servlet
					strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
					CalendarServletUtils.clearSessionStateAttr(request);
				}
				
				/**
				 * 创建日程后的3个load响应
				 */
				else if(loadToAction.equalsIgnoreCase("create")){	
					if(loadTime.intValue() == 0){					//第一次load请求的响应给出日程的基本信息
						
						
						ArrayList entries = (ArrayList) mySession.getAttribute("entry");
						
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							Activity curEntry = (Activity)entries.get(i);
							if(i > 0) jsArrayStr.append(",");
							jsArrayStr.append(new Activity2Js(userId,new Integer(100),curEntry).toLoadRespString(Activity2Js.ADDORUPDATE));
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");	
						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					else{							//后两个load请求的响应用于更改时间戳，无实际数据
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
				/**
				 * 删除日程后的3个load响应
				 */
				else if (loadToAction.equalsIgnoreCase("delete")) {
					List entries = (ArrayList) mySession.getAttribute("entry");
					
					if(loadTime.intValue() == 0){
						
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							if(i>0) jsArrayStr.append(",");
							jsArrayStr.append("['d','").append((String) entries.get(i)).append("']");
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");	
						
						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					
					else {
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
				/**
				 * 重置系列中的某一个活动使其与系列同步后的3个load响应
				 */
				else if(loadToAction.equalsIgnoreCase("restore")){
					if(loadTime.intValue() == 0){
						List entries = (List) mySession.getAttribute("entry");
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							Activity curEntry = (Activity) entries.get(i);
							if(i>0) jsArrayStr.append(",");
							jsArrayStr.append(new Activity2Js(userId,new Integer(100),curEntry).toLoadRespString(Activity2Js.ADDORUPDATE));
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");

						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					else{
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
				/**
				 * 修改日程后的3个load响应
				 */
				else if(loadToAction.equalsIgnoreCase("edit")){
					if(loadTime.intValue() == 0){
						
						List entries = (List) mySession.getAttribute("entry");
						
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							if(i>0) jsArrayStr.append(",");
							if(entries.get(i) instanceof Activity){
							Activity curEntry = (Activity) entries.get(i);
							jsArrayStr.append(new Activity2Js(userId,new Integer(100),curEntry).toLoadRespString(Activity2Js.ADDORUPDATE));
							}
							else if(entries.get(i) instanceof String){
								String curEntryId = (String)entries.get(i);
								jsArrayStr.append("['d','").append(curEntryId).append("']");
							}
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");

						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					else{
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
				/**
				 * 
				 */
				else if(loadToAction.equalsIgnoreCase("view")){
					if(loadTime.intValue() == 0){
						
						List entries = (List) mySession.getAttribute("entry");
						
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							if(i>0) jsArrayStr.append(",");
							Activity curEntry = (Activity) entries.get(i);
							jsArrayStr.append(new Activity2Js(userId,new Integer(100),curEntry).toLoadRespString(Activity2Js.ADDORUPDATE));
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");

						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					else{
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
				
				/**
				 * 
				 */
				else if(loadToAction.equalsIgnoreCase("upload")){
					if(loadTime.intValue() == 0){
						
						
						
						List entries = (List) mySession.getAttribute("entry");
						
						StringBuilder jsArrayStr = new StringBuilder("[");
						for(int i=0;i<entries.size();i++){
							if(i>0) jsArrayStr.append(",");
							Activity curEntry = (Activity) entries.get(i);
							jsArrayStr.append(new Activity2Js(userId,new Integer(100),curEntry).toLoadRespString(Activity2Js.ADDORUPDATE));
						}
						jsArrayStr.append(",");
						jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
						jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");

						strBuf.append("while(1);");
						strBuf.append(CalendarBeanUtil.simpleJsArrayStr(jsArrayStr.toString()));
						
						mySession.removeAttribute("entry");
						try {
							CalendarServletUtils.addSessionLoadTimeAttr(request);
						} catch (Exception e) {
							logger.fatal("session没有被初始化");
						}
					}
					else{
						strBuf.append("while(1);[");
						strBuf.append(this.getCalTimeStampStrByEmf(emfArray));
						strBuf.append("]");
						
						if(loadTime.intValue() < 2){
							try {
								CalendarServletUtils.addSessionLoadTimeAttr(request);
							} catch (Exception e) {
								logger.fatal("session没有被初始化");
							}
						}
						
						else CalendarServletUtils.clearSessionStateAttr(request);
					}
				}
				
			}
		
		}
		return strBuf.toString();
	}
	
	private String doLoadActs(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
	
		
		String emf = request.getParameter("emf");
		String[] emfArray = emf.split("\n");
		
		
		Map accesslevel = calService.getCalAccessLevelForUser(secid, (HashSet)this.getCalIdsByEmf(emfArray));
//		Map accesslevel = new HashMap();
//		for(int i=0;i<accesslevelArray.length;i++){
//			String curStr = accesslevelArray[i];
//			System.out.println(curStr);
//			String key = curStr.split(":")[0];
//			int tempValue = Integer.parseInt(curStr.split(":")[1]);
//			Integer value = tempValue==-1?null:new Integer(tempValue);
//			accesslevel.put(key, value);
//		}
		SCalendar defaultCal = calService.getDefaultCalendarByUserid(secid);
		
		StringBuilder ret = new StringBuilder();
		
		List acts = this.getActsByEmf(secid,calService,emfArray);
		
		int entriesNum = acts.size();
		//如果该时间窗口中有活动时
		if(entriesNum>0){
			Set calIdsInApp = new HashSet();
			
			StringBuilder jsArrayStr = new StringBuilder();
			for(int i=0;i<entriesNum;i++){
				
				Activity curAct = (Activity)acts.get(i);
				String curAct_CalId = curAct.getSrcCalendarId();
				//当前用户对日历的访问级别
				Integer aclToCal = (Integer) accesslevel.get(curAct_CalId);
				//当前用户对当前活动的访问级别
				
				
				String actStr = new Activity2Js(secid,aclToCal,curAct).toLoadRespString(Activity2Js.ADDORUPDATE);
				if(actStr!=null){//需要显示的活动
					if(!curAct_CalId.equalsIgnoreCase(defaultCal.getId()))
						calIdsInApp.add(curAct_CalId);
					
					if( jsArrayStr.length()>0 ) jsArrayStr.append(",");
					jsArrayStr.append(actStr);
				}
				
				//int actAccessLevel = CalendarBeanUtil.getActAccessLevel(aclToCal,curAct.getTrp(),curAct.getIcc());
				
//				if(actAccessLevel!=0){//需要显示的活动
//					if(!curAct_CalId.equalsIgnoreCase(defaultCal.getId()))
//						calIdsInApp.add(curAct_CalId);
//					
//					if( jsArrayStr.length()>0 ) jsArrayStr.append(",");
//					jsArrayStr.append(this.getActStrExpress(curAct, actAccessLevel));
//				}
				
			}
			
			if(jsArrayStr.length()>0){
				jsArrayStr.append(",");
				jsArrayStr.append(this.getAppStrExpress(calIdsInApp,calService));
				jsArrayStr.append(",");
				jsArrayStr.append(this.getCalTimeStampStrByEmf(emfArray));
				jsArrayStr.append(",['_RefreshCalendarWhenDisplayedNext']]");
				
				ret.append("while(1);");
				ret.append(CalendarBeanUtil.simpleJsArrayStr("["+jsArrayStr.toString()));
				return ret.toString();
			}
		}
		//没有活动被加载时
		ret.append("while(1);[");
		ret.append(this.getCalTimeStampStrByEmf(emfArray));
		ret.append("]");
		
		return ret.toString();
	}

	private String getAppStrExpress(Set calIds,CalendarService calService)   {
		StringBuilder ret = new StringBuilder();
		ret.append("['ap',[");
		Iterator iterator = calIds.iterator();
		int i = 0;
		while(iterator.hasNext()){
			String curCalId = (String)iterator.next();
			SCalendar curCal = calService.getCalendarById(curCalId);
			UserBean curUser = ServiceFactory.getInstance().getUserService().getUserFromLdap(curCal.getUserId());
			if(curCal!=null){
				if(i>0) ret.append(",");
				ret.append("'").append(curCalId).append("',").append(curCal.getIsDefault().booleanValue() ? "0" : "2").append(",'").append(curUser.getUserName()).append("','").append(curCal.getUserId()).append("'");
				i++;
			}
		}
		ret.append("]]");
		return ret.toString();
	}

	private boolean emfIsLoadActivityEvent(String[] emfArray) {
		for(int i=0;i<emfArray.length;i++)
			if(emfArray[i].split(" ")[2].trim().equalsIgnoreCase("0")) 
				return true;
		return false;
	}
	
	private List getActsByEmf(String uid,CalendarService calService,String[] emfs) throws ServletException,IOException{
		
		List acts = new ArrayList();
		
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		
		int emfsLength = emfs.length;
		for(int i=0;i<emfsLength;i++){
			String[] curEmfsAttr = emfs[i].split(" ");
			long loadFlag = Long.parseLong(curEmfsAttr[2]);
			
			if(loadFlag==0){
				String calendarId = curEmfsAttr[0].trim();
				String timeWindow = curEmfsAttr[1];
				acts.addAll(actService.getCalendarAcitivitiesInPeriod(calendarId, CalendarBeanUtil.dateStrToDate(timeWindow.split("/")[0]), CalendarBeanUtil.dateStrToDate(timeWindow.split("/")[1])));
				acts.addAll(actService.getShareAcitivitiesInPeriod(uid, CalendarBeanUtil.dateStrToDate(timeWindow.split("/")[0]), CalendarBeanUtil.dateStrToDate(timeWindow.split("/")[1])));
			}
		}
		
		return acts;
	}
	
	private String getCalTimeStampStrByEmf(String[] emfArray){
		StringBuilder ret = new StringBuilder();
		String timeStamp = ""+(System.currentTimeMillis()-CalendarCfg.getBaseTime());
		ret.append("['us','");
		
		Map map = this.getCalTimeStampByEmf(emfArray);
		Iterator iterator = map.keySet().iterator();
		int i=0;
		while(iterator.hasNext()){
			if(i>0) ret.append("\\n");
			String key = (String)iterator.next();
			String[] timeWindow = (String[])map.get(key);
			ret.append(key).append(" ").append(timeWindow[0]).append("/").append(timeWindow[1]).append(" ").append(timeStamp);
			i++;
		}
		
		ret.append("']");
		return ret.toString();
	}
	
	private Set getCalIdsByEmf(String[] emfArray){
		Set set = new HashSet();
		Map map = this.getCalTimeStampByEmf(emfArray);
		Iterator it = map.keySet().iterator();
		while(it.hasNext()){
			String id = (String) it.next();
			set.add(id);
		}
		return set;
	}
	
	private Map getCalTimeStampByEmf(String[] emfArray){
		Map map = new HashMap();
		for(int i=0;i<emfArray.length;i++){
			String[] props = emfArray[i].split(" ");
			String calId = props[0].trim();
			String timeS = props[1].split("/")[0].trim();
			String timeE = props[1].split("/")[1].trim();
			if(map.containsKey(calId)){
				String[] timeWindow = (String[]) map.get(calId);
				if(CalendarBeanUtil.dateStrToDate(timeWindow[0]).getTime()>CalendarBeanUtil.dateStrToDate(timeS).getTime())
					timeWindow[0] = timeS;
				if(CalendarBeanUtil.dateStrToDate(timeWindow[1]).getTime()<CalendarBeanUtil.dateStrToDate(timeE).getTime())
					timeWindow[1] = timeE;
				map.put(calId, timeWindow);
			}
			else map.put(calId, new String[]{timeS,timeE});
		}
		
		return map;
	}
	
}
