package com.smartdot.calendar.js;

public class JsString extends JsElement{
	public JsString(String str){
		value = str;
		type = JsElement.STRING;
	}
	
	public String toString(){
		return "'" + value + "'";
	}
}
