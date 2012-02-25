package com.smartdot.calendar.beans;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * @author tianliang
 * 对应日历中活动所包含的每条注释
 *
 */
public class ActivityComment implements Serializable{
	private static final long serialVersionUID = -6671996452576447617L;
	
	private String id;
	/**注释创建人**/
	private String personId;
	/**注释创建人在哪个日历中创建的注释**/
	private String srcCalendarId;
	/**注释所属于的活动标识**/
	private String entryId;
	/**注释的内容**/
	private String comment = "";
	/**注释创建时间**/
	private Date createdDate = new Date();
	
	
	//Constructor
	public String getSrcCalendarId() {
		return srcCalendarId;
	}
	public void setSrcCalendarId(String srcCalendarId) {
		this.srcCalendarId = srcCalendarId;
	}
	
	//getter() setter()
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public String getEntryId() {
		return entryId;
	}
	public void setEntryId(String entryId) {
		this.entryId = entryId;
	}
	public String getPersonId() {
		return personId;
	}
	public void setPersonId(String personId) {
		this.personId = personId;
	}
}
