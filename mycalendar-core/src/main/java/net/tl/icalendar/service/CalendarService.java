package net.tl.icalendar.service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.ShareCalendar;
import net.tl.icalendar.beans.UserBean;
 

/**
 * 
 * @author tianliang
 *   用于访问底层日历数据库的接口定义
 */
public interface CalendarService {
	
	
	/**
	 * 
	 * 取得日历页面显示所需要的所有属性
	 * 
	 * @param user - 用户对象
	 * @param startDate - 开始时间
	 * @param endDate - 结束时间
	 * @return	List[0]<CalendarDisplayConfig>
	 * 			List[1]<SCalendar> - 用户的默认主日历
	 * 			List[2]<String> - 用户拥有的所有日历的所有在startDate和endDate之间的活动的js字符串表示
	 * 			List[3]<String> - render.jsp中的rt_clientDispatches脚本变量值
	 * 			List[4]<String> - ender.jsp中的_Dispatch变量值中的部分内容
	 * @throws RemoteException 
	 */
	public List getRenderProps(UserBean user,Date startDate,Date endDate);
	
	/**
	 * 
	 * 取得用户的默认主日历，如果该用户还没有就为其创建一个
	 * 
	 * @param user - 用户对象
	 * @return	
	 * @throws RemoteException
	 */
	public SCalendar getDefaultCalByUser(UserBean user);
	
	/**
	 * 
	 * 修改日历的一个属性
	 * 
	 * @param id - 日历标识
	 * @param attrName - 属性名
	 * @param attrValue - 属性值
	 * @throws RemoteException
	 */
	public SCalendar modifyCalendar(String id,String attrName,String attrValue);
	
	/**
	 * 
	 * 修改用户日历显示配置
	 * 
	 * @param uid - 用户标识
	 * @param attrMap - 修改日历显示配置的属性名-值对
	 * @throws RemoteException
	 */
	public void modifyUserCalDisplayConfig(String uid,Map attrMap);
	
	/**
	 * 
	 * 创建日历
	 * 
	 * @param cal - 正在创建的日历
	 * @param shareCalendarList - List<ShareCalendar>该日历共享出去的信息
	 * @return	Object[0]<String> - 被创建日历的标识
	 * 			Object[1]<List> - 与shareCalendarList相同
	 * @throws RemoteException
	 */
	public Object[] createCalendarWithShare(SCalendar cal,List shareCalendarList);
	
	/**
	 * 
	 * 取得日历所有共享出去的信息
	 * 
	 * @param calendarId - 日历标识
	 * @return Object[]{Scalendar, Scalendar, List<ShareCalendar>}
	 * 		   Object[0] - 当前的日历对象
	 * 		   Object[1] - 当前日历所有人的默认主日历
	 * 		   Object[2] - 日历所有共享出去的信息
	 */
	public Object[] getShareCalendar(String calendarId) ;
	
	/**
	 * 
	 * 返回用户对多个日历的访问权限
	 * 
	 * 	   null	    不能访问该日历
	 * 		10		只能查看活动的忙/闲状态
	 * 		20		只能参看活动
	 * 		60		能修改活动
	 * 		70		对活动具有管理员权限
	 * 		100		是日历的所有者
	 * 
	 * @param uid - 用户标识
	 * @param calIds - 日历标识
	 * @return	Map<String,Integer> key为日历id；value为上面的权限值
	 */
	public Map getCalAccessLevelForUser(String uid,Set calIds);

	/**
	 * 
	 * 取得日历
	 * 
	 * @param cid	日历id
	 * @return
	 * @throws RemoteException
	 */
	public SCalendar getCalendarById(String cid) ;
	
	/**
	 * 
	 * 取得用户的默认(主)日历,如果还未创建就返回null
	 * 
	 * @param uid - 用户标识
	 * @return
	 * @throws RemoteException
	 */
	public SCalendar getDefaultCalendarByUserid(String uid) ;

	
	/**
	 * 
	 * 修改共享日历信息
	 * 
	 * @param cid - 日历id
	 * @param attrName - 属性名
	 * @param attrValue - 属性值
	 * @param secid - 当前用户id
	 * @throws RemoteException
	 */
	public void modifyShareCalendar(String cid,String attrName,String attrValue,String secid) ;
		
	/**
	 * 
     * 取得与用户和日历相关的共享信息
     * 保证至少一个参数不为null。uid为null表示找出cid指定的日历共享出去的所有信息；cid为null表示找出uid指定的用户所拥有的所有共享进来的信息
     * 
     * @param uid - 用户标识,可以为null
     * @param cid - 日历标识，可以为null
     * @return List<ShareCalendar>
	 * @throws RemoteException
	 */
	public List getShareCalendar(String uid,String cid);
	
	/**
	 * 
	 * 删除共享日历信息
	 * 
	 * @param shareCalendar - 共享日历信息
	 * @return 返回被删除的共享日历信息的id
	 * @throws RemoteException
	 */
	public String deleteShareCalendar(ShareCalendar shareCalendar);
		
	/**
	 * 
	 * 保存共享日历信息
	 * 
	 * @param shareCalendar - 共享日历信息
	 * @return 
	 * @throws RemoteException
	 */
	public String saveShareCalendar(ShareCalendar shareCalendar);
		
	/**
	 * 
	 * 保存日历
	 * 
	 * @param calendar - 日历
	 * @return
	 * @throws RemoteException
	 */
	public String saveCalendar(SCalendar calendar);
	
	/**
	 * 
	 * 删除日历
	 * 
	 * @param cid - 日历标识
	 * @return true成功，false失败
	 * @throws RemoteException
	 */
	public boolean deleteCalendar(String cid);
}
