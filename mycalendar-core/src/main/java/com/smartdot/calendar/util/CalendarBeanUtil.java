package com.smartdot.calendar.util;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import net.fortuna.ical4j.model.DateTime;
import net.fortuna.ical4j.model.Recur;
import net.fortuna.ical4j.model.parameter.Value;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.smartdot.calendar.beans.Activity;
import com.smartdot.calendar.beans.SeriesBaseInfo;
import com.smartdot.calendar.format.FormatHelper;
import com.smartdot.calendar.js.JsArray;
import com.smartdot.calendar.js.JsElement;

/**
 * @author tianliang
 * @since	2008-9
 */
public class CalendarBeanUtil {

	
	private static Logger logger = Logger.getLogger(CalendarBeanUtil.class);
	
	
	/**
	 * @param oldSprop	保存在CalendarEntry实例中的sprop属性
	 * @param comingSprop	前台页面传回来的sprop属性
	 * @return	当属性即出现在oldSprop中又出现在comingSprop中时用后者的属性值来更新前者响应的属性值，如果comingSprop中拥有oldSprop中不具有的属性就将该属性加入到oldSprop中
	 */
	public static String composeSpropArray(String oldSpropStr,String[] comingSprop){
		List list = new ArrayList();
		//初始化list
		String[] oldSprop = null;
		if(oldSpropStr!=null)
			oldSprop = oldSpropStr.split(";");
		
		if(oldSprop != null){
			for(int i=0;i<oldSprop.length;i++)
				list.add(oldSprop[i]);
		}
		
		for(int i=0;i<comingSprop.length;i++){
			boolean existInOldSprop = false;						//原有sprop中不存在comingsprop的某个属性，true表示存在
			String key = comingSprop[i].split(":")[0].trim();
			for(int j=0;j<list.size();j++){
				String oldKey = list.get(j).toString().split(":")[0].trim();
				if(key.equalsIgnoreCase(oldKey)){
					existInOldSprop = true;
					list.set(j, comingSprop[i]);
					break;
				}
			}
			if(!existInOldSprop) list.add(comingSprop[i]);
		}
		
		String newSprop = "";
		for(int i=0;i<list.size();i++){
			if(i>0) newSprop += ";";
			newSprop += list.get(i).toString();
		}
		return newSprop;
	}
	
	/**
	 * @param calendarId  当前load请求中的日历id
	 * @return	用于表示时间戳的字符串
	 */
	public static String getLoadTimeStampResponse(String calendarId,String droi){
		return "['us','" + calendarId + " " + droi + " " + (System.currentTimeMillis()-CalendarCfg.getBaseTime()) + "']";
	}
	
	/**
	 * 
	 * @param sourceStrArray	字符串数组
	 * @return	生成一集合
	 */
	public static java.util.Set strToSet(String sourceStr){
		//if(sourceStr == null || sourceStr.equals(Constants.DEFAULT_EREM)) return null;
		java.util.Set set = new HashSet();
		if(sourceStr.equals("")) return set;
		String[] sourceStrA = sourceStr.split(";");
		for(int i=0;i<sourceStrA.length;i++){
			set.add(sourceStrA[i]);
		}
		return set;
	}
	
	/**
	 * 
	 * @param set	原是的set集合
	 * @return	转换为用“;”分割的字符串
	 */
	public static String setToStr(java.util.Set set){
		//if(set == null) return Constants.DEFAULT_EREM;
		String newStr = "";
		java.util.Iterator iterator = set.iterator();
		int k = 0;
		while(iterator.hasNext()){
			if(k>0) newStr += ";";
			newStr += (String)iterator.next();
			k++;
		}
		return newStr;
	}
	
	/**
	 * 
	 * @return 返回当前日期（YMD）向前6天，向后8天这一时间段表示，型如："20080101/20080115"
	 */
	public static String getDatePeriod(){
		Date date = new Date();
		long step = 24 * 60 * 60 * 1000 ;
		Date date2 = new Date(date.getTime() - 6*step);
		Date date3 = new Date(date.getTime() + 8*step);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		return sdf.format(date2) + "/" + sdf.format(date3); 
	}
	
	/**
	 * 
	 * @param sourceStr
	 * @param substr
	 * @return 返回substr在sourceStr中出现的次数，不包括嵌套
	 */
	public static int lookupSubstrNum(String sourceStr,String substr){
		int i = 0 ;
		int tempIndex = 0;
		while(tempIndex < sourceStr.length()){
			tempIndex = sourceStr.indexOf(substr, tempIndex);
			if(tempIndex<0) break;
			i++;
			tempIndex += substr.length();
		}
		return i;
	}
	
