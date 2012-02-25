package net.tl.icalendar.service.impl;

import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import net.tl.icalendar.dao.SearchDao;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.dao.impl.SearchDaoImpl;
import net.tl.icalendar.service.SearchService;

public class SearchServiceImpl implements SearchService {
	
	private static Logger logger = Logger.getLogger(SearchServiceImpl.class);
	
	private SearchDao searchDao;
	
	public SearchServiceImpl(){
		searchDao = new SearchDaoImpl();
	}

	public List searchActivitiesByMultiConditions(String cid,
			String textIncluded, String attendUsers, String location,
			String textNotIncluded, Date stim, Date etim, String scope)
			  {
		List ret = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

			ret = searchDao.searchActsByMultiConditions(cid,
					textIncluded, attendUsers, location, textNotIncluded, stim,
					etim, scope);

			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to search activities by multi-conditions in calendar[id=" + cid + "].");
			//HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return ret;
	}

	public List searchActivitiesByText(String cid, String text)
	  {
		List ret = null;
		try {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
		
			ret = searchDao.searchActsInCalByText(cid, text);
		
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		} catch (Exception ex) {
			logger.error("******Fail to search activities by text[text='" + text + "'] in calendar[id=" + cid + "].");
			//HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		} finally {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		return ret;
	}

}
