package com.smartdot.calendar.beans;

import java.io.Serializable;
import java.util.Map;

/**
 * 
 * @author tianliang
 * @desc The class give Calendar display config,All of configurations can be fined on HTML page.
 *
 */
public class CalendarDisplayConfig implements Serializable{
	
	private static final long serialVersionUID = 7139959445849303852L;
	
	public static final String DTFLDORDR = "dtFldOrdr";
	public static final String FORMAT24HOURTIME = "format24HourTime";
	public static final String FIRSTDAY = "firstDay";
	public static final String WEEKVIEW5 = "weekView5";
	public static final String DEFAULTCALMODE = "defaultCalMode";
	public static final String SHOWDECLINED = "showDeclined";
	public static final String SHOWCURRENTTIMELINE = "showCurrentTimeLine";
	public static final String CUSTOMCALMODE = "customCalMode";

	private String id;
	
	/** Date format **/
	// YMD   2008-11-31
	// DMY   31/11/2008
	// MDY   11/31/2008
	private String dtFldOrdr = "YMD";
	
	/** Time format**/
	// true		00:00 - The second day 00:00 
	// false	am 12:00 - pm 12:00 - pm 1:00 - pm 11:00 - The second day am 12:00 
	private Boolean format24HourTime= new Boolean(false);
	
	/** describe week start from which day**/
	// 0	sunday
	// 1	monday
	// 6	saturday
	private String firstDay="1";
	
	/** Flag to show weekend or not**/
	// false 	show weekend (saturday & sunday)
	// true 	not show
	private Boolean weekView5=new Boolean(false);
	
	/** Default view of calendar **/
	// day		one day view
	// week		one week view 
	// month	one month view 
	// custom	custom define view(five days)
	// list		activities??
	private String defaultCalMode="week";
	
	/** self define view **/
	//example: "custom,28" show 28 days activites
	private String customCalMode = "custom,5";
	
	/** Flag to show current time or not 䡱**/
	// true		show current time on page using one red line
	// false 	not show
	private Boolean showCurrentTimeLine = new Boolean(true);
	
	/** Flag to show refused activities request for sharing **/
	// true 	show
	// false	not show
	private Boolean showDeclined = new Boolean(true);
	
	/** 该显示配置属于的人的标识 **/
	private String personId;

	/**不需要更改的属性**/
	/**城市代码固定为	Asia/Shanghai **/
//	private String ctz = "Asia/Shanghai";
	/**本地化**/
//			private String locale="zh_CN";
	
	

	/**目前未考虑更改的属性**/
	/**对应“国家/地区”**/
	//默认是中国
//		private String country="CN";
	/**对应“根据现在位置显示天气”**/
	// ""	不显示天气
	//  C   显示为摄氏度
	//  F	显示为华氏度
//			private String weather = "";
	/**对应“自动在向我的日历添加邀请”**/
	//会重新载入活动？？
	/**对应“语言”**/
	//会重新载入活动？？
	/**对应“地区”**/
//			private String userLoc = "";
	
	
	/**用法尚未清楚的属性**/
	/**??**/
//		private String formatDateBeforeMonth="false";
	/**是否隐藏邀请**/
//			private String hideInvitations="false";
	/**？？**/
//			private String usrMigr8d2DF;
	/**??**/
//			private String usrMigr8d2SMS;
	
	
	
	//getter() setter()
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPersonId() {
		return personId;
	}
	public void setPersonId(String personId) {
		this.personId = personId;
	}
	public String getDefaultCalMode() {
		return defaultCalMode;
	}
	public void setDefaultCalMode(String defaultCalMode) {
		this.defaultCalMode = defaultCalMode;
	}
	public String getDtFldOrdr() {
		return dtFldOrdr;
	}
	public void setDtFldOrdr(String dtFldOrdr) {
		this.dtFldOrdr = dtFldOrdr;
	}
	public String getFirstDay() {
		return firstDay;
	}
	public void setFirstDay(String firstDay) {
		this.firstDay = firstDay;
	}
	public Boolean getFormat24HourTime() {
		return format24HourTime;
	}
	public void setFormat24HourTime(Boolean format24HourTime) {
		this.format24HourTime = format24HourTime;
	}
	public Boolean getWeekView5() {
		return weekView5;
	}
	public void setWeekView5(Boolean weekView5) {
		this.weekView5 = weekView5;
	}
	public Boolean getShowDeclined() {
		return showDeclined;
	}
	public void setShowDeclined(Boolean showDeclined) {
		this.showDeclined = showDeclined;
	}
	public Boolean getShowCurrentTimeLine() {
		return showCurrentTimeLine;
	}
	public void setShowCurrentTimeLine(Boolean showCurrentTimeLine) {
		this.showCurrentTimeLine = showCurrentTimeLine;
	}
	public String getCustomCalMode() {
		return customCalMode;
	}
	public void setCustomCalMode(String customCalMode) {
		this.customCalMode = customCalMode;
	}
	
	public void updateAttr(Map map){
		if(map.containsKey(CalendarDisplayConfig.DTFLDORDR)){
			this.setDtFldOrdr((String)map.get(CalendarDisplayConfig.DTFLDORDR));
		}
		if(map.containsKey(CalendarDisplayConfig.FORMAT24HOURTIME)){
			this.setFormat24HourTime(new Boolean((String)map.get(CalendarDisplayConfig.FORMAT24HOURTIME)));
		}
		if(map.containsKey(CalendarDisplayConfig.FIRSTDAY)){
			this.setFirstDay((String)map.get(CalendarDisplayConfig.FIRSTDAY));
		}
		if(map.containsKey(CalendarDisplayConfig.WEEKVIEW5)){
			this.setWeekView5(new Boolean((String)map.get(CalendarDisplayConfig.WEEKVIEW5)));
		}
		if(map.containsKey(CalendarDisplayConfig.DEFAULTCALMODE)){
			this.setDefaultCalMode((String)map.get(CalendarDisplayConfig.DEFAULTCALMODE));
		}
		if(map.containsKey(CalendarDisplayConfig.SHOWDECLINED)){
			this.setShowDeclined(new Boolean((String)map.get(CalendarDisplayConfig.SHOWDECLINED)));
		}
		if(map.containsKey(CalendarDisplayConfig.SHOWCURRENTTIMELINE)){
			this.setShowCurrentTimeLine( new Boolean((String)map.get(CalendarDisplayConfig.SHOWCURRENTTIMELINE)) );
		}
		if(map.containsKey(CalendarDisplayConfig.CUSTOMCALMODE)){
			this.setCustomCalMode((String)map.get(CalendarDisplayConfig.CUSTOMCALMODE));
		}
	}
}