	/**
	 * 
	 * @return	返回当前时间相对于一个常数的相对毫秒数
	 */
	public static long getCurrentMsTime(){
		return System.currentTimeMillis()-CalendarCfg.getBaseTime();
	}
	
	/**
	 * 
	 * @param date	日期对象,假设表示2008年10月9日13点20分
	 * @return	转换为类似这样的字符串：20081009T133000
	 */
	public static String dateToStr(Date date){
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd'T'HHmmss");
		String ret = simpleDateFormat.format(date);
		return ret;
	}
	
	/**
	 * 
	 * @param date	日期对象,假设表示2008年10月9日13点20分
	 * @return	转换为类似这样的字符串：2008-10-09 下午1:30。对于0点表示为：2008-10-09 上午12点，对于12点表示为：2008-10-09 下午12点，其它大于12点的时间表示为减去12后的小时数。整点不显示分钟而是表示为汉字‘点’
	 */
	public static String dateToZHStr(Date date){
		String formatStr = "yyyy-MM-dd' 'ah:mm";
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		if(cal.get(Calendar.MINUTE)==0) formatStr = "yyyy-MM-dd' 'ah'点'";
		SimpleDateFormat smf = new SimpleDateFormat(formatStr,new Locale("zh-cn"));
		return smf.format(date);
	}
	
	/**
	 * 
	 * @param dateStr	类似”20081009T133000“或”20081009“（没有T表示0时0分0秒）的时间字符串
	 * @return	相对应的Date对象
	 */
	public static Date dateStrToDate(String dateStr){
		if(dateStr==null) return null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd'T'HHmmss");
		Date date = null;
		try {
			date =	sdf.parse(dateStr.indexOf("T")<0?(dateStr+"T000000"):dateStr);
		} catch (ParseException e) {
			
			logger.error("无法解析时间:"+dateStr);
			e.printStackTrace();
		}
		return date;
	}
	
