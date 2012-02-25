package net.tl.icalendar.service.impl;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import net.fortuna.ical4j.model.Component;
import net.fortuna.ical4j.model.DateTime;
import net.fortuna.ical4j.model.Property;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.util.ICalParseBean;

public class ServiceHelper {
	private static Logger logger = Logger.getLogger(ServiceHelper.class);
	
	/**
	 * 解析导入日历文件；
	 * @param calendar
	 * @return 活动列表；
	 */
	public static List getPbListParsing(net.fortuna.ical4j.model.Calendar calendar) {
		String _vevent = ICalParseBean.VEVENT; // event sign
		
		List pbList = new ArrayList();
		for(Iterator it = calendar.getComponents().iterator(); it.hasNext();) {
			Component comp = (Component) it.next();
			logger.info("component [" + comp.getName() + "]");
			if(_vevent.equals(comp.getName())) { // only deal with the event component.
				ICalParseBean pb = new ICalParseBean();
				for(Iterator init = comp.getProperties().iterator(); init.hasNext();) {
					Property prop = (Property) init.next();
					String pName = prop.getName();
					String pValue = "";
					try {
						pValue = new String(prop.getValue().getBytes("UTF-8"), "UTF-8");
						
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
					
					if(pName.equalsIgnoreCase(ICalParseBean.EXDATE)) pb.addExdate(pValue);
					else  pb.addValue(pName, pValue);
					
					logger.info("Property [" + pName + ", " + pValue + "]");
				}
				
				pbList.add(pb);
			}
		}
		
		return pbList;
	}
	
	/**
	 * 由活动信息转换bean转变为activity；
	 * @param pb
	 * @param userId
	 * @param calId
	 * @return
	 */
	public static Activity convertAct(ICalParseBean pb, String userId, String calId) {
		Activity act = new Activity();
		
		act.setSecid(userId);
		act.setSrcCalendarId(calId);
		
		act.setStartTime(turningDate(pb.getValue(ICalParseBean.DTSTART)));
		act.setEndTime(turningDate(pb.getValue(ICalParseBean.DTEND)));
		act.setIcc(pb.getValue(ICalParseBean.CLASS));
		act.setLastModifyTime(turningDate(pb.getValue(ICalParseBean.LAST_MODIFIED)));
		act.setLocation(pb.getValue(ICalParseBean.LOCATION));
		act.setText(pb.getValue(ICalParseBean.SUMMARY));
		act.setDetails(pb.getValue(ICalParseBean.DESCRIPTION));
		
		return act;
	}
	
	/**
	 * 对于系列中修改的活动的更新时，组属性map；
	 * @param pb
	 * @return
	 */
	public static Map updateAct(ICalParseBean pb) {
		Map map = new HashMap();
		map.put("startTime", turningDate(pb.getValue(ICalParseBean.DTSTART)));
		map.put("endTime", turningDate(pb.getValue(ICalParseBean.DTEND)));
		map.put("text", pb.getValue(ICalParseBean.SUMMARY));
		map.put("details", pb.getValue(ICalParseBean.DESCRIPTION));
		map.put("location", pb.getValue(ICalParseBean.LOCATION));
		map.put("icc", pb.getValue(ICalParseBean.CLASS));
		map.put("rfdt", turningDate(pb.getValue(ICalParseBean.LAST_MODIFIED)));
		
		return map;
	}
	
	/**
	 * 由日历中的日历格式转为对应的日期；
	 * @param date
	 * @return
	 */
	public static Date turningDate(String date) {
		try {
			DateTime dt = new DateTime(date);
			
			return new Date(dt.getTime());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 在持久化系列活动时，取得日期的相对最大值和最小值，
	 * 在得到本次持久化的所有活动的个数时使用；
	 * @param bool
	 * @return
	 */
	public static Date getLimitDate(boolean bool) {
		java.util.Calendar cal = java.util.Calendar.getInstance();
		int year = bool ? 2100 : 1970;
		cal.set(java.util.Calendar.YEAR, year);
		
		return cal.getTime();
	}
}
