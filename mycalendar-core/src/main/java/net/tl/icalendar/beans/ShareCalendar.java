package net.tl.icalendar.beans;

import java.io.Serializable;

public class ShareCalendar implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3425759462300146292L;
	private String id;
	private String userId;
	private String calendarId;
	private Integer power;
	private String name;
	private Integer color = new Integer(2);
	private Boolean off = new Boolean(false);
	private Boolean hidden = new Boolean(false);
	
	public Integer getColor() {
		return color;
	}
	public void setColor(Integer color) {
		this.color = color;
	}
	public Boolean getHidden() {
		return hidden;
	}
	public void setHidden(Boolean hidden) {
		this.hidden = hidden;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Boolean getOff() {
		return off;
	}
	public void setOff(Boolean off) {
		this.off = off;
	}
	public Integer getPower() {
		return power;
	}
	public void setPower(Integer power) {
		this.power = power;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCalendarId() {
		return calendarId;
	}
	public void setCalendarId(String calendarId) {
		this.calendarId = calendarId;
	}
}
