package com.smartdot.calendar.js;

public class EscapeStringToJsElementLocation implements JsEscape {

	/**
	 * 
	 * @param sourceStr java字符串
	 * @return	将java字符串转换成与google在异步请求返回值时所对应的字符串,该字符串将被javascript处理
	 *  <	\074(其后是数字或JsonArray中字符串元素的最后一个字符)	\74
		>	\076(其后是数字或JsonArray中字符串元素的最后一个字符)	\76
		&	\046(其后是数字或JsonArray中字符串元素的最后一个字符)	\46
		\	\\
		'	\047(其后是数字或JsonArray中字符串元素的最后一个字符)	\47	
		"	\042(其后是数字或JsonArray中字符串元素的最后一个字符)	\42	
		=	\075(其后是数字或JsonArray中字符串元素的最后一个字符)  \75
		       <        \    >       '       =    "
       \74p\76 \46lt;   \\   \46gt;  \46#39; \75  \46quot; \74/p\076
	 */
	public String escape(String source) {
		if(source==null) return "";
        StringBuffer out = new StringBuffer();   
        int strLength = source.length();
        for   (int i = 0;i<strLength;i++)   {   
        		char curC = source.charAt(i);
        		String prefix = "";
        		if(i==strLength-1 || Character.isDigit(source.charAt(i+1)))
        			prefix = "0";
        		if(curC == '<')
        			out.append("\\" + prefix + "74");
        		else if(curC == '>')
        			out.append("\\" + prefix + "76");
        		else if(curC == '&')
        			out.append("\\" + prefix + "46");
        		else if(curC == '\\')
        			out.append("\\\\");
        		else if(curC == '\'')
        			out.append("\\" + prefix + "47");
        		else if(curC == '\"')
        			out.append("\\" + prefix + "42");
        		else if(curC == '=')
        			out.append("\\" + prefix + "75");
        		else out.append(curC);
        }   
        return   out.toString();   
	}
}
