package com.smartdot.calendar.format.ws;
/**
 * 
 * @author tianliang
 * 
 * webservice调用返回参数中间生成对象
 *
 */
public class ResultInWs {
	
	
	private String sequence;
	private boolean isSuccess;
	private String errmsg;
	private Object retvalue;
	
	public ResultInWs(){
		
	}
	
	public ResultInWs(String sequence,boolean isSuccess,Object retvalue,String errmsg){
		this.sequence = sequence;
		this.isSuccess = isSuccess;
		this.errmsg = errmsg;
		this.retvalue = retvalue;
	}
	
	public String getErrmsg() {
		return errmsg;
	}
	public void setErrmsg(String errmsg) {
		this.errmsg = errmsg;
	}
	public boolean isSuccess() {
		return isSuccess;
	}
	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}
	public Object getRetvalue() {
		return retvalue;
	}
	public void setRetvalue(Object retvalue) {
		this.retvalue = retvalue;
	}
	public String getSequence() {
		return sequence;
	}
	public void setSequence(String sequence) {
		this.sequence = sequence;
	}
}
