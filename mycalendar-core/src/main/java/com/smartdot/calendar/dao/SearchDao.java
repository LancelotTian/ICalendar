package com.smartdot.calendar.dao;

import java.util.Date;
import java.util.List;

public interface SearchDao {
	/**
	 * 
	 * 取得指定日历中活动内容包含给定值的所有活动
	 * 
	 * @param cid - 日历id
	 * @param text - 搜索文本
	 * @return	List<Activity>
	 */
	public List searchActsInCalByText(String cid,String text);
	
	/**
	 * 
	 * 取得指定日历中满足搜索条件的所有活动
	 * 
	 * @param cid - 日历标识
	 * @param textIncluded - 所查询的活动text必须包含内容textIncluded,null意味着该条件不存在
	 * @param attendUsers - 所查询的活动参加者必须包含attendUsers（未使用）,null意味着该条件不存在
	 * @param location - 所查询的活动地点必须是location,null意味着该条件不存在
	 * @param textNotIncluded - 所查询的活动text必须不包含textNotIncluded,null意味着该条件不存在
	 * @param stim - 所查询的活动开始时间要大于stim(包含),null意味着该条件不存在
	 * @param etim - 所查询的活动结束时间要小于etim,null意味着该条件不存在
	 * @param scope - 指定搜索的范围,尚未实现
	 * @return	List<Activity> 
	 */
	public List searchActsByMultiConditions(String cid,String textIncluded,String attendUsers,String location,
			String textNotIncluded,Date stim,Date etim,String scope);
	
}