	/**
	 * 
	 * @param jsArrayStr load响应中的用于表示一至多个活动的js数据字符串
	 * @return 替换数组中具有相同值的字符串元素后得到的数组，例如：
	 * 原始数组：[['a','NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMThUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t','123','20081018T113000','20081018T123000','YmpzbWl0aEBzaW5hLmNvbQ',,,527621,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazQgYmpzbWl0aEBzaW5hLmNvbQ',,0,'',['goo.allowInvitesOther','true','goo.showInvitees','true']],['a','NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMTZUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t','123','20081016T113000','20081016T123000','YmpzbWl0aEBzaW5hLmNvbQ',,,527621,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazQgYmpzbWl0aEBzaW5hLmNvbQ',,0,'',['goo.allowInvitesOther','true','goo.showInvitees','true']],['a','NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMTdUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t','123','20081017T113000','20081017T123000','YmpzbWl0aEBzaW5hLmNvbQ',,,527621,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazQgYmpzbWl0aEBzaW5hLmNvbQ',,0,'',['goo.allowInvitesOther','true','goo.showInvitees','true']],['us','YmpzbWl0aEBzaW5hLmNvbQ 20080820/20090204 63359809993'],['_RefreshCalendarWhenDisplayedNext']]
	 * 替换后类似：(function(){var a='true',b='a',c='123',d='YmpzbWl0aEBzaW5hLmNvbQ',e='NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazQgYmpzbWl0aEBzaW5hLmNvbQ',f='',g='goo.allowInvitesOther',h='goo.showInvitees';return[[b,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMThUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t',c,'20081018T113000','20081018T123000',d,,,527621,e,,0,f,[g,a,h,a]],[b,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMTZUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t',c,'20081016T113000','20081016T123000',d,,,527621,e,,0,f,[g,a,h,a]],[b,'NWNzbG81OHN1dWR0OG01ZGM5bTc0aXJvazRfMjAwODEwMTdUMDMzMDAwWiBianNtaXRoQHNpbmEuY29t',c,'20081017T113000','20081017T123000',d,,,527621,e,,0,f,[g,a,h,a]],['us','YmpzbWl0aEBzaW5hLmNvbQ 20080820/20090204 63359809993'],['_RefreshCalendarWhenDisplayedNext']]})()
	 */
	public static String simpleJsArrayStr(String jsArrayStr){
		List listAll = getStrElementsOfJsArray(jsArrayStr);
		List list = new ArrayList();
		for(int i=0;i<listAll.size();i++){
			Object curObj = listAll.get(i);
			if( !list.contains(curObj) &&  (listAll.indexOf(curObj) < listAll.lastIndexOf(curObj)) )
				list.add(curObj);
		}

		if(list.size()==0) return jsArrayStr;
		String newJsArrayStr = new String(jsArrayStr);
		String jsVarList = "var ";
		
		for(int i=0;i<list.size();i++){
			String curJsVarName = generatorJsVarName(i);
			String oldStr = list.get(i).toString();
			//newJsArrayStr = newJsArrayStr.replaceAll("'" + oldStr + "'", ""+curJsVarName);
			newJsArrayStr = StringUtils.replace(newJsArrayStr, "'" + oldStr + "'", curJsVarName);
			if(i>0) jsVarList += ",";
			jsVarList += curJsVarName + "='"+ oldStr +"'";
		}
		return "(function(){" + jsVarList + ";return" + newJsArrayStr + "})()" ;
	}
	
	
	public static List getStrElementsOfJsArray(String jsArrayStr){
		List list = new ArrayList();
		//JSONArray jsonArray = JSONArray.fromString(jsArrayStr);
		JsArray jsArray = JsArray.fromString(jsArrayStr);
		for(int i=0;i<jsArray.size();i++){
			JsElement curObj = jsArray.get(i);
			if(curObj.getType() == JsElement.STRING){
				list.add(jsArray.getJsString(i));
			}
			else if(curObj.getType() == JsElement.ARRAY){
				list.addAll(getStrElementsOfJsArray(jsArray.getJsArray(i).toString() ) );
			}
		}
		
		
//		for(int i=0;i<jsonArray.length();i++){
//			Object curObj = jsonArray.get(i);
//			if(curObj.getClass().getName().equalsIgnoreCase("java.lang.String")){
//				list.add(curObj);
//			}
//			else if(curObj.getClass().getName().equalsIgnoreCase("net.sf.json.JSONArray")){
//				list.addAll(getStrElementsOfJsArray( ((JSONArray)curObj).toString()) );
//			}
//		}
//		
		return list;
	}
	
	
	
	/**
	 * @param i 整数序号
	 * i取值		返回值
	 * 0-25      a-z
	 * 26-51	 a0 - z0
	 * 52-77 	 a1-z1 
	 * .....	 ......
	 */
	public static String generatorJsVarName(int i){
		int prefix = i%26;
		char tempChar = (char)('a'+prefix);
		int sufix = (i/26)-1;
		String sufixStr = sufix < 0 ? "":(""+sufix);
		return ""+tempChar+sufixStr;
	}
	
	/**
	 * 
	 * @param sourceStr 原始字符串	java字符串
	 * @return @return	将java字符串转换成与google在异步请求返回xml时对应的字符串
	 * 		<	&lt;
	 * 		>	&gt;
	 * 		'	&#39;
	 * 		"	&quot;
	 * 		&	&amp;
	 */
	public static String javaStrtoGoogleXMLstr(String sourceStr){
		if(sourceStr == null) return "";
		StringBuffer out = new StringBuffer();   
        int strLength = sourceStr.length();
        for   (int i = 0;i<strLength;i++)   {   
        		char curC = sourceStr.charAt(i);
        		if(curC == '<')
        			out.append("&lt;");
        		else if(curC == '>')
        			out.append("&gt;");
        		else if(curC == '&')
        			out.append("&amp;");
        		else if(curC == '\'')
        			out.append("&#39;");
        		else if(curC == '\"')
        			out.append("&quot;");
        		else out.append(curC);
        }   
        return   out.toString();   
	}
	
