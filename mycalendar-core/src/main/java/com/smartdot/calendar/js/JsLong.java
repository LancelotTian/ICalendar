package com.smartdot.calendar.js;

public class JsLong extends JsElement {
	public JsLong(Long l){
		value = l;
		type = JsElement.LONG;
	}
	
	public String toString(){
		return value.toString();
	}
}
