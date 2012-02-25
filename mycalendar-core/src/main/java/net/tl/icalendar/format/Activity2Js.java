package net.tl.icalendar.format;

import java.util.Iterator;
import java.util.Set;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.ActivityComment;
import net.tl.icalendar.beans.SeriesBaseInfo;
import net.tl.icalendar.js.EscapeStringToJsElement;
import net.tl.icalendar.js.EscapeStringToJsElementLocation;
import net.tl.icalendar.js.JsArray;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.CalendarCfg;

public class Activity2Js {
	
	public static final String ADDORUPDATE = "a";
	public static final String DELETE = "d";
	public static final String SEARCH = "_SR_updateResult";
	
	
	public static final int RESP_EVENT = 0;
	public static final int RESP_LOAD = 1;
	public static final int RESP_SEARCH = 2;
	public static final int RESP_DELEVENT = 3;
	
	/** 当前处理的活动 **/
	private Activity act;
	/** 访问当前活动的用户uid **/
	private Integer calAccessLevel;
	/** 用户对活动所属于的日历的访问权限 **/
	private String accessorUid;
	
	private SeriesBaseInfo sbi;
	
	
	public Activity2Js(String accessorUid,Integer calAccessLevel,Activity act){
		this.accessorUid = accessorUid;
		this.calAccessLevel = calAccessLevel;
		this.act = act;
	}
	
	public Activity2Js(String accessorUid,Integer calAccessLevel,Activity act,SeriesBaseInfo sbi){
		this.accessorUid = accessorUid;
		this.calAccessLevel = calAccessLevel;
		this.act = act;
		this.sbi = sbi;
	}
	
	public String toEventRespString(){
		JsArray ret = this.inEventResp();
		if(ret==null) return null;
		return ret.toString();
	}
	
	public String toLoadRespString(String operType){
		JsArray ret = this.inLoadResp(operType);
		if(ret==null) return null;
		return ret.toString();
	}
	
	public String toSearchRespString(){
		JsArray ret = this.inSearchResp();
		if(ret==null) return null;
		return ret.toString();
	}
	
	
	public JsArray inEventResp(){
		JsArray actJa = new JsArray();
		
		//0   操作类型
		actJa.putJsString(Activity2Js.ADDORUPDATE);
		//1	活动id	
		actJa.putJsString(act.getId());
		//2	活动内容			text
		actJa.putJsString(act.getText(),new EscapeStringToJsElement());
		//3	活动开始时间		startTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[0]);
		//4	活动结束时间		endTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[1]);
		//5	活动所属于的日历的标识		srcCalendarId
		actJa.putJsString(act.getSrcCalendarId());
		//6 ?日历标识,出现条件未定
		actJa.putJsNone();
		//7 ?日历标识,出现条件未定
		actJa.putJsNone();
		//8	由erem、seriesState和icc字段决定
		actJa.putJsLong(this.getRenderLevel());
		//9 系列id的复合值
		String seriesId = act.getSeriesId();
		if(seriesId==null||seriesId.equals(""))
			actJa.putJsNone();
		else actJa.putJsString(seriesId + "-" + act.getSrcCalendarId());
		//10活动地点	location
		String location = act.getLocation();
		if(location.trim().equalsIgnoreCase(""))
			actJa.putJsNone();
		else actJa.putJsString(act.getLocation().trim(),new EscapeStringToJsElementLocation());
		//11活动的来宾的数目(当前版本没有实现该功能因此为0)
		actJa.putJsLong(0);
		//12活动的来宾描述(当前版本没有实现该功能因此为'')
		actJa.putJsString("");
		//13活动的来宾权限设置 sprop
		JsArray spropJ = Activity2Js.getSpropArrayInJson(act.getSprop());
		if(spropJ==null)
			actJa.putJsNull();
		else actJa.putJsArray(spropJ);
		//14含义未知 
		actJa.putJsNone();
		//15活动的提醒设置 erem
		JsArray eremJ = Activity2Js.getEremArrayInJson(act.getErem());
		if(eremJ==null)
			actJa.putJsNull();
		else actJa.putJsArray(eremJ);
		//16活动其它信息的描述
		JsArray actXPropJ = new JsArray();
		//16-0 整数			根据seriersState变化
		actXPropJ.putJsLong(act.getSeriesState().intValue()==0?131071l:126975l);
		//16-1 常量（整数）			60
		actXPropJ.putJsLong(60l);
		//16-2 recur(重复频率)		recur为null时使用null，否则为一数组
		if(sbi==null)
			actXPropJ.putJsNull();
		else actXPropJ.putJsArray(new Recur2Js(sbi.getRecur().split(":")[1],sbi.getStartTime()).getJsArray());
		//16-3 活动说明	details
		actXPropJ.putJsString(act.getDetails(),new EscapeStringToJsElement());
		//16-4  活动注释 comments ,没有注释用[]表示；否则每条注释用数组表示例如：
		//['\74p\076123\74/p\076','tianliang1980@gmail.com','20081111T134633' ]
		//  <p> 注释内容    </p>        发表注释的人标识				发表时间
		JsArray commentJ = Activity2Js.getCommentArrayInJson(act.getComments());
		actXPropJ.putJsArray(commentJ);
		//16-5 活动忙闲状态 trp
		actXPropJ.putJsLong(act.getTrp().booleanValue()?1:0);
		//16-6 活动开放状态 icc
		actXPropJ.putJsString(act.getIcc());
		
		actJa.putJsArray(actXPropJ);
		
		return actJa;
	}
	
