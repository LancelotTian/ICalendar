package com.smartdot.calendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smartdot.calendar.base.service.ServiceFactory;
import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.ShareCalendar;
import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.business.CalDetailsBuzz;
import com.smartdot.calendar.service.CalendarService;
import com.smartdot.calendar.service.UserService;
import com.smartdot.calendar.util.Constants;
import com.smartdot.calendar.utils.CalendarServletUtils;

public class Caldetails extends HttpServlet {

	private static final long serialVersionUID = 8653898505715544604L;
	
	/**
	 * Constructor of the object.
	 */
	public Caldetails() {
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

	
    @Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {}

	
    @Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		
		//业务逻辑分流-chengxc
		String init = request.getParameter("init");
		
		if(null == init || "".equals(init)) { // 添加新日历后返回
			String dtid = request.getParameter("dtid");
			String userId = request.getParameter("secid");
			
			String responseStr = new CalDetailsBuzz().createResponseStr(dtid, userId);
			
			PrintWriter out = response.getWriter();
			out.write(responseStr);
			out.close();
			
			return;
		}
		
		/** ---------以下为初始化时调用该servlet的逻辑；---------------- */
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		UserService userService = ServiceFactory.getInstance().getUserService();
		
		String[] dtid = request.getParameterValues("dtid");
		
		
		UserBean user = (UserBean)request.getSession(true).getAttribute(CalendarServletUtils.INDICAL_USER);
		if(user==null)	user = userService.getUserFromLdap(secid);
		
		StringBuilder strBuf = new StringBuilder();
		
		SCalendar defaultCalendar = calService.getDefaultCalByUser(user);
		//String defaultCalendarName = defaultCalendar.getName();
		String calendarId = defaultCalendar.getId();
		
		List list1 = calService.getShareCalendar(user.getUserId(), null);///被我共享
		Iterator it1 = list1.iterator();
		strBuf.append("while(1);[['h','c2luZ2Fwb3JlX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','新加坡节假日'],['h','Y2hpbmFfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'中国节假日'],['h','aXJpc2hfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','爱尔兰节假日'],['h','YXVzdHJpYW5fX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'奥地利节假日'],['h','YXVzdHJhbGlhbl9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t','澳大利亚节假日'],['h','YnJhemlsaWFuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20'");
		strBuf.append(",'巴西节假日'],['h','cG9saXNoX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','波兰节假日'],['h','ZGFuaXNoX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20'");
		strBuf.append(",'丹麦节假日'],['h','Z2VybWFuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','德国节假日'],['h','cnVzc2lhbl9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'俄罗斯节假日'],['h','ZnJlbmNoX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','法国节假日'],['h','cGhpbGlwcGluZXNfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'菲律宾节假日'],['h','ZmlubmlzaF9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t','芬兰节假日'],['h','c291dGhfa29yZWFfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'韩国节假日'],['h','ZHV0Y2hfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','荷兰节假日'],['h','Y2hyaXN0aWFuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20'");
		strBuf.append(",'基督教节假日'],['h','Y2FuYWRpYW5fX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','加拿大节假日'],['h','bWFsYXlzaWFfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'马来西亚节假日'],['h','dXNhX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','美国节假日'],['h','bWV4aWNhbl9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'墨西哥节假日'],['h','c2FfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','南非节假日'],['h','bHVuYXJfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'农历'],['h','bm9yd2VnaWFuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','挪威节假日'],['h','cG9ydHVndWVzZV9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'葡萄牙节假日'],['h','amFwYW5lc2VfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','日本节假日'],['h','c3dlZGlzaF9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'瑞典节假日'],['h','dGhhaV9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t','泰国节假日'],['h','c3BhaW5fX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'西班牙的节日'],['h','Z3JlZWtfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','希腊节假日'],['h','aG9uZ19rb25nX2NfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'香港（中国）节假日'],['h','aG9uZ19rb25nX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','香港节假日'],['h','bmV3X3plYWxhbmRfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'");
		strBuf.append(",'新西兰节假日'],['h','aXNsYW1pY19femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t','伊斯兰节假日'],['h','aXRhbGlhbl9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'意大利节假日'],['h','aW5kaWFuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20','印度节假日'],['h','aW5kb25lc2lhbl9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t'");
		strBuf.append(",'印度尼西亚节假日'],['h','dWtfX3poX2NuQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ','英国节假日'],['h','amV3aXNoX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20'");
		strBuf.append(",'犹太节假日'],['h','dmlldG5hbWVzZV9femhfY25AaG9saWRheS5jYWxlbmRhci5nb29nbGUuY29t','越南节假日'],['h','dGFpd2FuX196aF9jbkBob2xpZGF5LmNhbGVuZGFyLmdvb2dsZS5jb20'");
		strBuf.append(",'中国台湾节假日']"); 
		
		
		for(int i=0;i<dtid.length;i++){////////20,20,0第一个代表给这个主日历的权限，第二个代表公共权限得动态添加
			String calId = dtid[i];/////////////被共享的日历id,calendarId是这个主日历id
			
			
			
			SCalendar calendar = calService.getCalendarById(dtid[i]);
			if(!(calendar.getUserId().equals(user.getUserId()))){ //是被共享进来的日历
		
				List list_temp1 = calService.getShareCalendar(Constants.PUBLIC_UID, calId);
				ShareCalendar shareCalendar = (ShareCalendar)calService.getShareCalendar(user.getUserId(),calId).get(0);
				
				strBuf.append(",");
				strBuf.append("['_DS_put','").append(calId).append("',");

				//当前用户对共享进来的日历的访问权限: 10、20、60、70
				strBuf.append(shareCalendar.getPower()).append(",");

				if(list_temp1.size()>0){	//被共享进来的日历被设置为公开，取值：10-公开但只能查看忙闲信息；20-公开且不仅仅查看忙闲
					ShareCalendar shareCalendar1 = (ShareCalendar)list_temp1.get(0);
					strBuf.append(shareCalendar1.getPower());
				}else{						//被共享进来的日历没有被设置为公开
					strBuf.append("0");
				}

				strBuf.append(",0,'").append(shareCalendar.getName()).append("','Asia/Shanghai',null,null,null");
				strBuf.append(",'   ',[],null,'','").append(calendar.getUserId()).append( "','CN','add'");
				strBuf.append( ",null,null,'(GMT+08:00) 中国时间 - 北京',[],[],null,null,0,1],['_SE_refreshAddCalendarView']");
			}else{  //是当前用户自己的日历
				
				List list_temp = calService.getShareCalendar(Constants.PUBLIC_UID,calId);
				strBuf.append(",");
				strBuf.append("['_DS_put','").append(calId).append("',70,");
				if(list_temp.size()>0){
					ShareCalendar shareCalendar = (ShareCalendar)list_temp.get(0);
					strBuf.append(shareCalendar.getPower());
				}else{
					strBuf.append("0");
				}
				
				strBuf.append(",0,'").append(calendar.getName()).append("','Asia/Shanghai',");
				strBuf.append("'").append(calendar.getLocation()).append("','")
					.append(calendar.getDetails()).append("',null");
				strBuf.append(",'ede7b5cd5a2945e8ef265d0a6385ecf4',['").append(calendarId).append( "',70");
				
				//当前日历共享出给其他人的ShareCalendar集合
				List list  = calService.getShareCalendar(null,calId);
				Iterator it = list.iterator();
				while(it.hasNext()){
					
					ShareCalendar sc = (ShareCalendar)it.next();
					
					
					UserBean user_temp = userService.getUserFromLdap(sc.getUserId());
					
					if(user_temp!=null){
//						if((user_temp==null)&&(!sc.getUserId().equals(Constants.PUBLIC_UID))){
//							strBuf.append(",'"+sc.getUserId()+"',"+sc.getPower());
//						}else
//						if(sc.getUserId().equals(Constants.PUBLIC_UID)){
//							strBuf.append(",'" + Constants.PUBLIC_UID + "',"+sc.getPower());
//						}else{
						//TODO 如果被共享的用户还没有日历时候的处理需要进一步考虑
							SCalendar calendar_temp = calService.getDefaultCalendarByUserid(user_temp.getUserId());
							if(calendar_temp!=null)
								strBuf.append(",'").append(calendar_temp.getId()).append("',").append(sc.getPower());
						//}
					}
					else if(sc.getUserId().equals(Constants.PUBLIC_UID)){
						strBuf.append(",'" + Constants.PUBLIC_UID + "',").append(sc.getPower());
					}
					
				}
				
				strBuf.append("],null,'','").append(user.getUserId()).append("','CN','add'");
				strBuf.append( ",null,null,'(GMT+08:00) 中国时间 - 北京',[],[],null,null,0,1],['_SE_refreshAddCalendarView']");
			}
			
		}
		//张林 end 1
		
		
		strBuf.append(",['ap',[");
		
		for(int i=0;i<dtid.length;i++) {
			SCalendar calendar = calService.getCalendarById(dtid[i]);
			strBuf.append("'").append(calendar.getId());
			if(calendar.getIsDefault().booleanValue()) { // default calendar.
				strBuf.append("',0,'").append(user.getUserName()).append("','").append(user.getUserId());
			} else {
				strBuf.append("',2,'").append(calendar.getName()).append("','").append(user.getUserId());
			}
			strBuf.append("',");
			
			List shareCalendars = calService.getShareCalendar(null, calendar.getId());
			
			for(Iterator shareIt = shareCalendars.iterator(); shareIt.hasNext();) {
				ShareCalendar sCal = (ShareCalendar) shareIt.next();
				String userId = sCal.getUserId();
				if(Constants.PUBLIC_UID.equals(userId)) { //public
					strBuf.append("'").append(Constants.PUBLIC_UID).append("',5,'").append("Public principal','__public_principal__@public.calendar.google.com',");
				} else {
					UserBean oUser = userService.getUserFromLdap(sCal.getUserId());
					if(oUser!=null){	//用户在ldap中不存在时不进行处理
						SCalendar oCal = calService.getDefaultCalByUser(oUser);
						strBuf.append("'").append(oCal.getId()).append("',0,'','").append(sCal.getUserId()).append("',");
					}
				}
			}
		}
		
		//张林 begin 2
		//共享进来的日历在ap元素中的描述
		while(it1.hasNext()){
			
			ShareCalendar sc = (ShareCalendar)it1.next();
			SCalendar calendar = calService.getCalendarById(sc.getCalendarId());
			UserBean user_temp = userService.getUserFromLdap(calendar.getUserId());
			strBuf.append("'").append(calendar.getId()).append("',0,'','").append(user_temp.getUserId()).append("',");
		}
		strBuf.append("'").append(calendarId).append("',0,'").append(user.getUserName()).append("','").append(user.getUserId()).append("'");
		strBuf.append("]],['_RedrawCheckboxes']]");
		//张林 end 2
	
		
		CalendarServletUtils.setSessionStateAttr(request, "caldetails", new Integer(0), null);
			
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

}

