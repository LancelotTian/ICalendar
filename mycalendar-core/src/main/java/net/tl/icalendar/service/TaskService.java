package net.tl.icalendar.service;

import java.util.Date;
import java.util.Set;

public interface TaskService {
	
	/**
	 * 
	 * 保存日历任务
	 * 
	 * @param taskSet - Set<CalendarTask>任务集合，其中每一个元素的组成为"***:****:****"，冒号分隔的字段含义分别为：taskType、taskId、taskDesc
	 * @return 
	 */
	public void registeCalendarTask(Set taskSet) ;
	
	/**
	 * 
	 * 将某一段时间的日历任务（发送邮件和发送短信提醒）注册到WAS定时服务
	 * 
	 * @param startTime - 开始时间
	 * @param endTime - 结束时间
	 * @return	
	 * @throws RemoteException
	 */
	public void registeOnceTaskToWASTimer(Date startTime,Date endTime) ;

	
	/**
	 * 
	 * WAS定时服务回调方法，对定时任务进行响应处理
	 * 
	 * @param eventId - was定时服务返回的任务标识
	 * @return
	 * @throws RemoteException
	 */
	public void timerCallBack(String eventId) ;
	
	/**
	 * 
	 * 删除日历任务
	 * 
	 * @param taskSet - 任务集合，其中每一个元素的组成为"***:****:****"，冒号分隔的字段含义分别为：taskType、taskId、taskDesc
	 * @return
	 * @throws RemoteException
	 */
	public void unregisteCalendarTask(Set taskSet) ;
}
