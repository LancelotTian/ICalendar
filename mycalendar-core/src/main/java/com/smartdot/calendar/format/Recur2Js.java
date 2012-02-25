package com.smartdot.calendar.format;

import java.text.ParseException;
import java.util.Date;

import com.smartdot.calendar.js.EscapeStringToJsElement;
import com.smartdot.calendar.js.JsArray;
import com.smartdot.calendar.util.CalendarBeanUtil;

public class Recur2Js {
	private String recur;
	private Date startTime;
	
	public Recur2Js(String recur,Date startTime){
		this.recur = recur;
		this.startTime = startTime;
	}
	
	public String toString(){
		return this.getJsArray().toString();
	}
	
	public JsArray getJsArray(){
		JsArray jsa = new JsArray();
		String completeRecur = null;
		try {
			completeRecur = FormatHelper.getCompleteRecur(this.recur, this.startTime);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		jsa.putJsString(completeRecur,new EscapeStringToJsElement());
		jsa.putJsString(CalendarBeanUtil.dateToStr(this.startTime));
		return jsa;
	}

}
