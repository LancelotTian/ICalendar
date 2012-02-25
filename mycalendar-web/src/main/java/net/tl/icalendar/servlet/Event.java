package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.ActivityComment;
import net.tl.icalendar.format.FormatHelper;
import net.tl.icalendar.service.ActivityService;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.utils.CalendarServletUtils;

public class Event extends HttpServlet {

	private static final long serialVersionUID = -1610349809301482964L;
	
	private static Logger logger = Logger.getLogger(Event.class);

	/**
	 * Constructor of the object.
	 */
	public Event() {
		super();
	}

	/**
	 * Destruction of the servlet. 
	 */
    @Override
	public void destroy() {
		super.destroy(); 
	}

    @Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String actionType = request.getParameter("action");
		String output = request.getParameter("output");
		
		
		StringBuilder strBuf = new StringBuilder();
		
		
		if(actionType!=null  && actionType.equalsIgnoreCase("VIEW") && output.equalsIgnoreCase("xml")) 
			strBuf.append(doView(request,response));
		
		
		response.setContentType(CalendarBeanUtil.getResponseContentType(output));
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.write(strBuf.toString());
		out.flush();
		out.close();
	}


    @Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
			logger.debug("-----------------------------------EVENT---------------------------------");
			request.setCharacterEncoding("UTF-8");
			
			/** 事件对应的操作类型：CREATE、DELETE、MODIFY **/
			String actionType = request.getParameter("action");
			String output = request.getParameter("output");
			
			StringBuilder strBuf = new StringBuilder();
			
			
			if(actionType==null && output.equalsIgnoreCase("xml"))
				strBuf.append(doViewEntryDetail(request,response));
			
			//add by ray
			if(null!=actionType&&actionType.equalsIgnoreCase("VIEW") && output.equalsIgnoreCase("xml"))
				strBuf.append(doViewEntryDetail(request,response));
			
			if(actionType!=null && actionType.equalsIgnoreCase("CREATE") && output.equalsIgnoreCase("js")){
	
				String secid = request.getParameter("secid");
				if(secid==null || secid.equalsIgnoreCase("")){
					secid = CalendarServletUtils.getUserIdByRequest(request);
					if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Cookie secid has been expired ! Must logon again.");
					else response.addCookie(new Cookie("secid",secid));
				}
				strBuf.append(doCreate(request,response,secid));
			}
				
	
			//被更改的系列活动在撤销更改时应该显示的数据
			if(actionType!=null && actionType.equalsIgnoreCase("VIEW_ORIGINAL") && output.equalsIgnoreCase("xml"))
				strBuf.append(doViewEntryOriginalDetail(request,response));
			
			
			if(actionType!=null && actionType.equalsIgnoreCase("RESPOND") && output.equalsIgnoreCase("js")){
	//			给活动添加一条注释
				if(null == request.getParameter("rcomment")&&null==request.getParameter("rst")){
					String secid = request.getParameter("secid");
					if(secid==null || secid.equalsIgnoreCase("")){
						secid = CalendarServletUtils.getUserIdByRequest(request);
						if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Cookie secid has been expired ! Must logon again.");
						else response.addCookie(new Cookie("secid",secid));
					}
					strBuf.append(doAddComment(request,response,secid));			
				}else if(null != request.getParameter("rcomment")&&null!=request.getParameter("rst")){//来宾回复
					
					logger.info("------------来宾回复----------------");
					String secid = request.getParameter("secid");
					String activeId = request.getParameter("eid");
					String rcomment = request.getParameter("rcomment");
					String join = request.getParameter("rst");
					String guest = request.getParameter("rgu");
					
					ActivityService actService = ServiceFactory.getInstance().getActivityService();
					
					strBuf.append(actService.responseToActivity(activeId, secid, new Integer(guest.trim()), new Integer(join.trim()), rcomment));
				}else if(null == request.getParameter("rcomment")&&null!=request.getParameter("rst")){
					//来宾回复 参加与否
					logger.info("------------来宾回复 参加与否----------------");
					String secid = request.getParameter("secid");
					String activeId = request.getParameter("eid");
					String join = request.getParameter("rst");
					
					ActivityService actService = ServiceFactory.getInstance().getActivityService();
					
					actService.respondToActivity(activeId, secid, new Integer(join));
					
				}
			}
			
			//与系列不同步的活动重置成同步的操作
			if(actionType!=null && actionType.equalsIgnoreCase("RESTORE_ORIGINAL"))
				strBuf.append(doRestorOriginalEntry(request,response));
			
			//修改日程操作
			if(actionType!=null && actionType.equalsIgnoreCase("EDIT") && output.equalsIgnoreCase("js"))
				strBuf.append(doEditActivity(request,response));
				
			response.setContentType(CalendarBeanUtil.getResponseContentType(output));
			response.setCharacterEncoding("UTF-8");
			PrintWriter out = response.getWriter();
			out.write(strBuf.toString());
			out.flush();
			out.close();
	}

    @Override
	public void init() throws ServletException {
	}
	
	private  String doCreate(HttpServletRequest request,HttpServletResponse response,String secid) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		//以下属性对所有日程取值都一样
		/**城市代码固定为	Asia/Shanghai **/
		//String cityZone = request.getParameter("ctz");
		/**有效期**/
		//String droi = request.getParameter("droi");
		/** locale信息：zh-CN **/
		//String locale = request.getParameter("hl");
		/** 未知，取值为"true" **/
		//String sf = request.getParameter("sf");
		
		
		//新建日程时未使用的参数
		/**所有子日历的id集合**/
		//String[] lef = request.getParameterValues("lef");
		
		StringBuilder strBuf = new StringBuilder();
		
		
		Map actProps = this.getActivityPropsByRequest(request);//request.getParameterMap();
		
		Activity act = new Activity();
		
		//act.setSecid(request.getParameter("secid"));		//设置活动所有人id
		act.setSecid(secid);
		act.setSrcCalendarId(request.getParameter("src"));	//设置活动属于的日历id
		act.setMultiProps(actProps);
		
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		Object ret[] = actService.saveActivity(
												act, 
												request.getParameter("recur"), 
												CalendarBeanUtil.dateStrToDate(
																	request.getParameter("droi").split("/")[0]
																	),
												CalendarBeanUtil.dateStrToDate(
																	request.getParameter("droi").split("/")[1]
																	)
												);
		
		Activity theAct = (Activity)((List)ret[0]).get(0);
		
		CalendarServletUtils.setSessionStateAttr(request, "create", new Integer(0), ret[0]);
			
		//生成返回结果
		strBuf.append("while(1);[['r','").append(request.getParameter("eid")).append("','").append(theAct.getId()).append("'],");
		strBuf.append((String)ret[1]);
			
		boolean allDays = FormatHelper.getTimeDur(theAct.getStartTime(), theAct.getEndTime()).indexOf("T")<0;
		
		strBuf.append(",['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000']");
		strBuf.append(",['_ShowMessage','").append(allDays ? "添加了" : "活动已添加").append(" \\74span class\\75\\42lk\\42 onmousedown\\75\\42_EF_ShowEventDetails(");
		strBuf.append((theAct.getId().charAt(0) < '9' && theAct.getId().charAt(0) > '0') ? "\\047" : "\\47").append(theAct.getId());
		strBuf.append("\\47);_HideMessage();\\42");
		strBuf.append((!theAct.getText().equals("") && theAct.getText().charAt(0)<'9'&&theAct.getText().charAt(0)>'0')?"\\076":"\\76");
		strBuf.append(CalendarBeanUtil.javaStrtoGoogleHTMLStr(theAct.getText())).append("\\74/span\\76，").append(allDays ? "日期为" : "时间为").append("：").append(FormatHelper.getTimeDurZH(theAct.getStartTime(), theAct.getEndTime()).split(" — ")[0]).append("。']]");
	
		return strBuf.toString();
	}
	
	private String doViewEntryDetail(HttpServletRequest request,HttpServletResponse response)  throws ServletException, IOException{
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("eid");		//活动id
		String type = request.getParameter("action");	//当前场景
		String secid = request.getParameter("secid");   //主日历id
		
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		
		Object[] ret = actService.getActivityXMLFormat(id, type,secid);
	
		
		return ret[1].toString();
	}
	
	private String doViewEntryOriginalDetail(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("eid");
		String type = request.getParameter("action");
		String secid = request.getParameter("secid");
		
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		
		Object[] ret = actService.getActivityXMLFormat(id, type,secid);
		
		return (String)ret[1];
	}
	
	private String doAddComment(HttpServletRequest request,HttpServletResponse response,String secid) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("eid");			//活动id
		String commentText = request.getParameter("ec");
		//String secid = request.getParameter("secid");
		String calendarId = request.getParameter("src");
		
		StringBuilder strBuf = new StringBuilder();
		
		ActivityComment comment = new ActivityComment();
		comment.setPersonId(secid);
		comment.setComment(commentText);
		comment.setSrcCalendarId(calendarId);
		
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
		Object[] ret = actService.addCommentToActivity(id, comment);
		
		strBuf.append("while(1);[");
		strBuf.append((String)ret[1]);
		strBuf.append(",['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000']]");
		
		return strBuf.toString();
	}
	
	private String doRestorOriginalEntry(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("eid");
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
	
		
		Map actProps = this.getActivityPropsByRequest(request);
		
		StringBuilder strBuf = new StringBuilder();
		
		
		Object[] ret = actService.restorOriginalActivity(secid,id,actProps);
		
		strBuf.append("while(1);[");
		strBuf.append((String)ret[1]);
		strBuf.append(",['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000'],['_ShowMessage','您的活动已更新。']]");
		
		List acts = new ArrayList();
		acts.add(ret[0]);
		CalendarServletUtils.setSessionStateAttr(request, "restore", new Integer(0), acts);
		
		return strBuf.toString();
	}
	
	
	
	private String doEditActivity(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		request.setCharacterEncoding("UTF-8");
		/**	修改时前台传回的日程属性中有些属性如果没有修改则不会出现，而有些则始终会出现
		 * 通过界面修改日程时始终会出现的属性：
		 * action	String 		操作类型，CREATE、EDIT
		 * add      String[]    添加的来宾名称  
		 * ctz	  	String 		城市区域，常量"Asia/Shanghai"				通过拖动日程修改不会出现
		 * droi		String		日历有效期？？
		 * eid		String		修改的日程的id
		 * erem		String[]	日程提醒设置								通过拖动日程修改不会出现
		 * hl		String		常量"zh-CN"								通过拖动日程修改不会出现
		 * lef		String[]	当前用户所有的子日历id				
		 * output	String		返回数据类型，"js"、"xml"
		 * rfdt		String 		该日程创建时间 YMD格式，例如：20080910		通过拖动日程修改不会出现
		 * scp		String		制定修改范围。"ONE"当前活动、"ALL"同一系列中的所有活动、"TAIL"同一系列该活动（包含该活动）之后的所有活动
		 * secid	String[] 	用户id
		 * sf		String		含义未知，目前为一常量值"true"				通过拖动日程修改不会出现
		 * src		String 		日程所在的子日历id
		 * 
		 * 只有被更改时才会出现的属性
		 * dates	String		对应新建日程界面的日程起、止时间
		 * details	String		对应新建日程界面的"说明"字段值
		 * icc		String		对应创建日程界面的"隐私"字段值,DEFAULT 默认、PRIVATE 私人、PUBLIC 公共
		 * location	String		对应创建日程界面的"地点"字段值
		 * sprop	String[]	对应创建日程界面的"邀请他人"、"查看来宾列表"字段值。例如：goo.allowInvitesOther:true/false，通过冒号前的值区分是哪个字段,只会出现被更改的
		 * text		String		对应创建日程界面的"内容"字段值
		 * trp		String		对应创建日程界面的"状态显示为"字段值，true 有空，false 忙碌
		 * 
		 */
		//String srcCalendarId = request.getParameter("src");
		String id = request.getParameter("eid");
		String scp = request.getParameter("scp");
		
		Map actProps = this.getActivityPropsByRequest(request);
		
		List entriesInLoadResp = new ArrayList();
		
		StringBuilder strBuf = new StringBuilder("while(1);[");
		Object[] ret = null;
		
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
	
		
		//修改单个非系列活动或单个系列活动且选择“仅此活动”
		if(scp.equals("ONE")){
			ret = actService.modifyOneActivity(secid,id,actProps);
			strBuf.append((String)ret[1]);
			entriesInLoadResp.add(ret[2]);
			CalendarServletUtils.setSessionStateAttr(request, "edit", new Integer(0), entriesInLoadResp);
			
		}else{//修改“全部活动”或“以后活动”或将非系列活动修改为系列活动
			ret = actService.modifySeriesActivities(secid,id,
													actProps,
													scp,
													CalendarBeanUtil.dateStrToDate(request.getParameter("rstart")),
													CalendarBeanUtil.getMsTimeByRdur(request.getParameter("rdur")),
													request.getParameter("recur"),
													CalendarBeanUtil.dateStrToDate(request.getParameter("droi").split("/")[0]),
													CalendarBeanUtil.dateStrToDate(request.getParameter("droi").split("/")[1])
													);
			
			strBuf.append((String)ret[1]);
			entriesInLoadResp.addAll((List)ret[2]);
			CalendarServletUtils.setSessionStateAttr(request, "edit", new Integer(0), entriesInLoadResp);
		}
		
		strBuf.append(",['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000'],['_ShowMessage','您的活动已更新。']]");
		
		return strBuf.toString();
	}

	private String doView(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("eid");		//活动标识
		String type = request.getParameter("action");	//当前操作类型
		
		List entriesInEventResp = new ArrayList();
		
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		ActivityService actService = ServiceFactory.getInstance().getActivityService();
	
		
		Object[] ret = actService.getActivityXMLFormat(id, type,secid);
		
		entriesInEventResp.add((Activity)ret[0]);
		
		CalendarServletUtils.setSessionStateAttr(request, "view", new Integer(0), entriesInEventResp);
		
		return (String)ret[1];
	}
	
	private Map getActivityPropsByRequest(HttpServletRequest request) throws IOException{
		request.setCharacterEncoding("UTF-8");
		Map params = request.getParameterMap();
		Map ret = new HashMap();
		
	    //add by ray
		if(params.containsKey("add")){
			
			//String [] persons = request.getParameterValues("add");
			String [] persons = request.getParameter("add").split(",");
			
			ret.put("add", persons);
		}
		
		if(params.containsKey("del")){
			
			String [] persons = request.getParameterValues("del");
			
			ret.put("del", persons);
		}
		
		if(params.containsKey("sprop")){
			
			String[] inviteType = request.getParameterValues("sprop");
			
			ret.put("sprop", inviteType);
			
		}
		
		if(params.containsKey("text")){
			String textStr = request.getParameter("text");
			ret.put("text", textStr);
		}
		
		if(params.containsKey("dates")){
			String dates = request.getParameter("dates");
			String startDate = dates.split("/")[0];
			String endDate = dates.split("/")[1];
			ret.put("startTime", CalendarBeanUtil.dateStrToDate(startDate));
			ret.put("endTime", CalendarBeanUtil.dateStrToDate(endDate));
		}
		
		if(params.containsKey("rfdt")){
			ret.put("rfdt", CalendarBeanUtil.dateStrToDate(request.getParameter("rfdt")));
		}
		
		if(params.containsKey("details")){
			String detailsStr = request.getParameter("details");
			ret.put("details", detailsStr);
		}
		
		if(params.containsKey("icc"))
			ret.put("icc", request.getParameter("icc"));
		
		if(params.containsKey("location")){
			String locationStr = request.getParameter("location");
			ret.put("location", locationStr);
		}
		
		if(params.containsKey("sprop"))
			ret.put("sprop", request.getParameterValues("sprop"));
		
		if(params.containsKey("trp"))
			ret.put("trp", request.getParameter("trp").equalsIgnoreCase("true"));
		
		/**
	 	表示提醒字段设置的数组，每个元素格式为："*:***:*"  
 		第一个字段表示提醒方式，1邮件提醒，3弹出窗口提醒 
		第二个字段表示提醒发生时间，秒为单位 
		第三个字段有三种取值，-1、0、1表示使用
		0－表示数据库中已经存在该提醒
		1－表示数据库中没有该提醒，当前要添加该提醒
		-1－表示数据库中已经处在该提醒，当前要删除该提醒
		 */
		if(params.containsKey("erem"))
			ret.put("erem", request.getParameterValues("erem"));
		
		if(params.containsKey("targ"))
			ret.put("targ", request.getParameter("targ"));
		
		return ret;
	}
}
