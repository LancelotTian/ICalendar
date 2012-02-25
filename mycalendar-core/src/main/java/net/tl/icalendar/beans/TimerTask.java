package net.tl.icalendar.beans;

import java.io.Serializable;
import java.util.Date;

public class TimerTask implements Serializable{

	/**
	 * 
	 * 每日0点30任务
	 * ifCRON = true
	 * 
	 * startTimeInterval （setStartTimeInterval）= 0 30 0 * * ？
	 * repeatInterval (setRepeatInterval) = 0 30 0 * * ？
	 * 
	 * (以上两句是否可以用setStartByInterval替换？)
	 * 
	 * numberOfRepeats = -1
	 * 
	 * 一次性任务
	 * isCRON = false
	 * startTime （setStartTime）= time
	 * numberOfRepeats = 1
	 * 
	 */
	private static final long serialVersionUID = 6986080325210400213L;
	
	private String id;
	private String taskInfo;
	private Date startTime;
	private String startTimeInterval;
	private int numberOfRepeats = 1;
	private String repeatInterval;
	private String startByInterval;
	private boolean isCRON;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
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
	public String getRepeatInterval() {
		return repeatInterval;
	}
	public void setRepeatInterval(String repeatInterval) {
		this.repeatInterval = repeatInterval;
	}
	public void setNumberOfRepeats(int numberOfRepeats) {
		this.numberOfRepeats = numberOfRepeats;
	}
	public int getNumberOfRepeats() {
		return numberOfRepeats;
	}
	public boolean isCRON() {
		return isCRON;
	}
	public void setCRON(boolean isCRON) {
		this.isCRON = isCRON;
	}
	public String getStartByInterval() {
		return startByInterval;
	}
	public void setStartByInterval(String startByInterval) {
		this.startByInterval = startByInterval;
	}
	
}
