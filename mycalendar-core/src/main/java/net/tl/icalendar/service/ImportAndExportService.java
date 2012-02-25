package net.tl.icalendar.service;

import java.io.InputStream;
import java.util.List;

public interface ImportAndExportService {
	/**
	 * 
	 * 导出用户的各个日历中的所有活动到文件
	 * 
	 * @param userid - 用户标识
	 * @return userid指定用户的所有日历的ics格式的字符串，每个日历对应返回数组中的一个元素
	 * @throws RemoteException
	 */
	public String[] getIcsFilesByUserid(String userid) ;
	
	/**
	 * 
	 * 从文件中导入活动到用户的日历中
	 * 
	 * @param in - 输入流
	 * @param uid - 用户uid
	 * @param calId - 日历id
	 * @return	List<Activity> 导入的所有活动集合
	 * @throws RemoteException
	 */
	public List importActivities(InputStream in, String uid, String calId) ;
}