	/**
	 * 
	 * @param sourceStr java字符串
	 * @return	将java字符串转换成与google在异步请求返回值时所对应的字符串,该字符串将被javascript处理
	 *  <	\46lt;
	 * 	>	\46gt;
	 * 	&	\46amp;
	 * 	\	\\
	 * 	'	\047(其后是数字或JsonArray中字符串元素的最后一个字符)	\47	
	 * 	"	\042(其后是数字或JsonArray中字符串元素的最后一个字符)	\42	
	 * 	=	\075(其后是数字或JsonArray中字符串元素的最后一个字符)  \75
     * 
	 */
	public static String javaStrtoGoogleJsonArrayElementStr(String sourceStr)   {   
		if(sourceStr==null) return "";
        StringBuffer out = new StringBuffer();   
        int strLength = sourceStr.length();
        for   (int i = 0;i<strLength;i++)   {   
        		char curC = sourceStr.charAt(i);
        		String prefix = "";
        		if(i==strLength-1 || Character.isDigit(sourceStr.charAt(i+1)))
        			prefix = "0";
        		if(curC == '<')
        			out.append("\\46lt;");
        		else if(curC == '>')
        			out.append("\\46gt;");
        		else if(curC == '&')
        			out.append("\\46amp;");
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
	
	
	/**
	 * 
	 * @param sourceStr java字符串
	 * @return	将java字符串转换成与google在异步请求返回值时所对应的字符串,该字符串将被javascript处理
	 *  \	\\
	 * 	'	\047(其后是数字或JsonArray中字符串元素的最后一个字符)	\47	
	 * 	"	\042(其后是数字或JsonArray中字符串元素的最后一个字符)	\42	
	 * 	=	\075(其后是数字或JsonArray中字符串元素的最后一个字符)  \75
     * 
	 */
	public static String javaStrtoGoogleJsonArrayElementStrInCompose(String sourceStr)   {   
		if(sourceStr==null) return "";
        StringBuffer out = new StringBuffer();   
        int strLength = sourceStr.length();
        for   (int i = 0;i<strLength;i++)   {   
        		char curC = sourceStr.charAt(i);
        		String prefix = "";
        		if(i==strLength-1 || Character.isDigit(sourceStr.charAt(i+1)))
        			prefix = "0";
        		if(curC == '\\')
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
	
	/**
	 * 
	 * @param sourceStr java字符串
	 * @return	将java字符串转换成与google在异步请求返回值时所对应的字符串,该字符串将被直接放到HTML中显示
	 * 
	 * 	<	\46lt;
	 * 	>	\46gt;
	 * 	&	\46amp;
	 * 	\	\\
	 * 	'	\46#39;
	 * 	"	\46quot;
	 * 	=	\75	or \075
	 */
	public static String javaStrtoGoogleHTMLStr(String sourceStr)   {   
		if(sourceStr==null) return "";
        StringBuffer out = new StringBuffer();   
        int strLength = sourceStr.length();
        for   (int i = 0;i<strLength;i++)   {   
        		char curC = sourceStr.charAt(i);
        		String prefix = "";
        		if(i!=strLength-1 && Character.isDigit(sourceStr.charAt(i+1)))
        			prefix = "0";
        		if(curC == '<')
        			out.append("\\46lt;");
        		else if(curC == '>')
        			out.append("\\46gt;");
        		else if(curC == '&')
        			out.append("\\46amp;");
        		else if(curC == '\\')
        			out.append("\\\\");
        		else if(curC == '\'')
        			out.append("\\46#39;");
        		else if(curC == '\"')
        			out.append("\\46quot;");
        		else if(curC == '=')
        			out.append("\\" + prefix + "75");
        		else out.append(curC);
        }   
        return   out.toString();   
	}   
	
	public static String getDayZhStrInWeek(String num){
		if(num.equals("SU")) return "星期日";
		if(num.equals("MO")) return "星期一";
		if(num.equals("TU")) return "星期二";
		if(num.equals("WE")) return "星期三";
		if(num.equals("TH")) return "星期四";
		if(num.equals("FR")) return "星期五";
		if(num.equals("SA")) return "星期六";
		return "";
	}
	
	public static String getStrUnicode(String str) {
		if(str==null) return null;
		Pattern p = Pattern.compile("\\p{ASCII}");
		StringBuffer strBuf = new StringBuffer();
		for(int i=0;i<str.length();i++){
			char tempC = str.charAt(i);
			Matcher m = p.matcher(""+tempC);
			boolean isAsc2 = m.matches();
			if(isAsc2 && "<>'\"&".indexOf(tempC)<0 ) strBuf.append(tempC);
			else{
				byte[] bA = null;
				try {
					bA = (""+tempC).getBytes("utf8");
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
				for(int j=0;j<bA.length;j++){
					strBuf.append("%");
					strBuf.append(Integer.toHexString(Integer.parseInt(""+bA[j],10)&0x000000ff).toUpperCase());
				}
			}
		}
		
		return strBuf.toString();
	}
	
	/**
	 * 
	 * @param rdur	rdur="P32DT1H30M",32天1小时30分，合法值还有"P1DT1H30M"、"PT1H30M"、"PT1H"、"PT30M"、"P0D"、"P1D"
	 * @return 表示时间段的毫秒值,如果rdur为null则返回-1
	 */
	public static long getMsTimeByRdur(String rdur){
		if(rdur==null) return -1;
		//rdur="P32DT1H30M",32天1小时30分，合法值还有"P1DT1H30M"、"PT1H30M"、"PT1H"、"PT30M"、"P0D"、"P1D"
		int day = 0,hour = 0,minutes = 0;
		Pattern p_day = Pattern.compile("^P(\\d+)D\\p{Alnum}*$");
		Matcher m_day = p_day.matcher(rdur);
		if(m_day.find()){
			day = Integer.parseInt(m_day.group(1));
		}
		Pattern p_hour = Pattern.compile("^P\\p{Alnum}*T(\\d+)H\\p{Alnum}*$");
		Matcher m_hour = p_hour.matcher(rdur);
		if(m_hour.find()){
			hour = Integer.parseInt(m_hour.group(1));
		}
		Pattern p_minutes = Pattern.compile("^P\\p{Alnum}*[T,H](\\d+)M$");
		Matcher m_minutes = p_minutes.matcher(rdur);
		if(m_minutes.find()){
			minutes = Integer.parseInt(m_minutes.group(1));
		}
		return day*24*60*60*1000+hour*60*60*1000+minutes*60*1000;
	}
	
	
	public static String timesBeforeStr(Date curDate,Date date){
		long timeD = curDate.getTime()-date.getTime();
		int day = (int)(timeD/(24*60*60*1000));
		long dayR = timeD - day*24*60*60*1000;
		int hour = (int)(dayR/(60*60*1000));
		long hourR = dayR - hour*60*60*1000;
		int minu = (int)(hourR/(60*1000));
		String str = "";
		if(day>0) str += day + "天";
		if(hour>0) str += hour + "小时";
		if(minu>0) str += minu + "分钟";
		if(str.trim().equalsIgnoreCase("")) str = "1分钟";
		return str;
	}
	
	public static String getResponseContentType(String output){
		String ret = "text/javascript";
		if(output.equalsIgnoreCase("xml"))
			ret = "text/xml";
		else if(output.equalsIgnoreCase("js"))
			ret = "text/javascript";
		return ret;
	}
	
	/**
	 * 
	 * @param day	天数
	 * @param hour	每天中的小时（0-24小时制度）
	 * @return	day指定天数以后的几点（hour指定）对应的Date.getTime()数
	 */
	public static long getAfterDaysTimeByHour(int day,int hour){
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, day);
		cal.set(Calendar.HOUR_OF_DAY, hour);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return cal.getTime().getTime();
	}
	
	/**
	 * 
	 * @param sourceSet 原始的集合
	 * @param removedSet	需要除去的集合
	 * @return	从sourceSet中移除所有出现在removedSet中的元素
	 */
	public static Set removeSetFromSet(Set sourceSet,Set removedSet){
		Set result = new HashSet();
		if(sourceSet==null || sourceSet.isEmpty()) 
			return result;
		
		if(removedSet==null || removedSet.isEmpty())
			return sourceSet;

		result.addAll(sourceSet);
		Iterator iterator = removedSet.iterator();
		while(iterator.hasNext())
			result.remove( iterator.next() );
		
		return result;
	}
	
	
//	/**
//	 * 
//	 * @param accessLevel	当前用户对日历的访问权限
//	 * @param trp	活动显示状态是忙还是闲
//	 * @param icc	活动隐私级别
//	 * @return	返回该用户对该活动的访问级别
//	 * 	0			不显示给用户
//	 * 	10			只能显示忙碌状态，不能查看详细信息
//	 * 	20			只显示详细信息，不能修改，可以添加提醒
//	 * 	30			能够显示、修改活动信息，还支持复制到共享者的日历中
//	 * 100			活动为该用户所有
//	 * 	日历权限				trp			icc
//只能看到忙/闲状态(10)		(空闲)true			default		不显示
//											public		只显示详细信息，不能修改，可以添加提醒
//											private		不显示
//						(忙碌)false			default		只能显示忙碌状态，不能查看详细信息
//											public		只显示详细信息，不能修改，可以添加提醒
//											private		只能显示忙碌状态，不能查看详细信息
//
//
//查看所有详细活动(20)		(空闲)true			default		只显示详细信息，不能修改，可以添加提醒
//											public		只显示详细信息，不能修改，可以添加提醒
//											private		不显示
//						(忙碌)false			default		只显示详细信息，不能修改，可以添加提醒
//											public		只显示详细信息，不能修改，可以添加提醒
//											private		只能显示忙碌状态，不能查看详细信息
//
//更改活动(60)				(空闲)true			default		能够显示、修改活动信息，还支持复制到共享者的日历中
//											public		能够显示、修改活动信息，还支持复制到共享者的日历中
//											private		能够显示、修改活动信息，还支持复制到共享者的日历中
//						(忙碌)false			default		能够显示、修改活动信息，还支持复制到共享者的日历中
//											public		能够显示、修改活动信息，还支持复制到共享者的日历中
//											private		能够显示、修改活动信息，还支持复制到共享者的日历中
//	 */
//	public static int getActAccessLevel(Integer accessLevel, Boolean trp, String icc) {
//		if(accessLevel==null) return 0;
//		if(accessLevel.intValue()==100) return 100;
//		int ret = 0;
//		switch(accessLevel.intValue()){
//			case 60: ret = 30;
//					 break;
//			case 20:if( trp.booleanValue()&&icc.equalsIgnoreCase("PRIVATE"))  ret = 0;
//					else if( !trp.booleanValue()&&icc.equalsIgnoreCase("PRIVATE")) ret = 10;
//					else ret = 20;
//					break;
//			case 10:if( trp.booleanValue()&&(icc.equalsIgnoreCase("DEFAULT")||icc.equalsIgnoreCase("PRIVATE") ) ) ret = 0;
//					else if( icc.equalsIgnoreCase("PUBLIC")) ret = 20;
//					else ret = 10;
//					break;
//			default: ret=0;
//		}
//		return ret;
//	}
	
	
	public static List getDatesListByRrule(String recurStr,Date seedTime){
		
		Recur recur = null;
		try {
			recur = new Recur(FormatHelper.getCompleteRecur(recurStr, seedTime));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		if(recur==null) return new ArrayList();
		
		Calendar javaCal = Calendar.getInstance();
		javaCal.setTime(seedTime);
		DateTime seed = new DateTime(javaCal.getTime());
		javaCal.add(Calendar.DAY_OF_MONTH, 1);
		javaCal.set(Calendar.HOUR_OF_DAY, 0);
		javaCal.set(Calendar.MINUTE, 0);
		javaCal.set(Calendar.SECOND, 0);
		javaCal.set(Calendar.MILLISECOND, 0);
		
		DateTime start = new DateTime(javaCal.getTime());
		DateTime end = new DateTime(CalendarBeanUtil.dateStrToDate("30000101T000000"));
		
		return recur.getDates(seed, start, end, Value.DATE_TIME, 366);
	}
	
	
	public static boolean checkActFollowSeries(Activity act,SeriesBaseInfo sbi){
		if(!sbi.getText().equals(act.getText())) return false;
		if(!sbi.getLocation().equals(act.getLocation())) return false;
		if(!sbi.getDetails().equals(act.getDetails())) return false;
		if(!sbi.getIcc().equals(act.getIcc())) return false;
		if(sbi.getTrp().booleanValue()^act.getTrp().booleanValue()) return false;
		
		Calendar javaCal = Calendar.getInstance();
		javaCal.setTime(act.getStartTime());
		int act_hour = javaCal.get(Calendar.HOUR_OF_DAY);
		int act_minu = javaCal.get(Calendar.MINUTE);
		int act_second = javaCal.get(Calendar.SECOND);
		
		javaCal.setTime(sbi.getStartTime());
		int sbi_hour = javaCal.get(Calendar.HOUR_OF_DAY);
		int sbi_minu = javaCal.get(Calendar.MINUTE);
		int sbi_second = javaCal.get(Calendar.SECOND);
		
		if(act_hour!=sbi_hour) return false;
		if(act_minu!=sbi_minu) return false;
		if(act_second!=sbi_second) return false;
		if((act.getEndTime().getTime()-act.getStartTime().getTime()) != sbi.getDateDuration().longValue()) return false;
		
		return true;
	}
}





