package com.smartdot.calendar.beans;

import java.io.Serializable;
import java.util.Date;

import com.smartdot.calendar.util.CalendarBeanUtil;

public class CalendarTask implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2237921966575854120L;
	
	
	//任务类型：系统任务（重复执行），注册24小时的活动邮件提醒
	public static final int TASK_MULTI_REGISTER_ACTS_MAIL_REMIND_TO_TIMER = -1;
	//任务类型：系统任务（重复执行），生成所有没有截止时间的系列任务的新的系列活动
	public static final int TASK_MULTI_DELETE_DIRTY_ACTS = -2;
	//任务类型：系统任务（重复执行），删除数据库中所有过期的活动，例如定义2年前的活动为过期任务
	public static final int TASK_MULTI_GENERATE_SERIES_ACTS = -3;
	//任务类型：系统任务（重复执行），发送所有人的24小时内所有活动的清单邮件给每个用户
	public static final int TASK_MULTI_SEND_ALL_ACTS_MAIL_REMIND = -4;
	
	
	//任务类型：一次性任务，发送单个的活动邮件提醒
	public static final int TASK_ONCE_SEND_ACT_MAIL_REMIND = 1;
	//任务类型：一次性任务，发送单个的活动短信提醒
	public static final int TASK_ONCE_SEND_ACT_SMS_REMIND = 2;
	
	
	
	private String id;
	private String taskId;
	private Integer taskType;
	private String taskDesc;
	private Date searchDate;
	
	public CalendarTask(){}
	
	public CalendarTask(String taskId,Integer taskType){
		this.taskId = taskId;
		this.taskType = taskType;
		if(taskType.intValue()>0) this.searchDate = CalendarBeanUtil.dateStrToDate(taskId);
	}
	
	public CalendarTask(Date searchDate,Integer taskType){
		this.searchDate = searchDate;
		this.taskType = taskType;
		if(taskType.intValue()>0) this.taskId = CalendarBeanUtil.dateToStr(searchDate);
	}
	
	public CalendarTask(Date searchDate,Integer taskType,String taskDesc){
		this.searchDate = searchDate;
		this.taskType = taskType;
		this.taskDesc = taskDesc;
		if(taskType.intValue()>0) this.taskId = CalendarBeanUtil.dateToStr(searchDate);
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTaskDesc() {
		return taskDesc;
	}
	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}
	public Integer getTaskType() {
		return taskType;
	}
	public void setTaskType(Integer taskType) {
		this.taskType = taskType;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public Date getSearchDate() {
		return searchDate;
	}
	public void setSearchDate(Date searchDate) {
		this.searchDate = searchDate;
	}
	
}
