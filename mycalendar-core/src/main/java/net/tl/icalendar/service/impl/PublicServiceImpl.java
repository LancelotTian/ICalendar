package net.tl.icalendar.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.dom4j.DocumentException;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.dao.CalendarDao;
import net.tl.icalendar.dao.impl.ActivityDaoImpl;
import net.tl.icalendar.dao.impl.CalendarDaoImpl;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.format.ws.ResultInWs;
import net.tl.icalendar.format.ws.Results2XMLInWs;
import net.tl.icalendar.format.ws.XML2ActivityInWS;
import net.tl.icalendar.service.PublicService;
import net.tl.icalendar.service.UserService;
import java.rmi.RemoteException;

public class PublicServiceImpl implements PublicService {
	
	private static Logger logger = Logger.getLogger(PublicServiceImpl.class);
	
	
	public String pub_deleteActivityById(String activityId)	  {
		return new ActivityServiceImpl().deleteOneActivity(activityId);
	}

	public List pub_getActivitiesByAppId(String appType, String idInApp)
		  {
		List ret = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
		
			ret = new ActivityDaoImpl().getActsByAppId(appType, idInApp);
		
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to finish outer app request. Cause: Fail to get activity list. [appType=" + appType + ";idInApp=" + idInApp + "].");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return ret;
	}

	public Activity pub_getActivityById(String activityId)
		  {
		Activity act = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
	
			act = new ActivityDaoImpl().getActivity(activityId);
	
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to finish outer app request. Cause: Fail to delete activity . [id=" + activityId + "].");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return act;
	}

	public List pub_getAllActivitiesByUserId(String userId, Date startTime,
			Date endTime)   {
		List acts = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

			acts = new ActivityDaoImpl().getActsByUid(userId, startTime, endTime);

			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to finish outer app request. Cause: Fail to finish outer app request. Cause: Fail to get activities of user,  [userid=" + userId + "]");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return acts;
	}

	public List pub_getCalendarsByUserId(String userId)   {
		List ret = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

			ret = new CalendarDaoImpl().getCalendarsByUid(userId);

			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to get calendars for user [id=" + userId + "]");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return ret;
	}

	public Activity pub_modifyActivity(String id, Map props)   {
		return (Activity) new ActivityServiceImpl().modifyOneActivity("public",id, props)[2];
	}

	public Activity pub_saveActivityToDefaultCal(String uid, Activity act)   {
//		if (uid == null || uid.equalsIgnoreCase(""))
//			throw new RemoteException("******Invoke pub_saveActivityToDefaultCal() failed.Cause:userId is null or empty string!");
		
		Set addedTasks = new HashSet();
		
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
			
			CalendarDao calDao = new CalendarDaoImpl();
		
			SCalendar cal = calDao.getMainCalendarByUid(uid);
			
			if(cal==null){
				UserService userService = new UserServiceImpl();
				UserBean user = userService.getUserFromLdap(uid);
				
//				if(user==null) throw RuntimeException("### uid=" + uid + " not exist in LDAP.So not create calendar for that. ###");
				
				String userid = user.getUserId();
				String username = user.getUserName();
				if (username == null || username.trim().equalsIgnoreCase(""))
					username = userid;
				
				cal = new SCalendar();
				cal.setColor(new Integer(1));
				cal.setOff((false ? Boolean.TRUE : Boolean.FALSE));
				cal.setIsDefault((true ? Boolean.TRUE : Boolean.FALSE));
				cal.setName(username + "的日历");
				cal.setUserId(userid);
				cal.setDetails(username + "的默认日历");
				
				cal = calDao.saveCalendar(cal);
			}
		
			// 完善活动信息
			act.setSecid(uid);
			act.setSrcCalendarId(cal.getId());
		
			// 保存前查看数据库中是否已经有该定时时间
			addedTasks.addAll(act.getTimerRemindTasks());
		
			act.setTimerRemindByErem();
		
			act.setId(new ActivityDaoImpl().saveActivity(act).getId());
		
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to finish outer app request. Cause: Fail to save activity [activity=" + act.toString() + "]");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		
		// 注册到定时服务
		new TaskServiceImpl().registeCalendarTask(addedTasks);
		
		return act;
	}

	public Activity pub_saveActivityToSpecifiedCal(String calendarId,
			Activity act)   {
		Set addedTasks = new HashSet();

		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

			SCalendar cal = new CalendarDaoImpl().getCalendarById(calendarId);
			if (cal == null)
				throw new RuntimeException("******Fail to finish outer app request. Cause: Fail to get calendar [calendar id=" + calendarId + "]");

			// 完善活动信息
			act.setSecid(cal.getUserId());
			act.setSrcCalendarId(calendarId);

			// 保存前查看数据库中是否已经有该定时时间
			addedTasks.addAll(act.getTimerRemindTasks());

			act.setTimerRemindByErem();

			new ActivityDaoImpl().saveActivity(act);

			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to finish outer app request. Cause: Fail to save activity [activity=" + act.toString() + "]");
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}

