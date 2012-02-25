package net.tl.icalendar.beans;

import java.io.Serializable;
import java.util.Date;

import net.tl.icalendar.util.CalendarBeanUtil;

public class ActivitySmsReminder implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2964447017409918993L;
	
	private String id;
	private String remindTime;
	private String activityId;
	private Date searchDate;
	
	public ActivitySmsReminder(){}
	
	public ActivitySmsReminder(String remindTime){
		this.remindTime = remindTime;
		this.searchDate = CalendarBeanUtil.dateStrToDate(remindTime);
	}
	
	public ActivitySmsReminder(Date searchDate){
		this.remindTime = CalendarBeanUtil.dateToStr(searchDate);
		this.searchDate = searchDate;
	}
	
	public String getActivityId() {
		return activityId;
	}
	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getRemindTime() {
		return remindTime;
	}
	public void setRemindTime(String remindTime) {
		this.remindTime = remindTime;
	}
	public Date getSearchDate() {
		return searchDate;
	}
	public void setSearchDate(Date searchDate) {
		this.searchDate = searchDate;
	}

}
