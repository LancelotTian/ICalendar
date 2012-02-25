package com.smartdot.calendar.format;

import com.smartdot.calendar.beans.CalendarDisplayConfig;
import com.smartdot.calendar.js.JsArray;

public class CalDisConf2Js {
	
	private CalendarDisplayConfig cdc;
	
	public CalDisConf2Js(CalendarDisplayConfig cdc){
		this.cdc = cdc;
	}
	
	
	/**
	 * 
	 * @return
	 */
	//	['firstDay','<%=displayConfig.getFirstDay() %>'],
	//['tzoffset','28800000',1],['translatedtz','(GMT+08:00)  中国时间 - 北京',1],
	//['timezone','Asia/Shanghai'],['defaultCalMode','<%=displayConfig.getDefaultCalMode()%>'],
	//['hideInvitations','<%=displayConfig.getHideInvitations()%>'],
	//['locale','<%=displayConfig.getLocale() %>'],['weekView5','<%=displayConfig.getWeekView5() %>'],
	//['showDeclined','true'],['format24HourTime','<%=displayConfig.getFormat24HourTime() %>'],
	//['formatDateBeforeMonth','<%= displayConfig.getFormatDateBeforeMonth() %>'],
	//['dtFldOrdr','<%=displayConfig.getDtFldOrdr() %>'],['country','<%=displayConfig.getCountry() %>']
	public String toString(){
		return this.getJsArray().toString();
	}
	
	public JsArray getJsArray(){
		JsArray jsA = new JsArray();
		
		JsArray _firstDay = new JsArray();
		_firstDay.putJsString("firstDay");
		_firstDay.putJsString(cdc.getFirstDay());
		jsA.putJsArray(_firstDay);
		
		JsArray _tzoffset = new JsArray();
		_tzoffset.putJsString("tzoffset");
		_tzoffset.putJsString("28800000");
		_tzoffset.putJsLong(1);
		jsA.putJsArray(_tzoffset);
		
		JsArray _translatedtz = new JsArray();
		_translatedtz.putJsString("translatedtz");
		_translatedtz.putJsString("(GMT+08:00) 中国时间 - 北京");
		_translatedtz.putJsLong(1);
		jsA.putJsArray(_translatedtz);
		
		JsArray _timezone = new JsArray();
		_timezone.putJsString("timezone");
		_timezone.putJsString("Asia/Shanghai");
		jsA.putJsArray(_timezone);
		
		JsArray _defaultCalMode = new JsArray();
		_defaultCalMode.putJsString("defaultCalMode");
		_defaultCalMode.putJsString(cdc.getDefaultCalMode());
		jsA.putJsArray(_defaultCalMode);
		
		JsArray _hideInvitations = new JsArray();
		_hideInvitations.putJsString("hideInvitations");
		_hideInvitations.putJsString("false");
		jsA.putJsArray(_hideInvitations);
		
		JsArray _locale = new JsArray();
		_locale.putJsString("locale");
		_locale.putJsString("zh_CN");
		jsA.putJsArray(_locale);
		
		JsArray _weekView5 = new JsArray();
		_weekView5.putJsString("weekView5");
		_weekView5.putJsString(cdc.getWeekView5().toString().toLowerCase());
		jsA.putJsArray(_weekView5);
		
		JsArray _showDeclined = new JsArray();
		_showDeclined.putJsString("showDeclined");
		_showDeclined.putJsString(cdc.getShowDeclined().toString().toLowerCase());
		jsA.putJsArray(_showDeclined);
		
		JsArray _format24HourTime = new JsArray();
		_format24HourTime.putJsString("format24HourTime");
		_format24HourTime.putJsString(cdc.getFormat24HourTime().toString().toLowerCase());
		jsA.putJsArray(_format24HourTime);
		
		JsArray _formatDateBeforeMonth = new JsArray();
		_formatDateBeforeMonth.putJsString("formatDateBeforeMonth");
		_formatDateBeforeMonth.putJsString("false");
		jsA.putJsArray(_formatDateBeforeMonth);
		
		JsArray _dtFldOrdr = new JsArray();
		_dtFldOrdr.putJsString("dtFldOrdr");
		_dtFldOrdr.putJsString(cdc.getDtFldOrdr());
		jsA.putJsArray(_dtFldOrdr);
		
		JsArray _customCalMode = new JsArray();
		_customCalMode.putJsString("customCalMode");
		_customCalMode.putJsString(cdc.getCustomCalMode());
		jsA.putJsArray(_customCalMode);
		
		JsArray _showCurrentTimeLine = new JsArray();
		_showCurrentTimeLine.putJsString("showCurrentTimeLine");
		_showCurrentTimeLine.putJsString(cdc.getShowCurrentTimeLine().toString().toLowerCase());
		jsA.putJsArray(_showCurrentTimeLine);
		
		JsArray _country = new JsArray();
		_country.putJsString("country");
		_country.putJsString("CN");
		jsA.putJsArray(_country);
		
		return jsA;
	}

}
