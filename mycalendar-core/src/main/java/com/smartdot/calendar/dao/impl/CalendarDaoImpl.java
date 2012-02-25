package com.smartdot.calendar.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import com.smartdot.calendar.beans.CalendarDisplayConfig;
import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.ShareCalendar;
import com.smartdot.calendar.dao.CalendarDao;

public class CalendarDaoImpl implements CalendarDao {
	
	public SCalendar getMainCalendarByUid(String userId) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		SCalendar cal = null;
		Query query = session.createQuery("from SCalendar calendar where calendar.userId='" + userId + "' and calendar.isDefault=true");
		List qlist = query.list();
		if(qlist!=null&&qlist.size()>0)
			cal = (SCalendar)qlist.get(0);
		return cal;
	}

	public List getCalendarsByUid(String uid) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		Query query = session.createQuery("from SCalendar calendar where calendar.userId='" + uid + "'");
		return query.list();
	}

	public SCalendar getCalendarById(String id) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		return (SCalendar) session.get(SCalendar.class, id);
	}

	public CalendarDisplayConfig getCalendarDisplayConfigByUid(String uid) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		CalendarDisplayConfig cdc = null;
		Query query = session.createQuery("from CalendarDisplayConfig where personId='"	+ uid + "'");
		List list = query.list();
		if (list != null && list.size() > 0)
			cdc = (CalendarDisplayConfig) list.get(0);
		return cdc;
	}
	
	public String deleteShareCalendar(ShareCalendar shareCalendar) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.delete(shareCalendar);
		return shareCalendar.getId();
	}

	public List getShareCalendar(String uid, String cid) throws HibernateException{
		if(uid==null && cid==null) return new ArrayList();
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		String queryCondition = "";
		
		if(uid!=null) queryCondition += " userId = '"+uid+"'";
		if(cid!=null){
			if(!queryCondition.equalsIgnoreCase("")) queryCondition += " and";
			queryCondition +=  " calendarId = '"+cid+"'";
		}
		
		Query query = session.createQuery("from ShareCalendar where " + queryCondition);
		return query.list();
	}

	public ShareCalendar saveShareCalendar(ShareCalendar shareCalendar) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.saveOrUpdate(shareCalendar);
		return shareCalendar;
	}

	public SCalendar saveCalendar(SCalendar cal) throws HibernateException{
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.saveOrUpdate(cal);
		return cal;
	}

	public Integer getCalAccessLevelForUser(String uid, String cid) throws HibernateException{
		List sc = this.getShareCalendar(uid, cid);
		if(sc!=null&&sc.size()>0)
			return ((ShareCalendar)sc.get(0)).getPower();
		
		SCalendar scalendar = this.getCalendarById(cid);
		if(scalendar!=null&&scalendar.getUserId().equalsIgnoreCase(uid))
			return new Integer(100);
			
		return null;
	}

	public CalendarDisplayConfig saveCalendarDisplayConfig(CalendarDisplayConfig cdc) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		session.saveOrUpdate(cdc);
		return cdc;
	}
}
