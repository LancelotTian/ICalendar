package com.smartdot.calendar.format;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import net.fortuna.ical4j.model.DateTime;
import net.fortuna.ical4j.model.Recur;
import net.fortuna.ical4j.model.WeekDay;
import net.fortuna.ical4j.model.WeekDayList;

import org.apache.commons.lang.ArrayUtils;

import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.util.CalendarBeanUtil;

public class FormatHelper {
	
	/** render level 对应的各种活动显示形式 **/
	//能够读取详细信息并且能够修改
	private static final long[] _R_W 	   = {525573,527621,529669,531717,535813,539909,787717,789765,791813,793861,797957,802053};
	public static final int   R_W 	   = 30;
	//仅仅能够读取活动信息
	private static final long[] _ONLY_R    = {5,2053,10245,262149,264197,272389};
	public static final int   ONLY_R    = 20;
	//仅仅能够读取活动的忙碌时状态
	private static final long[] _ONLY_BUSY = {33,4129};
	public static final int   ONLY_BUSY = 10;
	
	public static boolean checkAllDays(Date startTime,Date endTime){
		Calendar jCal = Calendar.getInstance();
		jCal.setTime(startTime);
		return (jCal.get(Calendar.SECOND)==0 && jCal.get(Calendar.MINUTE)==0 && jCal.get(Calendar.HOUR_OF_DAY)==0 
				&& ((endTime.getTime()-startTime.getTime())%(24*60*60*1000)==0) );
	}
	
	/**
	 * 
	 * @return 返回当前活动的英文表示的起止时间段。例如："20081009T120000/20081009T130000",对于占用n个全天的活动返回类似：”20081009/20081010“(整个活动占用10月9号全天)。这保证与创建该活动时前台传来的dates参数一致
	 */
	public static String getTimeDur(Date startTime,Date endTime){
		
		if(FormatHelper.checkAllDays(startTime, endTime)){//活动时间范围为n个整天
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			String curDateZHStrS = sdf.format(startTime);
			String curDateZHStrE = sdf.format(endTime);
			//此时返回类似:20081009/20081010
			return curDateZHStrS + "/" + curDateZHStrE;
		}
		//此时返回类似：20081009T000000/20081009T013000
		return CalendarBeanUtil.dateToStr(startTime) + "/" + CalendarBeanUtil.dateToStr(endTime);
	}
	
	/**
	 * 
	 * @return 返回当前活动的中文表示的起止时间段。例如：”20081009 上午12点 - 20081009 上午1:30“，对于占用n个全天的活动返回类似：”20081009 - 2008109“(整个活动占用10月9号全天)
	 */
	public static String getTimeDurZH(Date startTime,Date endTime){
		//活动时间范围为n整天
		
		Calendar jCal = Calendar.getInstance();
		jCal.setTime(startTime);
		
		if(jCal.get(Calendar.SECOND)==0 && jCal.get(Calendar.MINUTE)==0 && jCal.get(Calendar.HOUR_OF_DAY)==0 
				&& ((endTime.getTime()-startTime.getTime())%(24*60*60*1000)==0) ){
			String curDateZHStrS = new SimpleDateFormat("yyyy-MM-dd").format(startTime);
			String curDateZHStrE = new SimpleDateFormat("yyyy-MM-dd").format(new Date(endTime.getTime()-24*60*60*1000));
			
			//此时返回类似:20081009 - 20081009
			return curDateZHStrS + " — " + curDateZHStrE;
		}
		//此时返回类似：20081009 上午12点 - 20081009 上午1:30
		return CalendarBeanUtil.dateToZHStr(startTime) + " — " + CalendarBeanUtil.dateToZHStr(endTime);
	}
	
