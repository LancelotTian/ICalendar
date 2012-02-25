package com.smartdot.calendar.js;

public class JsInteger extends JsElement {
	public JsInteger(Integer integer){
		value = integer;
		type = JsElement.INTEGER;
	}
	
	public String toString(){
		return ((Integer)value).toString();
	}
}
