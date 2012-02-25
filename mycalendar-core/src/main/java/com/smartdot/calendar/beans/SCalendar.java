package com.smartdot.calendar.beans;

import java.io.Serializable;

/**
 *@author tianliang
 *@desc The class discrible Calendar 
 */
public class SCalendar implements Serializable{
	
	private static final long serialVersionUID = -7236088667658065153L;
	
	public static final String COLOR = "color";
	public static final String OFF = "off";
	public static final String HIDDEN = "hidden";

	/** Calendar id **/
	private String id;
	
	/** Calendar name **/
	private String name;

	/** Calendar user which color when displaying activities  ,default is 1 **/
	private Integer color;
	
	/** Flag to identity the calendar is a default one belonging to someone **/
	private Boolean isDefault;
	
	/** Id of the person that create the calendar **/
	private String userId;
	
	/** ?unknown?  **/
	private String hidden="false";
	
	/** Flag to display the calendar,default is "false"  **/
	private Boolean off=false;
	
	//add by ray  from chengxc
	/** 说明 */
	private String details;
	/** 地点 */
	private String location;
	/** 地区 */
	private String gl;
	/** 时区 */
	private String ctz;
	/** 群组邮件 */
	private String groupEmail;
	/** 共享标识 */
	private String apId;
	/** 共享权限 */
	private String apPopedum;
	/** 待定 */
	private Boolean ncal;
	/** 待定 */
	private Boolean undefined;
	/** 待定 */
	private String rp;
	
	//end

	public Integer getColor() {
		return color;
	}

	public void setColor(Integer color) {
		this.color = color;
	}

	public String getHidden() {
		return hidden;
	}

	public void setHidden(String hidden) {
		this.hidden = hidden;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Boolean getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getApId() {
		return apId;
	}

	public void setApId(String apId) {
		this.apId = apId;
	}

	public String getApPopedum() {
		return apPopedum;
	}

	public void setApPopedum(String apPopedum) {
		this.apPopedum = apPopedum;
	}

	public String getCtz() {
		return ctz;
	}

	public void setCtz(String ctz) {
		this.ctz = ctz;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getGl() {
		return gl;
	}

	public void setGl(String gl) {
		this.gl = gl;
	}

	public String getGroupEmail() {
		return groupEmail;
	}

	public void setGroupEmail(String groupEmail) {
		this.groupEmail = groupEmail;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Boolean getNcal() {
		return ncal;
	}

	public void setNcal(Boolean ncal) {
		this.ncal = ncal;
	}

	public Boolean getUndefined() {
		return undefined;
	}

	public void setUndefined(Boolean undefined) {
		this.undefined = undefined;
	}

	public String getRp() {
		return rp;
	}

	public void setRp(String rp) {
		this.rp = rp;
	}
}
