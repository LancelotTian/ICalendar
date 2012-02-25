package com.smartdot.calendar.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.smartdot.calendar.beans.Activity;
import com.smartdot.calendar.beans.ActivityComment;
import com.smartdot.calendar.beans.SeriesBaseInfo;
/**
 * 
 * @author tianliang
 *
 */
public interface ActivityService {
	
	/**
	 * 
	 * 给活动添加一条注释
	 * 
	 * @param id - 活动标识
	 * @param comment - 注释对象
	 * @return	Object[0]<Activity>添加注释后的活动对象；Object[1]<String>活动的js表示
	 * 
	 */
	public Object[] addCommentToActivity(String id,ActivityComment comment) ;
	
	/**
	 * 
	 * 删除某个日历中的所有活动、系列基本信息、提醒设置等相关内容
	 * 
	 * @param cid -	日历id
	 * @throws RemoteException
	 */
	public void deleteAllActivitiesInCalendar(String cid) ;
	
	/**
	 * 
	 * 删除指定活动所在系列中的所有活动、系列的基本信息
	 * 
	 * @param aid - 活动标识
	 * @return	List<String> 删除成功返回所有被删除的活动的id集合
	 * @throws RemoteException
	 */
	public List deleteAllActivitiesInSeries(String aid) ; 
	
	/**
	 * 
	 * 删除一个活动,如果该活动是系列活动且是唯一的一个还应删除其系列基本信息
	 * 
	 * @param aid - 活动标识	
	 * @return	删除成功返回aid
	 * @throws RemoteException
	 */
	public String deleteOneActivity(String aid) ;
	
	/**
	 * 
	 * 删除活动所在系列中该活动之后（按时间顺序且包含该活动）的所有活动，如果该活动是系列中的第一个活动那么还应该删除系列的基本信息
	 * 
	 * @param aid - 活动标识
	 * @return	List<String> 删除成功返回所有被删除的活动的标识集合
	 * @throws RemoteException
	 */
	public List deleteTailActivitiesInSeries(String aid) ;
	

	/**
	 * 
	 * 取得活动的xml表示
	 * 
	 * @param aid - 活动标识
	 * @param type - 当前操作的场景,取值可以为null、Activity2XML.PST_VIEW_ORIGINAL、Activity2XML.PST_TEMPLATE、Activity2XML.PST_VIEW
	 * @param secid - 当前访问用户的标识
	 * @return	Object[0]<Activity> - 返回aid指定的活动
	 * 			Object[1]<String> - 活动的xml表示
	 */
	public Object[] getActivityXMLFormat(String aid,String type,String secid);

	/**
	 * 
	 * 取得某一日历在时间段内的所有活动（包好开始时间但不包含结束时间）
	 * 
	 * @param cid -	日历标识
	 * @param startDate - 开始时间
	 * @param endDate - 结束时间
	 * @return	List<Activity>
	 * 类似String.substring(int,int)方法的实现逻辑
	 */
	public List getCalendarAcitivitiesInPeriod(String cid,Date startDate,Date endDate)  ;
	
	
	/**
	 * 
	 * 取得系列基本信息对象
	 * 
	 * @param sid -	系列基本信息标识
	 * @return	
	 * @throws RemoteException
	 */
	public SeriesBaseInfo getSeriesBaseInfo(String sid) ;
	
	/**
	 * 
	 * 获取某人共享的活动
	 * @author ourui
	 * 
	 * @param uid - 用户标识
	 * @param startDate - 开始时间
	 * @param endDate - 结束时间
	 * @return List<Activity>
	 */
	public List getShareAcitivitiesInPeriod(String uid,Date startDate, Date endDate);

	/**
	 * 
	 * 修改一个活动
	 * 
	 * @param aid - 活动标识
	 * @param props - 用来修改活动的属性名-值集合
	 * @return Object[0]<List<Activity>> - 本次修改所涉及的活动集合。当活动为非系列活动时仅包含aid指定的活动；但是如果活动是系列活动时，
	 * 		   且本次修改造成该活动的状态变为“与系列同步”则还包含此系列中的所有活动（包括id指定的活动，它会出现两次）
	 * 		   Object[1]<String> - Object[0]中所有活动的json表示 
	 * 		   Object[2]<Activity> - aid指向的活动
	 * @throws RemoteException
	 */
	public Object[] modifyOneActivity(String secid,String aid,Map props) ;
	