	/**
	 * 
	 * @param calAccessLevel	个人对日历的访问权限(10,20,60,70,100)
	 * 	10 ---只能看到忙/闲状态
	 *  20 ---查看所有详细活动
	 *  60 ---更改活动
	 *  70 ---进行更改并管理共享
	 *  100---日历的所有者
	 * @param notBusy	活动的忙/闲状态
	 * 	true ---空闲
	 *  false---忙碌
	 * @param openLevel	活动的开放程度
	 *  DEFAULT---默认
	 *  PUBLIC ---公共
	 *  PRIVATE---私有
	 * @param hasValidReminds 该活动的提醒设置
	 *  false---没有提醒设置或者提醒设置与默认一样
	 *  true ---有非默认提醒存在
	 * @param inSeries	是否属于一个系列
	 *  true---是系列活动
	 *  false---不是系列活动
	 * @param seriesSynch	如果是系列活动,表示与系列的同步状态
	 *  true---与系列同步
	 *  false---与系列不同步
	 * @return	该活动在页面上显示的程度,-1表示不用显示该活动
	 */
	public static long getRenderLevel(int calAccessLevel,boolean notBusy,String openLevel,boolean hasValidReminds,boolean inSeries,boolean seriesSynch){
		if(calAccessLevel==10 && notBusy && !openLevel.equalsIgnoreCase("PUBLIC"))
			return -1;
		if(calAccessLevel==20 && notBusy && openLevel.equalsIgnoreCase("PRIVATE"))
			return -1;
		
		
		char tempVal = calAccessLevel>=60 ? '1' : '0';
		
		char[] tempA = new char[24];
		tempA[0] = '1';
		tempA[1] = '0';
		
		if(calAccessLevel>=60) tempA[2]= tempVal;
		else if(calAccessLevel<=20){
			if(openLevel.equalsIgnoreCase("PUBLIC")) tempA[2] = '1';
			else if(openLevel.equalsIgnoreCase("PRIVATE")) tempA[2] = '0';
			else if(openLevel.equalsIgnoreCase("DEFAULT"))
				tempA[2] = calAccessLevel==20 ? '1' : '0';
		}
		
		tempA[3] = '0';
		tempA[4] = '0';
		
		tempA[5] = tempA[2]=='0' ? '1' : '0';
		
		tempA[6] = '0';
		tempA[7] = '0';
		tempA[8] = tempVal;
		
		tempA[9] = '0';
		
		tempA[10] = tempVal;
		
		
		if(tempA[2]=='0') tempA[11] = '0';
		else tempA[11] = inSeries ? '1' : '0';
		
		if(openLevel.equalsIgnoreCase("PRIVATE")) 
			tempA[12] = '1';
		else tempA[12] = '0';
		
		if(tempA[2]=='0') tempA[13] = '0';
		else{
			tempA[13] = (inSeries && !seriesSynch) ? '1' : '0';
		}
		
		tempA[14] = '0';
		tempA[15] = '0';
		tempA[16] = '0';
		tempA[17] = '0';
		
		if(tempA[2]=='0') tempA[18] = '0';
		else{
			tempA[18] = hasValidReminds ? '1' : '0';
		}
		
		tempA[19] = tempVal;
		
		tempA[20] = '0';
		tempA[21] = '0';
		tempA[22] = '0';
		tempA[23] = '0';
		
		StringBuffer strBuf = new StringBuffer(24);
		
		for(int i=23;i>=0;i--){
			strBuf.append(tempA[i]);
		}
		
		return Long.parseLong(strBuf.toString(), 2);
	}
	
	/**
	 * 
	 * @param renderLevel	活动的显示码（权限码）
	 * @return
	 *  -1			不显示给用户
	 * 	10			只能显示忙碌状态，不能查看详细信息
	 * 	20			只显示详细信息，不能修改，可以添加提醒
	 * 	30			能够显示、修改活动信息，还支持复制到共享者的日历中
	 */
	public static int getRenderType(long renderLevel) {
		if(ArrayUtils.contains(FormatHelper._R_W, renderLevel)) return FormatHelper.R_W;
		if(ArrayUtils.contains(FormatHelper._ONLY_R, renderLevel))  return FormatHelper.ONLY_R;
		if(ArrayUtils.contains(FormatHelper._ONLY_BUSY, renderLevel))  return FormatHelper.ONLY_BUSY;
		return -1;
	}
	
	public static Principal getPrincipal(SCalendar cal,UserBean user){
		if(!cal.getUserId().equals(user.getUserId())) return null;
		Principal ret = new Principal();
		ret.setCalId(cal.getId());
		ret.setIsMain(cal.getIsDefault());
		ret.setUserId(user.getUserId());
		ret.setUserName(user.getUserName());
		ret.setUserEmail(user.getEmail());
		return ret;
	}
	
	/**
	 * 
	 * @param recurStr rfc2445规定的recur格式字符串
	 * @param startTime	系列开始时间
	 * @return	如果recurStr中含有until但是没有精确到秒时-分-秒时将其精确到时-分-秒 
	 * @throws ParseException
	 */
	public static String getCompleteRecur(String recurStr,Date startTime) throws ParseException{
		Recur recur = new Recur(recurStr);
		net.fortuna.ical4j.model.Date until = recur.getUntil();
		if(until==null) return recurStr;
		Calendar javaCal = Calendar.getInstance();
		
		DateTime dateTime = null;
		try{
			dateTime = (DateTime)until;
		}catch (ClassCastException e) {}
		
		if(dateTime==null){
			//取得系列的开始时间 时 分 秒
			javaCal.setTime(startTime);
			int hour = javaCal.get(Calendar.HOUR_OF_DAY);
			int minu = javaCal.get(Calendar.MINUTE);
			int second = javaCal.get(Calendar.SECOND);
			
			javaCal.setTime(until);
			
			javaCal.set(Calendar.HOUR_OF_DAY, hour);
			javaCal.set(Calendar.MINUTE, minu);
			javaCal.set(Calendar.SECOND, second);
			
			dateTime = new DateTime(javaCal.getTime());
			
		}
		//xml中until时间用utc表示
		dateTime.setUtc(false);
		recur.setUntil(dateTime);
		return recur.toString();
	}
	
