package com.smartdot.calendar.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.smartdot.calendar.beans.TimerTask;
import com.smartdot.calendar.service.TimerTaskService;

public class TimerTaskServiceImpl implements TimerTaskService {
	private static Log logger = LogFactory.getLog(TimerTaskServiceImpl.class);
	
	public static final String TASK_NAME_PREFIX = "INDICAL";

	public boolean deleteTimerTaskByName(String name)   {
            throw new UnsupportedOperationException("Not yet implemention.");
        }

	public TimerTask getTimerTaskById(String id)   {
		throw new UnsupportedOperationException("Not yet implemention.");
	}

	public List getTimerTaskesByName(String name)   {
		throw new UnsupportedOperationException("Not yet implemention.");
	}

	public TimerTask saveTimerTask(TimerTask timerTask)   {
		throw new UnsupportedOperationException("Not yet implemention.");
	}

}
