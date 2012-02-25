package net.tl.icalendar.js;

public class JsNull extends JsElement {
	public JsNull(){
		type = JsElement.NULL;
	}
	
	public String toString(){
		return "null";
	}
}
