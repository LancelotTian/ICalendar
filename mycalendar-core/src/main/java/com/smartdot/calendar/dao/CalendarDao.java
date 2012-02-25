package com.smartdot.calendar.dao;

import java.util.List;

import com.smartdot.calendar.beans.CalendarDisplayConfig;
import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.ShareCalendar;
/**
 * 
 * @author tianliang
 *		定义维护管理com.smartdot.calendar.SCalendar的相关方法
 */
public interface CalendarDao {
	
    /**
     * 
     * 保存日历
     * 
	 * @param cal - 日历对象
	 * @return  成功返回保存后的日历
	 */
	public SCalendar saveCalendar(SCalendar cal);
	
	/**
	 * 
	 * 保存日历的共享信息
	 * 
	 * @param shareCalendar - 共享信息对象
	 * @return 成功返回保存后的共享信息
	 */
    public ShareCalendar saveShareCalendar(ShareCalendar shareCalendar);
    
    /**
     * 
     * 保存日历显示设置
     * 
     * @param cdc - 日历显示配置对象
     * @return 返回保存后的日历显示配置
     */
    public CalendarDisplayConfig saveCalendarDisplayConfig(CalendarDisplayConfig cdc);
    
	/**
	 * 
	 * 取得用户的默认主日历
	 * 
	 * @param uid - 用户标识
	 * @return	如果用户还没有主日历就返回null
	 */
	public SCalendar getMainCalendarByUid(String uid);
	
	/**
	 * 
	 * 取得用户的所有日历
	 * 
	 * @param uid - 用户标识
	 * @return	List<SCalendar> ,size()=0表示没有任何日历
	 */
	public List getCalendarsByUid(String uid);
	
	/**
	 * 
	 * 取得指定的日历
	 * 
	 * @param id - 日历标识
	 * @return	返回日历对象，没有为null
	 */
	public SCalendar getCalendarById(String id);
	
	/**
	 * 
	 * 取得用户的日历显示配置
	 * 
	 * @param uid - 用户标识
	 * @return 没有为null
	 */
	public CalendarDisplayConfig getCalendarDisplayConfigByUid(String uid);	
	
    /**
     * 
     * 删除共享日历信息
     * 
     * @param shareCalendar - 共享日历信息
     * @return 返回被删除的共享日历信息对象的标识
     */
    public String deleteShareCalendar(ShareCalendar shareCalendar);
    
    /**
     * 
     * 取得与用户和日历相关的共享信息
     * 保证至少一个参数不为null。uid为null表示找出cid指定的日历共享出去的所有信息；cid为null表示找出uid指定的用户所拥有的所有共享进来的信息
     * 
     * @param uid - 用户标识,可以为null
     * @param calendarId - 日历标识，可以为null
     * @return List<ShareCalendar>
     */
    public List getShareCalendar(String uid , String cid);
    
	/**
	 * 
	 * 返回用户对某个日历的访问权限
	 * 	   null	    不能访问该日历
	 * 		10		只能查看活动的忙/闲状态
	 * 		20		只能参看活动
	 * 		60		能修改活动
	 * 		70		对活动具有管理员权限
	 * 		100		是日历的所有者
	 * 
	 * @param uid - 用户标识
	 * @param cid - 日历标识
	 * @return	
	 */
	public Integer getCalAccessLevelForUser(String uid,String cid);
	
}
