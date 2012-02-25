package net.tl.icalendar.dao;

import java.util.Date;
import java.util.List;
import java.util.Set;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.ActivityShare;
import net.tl.icalendar.beans.SeriesBaseInfo;

/**
 * 
 * @author tianliang
 * 
 */
public interface ActivityDao {
	
	/**
	 * 
	 * 保存活动
	 * 
	 * @param activity - 活动对象
	 * @return	保存成功返回activity
	 */
	public Activity saveActivity(Activity activity);
	
	/**
	 * 
	 * 保存系列的基本信息
	 * 
	 * @param seriesBaseInfo - 系列基本信息bean
	 * @return	保存成功返回seriesBaseInfo
	 */
	public SeriesBaseInfo saveSeriesBaseInfo(SeriesBaseInfo seriesBaseInfo);
	
	/**
	 * 
	 * 根据标识取得活动
	 * 
	 * @param id - 活动标识
	 * @return	取得id指定的活动
	 */
	public Activity getActivity(String id);
	
	/**
	 * 根据系列标识取得系列中的所有活动
	 * 
	 * @param sid - 系列标识
	 * @return	List<Activity>
	 */
	public List getActsBySeriesid(String sid);
	
	/**
	 * 
	 * 取得指定日历在startDate(包含)和endDate(不包含)之间这段时间的所有活动
	 * 
	 * @param cid - 日历标识
	 * @param startDate - 开始时间
	 * @param endDate - 结束时间
	 * @return	List<Activity>
	 */
	public List getActsInPeriodByCalid(String cid,Date startDate,Date endDate);
	
	/**
	 * 
	 * 取得外部应用中的某个特定活动
	 * 
	 * @param appType - 应用类型
	 * @param idInApp - 活动在应用中的标识
	 * @return List<Activity> 返回appType、idInApp指定的活动在日历范围内所有的活动集合. 
	 */
	public List getActsByAppId(String appType,String idInApp);
	
	/**
	 * 
	 * 取得指定日历中的所有活动
	 * 
	 * @param calid - 日历id
	 * @return	List<Activity>
	 */
	public List getActsByCalid(String calid);
	
	/**
	 * 
	 * 取得用户在某段时间内的所有活动
	 * 
	 * @param uid - 用户标识
	 * @param startDate - 开始时间(包含)
	 * @param endDate - 结束时间(不包含)
	 * @return List<Activity>
	 */
	public List getActsByUid(String uid,Date startDate,Date endDate);
	
	/**
	 * 
	 * 根据标识取得系列基本信息
	 * 
	 * @param id - 系列标识
	 * @return	系列基本信息对象
	 */
	public SeriesBaseInfo getSeriesBaseInfo(String id);
	
	/**
	 * 
	 * 删除活动
	 * @param activity - 活动对象
	 * @return	删除成功返回被删除的活动id
	 */
	public String deleteActivity(Activity activity);
	
	/**
	 * 
	 * 删除系列基本信息
	 * 
	 * @param seriesBaseInfo - 系列对象
	 * @return 删除成功返回被删除的系列对象的id
	 */
	public String deleteSeriesBaseInfo(SeriesBaseInfo seriesBaseInfo);
	
	/**
	 * 
	 * 修改活动
	 * 
	 * @param activity - 活动对象
	 * @return	修改活动,成功返回更新后的活动
	 */
	public Activity modifyActivity(Activity activity);
	
	/**
	 * 
	 * 取得满足指定任务类型和任务标识的所有活动的标识集合
	 * 
	 * @param taskId - 任务标识,对应ActivityMailRemind/ActivitySmsRemind的remindTime属性）
	 * @param taskType  当前任务类型，1为发送邮件，2为发送短信
	 * @return List<String>  在ActivityMailRemind表中查找满足条件的所有活动标识
	 */
	public List getActIdsByTaskId(String taskId,int taskType);
	

	/**
	 * 
	 * @author ourui
	 * 添加一个共享活动
	 * 
	 * @param activityShare - 共享活动对象
	 * @return 保存后的对象
	 */
	public ActivityShare addNewActivityShare(ActivityShare activityShare);
	
	/**
	 * 
	 * @author ourui
	 * 删除共享活动
	 * 
	 * @param activityShare - 共享活动对象
	 */
	public void delActivityShare(ActivityShare activityShare);
	
	/**
	 * 
	 * @author ourui
	 * 得到一个共享活动中的某个人的参与
	 * 
	 * @param activity - 活动对象
	 * @param uid - 用户id
	 * @return
	 */
	public ActivityShare getActivityShareByUid(Activity activity,String uid);
	
	/**
	 * 
	 * @author ourui
	 * 获取某人共享的活动
	 * 
	 * @param uid 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public List getShareAcitivitiesInPeriod(String uid,Date startDate, Date endDate);
	
	/**
	 * 
	 * 修改活动的定时提醒任务，涉及Activity的mailReminder和smsReminder两个字段
	 * 
	 * @param act - 活动对象
	 * @param oldTimerRemindTasks - 原始的定时提醒任务（邮件提醒、短信提醒）。每个元素的格式为“*:******”，分别为类型（1或2）和提醒时间的字符串格式如“20080909T123000”
	 * @param newTimerRemindTasks - 新的定时提醒任务（邮件提醒、短信提醒）。每个元素的格式为“*:******”，分别为类型（1或2）和提醒时间的字符串格式如“20080909T123000”
	 * @return Set<String> Set[0]为添加的提醒任务集合；Set[1]为删除的提醒任务集合
	 */
	public Set[] modifyActTimerReminders(Activity act, Set oldTimerRemindTasks, Set newTimerRemindTasks);
	
	/**
	 * 
	 * 取得ActivityMailReminder表中在时间段内的属性remindTime的集合
	 * 
	 * @param startTime - 开始时间(包含)
	 * @param endTime - 结束时间(不包含)
	 * @return Set<String>
	 */
	public Set getTaskIdsOfMailRemindInPeriod(Date startTime,Date endTime);
	
	/**
	 * 
	 * 取得ActivitySmsReminder表中在时间段内的属性remindTime的集合
	 * 
	 * @param startTime - 开始时间(包含)
	 * @param endTime - 结束时间(不包含)
	 * @return Set<String>
	 */
	public Set getTaskIdsOfSmsRemindInPeriod(Date startTime,Date endTime);
}
