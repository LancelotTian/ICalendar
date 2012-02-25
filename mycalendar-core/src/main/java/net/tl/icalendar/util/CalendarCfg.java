package net.tl.icalendar.util;

import java.text.SimpleDateFormat;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.PropertiesConfiguration;

public class CalendarCfg {
	private static long baseTime;
	private static String jsFilePrefix;
	private static String mapUrlPrefix;
	private static String mapUrlSuffix;
	private static String defaultErem;
	private static String timeConnName;
	private static String dailyTaskId;
	private static String certifyType;
	private static boolean timerTaskEnable;
	private static String wasSchedulerJNDI;
	
	static{
		try {
    		Configuration config = new PropertiesConfiguration("calendar_cfg.properties");
    		
    		baseTime = new SimpleDateFormat("yyyyMMdd'T'HHmmss").parse(config.getString("baseTime")).getTime();
    		jsFilePrefix = config.getString("jsFilePrefix");
    		mapUrlPrefix = config.getString("mapUrlPrefix");
    		mapUrlSuffix = config.getString("mapUrlSuffix");
    		defaultErem = config.getString("defaultErem");
    		timeConnName = config.getString("timeConnName");
    		dailyTaskId = config.getString("dailyTaskId");
    		certifyType = config.getString("certifyType");
    		timerTaskEnable = config.getBoolean("timerTaskEnable");
    		wasSchedulerJNDI = config.getString("was.scheduler.jdni");
		} catch (Exception e) {
			System.err.println("%%%% Error Initing Calendar config in CalendarCfg.class %%%%");
			e.printStackTrace();
		}
	}
	
	private CalendarCfg(){}
	
	public static long getBaseTime(){
		return baseTime;
	}
	public static String getJsFilePrefix(){
		return jsFilePrefix;
	}
	public static String getMapUrlPrefix(){
		return mapUrlPrefix;
	}
	public static String getMapUrlSuffix(){
		return mapUrlSuffix;
	}
	public static String getDefaultErem(){
		return defaultErem;
	}
	public static String getTimeConnName() {
		return timeConnName;
	}
	public static String getDailyTaskId() {
		return dailyTaskId;
	}
	public static String getCertifyType() {
		return certifyType;
	}
	public static boolean isTimerTaskEnable() {
		return timerTaskEnable;
	}
	public static String getWasSchedulerJNDI(){
		return wasSchedulerJNDI;
	}
	
}
