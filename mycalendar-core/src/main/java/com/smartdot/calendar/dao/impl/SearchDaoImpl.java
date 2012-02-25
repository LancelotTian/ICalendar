package com.smartdot.calendar.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import com.smartdot.calendar.dao.SearchDao;

public class SearchDaoImpl implements SearchDao {

	public List searchActsByMultiConditions(String cid, String textIncluded, 
			String attendUsers, String location, String textNotIncluded, Date stim,
			Date etim, String scope) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		
		String queryCondition = " srcCalendarId='" + cid + "' ";
		if (textIncluded != null)
			queryCondition += "and text like '%" + textIncluded + "%' ";
		if (location != null)
			queryCondition += "and location='" + location + "' ";
		if (textNotIncluded != null)
			queryCondition += "and text not like '%" + textNotIncluded + "%' ";
		if (stim != null) 
			queryCondition += "and startTime>=:startTimeP ";
		if (etim != null) 
			queryCondition += "and endTime<=:endTimeP ";
			
		Query query = session.createQuery("from Activity where" + queryCondition);
		if (stim != null)
			query.setParameter("startTimeP", stim);
		if (etim != null)
			query.setParameter("endTimeP", etim);
		List list = query.list();
		return list == null ? new ArrayList() : list;
	}

	public List searchActsInCalByText(String cid, String text) throws HibernateException {
		Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();
		Query query = session.createQuery("from Activity where srcCalendarId='"	+ cid + "' and text like '%" + text + "%' ");
		List list = query.list();
		return list == null ? new ArrayList() : list;
	}

}