	public JsArray inLoadResp(String operType){
		JsArray actJa = new JsArray();
		
		
		//0   操作类型
		actJa.putJsString(operType);
		//1	活动id	
		actJa.putJsString(act.getId());
		
		if(operType.equals(Activity2Js.DELETE)) return actJa;
		
		/** 当前操作不是删除 **/
		long renderLevel = this.getRenderLevel();
		int acl = FormatHelper.getRenderType(renderLevel);
		if(acl==-1) return null; 	//如果renderLevel指示不显示该活动时返回null，调用函数应该对null进行响应处理
		
		//2	活动内容			text
		if(acl>FormatHelper.ONLY_BUSY)
			actJa.putJsString(act.getText(),new EscapeStringToJsElement());
		else actJa.putJsString("忙碌");			//只显示忙碌
		//3	活动开始时间		startTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[0]);
		//4	活动结束时间		endTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[1]);
		//5	活动所属于的日历的标识		srcCalendarId
		actJa.putJsString(act.getSrcCalendarId());
		//6 ?日历标识,出现条件未定
		actJa.putJsNone();
		//7 ?日历标识,出现条件未定
		actJa.putJsNone();
		//8	由erem、seriesState和icc字段决定
		actJa.putJsLong(renderLevel);
		
		/** 如果权限是只查看忙/闲状态则返回，不再输出以下描述 **/
		if(acl<=FormatHelper.ONLY_BUSY)	return actJa;
		
		int lastElementIndex = this.getLoadLastIndex();
		
		//9 系列id的复合值
		if(9<=lastElementIndex){
			String seriesId = act.getSeriesId();
			if(seriesId==null||seriesId.equals(""))
				actJa.putJsNone();
			else actJa.putJsString(seriesId + "-" + act.getSrcCalendarId());
		}
		//10活动地点	location
		if(10<=lastElementIndex){
			String location = act.getLocation();
			if(location.trim().equalsIgnoreCase(""))
				actJa.putJsNone();
			else actJa.putJsString(act.getLocation().trim(),new EscapeStringToJsElementLocation());
		}
		//11活动的来宾的数目(当前版本没有实现该功能因此为0)
		if(11<=lastElementIndex)
			actJa.putJsLong(0);
		//12活动的来宾描述(当前版本没有实现该功能因此为'')
		if(12<=lastElementIndex)
			actJa.putJsString("");
		//13活动的来宾权限设置 sprop
		if(13<=lastElementIndex){
			JsArray spropJ = Activity2Js.getSpropArrayInJson(act.getSprop());
			if(spropJ==null)
				actJa.putJsNull();
			else actJa.putJsArray(spropJ);
		}
		//14含义未知 
		if(14<=lastElementIndex)
			actJa.putJsNone();
		//15活动的提醒设置 erem
		if(15<=lastElementIndex){
			JsArray eremJ = Activity2Js.getEremArrayInJson(act.getErem());
			if(eremJ==null)
				actJa.putJsNull();
			else actJa.putJsArray(eremJ);
		}
		
		return actJa;
	}
	
	public JsArray inSearchResp(){
		JsArray actJa = new JsArray();
		
		//0   操作类型
		actJa.putJsString(Activity2Js.SEARCH);
		//1	活动id	
		actJa.putJsString(act.getId());
		
		long renderLevel = this.getRenderLevel();
		int acl = FormatHelper.getRenderType(renderLevel);
		if(acl==-1) return null; 	//如果renderLevel指示不显示该活动时返回null，调用函数应该对null进行响应处理
		
		//2	活动内容			text
		if(acl>FormatHelper.ONLY_BUSY)
			actJa.putJsString(act.getText(),new EscapeStringToJsElement());
		else actJa.putJsString("忙碌");			//只显示忙碌
		
		
		//3	活动开始时间		startTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[0]);
		//4	活动结束时间		endTime
		actJa.putJsString(FormatHelper.getTimeDur(act.getStartTime(),act.getEndTime()).split("/")[1]);
		//5	活动所属于的日历的标识		srcCalendarId
		actJa.putJsString(act.getSrcCalendarId());
		//6 ?日历标识,出现条件未定
		actJa.putJsString(act.getSrcCalendarId());
		//7 ?日历标识,出现条件未定
		actJa.putJsString(act.getSrcCalendarId());
		//8	由erem、seriesState和icc字段决定
		actJa.putJsLong(renderLevel);
		//9 系列id的复合值
		String seriesId = act.getSeriesId();
		if(acl<=FormatHelper.ONLY_BUSY || seriesId==null || seriesId.equals(""))
			actJa.putJsNull();
		else actJa.putJsString(seriesId + "-" + act.getSrcCalendarId());
		//10活动地点	location
		String location = act.getLocation();
		if(acl<=FormatHelper.ONLY_BUSY || location.trim().equalsIgnoreCase(""))
			actJa.putJsString("");
		else actJa.putJsString(act.getLocation().trim(),new EscapeStringToJsElementLocation());
		//11活动的来宾的数目(当前版本没有实现该功能因此为0)
		actJa.putJsLong(0);
		//12活动的来宾描述(当前版本没有实现该功能因此为'')
		actJa.putJsString("");
		//13活动的来宾权限设置 sprop
		JsArray spropJ = Activity2Js.getSpropArrayInJson(act.getSprop());
		if(acl<=FormatHelper.ONLY_BUSY || spropJ==null)
			actJa.putJsNull();
		else actJa.putJsArray(spropJ);
		//14含义未知 
		actJa.putJsArray(new JsArray());
		//15活动的提醒设置 erem
		JsArray eremJ = Activity2Js.getEremArrayInJson(act.getErem());
		if(acl<=FormatHelper.ONLY_BUSY || eremJ==null)
			actJa.putJsNull();
		else actJa.putJsArray(eremJ);
		
		return actJa;
	}
	