	/**
	 * 
	 * 修改系列活动，如果scope为“TAIL”且当前活动不是原系列的第一个活动时将原系列截为新旧两个系列活动；如果scope为“TAIL”但当前活动是原系列的第一个
	 * 活动时则修改与scope为“ALL”时的操作一样，在scope为“ALL”时大分为3种操作：一是将系列活动更改为非系列的单个活动；二是仅仅修改活动基本属性；三是
	 * 修改的属性造成系列重构行为
	 * 
	 * @param aid - 活动标识
	 * @param props - 新的活动属性名值集合
	 * @param scope - 活动涉及的范围，取值为“TAIL”或“ALL”
	 * @param rstart - 活动新的开始时间
	 * @param rdur - 活动的持续时间
	 * @param recur - 修改产生的重复频率
	 * @param droiStim - 限定返回的活动应该不超过的最早时间
	 * @param droiEtim - 限定返回的活动应该不超过的最晚时间
	 * @return	Object[0]<List<Activity>> - 本次修改所涉及的活动
	 * 			Object[1]<String> - Object[0]中所有活动的js字符串表示
	 * 			Object[2]<List<Activity>> - 出现在load响应中的所有活动
	 * @throws RemoteException
	 */
	public Object[] modifySeriesActivities(String secid,String aid,Map props,String scope,Date rstart,long rdur,String recur,Date droiStim,Date droiEtim) ;

	
	/**
	 * 
	 * 保存一个活动
	 * 
	 * @param act - 活动对象
	 * @return	Object[0]<List<Activity>> - 仅包含本次保存的这个活动，即size()==0为true
	 * 			Object[1]<String> -  本次保存的活动的js字符串表示
	 * @throws RemoteException
	 */
	public Object[] saveActivity(Activity act) ;
	
	/**
	 * 
	 * 回复是否参加活动
	 * @author ourui
	 * 
	 * @param aid - 活动id
	 * @param uid - 用户id
	 * @param join - 回复标志
	 * @return ??
	 * @throws RemoteException
	 */
	public String respondToActivity(String aid,String uid,Integer join);
	
	/**
	 * 
	 * 来宾对是否参加活动的回复
	 * @author ourui
	 * 
	 * @param aid
	 * @param uid
	 * @param guest
	 * @param join
	 * @param comment
	 * @return ??
	 */
	public StringBuffer responseToActivity(String aid,String uid,Integer guest,Integer join,String comment);

	/**
	 * 
	 * 将单个系列活动 从 “与系列脱离” 状态恢复成 “与系列同步” 状态，同时可以设置某些其它与同步状态无关的属性，例如提醒设置
	 * 
	 * @param aid - 活动标识
	 * @param props - 活动新属性名-值的集合
	 * @return	Object[0]<Activity> - aid指定的活动
	 * 			Object[1]<String> - 活动的js字符串表示
	 * @throws RemoteException
	 */
	public Object[] restorOriginalActivity(String secid,String aid,Map props) ;
	
	/**
	 * 
	 * 将单个系列活动 从 “与系列脱离” 状态恢复成 “与系列同步” 状态
	 * 
	 * @param aid - 活动标识
	 * @param props - 活动新属性名-值的集合
	 * @return	Object[0]<Activity> - aid指定的活动
	 * 			Object[1]<String> - 活动的js字符串表示
	 * @throws RemoteException
	 */
	public Object[] restorOriginalActivity(String secid,String aid) ;
	
	/**
	 * 
	 * 保存活动，如果重复规则recur有效且生成的系列活动个数为>1时保存一系列活动，否则仅仅保存act。
	 * 
	 * @param act - 要保存的活动bean
	 * @param recur	- 可以为null。有关recur的构成可以参见SeriesBaseInfo类的相关说明
	 * @param droiStim	限定返回的活动集合应该不超过的最早时间
	 * @param droiEtim	限定返回的活动集合应该不超过的最晚时间
	 * @return	Object[0]<List<Activity>> - 包括所有本次被创建的且活动开始时间在droiStim和droiEtim时间段内的所有活动集合
	 * 			Object[1]<String> - 给出Object[0]中所有活动的js字符串描述
	 * @throws RemoteException
	 */
	public Object[] saveActivity(Activity act,String recur,Date droiStim,Date droiEtim) ;
	
}
