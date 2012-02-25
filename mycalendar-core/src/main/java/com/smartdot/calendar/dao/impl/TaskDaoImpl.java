package com.smartdot.calendar.dao.impl;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import com.smartdot.calendar.beans.CalendarTask;
import com.smartdot.calendar.dao.TaskDao;

public class TaskDaoImpl implements TaskDao {

	public boolean checkTaskExistInCalendarTask(String taskId,int taskType,String taskDesc)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		String hqlStr = "from CalendarTask where taskId='" + taskId + "' and taskType=" + taskType;
		if(taskDesc!=null && !taskDesc.equalsIgnoreCase("")) hqlStr += " and taskDesc='" + taskDesc + "'";
		Query query = session.createQuery(hqlStr);
		List result = query.list();
		return !(result==null || result.size()<1) ;
	}

	public boolean checkTaskIdExistInCalendarTask(String taskId)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("from CalendarTask where taskId='" + taskId + "'");
		List result = query.list();
		return !(result==null || result.size()<1) ;
	}

	public boolean checkTaskIdExistInSourceOfTaskType(String taskId, int taskType)throws HibernateException  {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		String sourceTable ;
		String fieldName ;
		switch(taskType){
			case CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND:
				sourceTable = "ActivityMailReminder";
				fieldName = "remindTime";
				break;
			case CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND:
				sourceTable = "ActivitySmsReminder";
				fieldName = "remindTime";
				break;
			default: throw new HibernateException("******Unknown Bean(table) type from taskType[" + taskType + "]");
		}
		
		Query query = session.createQuery("from " + sourceTable + " where " + fieldName + "='" + taskId + "'");
		List result = query.list();
		return !(result==null || result.size()<1) ;
	}

	public int deleteCalendarTask(String taskId, int taskType)throws HibernateException  {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("delete CalendarTask where taskId='" + taskId + "' and taskType=" + taskType);
		return query.executeUpdate();
	}

	public void deleteCalendarTaskBeforCurTime()throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("delete CalendarTask where searchDate<=:eTim");
		query.setParameter("eTim", new Date());
		query.executeUpdate();
	}

	public CalendarTask saveCalendarTask(CalendarTask cTask)throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.save(cTask);
		return cTask;
	}

	public Set getCalendarTaskTypeByTaskId(String taskId)throws HibernateException {
		Set ret = new HashSet();
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Query query = session.createQuery("select distinct ct.taskType from CalendarTask ct where ct.taskId='" + taskId + "'");
		List result = query.list();
		ret.addAll(result);
		return ret;
	}
}