	private int getLoadLastIndex() {
		int ret = 15;
		if(!this.getValidRemindsFlag()){		//元素15是否为空.对当前用户没有有效的提醒设置为空
			ret--;
			if(true){							//元素14是否为空.默认为空
				ret--;							
				if(act.getSprop()==null){		//元素13是否为空.
					ret--;
					if(true){					//元素12是否为空.默认为空
						ret--;
						if(true){				//元素11是否为空.默认为空
							ret--;
							if(act.getLocation().trim().equals("")){	//元素10是否为空.默认为空
								ret--;
								if(act.getSeriesId()==null||act.getSeriesId().trim().equals("")){	//元素9是否为空
									ret--;	
								}
							}
						}
					}
				}
			}
		}
		
		return ret;
	}

	private long getRenderLevel(){
		boolean notBusy = act.getTrp().booleanValue();
		boolean hasValidReminds = this.getValidRemindsFlag();
		boolean inSeries = act.getSeriesId()!=null && !act.getSeriesId().trim().equalsIgnoreCase("");
		boolean seriesSynch = act.getSeriesState().intValue()==0 ;
		return FormatHelper.getRenderLevel(calAccessLevel.intValue(), notBusy, act.getIcc(), hasValidReminds, inSeries, seriesSynch);
	}
	
	private boolean getValidRemindsFlag() {
		if(!act.getSecid().equalsIgnoreCase(accessorUid)) return false;
		if(!act.getErem().equals(CalendarCfg.getDefaultErem()) && !act.getErem().trim().equals("")) return true;
		return false;
	}

	/**
	 * @author tianliang
	 * @param position	指明当前的响应类型是event响应还是event后第一个load的响应
	 * @return	活动中sprop属性的javascript数组表示，会出现在响应的信息中
	 */
	public static JsArray getSpropArrayInJson(String spropStr){
		if(spropStr==null) return null;
		
		String[] spropA = spropStr.split(";");
		JsArray ret = new JsArray();
		for(int i=0;i<spropA.length;i++){
			String key = spropA[i].split(":")[0];
			String value = spropA[i].split(":")[1];
			ret.putJsString(key);
			ret.putJsString(value);
		}
		return ret;
	}
	
	/**
	 * @param position 无意义
	 * @return	返回erem属性的javascript数组表示
	 */
	public static JsArray getEremArrayInJson(String eremStr){
		if(eremStr.equals(CalendarCfg.getDefaultErem())) return null;
		JsArray ret = new JsArray();
		if(eremStr.trim().equals("")) return ret;
		
		
		String[] eremA = eremStr.split(";");
		
		for(int i=0;i<eremA.length;i++)
			ret.putJsString(eremA[i] + ":1");
		
		return ret;
	}
	
	public static JsArray getCommentArrayInJson(Set comments){
		JsArray ret = new JsArray();
		if(comments==null) return ret;
		
		Iterator iterator = comments.iterator();
		while(iterator.hasNext()){
			//['\74p\076123\74/p\076','tianliang1980@gmail.com','20081111T134633' ]
			ActivityComment curComment = (ActivityComment)iterator.next();
			String curCommentText = curComment.getComment();
			
			JsArray tempJ = new JsArray();
			
			String tempS = "\\74p" +
						((!curCommentText.equals("") && curCommentText.charAt(0)<'9' && curCommentText.charAt(0)>'0')?"\\076":"\\76") + 
						CalendarBeanUtil.javaStrtoGoogleXMLstr(curCommentText) + 
						"\\74/p\\076";
			tempJ.putJsString(tempS);
			tempJ.putJsString(curComment.getPersonId());
			tempJ.putJsString(CalendarBeanUtil.dateToStr(curComment.getCreatedDate()));
			
			ret.putJsArray(tempJ);
		}
		return ret;
	}
}
