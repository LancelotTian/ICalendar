package com.smartdot.calendar.beans;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import com.smartdot.calendar.util.BeanHelper;
import com.smartdot.calendar.util.CalendarBeanUtil;
import com.smartdot.calendar.util.CalendarCfg;



/**
 * @author tianliang
 * @since 2008-9
 * 对应日历中的活动
 */
public class Activity implements Serializable{
	
	private static final long serialVersionUID = -3705414247385110008L;
	//目前对于所有实例取值相同的属性
	/** 未知，取值为"true" **/
	private Boolean sf= true;
	
	
	//其它参数，默认是指使用弹窗创建时的取值ֵ
	
	/** 该活动的id **/
	private String id;
	
	/** 该活动的系列id **/
	private String seriesId;
	
	/** 对应界面上提醒字段的设置。用分号";"分隔，每个元素格式为："*:***"  默认是"3:600"**/
	/** 第一个字段表示提醒方式，1邮件提醒,2为短信提醒,3弹出窗口提醒 **/
	/** 第二个字段表示提醒在提前活动开始时间之前多长时间触发，单位为秒，例如：开始时间是2008-12-10 10:30:00,erem为"1:600"则该 **/
	/**  提醒表示在2008-12-10 10:20:00 发送用户给邮件提醒 **/
	private String erem = CalendarCfg.getDefaultErem();
	
	/** 活动开始的时间 **/
	private Date startTime;
	/** 活动结束时间 **/
	private Date endTime;
	
	
	/** 对应创建活动时的"内容"字段,默认是"" **/
	private String text = "";
	
	/** 对应创建活动时的"地点"字段,默认是"" **/
	private String location = "";
	
	/** 对应创建活动时的"隐私"字段 默认是DEFAULT **/
	/** DEFAULT 默认**/
	/** PRIVATE 私人**/
	/** PUBLIC 公共**/
	private String icc = "DEFAULT";
	
	/** 活动创建时间 年月日形式,默认是当前时间 **/
	private Date lastModifyTime = new Date();
	
	/** 用户id **/
	private String secid;
	
	/** 目前有两个属性 **/
	/** 元素0对应创建活动时的"邀请他人"  **/
	/** 元素1对应创建活动时的"查看来宾列表"  **/
	private String sprop = null;
	
	/** 活动所在的子日历id **/
	private String srcCalendarId;

	/** 对应创建活动时的"状态显示为"字段，true有空(响应中为1)，false忙碌(响应中为0)，默认为false **/
	private Boolean trp = false;

	/**新建活动的"说明"字段值，默认是"" **/
	private String details = "";
	
	/** 活动与系列之间的关系
	 *	-1	该活动在创建时没有设置“重复频率”或虽然设置了但没有其他任何同系列的活动存在
	 *	0	该活动在创建时设置了“重复频率”且有其他同系列的活动存在 
	 *  1	该活动在创建时是该字段被设置为0，但是因为以后的修改造成该活动暂时脱离了系列
	 */
	private Integer seriesState = new Integer(-1);
	
	/** 来宾邮箱 **/
	private String guestsEmail = null;
	
	/**  **/
	private DateDuration orignDateDuration = null;
	
	/** 本活动所包含的注释 **/
	private Set comments = new HashSet(); 
	
	/** 邮件提醒时间 **/
	private Set mailReminders = new HashSet();
	
	/** 短信提醒时间 **/
	private Set smsReminders = new HashSet();
	
	/**
	 *  共享的活动
	 */
	private Set activityShare = new HashSet(0);
	
