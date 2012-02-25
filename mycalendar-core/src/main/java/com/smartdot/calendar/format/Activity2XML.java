package com.smartdot.calendar.format;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.fortuna.ical4j.model.DateTime;
import net.fortuna.ical4j.model.Recur;
import net.fortuna.ical4j.model.WeekDay;
import net.fortuna.ical4j.model.WeekDayList;

import com.smartdot.calendar.beans.Activity;
import com.smartdot.calendar.beans.ActivityComment;
import com.smartdot.calendar.beans.DateDuration;
import com.smartdot.calendar.beans.SeriesBaseInfo;
import com.smartdot.calendar.util.CalendarBeanUtil;
import com.smartdot.calendar.util.CalendarCfg;

public class Activity2XML {
	
	
	public static final String PST_VIEW_ORIGINAL = "VIEW_ORIGINAL";
	public static final String PST_TEMPLATE = "TEMPLATE";
	public static final String PST_VIEW = "VIEW";
	
	
	private Activity act;
	private Integer calAccessLevel;
	private SeriesBaseInfo sbi;
	
	/** 活动创建者的信息 **/
	/**
	 * 根据act.secid属性确定人UserBean，根据UserBean.userId查找该用户的默认主日历，从而根据UserBean及
	 * SCalendar生成creator
	 */
	private Principal creator;
	
	/** 当前活动访问者 **/
	/**
	 * 根据当前登录用户的uid查找对应的UserBean，根据UserBean.userId查找该用户的默认主日历，从而根据UserBean及
	 * SCalendar生成creator
	 */
	private Principal accessor;
	
	/** 当前活动的组织者 **/
	/**
	 * google实现：根据act.srcCalendarId查找SCalendar，根据srcCalendar.personId查找UserBean，从而根据UserBean及
	 * SCalendar生成creator
	 * 目前实现：根据act.secid属性确定人UserBean，根据UserBean.userId查找该用户的默认主日历，从而根据UserBean及
	 * SCalendar生成creator
	 */
	private Principal organizer;
	
	/** 活动所属于的日历 **/
	/**
	 * 根据act.srcCalendarId查找SCalendar，根据SCalendar.personId查找UserBean，从而根据UserBean及
	 * SCalendar生成creator
	 */
	private Principal srcCalendar;
	
	
	/** 注释创建人信息 **/
	/**
	 * key---用户uid
	 * value---Principal对象，由uid指向的UserBean及该用户的默认主日历SCalendar生成
	 */
	private Map commentors;
	
	/** xml出现的位置 **/
	private String position;
	

	
	//内部用变量
	private String _actionAttr;
	private String _specializeAttr;
	private String _curActionAttr;
	private String _canRespondAttr;
	private String _accessAttr;
	private String _editingAttr;
	private String _aclAttr;
	//Activity本身属性
	private String _textProp;
	private String _locationProp;
	private Boolean _trpProp;
	private String _iccProp;
	private String _detailsProp;
	private String _spropProp;
	//Activity多个属性组合
	private String _dateDurationProp;
	private String _dateDurationZhProp;
	
	//getter() setter()
	public Principal getAccessor() {
		return accessor;
	}

	public void setAccessor(Principal accessor) {
		this.accessor = accessor;
	}

	public Activity getAct() {
		return act;
	}

	public void setAct(Activity act) {
		this.act = act;
	}

	public Integer getCalAccessLevel() {
		return calAccessLevel;
	}

	public void setCalAccessLevel(Integer calAccessLevel) {
		if(calAccessLevel.intValue()>20)
			   this.calAccessLevel = new Integer(60);
		else this.calAccessLevel = calAccessLevel;
	}

	public Map getCommentors() {
		return commentors;
	}

	public void setCommentors(Map commentors) {
		this.commentors = commentors;
	}

	public Principal getCreator() {
		return creator;
	}

