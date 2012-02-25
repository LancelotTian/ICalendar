package net.tl.icalendar.js;

public abstract class JsElement {
	
	public static final int STRING = 0;
	public static final int INTEGER = 1;
	public static final int ARRAY = 2;
	public static final int NULL = 3;
	public static final int NONE = 4;
	public static final int LONG = 5;
	
	protected Object value;
	protected int type;
	
	public int getType() {
		return type;
	}
	

	public static int getElementType(String s){
		int type = 0;
		if(s.equalsIgnoreCase(""))
			type = JsElement.NONE;
		else if(s.equals("null"))
			type = JsElement.NULL;
		else if(s.charAt(0)=='\'')
			type = JsElement.STRING;
		else if(s.charAt(0)=='[')
			type = JsElement.ARRAY;
		else type = JsElement.INTEGER;
		return type;
	}
}
