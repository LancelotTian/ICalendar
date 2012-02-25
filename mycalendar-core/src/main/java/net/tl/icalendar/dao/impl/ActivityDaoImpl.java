package net.tl.icalendar.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.ActivityMailReminder;
import net.tl.icalendar.beans.ActivityShare;
import net.tl.icalendar.beans.ActivitySmsReminder;
import net.tl.icalendar.beans.CalendarTask;
import net.tl.icalendar.beans.SeriesBaseInfo;
import net.tl.icalendar.dao.ActivityDao;
import net.tl.icalendar.util.CalendarBeanUtil;

public class ActivityDaoImpl implements ActivityDao {
	
	private static Logger logger = Logger.getLogger(ActivityDaoImpl.class);

	public ActivityShare addNewActivityShare(ActivityShare activityShare) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		session.save(activityShare);
		return activityShare;
	}

	public void delActivityShare(ActivityShare activityShare)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.delete(activityShare);
		
	}

	public String deleteActivity(Activity activity) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.delete(activity);
		return activity.getId();
	}

	public Set[] modifyActTimerReminders(Activity act, Set oldTimerRemindTasks, Set newTimerRemindTasks) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Set addedTasks = CalendarBeanUtil.removeSetFromSet(newTimerRemindTasks, oldTimerRemindTasks);
		Set deletedTasks = CalendarBeanUtil.removeSetFromSet(oldTimerRemindTasks, newTimerRemindTasks);
		
		Set dirtyMailReminder_set = new HashSet();
		Set dirySmsReminder_set = new HashSet();
		
		//删除发送邮件任务
		Iterator iterator_mail = act.getMailReminders().iterator();
		while(iterator_mail.hasNext()){
			ActivityMailReminder curAMR = (ActivityMailReminder)iterator_mail.next();
			if(  deletedTasks.contains(""+CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND+":"+curAMR.getRemindTime() )  )
				dirtyMailReminder_set.add(curAMR);
		}
		
		act.getMailReminders().removeAll(dirtyMailReminder_set);
		Iterator iterator_mail_2 = dirtyMailReminder_set.iterator();
		while(iterator_mail_2.hasNext())
			session.delete((ActivityMailReminder)iterator_mail_2.next());
		
		
		//删除发送短信任务
		Iterator iterator_sms = act.getSmsReminders().iterator();
		while(iterator_sms.hasNext()){
			ActivitySmsReminder curASR = (ActivitySmsReminder)iterator_sms.next();
			if(  deletedTasks.contains(""+CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND+":"+curASR.getRemindTime() )  )
				dirySmsReminder_set.add(curASR);
		}
		
		act.getSmsReminders().removeAll(dirySmsReminder_set);
		Iterator iterator_sms_2 = dirySmsReminder_set.iterator();
		while(iterator_sms_2.hasNext())
			session.delete((ActivitySmsReminder)iterator_sms_2.next());
		
		
		Iterator iterator_newremind = addedTasks.iterator();
		while(iterator_newremind.hasNext()){
			String curTaskInfo = (String)iterator_newremind.next();
			int type = Integer.parseInt(curTaskInfo.split(":")[0]);
			String remindTime = curTaskInfo.split(":")[1];
			if(type==CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND){
				ActivityMailReminder newAMR = new ActivityMailReminder(remindTime);
				act.getMailReminders().add(newAMR);
			}
			if(type==CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND){
				ActivitySmsReminder newASR = new ActivitySmsReminder(remindTime);
				act.getSmsReminders().add(newASR);
			}
	
		}
		
		Set[] ret = new Set[2];
		ret[0] = addedTasks;
		ret[1] = deletedTasks;
		return ret;
	}

	public String deleteSeriesBaseInfo(SeriesBaseInfo seriesBaseInfo) throws HibernateException {
		String ret = seriesBaseInfo.getId();
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.delete(seriesBaseInfo);
		return ret;
	}

	public List getActIdsByTaskId(String taskId,int taskType)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		String beanName = null;
		if(taskType == CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND)
			beanName = "ActivityMailReminder";
		if(taskType == CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND)
			beanName = "ActivitySmsReminder";
		Query query = session.createQuery("select amr.activityId from " + beanName + " amr where amr.remindTime='" + taskId + "'");
		return query.list();
	}

	public List getActsByAppId(String appType,String idInApp)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Query query = session.createQuery("from Activity entry where entry.appType='"+ appType + "' and entry.idInApp='" + idInApp + "'");
		return query.list();
	}

	public List getActsBySeriesid(String sid) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Query query = session.createQuery("from Activity entry where entry.seriesId='"	+ sid + "'");
		List list = query.list();
		return list == null ? new ArrayList() : list;
	}

	public Activity getActivity(String id) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Activity activity = (Activity)session.get(Activity.class, id);
		return activity;
	}

	public ActivityShare getActivityShareByUid(Activity activity, String uid)throws HibernateException {
		
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		String hql = " from ActivityShare ac where ac.uid ='"+uid+"' and ac.activity.id='"+activity.getId()+"'";
		
		ActivityShare result = (ActivityShare)session.createQuery(hql).uniqueResult();
		
		return result;
	}

	public List getActsByUid(String uid, Date startDate, Date endDate) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		String searchCondition = "";
		if(startDate!=null) searchCondition += " and entry.startTime>=:startTime";
		if(endDate!=null) searchCondition += " and entry.endTime<:endTime";
		
		Query query = session.createQuery("from Activity entry where entry.secid='" + uid + "'" + searchCondition + " order by entry.startTime asc" );
		if(startDate!=null)	query.setParameter("startTime", startDate);
		if(endDate!=null) query.setParameter("endTime", endDate);
		List activities = query.list();
		
		return activities == null ? new ArrayList() : activities;
	}

	public List getActsByCalid(String calid) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		List acts = null;
		Query query = session.createQuery("from net.tl.icalendar.beans.Activity as entry where entry.srcCalendarId='" + calid + "'");
		acts = query.list();
		return acts==null?new ArrayList():acts;
	}

	public List getActsInPeriodByCalid(String cid, Date startDate, Date endDate)  throws HibernateException  {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		String searchCondition = "";
		if(startDate!=null) searchCondition += " and entry.startTime>=:startTime";
		if(endDate!=null) searchCondition += " and entry.endTime<:endTime";
		
		Query query = session.createQuery("from Activity entry where entry.srcCalendarId='" + cid + "'" +searchCondition );
		if(startDate!=null)	query.setParameter("startTime", startDate);
		if(endDate!=null) query.setParameter("endTime", endDate);
		List activities = query.list();
		
		return activities == null ? new ArrayList() : activities;
	}

	public SeriesBaseInfo getSeriesBaseInfo(String id) throws HibernateException {
		SeriesBaseInfo sbi = null;
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		sbi = (SeriesBaseInfo)session.get(SeriesBaseInfo.class, id);
		return sbi;
	}

	public List getShareAcitivitiesInPeriod(String uid, Date startDate, Date endDate) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		String searchCondition = "";
		if(startDate!=null) searchCondition += " and entry.startTime>=:startTime";
		if(endDate!=null) searchCondition += " and entry.endTime<:endTime";
		
		String hql = "select entry from net.tl.icalendar.beans.Activity as entry right join entry.activityShare as ashare where ashare.uid='" + uid + "' and ashare.uid <> entry.secid" ;//+searchCondition; 
		
		
		Query query = session.createQuery(hql);
		//if(startDate!=null)	query.setParameter("startTime", startDate);
		//if(endDate!=null) query.setParameter("endTime", endDate);
		List activities = query.list();
		
		return activities == null ? new ArrayList() : activities;
	}

	public Set getTaskIdsOfMailRemindInPeriod(Date startTime, Date endTime) throws HibernateException {
		Set ret = new HashSet();
		if(startTime==null || endTime==null) return ret;
		
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("select distinct amr.remindTime from ActivityMailReminder amr where amr.searchDate>:sTim and amr.searchDate<=:eTim");
		query.setParameter("sTim", startTime);
		query.setParameter("eTim", endTime);
		List result = query.list();
		ret.addAll(result);
		return ret;
	}

	public Set getTaskIdsOfSmsRemindInPeriod(Date startTime, Date endTime) throws HibernateException{
		Set ret = new HashSet();
		if(startTime==null || endTime==null) return ret;
		
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("select distinct amr.remindTime from ActivitySmsReminder amr where amr.searchDate>:sTim and amr.searchDate<=:eTim");
		query.setParameter("sTim", startTime);
		query.setParameter("eTim", endTime);
		List result = query.list();
		ret.addAll(result);
		return ret;
	}

	public Activity modifyActivity(Activity activity)  throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.update(activity);
		return activity;
	}

	public Activity saveActivity(Activity activity) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.save(activity);
		return activity;
	}

	public SeriesBaseInfo saveSeriesBaseInfo(SeriesBaseInfo seriesBaseInfo) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.save(seriesBaseInfo);
		return seriesBaseInfo;
	}

}
