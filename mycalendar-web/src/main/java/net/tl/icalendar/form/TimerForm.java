package net.tl.icalendar.form;

import org.apache.struts.action.ActionForm;

public class TimerForm extends ActionForm {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8863627191947322117L;
	
	
	private String id;
	private String taskInfo;
	private String startTime;
	private String startTimeInterval;
	private String numberOfRepeats;
	private String repeatInterval;
	private Boolean isCRON;
	private String startByInterval;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNumberOfRepeats() {
		return numberOfRepeats;
	}
	public void setNumberOfRepeats(String numberOfRepeats) {
		this.numberOfRepeats = numberOfRepeats;
	}
	public String getRepeatInterval() {
		return repeatInterval;
	}
	public void setRepeatInterval(String repeatInterval) {
		this.repeatInterval = repeatInterval;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getStartTimeInterval() {
		return startTimeInterval;
	}
	public void setStartTimeInterval(String startTimeInterval) {
		this.startTimeInterval = startTimeInterval;
	}
	public String getTaskInfo() {
		return taskInfo;
	}
	public void setTaskInfo(String taskInfo) {
		this.taskInfo = taskInfo;
	}
	public Boolean getIsCRON() {
		return isCRON;
	}
	public void setIsCRON(Boolean isCRON) {
		this.isCRON = isCRON;
	}
	public String getStartByInterval() {
		return startByInterval;
	}
	public void setStartByInterval(String startByInterval) {
		this.startByInterval = startByInterval;
	}
}
