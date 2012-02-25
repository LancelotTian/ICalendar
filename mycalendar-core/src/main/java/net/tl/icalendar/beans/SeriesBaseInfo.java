package net.tl.icalendar.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class SeriesBaseInfo implements Serializable{
	
	private static final long serialVersionUID = 5656109696595163673L;

	private String id;
	private String text = "";
	private String location = "";
	private String details = "";
	
	/** 日程开始的时间 **/
	private Date startTime;
	/** 日程结束时间 **/
	private Long dateDuration;
	private String guestsEmail;

	/** 目前有两个属性 **/
	/** 元素0对应创建日程时的"邀请他人"  **/
	/** 元素1对应创建日程时的"查看来宾列表"  **/
	private String sprop = null;
	/** 对应创建日程时的"状态显示为"字段，true有空(响应中为1)，false忙碌(响应中为0)，默认为false **/
	private Boolean trp = new Boolean(false);
	/** 对应创建日程时的"隐私"字段 默认是DEFAULT **/
	/** DEFAULT 默认**/
	/** PRIVATE 私人**/
	/** PUBLIC 公共**/
	private String icc = "DEFAULT";
	/** 对应创建日程时的"重复频率"字段,如果为null表示未开启重复提醒 **/
	/**为一字符串时，其中可能会出现的参数和含义如下
	 * FREQ=DAILY、WEEKLY、MONTHLY、YEARLY , 重复基本单元为日、周、月、年
	 * INTERVAL=2、3、4... 若不出现表示值为1 ,  每隔n个重复单元提醒
	 * UNTIL=20080910 						提醒截至日期				
	 * BYDAY=MO,TU,WE,TH,FR,SA,SU 			星期几，如果是数字＋两位字母则是每月的第一个星期中的星期几
	 * WKST=MO 始终会出现？
	 * 
	 * 例如：
	 * 按天																recur字段值		
	 * 重复间隔：1天（每天）  	开始：与日程开始时间同 结束：从不					RRULE:FREQ=DAILY;WKST=MO
	 * 重复间隔：1天			开始：与日程开始时间同 结束：20080910				RRULE:FREQ=DAILY;UNTIL=20080910;WKST=MO
	 * 重复间隔：2天（每两天）	开始：与日程开始时间同 结束：从不					RRULE:FREQ=DAILY;INTERVAL=2;WKST=MO
	 * 重复间隔：2天			开始：与日程开始时间同 结束：20080915				RRULE:FREQ=DAILY;INTERVAL=2;UNTIL=20080915;WKST=MO
	 * 
	 * 每个工作日（周一至周五）
	 * 						开始：与日程开始时间同 结束：从不					RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;WKST=MO
	 * 						开始：与日程开始时间同 结束：20080925				RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20080925;WKST=MO
	 * 
	 * 每周一、三、五
	 * 						开始：与日程开始时间同 结束：从不					RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR;WKST=MO
	 * 						开始：与日程开始时间同 结束：20080916				RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR;UNTIL=20080916;WKST=MO
	 * 
	 * 每周二、四
	 * 						开始：与日程开始时间同 结束：从不					RRULE:FREQ=WEEKLY;BYDAY=TU,TH;WKST=MO
	 * 						开始：与日程开始时间同 结束：20080916				RRULE:FREQ=WEEKLY;BYDAY=TU,TH;UNTIL=20080916;WKST=MO
	 * 
	 * 按周
	 * 重复间隔：1周（每周）   五、六、日  开始：与日程开始时间同 结束：从不		RRULE:FREQ=WEEKLY;BYDAY=SU,FR,SA;WKST=MO
	 * 重复间隔：1周	       五、六、日  开始：与日程开始时间同 结束：20080916	RRULE:FREQ=WEEKLY;BYDAY=SU,FR,SA;UNTIL=20080916;WKST=MO
	 * 重复间隔：2周（每2周）  五、六、日  开始：与日程开始时间同 结束：从不		RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=SU,FR,SA;WKST=MO
	 * 
	 * 按月
	 * 重复间隔：1月 重复标准：日期	开始：与日程开始时间同 结束：从不				RRULE:FREQ=MONTHLY;WKST=MO   （每月第5天，5来自日程开始时间值的日）
	 * 重复间隔：1月 重复标准：日期	开始：与日程开始时间同 结束：20090216			RRULE:FREQ=MONTHLY;UNTIL=20090216;WKST=MO
	 * 重复间隔：1月 重复标准：星期几  开始：与日程开始时间同 结束：从不			RRULE:FREQ=MONTHLY;BYDAY=1FR;WKST=MO （每月第1个星期的星期五，BYDAY中的1表示第几个星期，FR表示星期几）
	 * 																	(BYDAY取值范围“-1、1、2、3、4” 1为每月的1号~7号，2为每月的8号~14，3为每月的15~21，4为每月的22~28，-1为每月的29~本月最后一天。如果-1制定的范围内没有对应的星期，则退到4对应范围内的星期)
	 * 按年
	 * 重复间隔：1年（每年）  开始：与日程开始时间同 结束：从不					RRULE:FREQ=YEARLY;WKST=MO （每年9月5号，与开始时间同）
	 * 重复间隔：1年（每年）  开始：与日程开始时间同 结束：20090216				RRULE:FREQ=YEARLY;UNTIL=20090216;WKST=MO 
	 * 
	 * 
	 */
	private String recur = null;
	
	
	//Constructor
	public SeriesBaseInfo(){}
	
	public SeriesBaseInfo(Activity entryTemplate,String recur){
		this.dateDuration = new Long(entryTemplate.getEndTime().getTime() - entryTemplate.getStartTime().getTime()) ;
		this.details = entryTemplate.getDetails();
		this.guestsEmail = entryTemplate.getGuestsEmail();
		this.icc = entryTemplate.getIcc();
		this.location = entryTemplate.getLocation();
		this.recur = recur;
		this.sprop = entryTemplate.getSprop();
		this.startTime = new Date(entryTemplate.getStartTime().getTime());
		this.text = entryTemplate.getText();
		this.trp = entryTemplate.getTrp();
	}

	
	//getter() setter()
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Boolean getTrp() {
		return trp;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public Long getDateDuration() {
		return dateDuration;
	}
	public void setDateDuration(Long dateDuration) {
		this.dateDuration = dateDuration;
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
	public String getRecur() {
		return recur;
	}
	public void setRecur(String recur) {
		this.recur = recur;
	}
	public String getSprop() {
		return sprop;
	}
	public void setSprop(String sprop) {
		this.sprop = sprop;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Boolean isTrp() {
		return trp;
	}
	public void setTrp(Boolean trp) {
		this.trp = trp;
	}
	public String getGuestsEmail() {
		return guestsEmail;
	}
	public void setGuestsEmail(String guestsEmail) {
		this.guestsEmail = guestsEmail;
	}
	
	
	
	public void setMultiProps(Map props){

		if(props.containsKey("text")){
			String textStr = (String)props.get("text");
			this.setText(textStr);
		}
		
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
			this.setSprop(this.composeSpropArray(this.getSprop(), newSpropA));
		}
		
		if(props.containsKey("trp")){
			this.setTrp((Boolean) props.get("trp"));
		}
	}
	
	/**
	 * @param oldSprop	保存在CalendarEntry实例中的sprop属性
	 * @param comingSprop	前台页面传回来的sprop属性
	 * @return	当属性即出现在oldSprop中又出现在comingSprop中时用后者的属性值来更新前者响应的属性值，如果comingSprop中拥有oldSprop中不具有的属性就将该属性加入到oldSprop中
	 */
	public String composeSpropArray(String oldSpropStr,String[] comingSprop){
		List list = new ArrayList();
		//初始化list
		String[] oldSprop = null;
		if(oldSpropStr!=null)
			oldSprop = oldSpropStr.split(";");
		
		if(oldSprop != null){
			for(int i=0;i<oldSprop.length;i++)
				list.add(oldSprop[i]);
		}
		
		for(int i=0;i<comingSprop.length;i++){
			boolean existInOldSprop = false;						//原有sprop中不存在comingsprop的某个属性，true表示存在
			String key = comingSprop[i].split(":")[0].trim();
			for(int j=0;j<list.size();j++){
				String oldKey = list.get(j).toString().split(":")[0].trim();
				if(key.equalsIgnoreCase(oldKey)){
					existInOldSprop = true;
					list.set(j, comingSprop[i]);
					break;
				}
			}
			if(!existInOldSprop) list.add(comingSprop[i]);
		}
		
		String newSprop = "";
		for(int i=0;i<list.size();i++){
			if(i>0) newSprop += ";";
			newSprop += list.get(i).toString();
		}
		return newSprop;
	}
}