	/**
	 * 
	 * @param recur	rfc2445定义的rrule字符串
	 * @return	如果有until则删除其时分秒的表示
	 */
	public static String delHmsFromRecurUntil(String recur){
		Recur r = null;
		try {
			r = new Recur(recur);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		if(r.getUntil()==null) return recur;
		net.fortuna.ical4j.model.Date until = new net.fortuna.ical4j.model.Date(r.getUntil());
		r.setUntil(until);
		return r.toString();
	}
	
	public static String modifyRecurUntil(String recur,String newUntil){
		Recur r = null;
		try {
			r = new Recur(recur);
			if(newUntil.indexOf("T")>0){
				DateTime dt = new DateTime(newUntil);
				dt.setUtc(false);
				r.setUntil(dt);
			}else{
				net.fortuna.ical4j.model.Date dt = new net.fortuna.ical4j.model.Date(newUntil);
				r.setUntil(dt);
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
			
		return r.toString();
	}
	
	
	public static String getRecurZhStr(String recurStr,Date startTime) throws ParseException{
		Recur recur = new Recur(FormatHelper.getCompleteRecur(recurStr, startTime));
		Calendar javaCal = Calendar.getInstance();
		javaCal.setTime(startTime);
		
		String freq = recur.getFrequency();
		int interval = recur.getInterval();
		
		String until = null;
		DateTime untilDt = (DateTime) recur.getUntil();
		if(untilDt!=null){
			untilDt.setUtc(false);
			until = untilDt.toString();
		}
		
		
		WeekDayList weekDayList = recur.getDayList();
		int byDaySize = weekDayList.size();
		
		
		StringBuffer ret = new StringBuffer();
		
		
		if(until!=null)
			ret.append( "直到 " + CalendarBeanUtil.dateToZHStr(CalendarBeanUtil.dateStrToDate(until)) + " " );
		ret.append("的 每");
		if(interval>0){
			ret.append("隔 ");
			ret.append(""+interval);
			ret.append(" ");
		}
			
		String freqUnit = null;

		if(freq.equals(Recur.DAILY)) freqUnit = "天";
		else if(freq.equals(Recur.WEEKLY)) freqUnit="周";
		else if(freq.equals(Recur.MONTHLY)) freqUnit="月";
		else if(freq.equals(Recur.YEARLY)) freqUnit="年";
		ret.append(freqUnit);
		
		if(freq.equals(Recur.WEEKLY)){
			ret.append(" 在 ");
			
			for(int i=0;i<weekDayList.size();i++){
				if(i>0&&i<byDaySize-1) ret.append("、");
				if(i==byDaySize-1) ret.append("和");
				WeekDay curWd = (WeekDay) weekDayList.get(i);
				ret.append(CalendarBeanUtil.getDayZhStrInWeek(curWd.toString()));
			}
		}
		else if(freq.equals(Recur.MONTHLY)){
			if(byDaySize>0){//按每月第几个星期的星期几重复
				WeekDay curWD = (WeekDay) weekDayList.get(0);
				int weekNum = curWD.getOffset();
				String numStr = curWD.getDay();
				if(weekNum<0){
					ret.append(" 上" + CalendarBeanUtil.getDayZhStrInWeek(numStr));
				}
				else{
					ret.append(" 在");
					switch(weekNum){
						case 1:ret.append("第一个星期");
						break;
						case 2:ret.append("第二个星期");
						break;
						case 3:ret.append("第三个星期");
						break;
						case 4:ret.append("第四个星期");
						break;
					}
					ret.append(" " + CalendarBeanUtil.getDayZhStrInWeek(numStr));
				} 
			}
			else{//按每月几号来重复
				ret.append(" 在第 ");
				ret.append(""+javaCal.get(Calendar.DAY_OF_MONTH));
				ret.append(" 天");
			}
		}
		else if(freq.equals(Recur.YEARLY)){
			ret.append(" 在 ");
			ret.append( "" + (javaCal.get(Calendar.MONTH)+1)+"月" );
			ret.append("" + javaCal.get(Calendar.DAY_OF_MONTH) +"日" );
		}
		
		ret.append(" "+CalendarBeanUtil.dateToZHStr(startTime).split(" ")[1]);
		
		
		return ret.toString();
	}
	
}
