package net.tl.icalendar.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import net.tl.icalendar.beans.Activity;
/**
 * 
 * @author tianliang
 *		为日历与其它应用程序集成定义的接口
 */
public interface PublicService {
	
	/**
	 * 
	 * 添加一个活动到userId指向的合法用户的默认日历。如果该用户的默认日历还不存
	 * 在就为其创建一个（非合法用户不会创建，所以请确保userId为合法用户）。当你想将活动添加到userId用户的其它非默认日
	 * 历时请使用pub_saveActivityToSpecifiedCal(String calendarId,Activity act)方法
	 * 
	 * @param userId - 合法用户id
	 * @param act - 活动bean，对于一个有意义的活动应该设置的属性如下
	 * 				text     -- 活动标题
	 * 				details  -- 活动说明
	 * 				location -- 活动地点
	 * 				startTime-- 活动开始时间（只能精确到半个小时，例如：13:30、14：00、14：30）
	 * 				endTime  -- 活动结束时间（只能精确到半个小时，例如：13:30、14：00、14：30）
	 * 				erem 	 -- 定时提醒设置。具体格式为：用分号";"分隔，每个元素格式为："*:***"  默认是"3:600"
	 *							第一个字段表示提醒方式，1邮件提醒,2为短信提醒,3弹出窗口提醒；第二个字段表示提醒在提
	 *							前活动开始时间之前多长时间触发，单位为秒，例如：开始时间是2008-12-10 10:30:00,
	 *							erem为"1:600"则该提醒表示在2008-12-10 10:20:00 发送用户给邮件提醒
 	 * 
	 * 				此外，外部应用还应该填写扩展的属性以便以后的维护
	 * 				idInApp	 -- 活动在外部应用范围内的唯一标识 （不超过64个字符）
	 * 				appType  -- 外部应用的唯一标识 （不超过32个字符）
	 * 				extendProp-- 供外部应用使用的扩展属性（不超过1024个字符）
	 * @return	返回保存后的活动
	 * 
	 * @throws RemoteException
	 */
	public Activity pub_saveActivityToDefaultCal(String userId,Activity act) ;
	
	/**
	 * 
	 * 保存活动到某个指定日历中
	 * 
	 * @param calendarId	日历id，可以通过pub_getCalendarsByUserId(String userId)取得用户userId的所有日历集合
	 * @param act	活动bean，对于一个有意义的活动应该设置的属性如下
	 * 				text     -- 活动标题
	 * 				details  -- 活动说明
	 * 				location -- 活动地点
	 * 				startTime-- 活动开始时间（只能精确到半个小时，例如：13:30、14：00、14：30）
	 * 				endTime  -- 活动结束时间（只能精确到半个小时，例如：13:30、14：00、14：30）
	 * 				erem 	 -- 定时提醒设置。具体格式为：用分号";"分隔，每个元素格式为："*:***"  默认是"3:600"
	 *							第一个字段表示提醒方式，1邮件提醒,2为短信提醒,3弹出窗口提醒；第二个字段表示提醒在提
	 *							前活动开始时间之前多长时间触发，单位为秒，例如：开始时间是2008-12-10 10:30:00,
	 *							erem为"1:600"则该提醒表示在2008-12-10 10:20:00 发送用户给邮件提醒
 	 * 
	 * 
	 * 				此外，外部应用还应该填写扩展的属性以便以后的维护
	 * 				idInApp	 -- 活动在外部应用范围内的唯一标识 （不超过64个字符）
	 * 				appType  -- 外部应用的唯一标识 （不超过32个字符）
	 * 				extendProp-- 供外部应用使用的扩展属性（不超过1024个字符）
	 * @return 保存后的活动
	 * @throws RemoteException
	 */
	public Activity pub_saveActivityToSpecifiedCal(String calendarId,Activity act) ;
	