		// 注册到定时服务
		new TaskServiceImpl().registeCalendarTask(addedTasks);

		return act;
	}

	public String pub_deleteActsByXML(String xml)   {
		logger.debug("*** Received xml in delete acts webservice:"+xml);
		XML2ActivityInWS tool = null;
		try {
			tool = new XML2ActivityInWS(xml);
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		if(tool==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when generating parsing-xml-tool in delete!% ###");
		
		List tmpList = null;
		try {
			tmpList = tool.getInfoByXml();
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		
		if(tmpList==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when parsing xml to bean in delete!% ###");
		
		List results = new ArrayList();
		
		for(int i=0;i<tmpList.size();i++){
			String errmsg = "";
			boolean isSuccess = true;
			Object[] objs = (Object[]) tmpList.get(i);
			String sequence = (String) objs[0];
			String actid = (String) objs[1];
			logger.debug("***webservice(" + i + ",sequence=" + sequence + "):to delete activity[id=" +  actid +"]");
			try{
				this.pub_deleteActivityById(actid);
			}catch(Exception e){
				isSuccess = false;
				errmsg = e.getMessage();
			}
			
			if(!isSuccess && errmsg.trim().equals(""))
				errmsg = "Unknown Exception";
			
			ResultInWs riw = new ResultInWs(sequence,isSuccess,""+isSuccess,errmsg);
			results.add(riw);
		}
		
		return Results2XMLInWs.results2XMLStr(results);
	}

	public String pub_modifyActsByXML(String xml)   {
		logger.debug("*** Received xml in modify acts webservice:"+xml);
		XML2ActivityInWS tool = null;
		try {
			tool = new XML2ActivityInWS(xml);
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		if(tool==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when generating parsing-xml-tool in modify!% ###");
		
		List tmpList = null;
		try {
			tmpList = tool.getInfoByXml();
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		
		if(tmpList==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when parsing xml to bean in modify!% ###");
		
		List results = new ArrayList();
		
		for(int i=0;i<tmpList.size();i++){
			String errmsg = "";
			boolean isSuccess = true;
			Object[] objs = (Object[]) tmpList.get(i);
			String sequence = (String) objs[0];
			Map props = (Map)objs[1];
			String actid = (String) props.remove("id");
			logger.debug("***webservice(" + i + ",sequence=" + sequence + "):to modify activity[id=" +  actid +"]");
			logger.debug("[props=" +  props.toString() +"]");
			try{
				this.pub_modifyActivity(actid, props);
			}catch(Exception e){
				isSuccess = false;
				errmsg = e.getMessage();
			}
			
			if(!isSuccess && errmsg.trim().equals(""))
				errmsg = "Unknown Exception";
			
			ResultInWs riw = new ResultInWs(sequence,isSuccess,""+isSuccess,errmsg);
			results.add(riw);
		}
		
		return Results2XMLInWs.results2XMLStr(results);
	}

	public String pub_saveActsByXML(String xml)   {
		logger.debug("*** Received xml in add acts webservice:"+xml);
		XML2ActivityInWS tool = null;
		try {
			tool = new XML2ActivityInWS(xml);
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		if(tool==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when generating parsing-xml-tool in add!% ###");
		
		List tmpList = null;
		try {
			tmpList = tool.getInfoByXml();
		} catch (DocumentException e) {
			return Results2XMLInWs.results2XMLStr(e.getMessage());
		}
		
		if(tmpList==null) return Results2XMLInWs.results2XMLStr("### %Unknown error when parsing xml to bean in add!% ###");
		
		List results = new ArrayList();
		
		for(int i=0;i<tmpList.size();i++){
			String errmsg = "";
			String actid = "";
			boolean isSuccess = true;
			Object[] objs = (Object[]) tmpList.get(i);
			String sequence = (String) objs[0];
			Activity act = (Activity)objs[1];
			
			logger.debug("***webservice(" + i + ",sequence=" + sequence + "):to save activity.");
			logger.debug("[text=" +  act.getText() +"]");
			logger.debug("[deltails=" +  act.getDetails() +"]");
			logger.debug("[location=" +  act.getLocation() +"]");
			logger.debug("[erem=" +  act.getErem() +"]");
			logger.debug("[stim=" +  act.getStartTime() +"]");
			logger.debug("[etim=" +  act.getEndTime() +"]");
			logger.debug("[icc=" +  act.getIcc() +"]");
			logger.debug("[trp=" +  act.getTrp() +"]");
			
			try{
				Activity savedAct = this.pub_saveActivityToDefaultCal(act.getSecid(), act);
				if(savedAct==null){
					isSuccess = false;
				}else actid = savedAct.getId();
			}catch(Exception e){
				isSuccess = false;
				errmsg = e.getMessage();
			}
			
			if(!isSuccess && errmsg.trim().equals(""))
				errmsg = "Unknown Exception";
			
			ResultInWs riw = new ResultInWs(sequence,isSuccess,actid,errmsg);
			results.add(riw);
		}
		
		return Results2XMLInWs.results2XMLStr(results);
	}

}