	//外部应用程序使用的扩展属性
	/** 活动在该应用中的标识，在该应用中唯一 **/
	private String idInApp = null;
	/**	外部应用的身份标识，全局范围内唯一 **/
	private String appType = null;
	/**	供扩展使用的字段 **/
	private String extendProp = null;
	
	
	//getter() setter()
	public String getSeriesId() {
		return seriesId;
	}
	public void setSeriesId(String seriesId) {
		this.seriesId = seriesId;
	}
	public Date getLastModifyTime() {
		return lastModifyTime;
	}
	public void setLastModifyTime(Date lastModifyTime) {
		this.lastModifyTime = lastModifyTime;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getErem() {
		return erem;
	}
	public void setErem(String erem) {
		this.erem = erem;
	}
	public String getSprop() {
		return sprop;
	}
	public void setSprop(String sprop) {
		this.sprop = sprop;
	}
	public String getIcc() {
		return icc;
	}
	public void setIcc(String icc) {
		this.icc = icc;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSecid() {
		return secid;
	}
	public void setSecid(String secid) {
		this.secid = secid;
	}
	public Boolean getSf() {
		return sf;
	}
	public void setSf(Boolean sf) {
		this.sf = sf;
	}
	public String getSrcCalendarId() {
		return srcCalendarId;
	}
	public void setSrcCalendarId(String src) {
		this.srcCalendarId = src;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Boolean getTrp() {
		return trp;
	}
	public void setTrp(Boolean trp) {
		this.trp = trp;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGuestsEmail() {
		return guestsEmail;
	}
	public void setGuestsEmail(String guestsEmail) {
		this.guestsEmail = guestsEmail;
	}
	public Set getMailReminders() {
		return mailReminders;
	}
	public void setMailReminders(Set mailReminders) {
		this.mailReminders = mailReminders;
	}
	public Set getSmsReminders() {
		return smsReminders;
	}
	public void setSmsReminders(Set smsReminders) {
		this.smsReminders = smsReminders;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Integer getSeriesState() {
		return seriesState;
	}
	public void setSeriesState(Integer seriesState) {
		this.seriesState = seriesState;
	}
	public Set getComments() {
		return comments;
	}
	public void setComments(Set comments) {
		this.comments = comments;
	}
	public DateDuration getOrignDateDuration() {
		return orignDateDuration;
	}
	public void setOrignDateDuration(DateDuration orignDateDuration) {
		this.orignDateDuration = orignDateDuration;
	}
	public String getAppType() {
		return appType;
	}
	public void setAppType(String appType) {
		this.appType = appType;
	}
	public String getExtendProp() {
		return extendProp;
	}
	public void setExtendProp(String extendProp) {
		this.extendProp = extendProp;
	}
	public String getIdInApp() {
		return idInApp;
	}
	public void setIdInApp(String idInApp) {
		this.idInApp = idInApp;
	}
	public Set getActivityShare() {
		return activityShare;
	}
	public void setActivityShare(Set activityShare) {
		this.activityShare = activityShare;
	}
	
	public Activity getDuplicateEntry(Date startTime,Date endTime){
		Activity newAct = new Activity();
		
		newAct.setStartTime(new Date(startTime.getTime()));
		newAct.setEndTime(new Date(endTime.getTime()));
		newAct.setText(this.text);
		newAct.setLocation(this.location);
		newAct.setDetails(this.details);
		newAct.setIcc(this.icc);
		newAct.setTrp(this.trp);
		newAct.setSprop(this.sprop);
		newAct.setErem(this.erem);
		newAct.setGuestsEmail(this.guestsEmail);
		
		newAct.setLastModifyTime(this.lastModifyTime);
		
		
		newAct.setSeriesId(this.seriesId);
		
		newAct.setSeriesState(new Integer(0));
		
		newAct.setSecid(this.secid);
		newAct.setSf(this.sf);
		
		newAct.setSrcCalendarId(this.srcCalendarId);
		//供其它应用添加的活动扩展
		newAct.setIdInApp(this.idInApp);
		newAct.setAppType(this.appType);
		newAct.setExtendProp(this.extendProp);
		
		//if(BeanHelper.isNullOrEmpty(newAct.getGuestsEmail())){
			Set set = new HashSet();
			Iterator it = this.activityShare.iterator();
			
			
			while(it.hasNext()){
				
				ActivityShare share = (ActivityShare)it.next();
				
				ActivityShare newShare = new ActivityShare();
				
				BeanHelper.copyProperties(newShare, share);
				
				newShare.setId(null);
				
				newShare.setActivity(newAct);
				
				set.add(newShare);
				
			}
			newAct.setActivityShare(set);
		//}
		
		return newAct;
	}
	
	/**
	 * 
	 * @param props
	 * @return 根据props中的属性设置本Activity实例
	 */
	public void setMultiProps(Map props){
		
		if(props.containsKey("add")){
			
			String [] persons = (String [])props.get("add");
			
			String person ="";
			
			for(int i=0;i<persons.length;i++){
				person += persons[i]+";";
			}
			
			this.setGuestsEmail(person);
		}
		
		if(props.containsKey("sprop")){
			
			String [] _sprop = (String [])props.get("sprop");
			
			String spropstr ="";
			
			for(int i=0;i<_sprop.length;i++){
				spropstr += _sprop[i]+";";
			}
			
			this.setSprop(spropstr);
			
		}
		
		if(props.containsKey("text")){
			String textStr = (String)props.get("text");
			this.setText(textStr);
		}
		
		if(props.containsKey("startTime")){
			Date stim = (Date) props.get("startTime");
			this.setStartTime(stim);
		}
		
		if(props.containsKey("endTime")){
			Date stim = (Date) props.get("endTime");
			this.setEndTime(stim);
		}
		
		if(props.containsKey("rfdt")){
			this.setLastModifyTime((Date) props.get("rfdt"));
		}else this.setLastModifyTime(new Date());
		
		if(props.containsKey("details")){
			String detailsStr = (String) props.get("details");
			this.setDetails(detailsStr);
		}
		
		if(props.containsKey("icc"))
			this.setIcc((String) props.get("icc"));
		
		if(props.containsKey("location")){
			String locationStr = (String) props.get("location");
			this.setLocation(locationStr);
		}
		
		if(props.containsKey("sprop")){
			String[] newSpropA = (String[]) props.get("sprop");
			this.setSprop(CalendarBeanUtil.composeSpropArray(this.getSprop(), newSpropA));
		}
		
		if(props.containsKey("trp")){
			this.setTrp((Boolean) props.get("trp"));
		}
		
		/**
	 	表示提醒字段设置的数组，每个元素格式为："*:***:*"  
 		第一个字段表示提醒方式，1邮件提醒，3弹出窗口提醒 
		第二个字段表示提醒发生时间，秒为单位 
		第三个字段有三种取值，-1、0、1表示使用
		0－表示数据库中已经存在该提醒
		1－表示数据库中没有该提醒，当前要添加该提醒
		-1－表示数据库中已经处在该提醒，当前要删除该提醒
		 */
	
		if(props.containsKey("erem")){
			Set eremSet = this.getNewErem((String[]) props.get("erem"),this.erem);
			this.setErem(CalendarBeanUtil.setToStr(eremSet));
		}
		
//		if(props.containsKey("targ"))
//			this.setSrcCalendarId((String) props.get("targ"));
		
		//供其它应用添加的活动扩展
		if(props.containsKey("idInApp")){
			this.setIdInApp((String) props.get("idInApp"));
		}
		if(props.containsKey("appType")){
			this.setAppType((String) props.get("appType"));
		}
		if(props.containsKey("extendProp")){
			this.setExtendProp((String) props.get("extendProp"));
		}
	}

	/**
	 * 
	 * @param newEremArray	新的erem数组
	 * @param oldEremStr	日程的原始erem值
	 * @return	要存放到数据库中的erem最新值，java.util.Set对象
	 */
	private Set getNewErem(String[] newEremArray,String oldEremStr) {
		Set eremSet = CalendarBeanUtil.strToSet(oldEremStr);
		for(int i=0;i<newEremArray.length;i++){
			int tempIndex = newEremArray[i].lastIndexOf(":");
			String flag = newEremArray[i].substring(tempIndex+1);
			String configValue = newEremArray[i].substring(0,tempIndex);
			if(flag.equalsIgnoreCase("-1"))	eremSet.remove(configValue);
			//flag 为 "0"或"1"
			else eremSet.add(configValue);
		}
		
		return eremSet;
	}
	
	public Set getTimerRemindTasks(){
		Set set = new HashSet();
		String[] eremA = this.erem.split(";");
		
		for(int i=0;i<eremA.length;i++){
			String remindType = eremA[i].split(":")[0];
			
			if(remindType.trim().equalsIgnoreCase("1")){ //非弹出窗口提醒，可能是邮件或短信提醒
				int remindSecondsBefore = Integer.parseInt( eremA[i].split(":")[1] ) * 1000;	//提前多长时间提醒，单位为毫秒
				set.add(""+ CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND + ":" 
						+ CalendarBeanUtil.dateToStr(new Date(this.startTime.getTime()-remindSecondsBefore)) );
			}
			
			if(remindType.trim().equalsIgnoreCase("2")){ //非弹出窗口提醒，可能是邮件或短信提醒
				int remindSecondsBefore = Integer.parseInt( eremA[i].split(":")[1] ) * 1000;	//提前多长时间提醒，单位为毫秒
				set.add("" + CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND + ":" 
						+ CalendarBeanUtil.dateToStr(new Date(this.startTime.getTime()-remindSecondsBefore)) );
			}
		}
		return set;
	}
	
	
	public void setTimerRemindByErem(){
		String[] eremA = this.erem.split(";");
		for(int i=0;i<eremA.length;i++){
			String remindType = eremA[i].split(":")[0];
			
			if(remindType.trim().equalsIgnoreCase("1")){ //非弹出窗口提醒，可能是邮件或短信提醒
				int remindSecondsBefore = Integer.parseInt( eremA[i].split(":")[1] )*1000;	//提前多长时间提醒，单位为秒
				ActivityMailReminder newAMR = new ActivityMailReminder( CalendarBeanUtil.dateToStr(new Date(this.startTime.getTime()-remindSecondsBefore)) );
				this.getMailReminders().add(newAMR);
			}
			
			if(remindType.trim().equalsIgnoreCase("2")){ //非弹出窗口提醒，可能是邮件或短信提醒
				int remindSecondsBefore = Integer.parseInt( eremA[i].split(":")[1] )*1000;	//提前多长时间提醒，单位为秒
				ActivitySmsReminder newASR = new ActivitySmsReminder( CalendarBeanUtil.dateToStr(new Date(this.startTime.getTime()-remindSecondsBefore)) );
				this.getSmsReminders().add(newASR);
			}
		}
	}
	
}