	/**
	 * 
	 * 修改活动
	 * 
	 * @param id － 活动id（在日历中的id，而不是该活动在你的应用中的id）,你可以通过
	 * pub_getActivitiesByAppId(String appType,String idInApp)方法取得activity的集合,
	 * 进而获得activity的id
	 * @param props	修改的属性的新的值，Map对象，下面给出键名（区分大小写）与Activity的属性对应关系
	 * 				键名				Activity属性名				键值类型
	 * 				text			text						java.lang.String
	 * 				location		location					java.lang.String
	 * 				details			details						java.lang.String
	 * 				startTime		startTime					java.util.Date
	 * 				endTime			endTime						java.util.Date
	 * 				erem			erem						java.lang.String[]每个元素的格式为
	 * 															"*:***"第一个字段表示提醒方式，1邮件提醒,
	 * 															2为短信提醒,3弹出窗口提醒；第二个字段表示提
	 * 															醒在提前活动开始时间之前多长时间触发，单位为
	 * 															秒，例如：开始时间是2008-12-10 10:30:00,
	 *															erem为"1:600"则该提醒表示在2008-12-10 10:20:00
	 *															发送用户给邮件提醒
	 *				idInApp			idInApp						java.lang.String
	 *				appType			appType						java.lang.String
	 *				extendProp		extendProp					java.lang.String
	 *在修改时不必给出所有的属性，只给出你希望修改的属性即可，例如只想修改text你可以调用类似的代码
	 *			Map props = new HashMap();
	 *			props.put("text","new Text");
	 *			
	 * @return	修改成功后的活动
	 * @throws RemoteException
	 */
	public Activity pub_modifyActivity(String id,Map props) ;
	
	/**
	 * 
	 * 删除活动
	 * 
	 * @param activityId － 活动id（在日历中的id，而不是该活动在你的应用中的id）,你可以通过
	 * pub_getActivitiesByAppId(String appType,String idInApp)方法取得activity的集合,
	 * 进而获得activity的id
	 * @return	删除成功返回activityId
	 * @throws RemoteException
	 */
	public String pub_deleteActivityById(String activityId) ;
	
	/**
	 * 
	 * 取得活动
	 * 
	 * @param activityId － 活动id（在日历中的id，而不是该活动在你的应用中的id）
	 * @return	返回id指定的活动
	 * @throws RemoteException
	 */
	public Activity pub_getActivityById(String activityId) ;
	 
	/**
	 * 
	 * 返回appType、idInApp指定的活动在日历范围内所有的活动集合
	 * 
	 * @param appType － 应用类型，对同一个应用应该一样
	 * @param idInApp － 活动在应用中的标识，对同一个应用应该一样
	 * @return List<Activity>
	 * @throws RemoteException
	 */
	public List pub_getActivitiesByAppId(String appType,String idInApp) ;
	
	/**
	 * 
	 * 取得用户在startTime和endTime时间段内的所有活动
	 * 
	 * @param userId - 用户标识
	 * @param startTime - 活动开始时间不小于该时间，如果为null则不限定开始时间
	 * @param endTime - 活动开始时间不大于该时间，如果为null则不限定结束时间
	 * @return	List<Activity>
	 * @throws RemoteException
	 */
	public List pub_getAllActivitiesByUserId(String userId,Date startTime,Date endTime) ;
	
	
	/**
	 * 
	 * 取得用户的所有日历
	 * 
	 * @param userId － 用户标识
	 * @return List<SCalendar>
	 * @throws RemoteException	
	 */
	public List pub_getCalendarsByUserId(String userId) ;
	
	/**
	 * 
	 * 通过xml作为参数的保存1至多个活动
	 * 
	 * @param xml - 活动描述，详细请参见xml文档说明
	 * @return - 返回结果
	 * @throws RemoteException
	 */
	public String pub_saveActsByXML(String xml);
	
	/**
	 * 
	 * 通过xml作为参数删除1至多个活动
	 * 
	 * @param xml - 要删除的活动描述，详细请参见xml文档说明
	 * @return - 返回结果
	 * @throws RemoteException
	 */
	public String pub_deleteActsByXML(String xml);
	
	/**
	 * 
	 * 通过xml作为参数修改1至多个活动
	 * 
	 * @param xml - 要修改的活动描述，详细请参见xml文档说明
	 * @return - 返回结果
	 * @throws RemoteException
	 */
	public String pub_modifyActsByXML(String xml);
}
