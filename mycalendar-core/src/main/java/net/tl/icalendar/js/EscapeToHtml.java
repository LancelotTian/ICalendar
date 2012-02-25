package net.tl.icalendar.js;

public class EscapeToHtml implements JsEscape {

	/**
	 * 
	 * @param sourceStr 原始字符串	java字符串
	 * @return @return	将java字符串转换成html/xml环境下可识别的字符串
	 * 		<	&lt;
	 *		>	&gt;
	 *		'	&#39;
	 *		"	&quot;
	 *		&	&amp;
	 *@deprecated 未来版本可能使用
	 */
	public String escape(String source) {
		if(source==null) return "";
        StringBuffer ret = new StringBuffer();   
        int strLength = source.length();
        for(int i = 0;i<strLength;i++){   
        		char curC = source.charAt(i);
        		switch(curC){
        			case '<': ret.append("&lt;");
        					   	break;
        			case '>': ret.append("&gt;");
        						break;
        			case '&': ret.append("&amp;");
        						break;
        			case '\'':ret.append("&#39;");
        						break;
        			case '\"':ret.append("&quot;");
        						break;
        			default: ret.append(curC);
        		}
        }
        return   ret.toString();   
	}

}
