package net.tl.icalendar.service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.fortuna.ical4j.data.CalendarBuilder;
import net.fortuna.ical4j.data.ParserException;
import net.fortuna.ical4j.model.DateTime;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.SeriesBaseInfo;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.dao.ActivityDao;
import net.tl.icalendar.dao.impl.ActivityDaoImpl;
import net.tl.icalendar.dao.impl.CalendarDaoImpl;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.service.ImportAndExportService;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.ICalParseBean;
import net.tl.icalendar.util.IcsGenerateUtils;

public class ImportAndExportServiceImpl implements ImportAndExportService {

    @Override
	public String[] getIcsFilesByUserid(String userid)   {
		ActivityDao actDao = new ActivityDaoImpl();
		String [] ret = null;
		UserBean user = new UserServiceImpl().getUserFromLdap(userid);
		if(user==null) return new String[0];
		String userEmail = user.getEmail();
		try{
			HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
			
			List cals = new CalendarDaoImpl().getCalendarsByUid(userid);
			int calNum = cals.size();
			ret = new String[calNum];
			for(int i=0;i<calNum;i++){
				SCalendar curCal = (SCalendar) cals.get(i);
				List acts = actDao.getActsInPeriodByCalid(curCal.getId(), null, null);
				Map seriesExdate = new HashMap();
				List sbis = new ArrayList();
				for(int j=0;j<acts.size();j++){
					Activity curAct = (Activity) acts.get(j);
					String curSeriesId = curAct.getSeriesId();
					if(curSeriesId!=null && !curSeriesId.equalsIgnoreCase("")){ //该活动是系列活动
						if(!seriesExdate.containsKey(curSeriesId)){				//如果map中还没有该系列id的key
							SeriesBaseInfo curSbi = actDao.getSeriesBaseInfo(curSeriesId);
							sbis.add(curSbi);
							//取得该系列的日期集合，集合中每个元素对象是ical中的DateTime类型
							List dates = CalendarBeanUtil.getDatesListByRrule(curSbi.getRecur().split(":")[1],curSbi.getStartTime());
							//将系列中的第一个活动的日期也加入到日期集合中
							dates.add(0, new DateTime(curSbi.getStartTime()));
							//放入map中
							seriesExdate.put(curSeriesId,dates);
						}
						//去除时间集合中出现的日期
						List dts = (List)seriesExdate.get(curSeriesId);
						Date curActOstim = curAct.getOrignDateDuration().getStartTime();
						DateTime curActOstimDT = new DateTime(curActOstim);
						if(dts.contains(curActOstimDT))
							dts.remove(curActOstimDT);
					}
				}
				
				ret[i] = IcsGenerateUtils.generateIcs(curCal, acts, sbis,seriesExdate, userEmail);
			}
		
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
		}catch (Exception ex) {
			HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
		}finally{
			HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
		}
		if(ret==null) ret = new String[0];
		return ret;
	}

    @Override
	public List importActivities(InputStream in, String uid, String calId)   {
		CalendarBuilder builder = new CalendarBuilder();
		try {
			net.fortuna.ical4j.model.Calendar calendar = builder.build(in);
			List pbList = ServiceHelper.getPbListParsing(calendar);
			
			List ret = new ArrayList();
			Set idset = parseList(pbList, uid, calId);
			Iterator it = idset.iterator();
			try{
					HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
					
					while(it.hasNext()){
						String actid = (String)it.next();
						Activity act = new ActivityDaoImpl().getActivity(actid);
						if(act!=null) ret.add(act);
					}
					HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
				}catch (Exception ex) {
					HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
				}finally{
					HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
				}
			
			return ret;
			
		} catch (IOException e) {
		} catch (ParserException e) {
		}
		return new ArrayList();
	}
	
	/**
	 * 根据活动列表持久化活动信息；
	 * @param pbList 活动列表；
	 * @param uid 用户名；
	 * @param calId 转入的日历id；
	 * @return 导入的活动个数；
	 * @ 
	 */
	private Set parseList(List pbList, String uid, String calId)   {
		Set ret = new HashSet();
		List oddList = new ArrayList();
		Map oddMap = new HashMap();
		int num = 0;
		for(Iterator it = pbList.iterator(); it.hasNext();) { // 不是系列活动
			ICalParseBean pb = (ICalParseBean) it.next();
			if(pb.ifNotSerial()) { // single act;
				Object[] objs = new ActivityServiceImpl().saveActivity(ServiceHelper.convertAct(pb, uid, calId));
				if(objs != null) { // save successfully;
					ret.add( ((Activity)((List)objs[0]).get(0)).getId() );
					num++;
				}
			} else {  // 是系列活动（包括与系列不同步的活动）
				if(pb.ifCalSerial()) { // 生成系列中的所有活动
					Object[] objs = new ActivityServiceImpl().saveActivity(ServiceHelper.convertAct(pb, uid, calId),
							"RRULE:" + pb.getValue(ICalParseBean.RRULE),
							ServiceHelper.getLimitDate(false), ServiceHelper.getLimitDate(true));
					
					if(objs != null) { // save successfully;
						List sList = (List) objs[0];
						if(sList != null) { // is not null
							num += sList.size();
							Map tempMap = new HashMap();
							for(Iterator serIt = sList.iterator(); serIt.hasNext();) { // save the serial acts info in map;
								Activity tempAct = (Activity) serIt.next();
								//需要删除的系列中的活动（活动的原始开始时间在EXDATE元素中）
								if(pb.getExdate().contains(CalendarBeanUtil.dateToStr(tempAct.getStartTime())))
									new ActivityServiceImpl().deleteOneActivity(tempAct.getId());
								else{//如果该活动不需要删除
									ret.add(tempAct.getId());
									tempMap.put(tempAct.getStartTime(), tempAct.getId());
								}
							}
							// one series one map;
							oddMap.put(pb.getValue(ICalParseBean.UID), tempMap);
						}
					}
					
				} else { //某个系列中的活动但是与系列不同步
					oddList.add(pb);
				}
			}
		}
		
		//需要修改的系列中的活动
		for(Iterator it = oddList.iterator(); it.hasNext();) { // odd act;
			ICalParseBean pb = (ICalParseBean) it.next();
			String curUid = pb.getValue(ICalParseBean.UID);
			Date startDate = ServiceHelper.turningDate(pb.getValue(ICalParseBean.RECURRENCE_ID));
			Object obj = oddMap.get(curUid);
			if(obj != null) {
				Map serMap = (Map) obj;
				
				if(serMap != null) {
					Object idObj = serMap.get(startDate);
					if(idObj != null) {
						new ActivityServiceImpl().modifyOneActivity(uid,(String) idObj, ServiceHelper.updateAct(pb));
					}
				}
			}
		}
		
		return ret;
	}

}
