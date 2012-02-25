package com.smartdot.calendar.dao;

import java.util.Set;

import com.smartdot.calendar.beans.CalendarTask;
/**
 * 
 * @author tianliang
 *	 定义了维护管理com.smartdot.calendar.CalendarTask的方法
 */
public interface TaskDao {
	
	/**
	 * 
	 * 检查某个任务标识是否出现在CalendarTask表中
	 * 
	 * @param taskId - 任务标识，对于一次性执行的任务该标识是执行时间的字符串标识，例如：20080909T1230000；对于重复执行的系统任务，该标识是全局唯一的
	 * @return	true表示存在，即已经在was定时服务中注册过；false表示不存在，即尚未在was定时服务中注册过。
	 */
	public boolean checkTaskIdExistInCalendarTask(String taskId);
	
	/**
	 * 
	 * 检查某个任务是否出现在CalendarTask表中
	 * 
	 * @param taskId - 任务标识（不能为null）
	 * @param taskType - 任务类型（不能为null）
	 * @param taskDesc - 任务描述（可以为null）
	 * @return true出现；false未出现
	 */
	public boolean checkTaskExistInCalendarTask(String taskId,int taskType,String taskDesc);
	
	/**
	 * 
	 * 删除日历任务
	 * 
	 * @param taskId - 任务标识
	 * @param taskType - 任务类型
	 * @return 本次删除的个数
	 */
	public int deleteCalendarTask(String taskId,int taskType);
	
	/**
	 * 
	 * 检查任务标识在任务类型
	 * 
	 * @param taskId	任务标识
	 * @param taskType	任务类型
	 * @return	true：在taskType对应的保存原始任务信息的表中没有taskId存在；false相反。
	 */
	public boolean checkTaskIdExistInSourceOfTaskType(String taskId,int taskType);
	
	/**
	 * 
	 * 保存日历任务
	 * 
	 * @param cTask - CalendarTask对象
	 * @return	返回保存后的日历任务
	 */
	public CalendarTask saveCalendarTask(CalendarTask cTask);
	
	/**
	 * 
	 * 删除当前时间以前的所有日历任务
	 * 
	 */
	public void deleteCalendarTaskBeforCurTime();

	/**
	 * 
	 * 根据任务标识获取任务类型集合
	 * 
	 * @param taskId - 任务标识
	 * @return	Set<Integer>
	 */
	public Set getCalendarTaskTypeByTaskId(String taskId);
}
