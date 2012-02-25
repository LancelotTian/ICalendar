package net.tl.icalendar.util;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import net.fortuna.ical4j.model.Component;
import net.fortuna.ical4j.model.Property;

/**
 * 日历导入时的活动信息转换bean；
 * @author chengxc
 *
 */
public class ICalParseBean {
	
	public final static String VEVENT = Component.VEVENT;
	public final static String RECURRENCE_ID = Property.RECURRENCE_ID;
	public final static String RRULE = Property.RRULE;
	
	public final static String UID = Property.UID;
	
	public final static String DTSTART = Property.DTSTART;
	public final static String DTEND = Property.DTEND;
	public final static String CLASS = Property.CLASS;
	public final static String DESCRIPTION = Property.DESCRIPTION;
	public final static String LAST_MODIFIED = Property.LAST_MODIFIED;
	public final static String LOCATION = Property.LOCATION;
	public final static String SUMMARY = Property.SUMMARY;
	public final static String EXDATE = Property.EXDATE;
	
	private Map map = new HashMap();
	private Set set = new HashSet();
	
	public void addExdate(String value){
		set.add(value);
	}
	
	public Set getExdate(){
		return set;
	}
	
	public String getValue(String key) {
		if(map == null) return "";
		
		String value = (String) map.get(key);
		if(value == null) value = "";
		
		return value;
	}
	
	public void addValue(String key, String value) {
		
		map.put(key, value);
	}
	
	public boolean ifCalSerial() {
		if(null != map.get(RRULE)) {
			return true;
		}
		
		return false;
	}
	
	public boolean ifOddSerial() {
		if(null != map.get(RECURRENCE_ID)) {
			return true;
		}
		
		return false;
	}
	
	public boolean ifNotSerial() {
		return !(ifOddSerial() || ifCalSerial());
	}
}
