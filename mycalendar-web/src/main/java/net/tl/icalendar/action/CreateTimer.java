package net.tl.icalendar.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import net.tl.icalendar.beans.TimerTask;
import net.tl.icalendar.form.TimerForm;
import net.tl.icalendar.service.impl.TimerTaskServiceImpl;
import net.tl.icalendar.util.CalendarBeanUtil;

public class CreateTimer extends Action {

	public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
		TimerForm tf = (TimerForm)form;
		TimerTask tt = new TimerTask();
		boolean isCRON = tf.getIsCRON()==null? false:tf.getIsCRON().booleanValue();
		String numberOfRepeats = tf.getNumberOfRepeats();
		String repeatInterva= tf.getRepeatInterval();
		String startTime= tf.getStartTime();
		String startTimeInterval= tf.getStartTimeInterval();
		String taskInfo= tf.getTaskInfo();
		String startByInterval = tf.getStartByInterval();
		
		tt.setCRON(isCRON);
		tt.setStartTime( (startTime==null||startTime.trim().equals(""))? null:CalendarBeanUtil.dateStrToDate(startTime)   );
		tt.setStartTimeInterval( (startTimeInterval==null||startTimeInterval.trim().equals("")) ?  null : startTimeInterval  );
		tt.setTaskInfo(taskInfo);
		tt.setRepeatInterval( (repeatInterva==null||repeatInterva.trim().equals(""))? null : repeatInterva );
		tt.setNumberOfRepeats(Integer.parseInt(numberOfRepeats));
		tt.setStartByInterval( (startByInterval==null||startByInterval.trim().equals(""))?null:startByInterval );
	
		 
		new TimerTaskServiceImpl().saveTimerTask(tt);
		
		return mapping.getInputForward();
	}
	
}
