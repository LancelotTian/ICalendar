package com.smartdot.calendar.format;

public class FormatException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1044288257569572234L;
	
	public static int NO_SBI = 1;
	
	private int errorCode;
	
	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public FormatException(int errorCode){
		this.errorCode = errorCode;
	}
	
	public static String getMessage(int errorCode){
		String ret = null;
		switch (errorCode) {
		case 1:
			ret = "No SeriesBaseInfo bean,it must exist in generate XML while being synchronize an activity to a series!";
			break;

		default:
			ret = "Sorry,Unknown error.";
			break;
		}
		return ret;
	}

}
