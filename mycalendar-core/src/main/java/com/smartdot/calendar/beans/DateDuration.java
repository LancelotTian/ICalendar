package com.smartdot.calendar.beans;

import java.io.Serializable;
import java.util.Date;


/**
 * @author tianliang
 * 用于记录系列活动在seriesState.intValue==0时的起止时间，在系列活动同步状态改变时它并不改变，只有当整个系列的起止时间改变时才会改变。
 * 对于seriesState.intValue==-1的活动没有对应的该对象
 *
 */
public class DateDuration implements Serializable{
	private static final long serialVersionUID = 3659545454505927240L;
	private String id;
	private Date startTime;
	private Date endTime;
	private Activity activity;
	
	//constructor
	public DateDuration(){}
	public DateDuration(Date st,Date et){
		this.startTime=st;
		this.endTime=et;
	}
	public DateDuration(Date startTime,long period){
		this.startTime = (Date)startTime;
		this.endTime = new Date(this.startTime.getTime() + period);
	}
	
	//getter() setter()
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Activity getActivity() {
		return activity;
	}
	public void setActivity(Activity activity) {
		this.activity = activity;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	
	/**
	 * 
	 * @param act	活动
	 * @return	true 活动与该系列同步；false不同步
	 */
	public boolean compare(Activity act){
		return (act.getStartTime().getTime()==this.startTime.getTime() && act.getEndTime().getTime()==this.endTime.getTime());
	}
}
