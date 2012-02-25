package com.smartdot.calendar.js;

public class EscapeJsElementToString implements JsEscape {

	/**
	 * 
	 * @param sourceStr java字符串
	 * @return	将java字符串转换成与google在异步请求返回值时所对应的字符串,该字符串将被javascript处理
	 *  <	\46lt;
		>	\46gt;
		&	\46amp;
		\	\\
		'	\047(其后是数字或JsonArray中字符串元素的最后一个字符)	\47	
		"	\042(其后是数字或JsonArray中字符串元素的最后一个字符)	\42	
		=	\075(其后是数字或JsonArray中字符串元素的最后一个字符)  \75

	 */
	public String escape(String source) {
		if(source==null) return "";
		StringBuffer out = new StringBuffer();   
        int strLength = source.length();
        for   (int i = 0;i<strLength;i++)   {   
        	char curC = source.charAt(i);
        		
        	if(curC=='\\'){
        		String tempStr = null;
        		for(int j=1;j<=6 && tempStr==null && (i+j<strLength);j++){
        			if(j==4) continue;
        			tempStr = this.help(source.substring(i,i+j+1));
        			if(tempStr!=null){
        				out.append(tempStr);
        				i = i+j;
        			}
        		}
        		
        		if(tempStr==null) out.append(curC);
        	}else out.append(curC);
        }   
	    return   out.toString();   
	}
	
	private String help(String str){
		if(str.equals("\\\\")) return "\\";
		if(str.equals("\\47") || str.equals("\\047")) return "'";
		if(str.equals("\\42") || str.equals("\\042")) return "\"";
		if(str.equals("\\75") || str.equals("\\075")) return "=";
		if(str.equals("\\46lt;")) return "<";
		if(str.equals("\\46gt;")) return ">";
		if(str.equals("\\46amp;")) return "&";
		return null;
	}

}
