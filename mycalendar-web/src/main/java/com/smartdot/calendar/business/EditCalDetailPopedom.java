package com.smartdot.calendar.business;

import com.smartdot.calendar.util.Constants;

public class EditCalDetailPopedom {
	
	public static final String P_1_70 = "70";
	public static final String P_1_60 = "60";
	public static final String P_1_20 = "20";
	public static final String P_1_10 = "10";
	public static final String P_1_0 = "0";
	
	/** calendar no public */
	public static final String P_2_0 = "0";
	/** calendar public but details hided */
	public static final String P_2_10 = "10";
	/** calendar public */
	public static final String P_2_20 = "20";
	
	public static final String P_3_0 = "0";
	public static final String P_3_2 = "2";
	public static final String P_3_5 = "5";
	
	public static String getP1() {
		
		return P_1_70;
	}
	
	public static String getP2(String ap, String apPopedum) {
		if(!Constants.PUBLIC_UID.equals(ap)) {
			return P_2_0;
		}
		
		String p2 = P_2_20;
		if("10".equals(apPopedum)) {
			p2 = P_2_10;
		}
		
		return p2;
	}
	
	public static String getP3(String apPopedum) {
		// 新建日历项对应2；
		// 如果被公开，则对应项为5；
		// 其他为0；
//		String p3 = P_3_2;
//		if("10".equals(apPopedum)) {
//			p3 = P_3_5;
//		}
//		
		return P_3_0;
	}

}