	public void setCreator(Principal creator) {
		this.creator = creator;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public SeriesBaseInfo getSbi() {
		return sbi;
	}

	public void setSbi(SeriesBaseInfo sbi) {
		this.sbi = sbi;
	}

	public Principal getSrcCalendar() {
		return srcCalendar;
	}

	public void setSrcCalendar(Principal srcCalendar) {
		this.srcCalendar = srcCalendar;
	}

	public void setOrganizer(Principal organizer) {
		this.organizer = organizer;
	}

	
	
	//constructor
	public Activity2XML(){
		
	}
	
	public Activity2XML(Principal accessor,Principal creator,Principal organizer,Map commentors,Activity act,Principal srcCalendar,Integer calAccessLevel,String position){
		this.accessor = accessor;
		this.act = act;
		if(calAccessLevel.intValue()>20)
		   this.calAccessLevel = new Integer(60);
		this.position = position;
		this.creator = creator;
		this.organizer = organizer;
		this.srcCalendar = srcCalendar;
		this.commentors = commentors;
	}
	
	public Activity2XML(Principal accessor,Principal creator,Principal organizer,Map commentors,Activity act,Principal srcCalendar,Integer calAccessLevel,SeriesBaseInfo sbi,String position){
		this.accessor = accessor;
		this.act = act;
		if(calAccessLevel.intValue()>20)
		   this.calAccessLevel = new Integer(60);
		this.position = position;
		this.sbi = sbi;
		this.creator = creator;
		this.organizer = organizer;
		this.srcCalendar = srcCalendar;
		this.commentors = commentors;
	}
	


	public String toXMLString() throws FormatException, ParseException{
		//初始化常用变量
		if(position==null){
			if(calAccessLevel.intValue()<=20)	_actionAttr = "RESPOND";
			else _actionAttr = "EDIT"; 
		} 
		else if(position.equalsIgnoreCase(Activity2XML.PST_VIEW_ORIGINAL)) _actionAttr = "RESTORE_ORIGINAL";
		else if(position.equalsIgnoreCase(Activity2XML.PST_TEMPLATE)) _actionAttr = "CREATE";
		else if(position.equalsIgnoreCase(Activity2XML.PST_VIEW)) _actionAttr = "EDIT"; 
		
		//xml中用到的元素的属性
		_specializeAttr = act.getSeriesState().intValue() == 1 ? "true" : "false";
		_curActionAttr = "VIEW";
		_canRespondAttr = "true";
		_accessAttr = calAccessLevel.intValue()<=20 ? "readonly" : "editable";
		_editingAttr = "true";
		_aclAttr = ""+this.calAccessLevel.intValue();
		//Activity本身属性
		_textProp = act.getText();
		_locationProp = act.getLocation();
		_trpProp = act.getTrp();
		_iccProp = act.getIcc();
		_detailsProp = act.getDetails();
		_spropProp = act.getSprop();
		//Activity的多个属性组合
		_dateDurationProp = FormatHelper.getTimeDur(act.getStartTime(), act.getEndTime());
		_dateDurationZhProp = FormatHelper.getTimeDurZH(act.getStartTime(), act.getEndTime());
		
		
		
		if (position!=null && position.equalsIgnoreCase("VIEW_ORIGINAL")) {
			if(sbi==null){
				FormatException fe = new FormatException(FormatException.NO_SBI);
				throw fe;
			}
			_specializeAttr = "false";
			_curActionAttr = "VIEW_ORIGINAL";
			_canRespondAttr = "false";
			_accessAttr =  "readonly";
			_editingAttr = "false";
			_aclAttr = "20";
			
			_textProp = sbi.getText();
			_locationProp = sbi.getLocation();
			_trpProp = sbi.getTrp();
			_iccProp = sbi.getIcc();
			_detailsProp = sbi.getDetails();
			_spropProp = sbi.getSprop();
			
			DateDuration dD = act.getOrignDateDuration();
			_dateDurationProp = FormatHelper.getTimeDur(dD.getStartTime(), dD.getEndTime());
			_dateDurationZhProp =  FormatHelper.getTimeDurZH(dD.getStartTime(), dD.getEndTime());
		}
		
		
		StringBuffer ret = new StringBuffer();
		ret.append(this.getHeader());
		ret.append(this.getRootBegin());
		ret.append(this.getRefDateE());
		ret.append(this.getEidE());
		ret.append(this.getSelfE());
		ret.append(this.getSecidE());
		ret.append(this.getSummaryE());
		ret.append(this.getAttachmentsE());
		ret.append(this.getDatesE());
		ret.append(this.getFirstStartE());
		ret.append(this.getRruleE());
		ret.append(this.getTimeZoneE());
		ret.append(this.getAttendeeE());
		ret.append(this.getLocationE());
		ret.append(this.getTransparentE());
		ret.append(this.getClassE());
		ret.append(this.getDescriptionE());
		ret.append(this.getRemindsE());
		ret.append(this.getCreatorE());
		ret.append(this.getOrganizer());
		ret.append(this.getSourceCalendarE());
		ret.append(this.getSharedPropertyE("goo.allowInviteYourself","false"));
		ret.append(this.getSharedPropertyE("goo.allowModify","false"));
		
		String goo_allowInvitesOther = "true";
		String goo_showInvitees = "true";
		if (_spropProp != null) {
			String tempSprop = _spropProp.toLowerCase();
			if (tempSprop.indexOf("goo.allowinvitesother:false") >= 0)
				goo_allowInvitesOther = "false";
			if (tempSprop.indexOf("goo.showinvitees:false") >= 0)
				goo_showInvitees = "false";
		}
		ret.append(this.getSharedPropertyE("goo.allowInvitesOther",goo_allowInvitesOther));
		ret.append(this.getSharedPropertyE("goo.allowComments","true"));
		ret.append(this.getSharedPropertyE("goo.showInvitees",goo_showInvitees));
		
		ret.append(this.getCalendarsE());
		ret.append(this.getCommentsE());
		ret.append(this.getModulesE(new int[]{4,6,8}));
		ret.append(this.getMessagesToUserE());
		
		ret.append(this.getRootEnd());
		return ret.toString();
	}
	
	
	private String getMessagesToUserE() {
		return "<messages-to-user></messages-to-user>" + "\n";
	}

	private String getModulesE(int[] values) {
		StringBuffer ret = new StringBuffer();
		ret.append("<modules>" + "\n");
		for(int i=0;i<values.length;i++){
			ret.append(this.getModulesE(values[i]));
		}
		ret.append("</modules>" + "\n");
		return ret.toString();
	}

	private String getModulesE(int i) {
		StringBuffer ret = new StringBuffer();
		ret.append("	<module module-id=\"" + i + "\"></module>" + "\n");
		return ret.toString();
	}

	private String getCommentsE() {
		Date curTime = new Date();
		StringBuffer ret = new StringBuffer();
		ret.append("<comments access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		Set comments = act.getComments();
		if (comments != null) {

			List list = new ArrayList(comments);
			int size = list.size();
			//对注释按照时间升序排序
			for (int i = 0; i < size - 1; i++) {
				for (int j = i + 1; j < size; j++) {
					ActivityComment commentI = (ActivityComment) list.get(i);
					ActivityComment commentJ = (ActivityComment) list.get(j);
					if (commentI.getCreatedDate().getTime() < commentJ.getCreatedDate().getTime()) {
						list.set(i, commentJ);
						list.set(j, commentI);
					}
				}
			}
			//转换成xml元素表示
			for (int i = 0; i < size; i++) {
				ActivityComment curComment = (ActivityComment) list.get(i);
				ret.append(this.getCommentE(curComment,curTime));
			}
			
		}
		ret.append("</comments>" + "\n");
		return ret.toString();
	}
	
	private String getCommentE(ActivityComment comment,Date curTime){
		StringBuffer ret = new StringBuffer();
		ret.append("<comment>"  + "\n");
		ret.append("	<html>" + "\n");
		ret.append("		<p>" + CalendarBeanUtil.javaStrtoGoogleXMLstr(comment.getComment()) + "</p>" + "\n");
		ret.append("	</html>" + "\n");
		ret.append("	<author>" + "\n");
		
		String commentorUid = comment.getPersonId();
		Principal commentor = (Principal) commentors.get(commentorUid);
		ret.append(this.getPrincipalE(commentor, "5"));
		
		ret.append("	</author>" + "\n");
		ret.append("	<create-time>" + CalendarBeanUtil.dateToStr(comment.getCreatedDate()) + "</create-time>"	+ "\n");
		ret.append("	<rel-time>（"	+ CalendarBeanUtil.timesBeforeStr(curTime,comment.getCreatedDate()) + "前）</rel-time>" + "\n");
		ret.append("</comment> " + "\n");
		return ret.toString();
	}

	private String getCalendarsE() {
		return "<calendars></calendars>" + "\n";
	}

	private String getSharedPropertyE(String key,String value) {
		StringBuffer ret = new StringBuffer();
		ret.append("<shared-property name=\"" + key + "\" access=\"" + _accessAttr + "\" editing=\"" + _editingAttr + "\">" + "\n");
		ret.append("	<value>" + value + "</value>" + "\n");
		ret.append("</shared-property>" + "\n");
		return ret.toString();
	}

	private String getSourceCalendarE() {
		StringBuffer ret = new StringBuffer();
		//源日历的编辑权限-访问者如果不是活动创建者不能修改活动的源日历，即使拥有大于20的权限也不能
		
		ret.append("<source-calendar access=\"" + (_accessAttr.equals("editable")&&accessor.getUserId().equals(srcCalendar.getUserId()) ? "editable":"readonly" ) + "\" editing=\"false\" show-transfer=\"false\">" + "\n");
		//ret.append("<source-calendar access=\"" + _accessAttr + "\" editing=\"false\" show-transfer=\"false\">" + "\n");
		ret.append(this.getPrincipalE(srcCalendar, "5"));
		ret.append("</source-calendar>" + "\n");
		return ret.toString();
	}

	private String getOrganizer() {
		StringBuffer ret = new StringBuffer();
		ret.append("<organizer>" + "\n");
		ret.append(this.getPrincipalE(organizer, "5"));
		ret.append("</organizer>" + "\n");
		return ret.toString();
	}

	private String getCreatorE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<creator>" + "\n");
		String status = act.getSrcCalendarId().equals(creator.getCalId()) ? "5" : "4" ;
		ret.append( this.getPrincipalE(creator, status ) );
		ret.append("</creator>" + "\n");
		return ret.toString();
	}

	private String getRemindsE() {
		//不是活动所有人查看活动时不显示提醒设置
		String edit = "readonly";
		//如果当前访问者不是日历的所有者则无法查看提醒设置
		if(calAccessLevel.intValue()>20){
			edit = "editable";
		}
		
		StringBuffer ret = new StringBuffer();
		ret.append("<reminders access=\"" + edit  + "\" editing=\"true\" sms-verified=\"true\">" + "\n");
		if(!act.getErem().trim().equals("")){
			String[] eremA = act.getErem().split(";");
			for (int i = 0; i < eremA.length; i++) {
				String[] elems = eremA[i].split(":");
				ret.append("<reminder method=\"" + elems[0].trim() + "\" secs-lead=\""	+ elems[1].trim() + "\"></reminder>" + "\n");
			}
		}
		ret.append("</reminders>" + "\n");
		return ret.toString();
	}

	private String getDescriptionE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<description access=\"" + _accessAttr + "\" editing=\"false\">");
		ret.append("	<html>"	+ CalendarBeanUtil.javaStrtoGoogleXMLstr(_detailsProp)+ "</html>" + "\n");
		ret.append("</description>" + "\n");
		return ret.toString();
	}

	private String getClassE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<class access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		ret.append("	<value>" + _iccProp + "</value>");
		String chineseView;
		if (_iccProp.equalsIgnoreCase("DEFAULT"))		chineseView = "默认";
		else if (_iccProp.equalsIgnoreCase("PRIVATE"))	chineseView = "私人˽��";
		else chineseView = "公共";
		ret.append("<display>" + chineseView + "</display>" + "\n");
		ret.append("</class>" + "\n");
		return ret.toString();
	}

	private String getTransparentE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<transparent access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		ret.append("	<value>" + _trpProp.toString().toLowerCase() + "</value>" + "\n");
		ret.append("	<display>" + (_trpProp.booleanValue() ? "有空" : "忙碌") + "</display>" + "\n");
		ret.append("</transparent>" + "\n");
		return ret.toString();
	}

	private String getLocationE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<location access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		ret.append("	<value>" + CalendarBeanUtil.javaStrtoGoogleXMLstr(_locationProp) + "</value>" + "\n");
		if (!_locationProp.trim().equalsIgnoreCase(""))
			try {
				ret.append("	<link>" + CalendarCfg.getMapUrlPrefix() + URLEncoder.encode(_locationProp,"UTF-8") + CalendarCfg.getMapUrlSuffix() + "</link>" + "\n");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			//ret.append("	<link>" + CalendarBeanUtil.MAP_URL_PREFIX + CalendarBeanUtil.getStrUnicode(_locationProp) + CalendarBeanUtil.MAP_URL_SUFFIX + "</link>" + "\n");
		ret.append("</location>" + "\n");
		return ret.toString();
	}

	private String getAttendeeE() {
		return "<attendees access=\"" + _accessAttr + "\" editing=\"false\"></attendees>" + "\n";
	}

	private String getTimeZoneE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<timezone visible=\"false\">" + "\n");
		ret.append("	<value>Asia/Shanghai</value>" + "\n");
		ret.append("	<display>中国时间 - 北京</display>" + "\n");
		ret.append("	<abbr>CST</abbr>");
		ret.append("</timezone>" + "\n");
		return ret.toString();
	}

	private String getRruleE() throws ParseException {
		int seriesState = act.getSeriesState().intValue();
		if(seriesState<0 && calAccessLevel.intValue()<=20) return "";
		if(seriesState==1 && (position==null || !position.equalsIgnoreCase("VIEW_ORIGINAL")) ) return "";
	
		Calendar javaCal = Calendar.getInstance();
		
		StringBuffer ret = new StringBuffer();
		if(seriesState<0){
			String weekDayDesc = WeekDay.getWeekDay(javaCal).toString();
			ret.append("<rrule access=\"" + _accessAttr + "\" editing=\"false\" byday=\"" + weekDayDesc	+ "\" interval=\"1\" wkst=\"MO\">" + "\n");
			ret.append("	<value></value><display></display>");
			ret.append("</rrule>"	+ "\n");
		}else{
			String byDay,freq,interval,until=null;
			
			Recur recur = new Recur(sbi.getRecur().split(":")[1]);
			WeekDayList weekDayList = recur.getDayList();
			if(weekDayList.size()>0)
				byDay = weekDayList.toString();
			else{
				DateDuration curDD = act.getOrignDateDuration();
				javaCal.setTime(curDD.getStartTime());
				byDay =  WeekDay.getWeekDay(javaCal).toString();
			}
			
			freq = recur.getFrequency();
			interval = recur.getInterval()<0 ? "1" : ("" + recur.getInterval());
			
			net.fortuna.ical4j.model.Date date = recur.getUntil();
			if(date!=null){
			
				DateTime dateTime = null;
				try{
					dateTime = (DateTime)date;
				}catch (ClassCastException e) {}
				
				if(dateTime==null){
					//取得系列的开始时间 时 分 秒
					javaCal.setTime(sbi.getStartTime());
					int hour = javaCal.get(Calendar.HOUR_OF_DAY);
					int minu = javaCal.get(Calendar.MINUTE);
					int second = javaCal.get(Calendar.SECOND);
					
					javaCal.setTime(date);
					
					javaCal.set(Calendar.HOUR_OF_DAY, hour);
					javaCal.set(Calendar.MINUTE, minu);
					javaCal.set(Calendar.SECOND, second);
					
					dateTime = new DateTime(javaCal.getTime());
					
				}
				//xml中until时间用utc表示
				dateTime.setUtc(true);
				until = dateTime.toString().substring(0, 15);
			}
			

			
			ret.append("<rrule access=\"" + _accessAttr + "\" editing=\"false\" byday=\"" + byDay + "\" freq=\"" + freq + "\" interval=\"" + interval + "\"");
			if (until != null)
				ret.append(" until=\"" + until + "\"");
			ret.append(" wkst=\"MO\">" + "\n");
			ret.append("	<value>");
			ret.append("RRULE:" + FormatHelper.getCompleteRecur(sbi.getRecur().split(":")[1], sbi.getStartTime()));
			ret.append("</value>" + "\n");
			ret.append("	<display>");
			ret.append(FormatHelper.getRecurZhStr(sbi.getRecur().split(":")[1], sbi.getStartTime()));
			ret.append("</display>" + "\n");
			ret.append("</rrule>" + "\n");
		
		}
			
		return ret.toString();
	}

	private String getFirstStartE() {
		//不是系列活动不显示该元素
		if(act.getSeriesState().intValue()<0) return "";
		
		StringBuffer ret = new StringBuffer();
		ret.append("<first-start access=\"" + _accessAttr	+ "\" editing=\"false\">" + "\n");
		ret.append("	<value>" + CalendarBeanUtil.dateToStr(sbi.getStartTime()) + "</value>" + "\n");
		ret.append("	<display>" + CalendarBeanUtil.dateToZHStr(sbi.getStartTime()).split(" ")[0] + "</display>" + "\n");
		ret.append("</first-start>" + "\n");
		return ret.toString();
	}

	private String getDatesE() {
		String startDateStr = _dateDurationZhProp.split(" — ")[0].split(" ")[0];
		String endDateStr = _dateDurationZhProp.split(" — ")[1].split(" ")[0];
		
		StringBuffer ret = new StringBuffer();
		ret.append("<dates access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		ret.append("	<value>" + _dateDurationProp + "</value>" + "\n");
		ret.append("	<display>" + _dateDurationZhProp + "</display>" + "\n");
		ret.append("	<start-date>" + startDateStr + "</start-date>" + "\n");
		if (_dateDurationProp.indexOf("T") > 0)
		ret.append("	<start-time>" + _dateDurationZhProp.split(" — ")[0].split(" ")[1] + "</start-time>" + "\n");
		ret.append("	<end-date>" + endDateStr + "</end-date>" + "\n");
		if (_dateDurationProp.indexOf("T") > 0)
		ret.append("	<end-time>" + _dateDurationZhProp.split(" — ")[1].split(" ")[1] + "</end-time>" + "\n");
		ret.append("</dates>");
		return ret.toString();
	}

	private String getAttachmentsE() {
		return "<attachments access=\"" + _accessAttr + "\" editing=\"false\"></attachments>" + "\n";
	}

	private String getSummaryE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<summary access=\"" + _accessAttr + "\" editing=\"false\">" + "\n");
		ret.append("	<html>"	+ CalendarBeanUtil.javaStrtoGoogleXMLstr(_textProp)	+ "</html>" + "\n");
		ret.append("</summary>" + "\n");
		return ret.toString();
	}


	private String getSecidE() {
		StringBuffer ret = new StringBuffer();
		ret.append("<secid>"  + "\n");
		ret.append("	<value>" + accessor.getUserId()	+ "</value>" + "\n");
		ret.append("</secid>"  + "\n");
		return ret.toString();
	}


	private String getHeader(){
		return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\" ?>"	+ "\n";
	}
	
	private String getRootBegin(){

		//构造返回
		StringBuffer ret = new StringBuffer();
		ret.append("<eventpage action=\"" + this._actionAttr + "\" simplified=\"true\" url=\"event?sf=true&amp;output=xml&amp;hl=zh_CN&amp;eid=" + act.getId() + "&amp;src=" + act.getSrcCalendarId() + "\" ");
		ret.append("access-level=\"" + _aclAttr + "\" specialized=\""	+ _specializeAttr + "\" has-overrides=\"false\"  static-file-prefix=\"" + CalendarCfg.getJsFilePrefix() + "\" lang=\"zh_CN\" current-action=\"" + _curActionAttr + "\" can-respond=\"" + _canRespondAttr	+ "\" can-add-self=\"false\">" + "\n");
		return ret.toString();
	}
	
	private String getRootEnd(){
		return "</eventpage>";
	}
	
	private String getRefDateE(){
		StringBuffer ret = new StringBuffer();
		ret.append("<ref-date>" + "\n");
		ret.append("	<value>" + CalendarBeanUtil.dateToStr(act.getLastModifyTime()).split("T")[0] + "</value>" + "\n");
		ret.append("</ref-date>" + "\n");
		return ret.toString();
	}
	
	private String getEidE(){
		StringBuffer ret = new StringBuffer();
		ret.append("<eid>" + "\n");
		ret.append("	<value>" + act.getId() + "</value>" + "\n");
		ret.append("</eid>" + "\n");
		return ret.toString();
	}
	
	private String getSelfE(){
		String status = act.getSrcCalendarId().equals(accessor.getCalId()) ? "5" : "4";
		
		StringBuffer ret = new StringBuffer();
		ret.append("<self is-signed-in=\"true\" allow-presence-feature=\"false\" allow-guest-modify-feature=\"false\" allow-invite-yourself-feature=\"false\" allow-google-doc-feature=\"false\">" + "\n");
		ret.append(this.getPrincipalE(accessor, status));
		ret.append("</self>" + "\n");
		return ret.toString();
	}
	
	private String getPrincipalE(Principal principal,String status){
		String type = principal.getIsMain().booleanValue() ? "0" : "2";
		
		StringBuffer ret = new StringBuffer();
		ret.append("	<principal id=\"" + principal.getCalId() + "\" status=\"" + status + "\" type=\"" + type + "\">" + "\n");
		ret.append("		<value>" + (principal.getUserEmail() == null ? "" : principal.getUserEmail()) + "</value>" + "\n");
		ret.append("		<display>"+ (principal.getUserName() == null ? "" : principal.getUserName()) + "</display>" + "\n");
		ret.append("		<abbr>" + (principal.getUserName() == null ? "" : principal.getUserName())	+ "</abbr>" + "\n");
		ret.append("	</principal>" + "\n");
		return ret.toString();
	}
}
