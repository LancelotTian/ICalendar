package net.tl.icalendar.business;


import org.apache.log4j.Logger;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.util.CalendarBeanUtil;

/**
 * create a large amount of response strings for request.
 * @author chengxc
 *
 */
public class AmountResponseBuzz implements AmountResponseConstants {
	private Logger log = Logger.getLogger(AmountResponseBuzz.class);
	
	/**
	 * create '',
	 * @param content
	 * @return
	 */
	public String createQuoteSegment(String content) {
		StringBuilder buf = new StringBuilder();
		buf.append(RESPONSE_QUOTE)
			.append(content).append(RESPONSE_QUOTE).append(RESPONSE_SPLIT);
		
		return buf.toString();
	}
	
	/**
	 * create ''
	 * @param content
	 * @return
	 */
	public String createQuoteSegmentLast(String content) {
		StringBuilder buf = new StringBuilder();
		buf.append(RESPONSE_QUOTE).append(content).append(RESPONSE_QUOTE);
		
		return buf.toString();
	}
	
	/**
	 * crate [],
	 * @param content
	 * @return
	 */
	public String createBracketSegment(String content) {
		StringBuilder buf = new StringBuilder();
		buf.append(RESPONSE_FRONT)
			.append(content).append(RESPONSE_END).append(RESPONSE_SPLIT);
		
		return buf.toString();
	}
	
	/**
	 * crate []
	 * @param content
	 * @return
	 */
	public String createBracketSegmentLast(String content) {
		StringBuilder buf = new StringBuilder();
		buf.append(RESPONSE_FRONT).append(content).append(RESPONSE_END);
		
		return buf.toString();
	}
	
	/**
	 * fetch default calendar id with user.
	 * @param userId
	 * @return
	 */
	protected String getDefaultCalendar(String userId) {
		CalendarService calService = ServiceFactory.getInstance().getCalendarService();
		
		try {
			log.info("userId: " + userId);
			SCalendar cal = calService.getDefaultCalendarByUserid(userId);
			return cal.getId();
		} catch ( Exception e) {
			log.error("can not get default calendar of user: " + userId);
		}
		
		return "";
	}
	
	/**
	 * switch string;
	 * @param str
	 * @return
	 */
	protected String escapeToView(String str) {
//		String str = JSONArrayX.escapeToHtml(str);
		return CalendarBeanUtil.javaStrtoGoogleJsonArrayElementStr(str);
//		return JSONArrayX.escapeToJs(str);
	}
	
	/**
	 * fetch random code.
	 * @return
	 */
	protected String getRandomCode() {
		//TODO: true random code
		return "d89c3eafa9f7ac71a14a6921e5450f1c";
	}

}
