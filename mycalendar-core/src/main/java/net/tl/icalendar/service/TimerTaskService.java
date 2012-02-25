package net.tl.icalendar.service;

import java.util.List;

import net.tl.icalendar.beans.TimerTask;

public interface TimerTaskService {
	
	/**
	 * 
	 * 根据给定名称返回was scheduler中的所有定时任务
	 * 
	 * @param name - 任务名称
	 * @return	List<TimerTask> 
	 * @throws RemoteException
	 */
	public List getTimerTaskesByName(String name) ;
	
	/**
	 * 
	 * 根据给定id返回was scheduler中的定时任务
	 * 
	 * @param id - 任务id
	 * @return 返回定时任务 
	 * @throws RemoteException
	 */
	public TimerTask getTimerTaskById(String id) ;
	
	/**
	 * 
	 * 删除was scheduler中指定id的定时任务
	 * 
	 * @param id - 任务id
	 * @return 成功true；失败false
	 * @throws RemoteException
	 */
	public boolean deleteTimerTaskByName(String id) ;
	
	/**
	 * 
	 * 保存定时任务
	 * 
	 * @param taskInfo - 定时任务
	 * @return 保存后的定时任务
	 * @throws RemoteException
	 */
	public TimerTask saveTimerTask(TimerTask timerTask) ;

}
