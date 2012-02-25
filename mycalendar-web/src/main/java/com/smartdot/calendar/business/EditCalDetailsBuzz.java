package com.smartdot.calendar.business;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;

import com.smartdot.calendar.beans.SCalendar;

/**
 * create response string for editCalDetails servlet.
 * @author chengxc
 *
 */
public class EditCalDetailsBuzz extends CalDetailsBuzz implements CalDetailsConstants {
	private Logger log = Logger.getLogger(EditCalDetailsBuzz.class);
	
	/**
	 * create editCalDetails response str;
	 * @param calendar
	 * @param dtId
	 * @return
	 */
	public String createResponseStr(SCalendar calendar, List shares, String dtId,String secid,Set errorUid) {
		StringBuffer totalBuf = new StringBuffer(RESPONSE_BEGIN);
		
		StringBuffer bigBuf = new StringBuffer();
		
		bigBuf.append(createBracketSegment(assembleDsPut(calendar, shares)));
		bigBuf.append(createBracketSegment(CAL_DETAIL_SE_REFRESH_ADD));
		bigBuf.append(createBracketSegment(assembleAp(calendar, shares,secid)));
		bigBuf.append(createBracketSegment(CAL_DETAIL_RED_RAW));
		bigBuf.append(createBracketSegment(new StringBuffer(
				CAL_DETAIL_DS_DELETE).append(RESPONSE_SPLIT).append(createQuoteSegmentLast(dtId))
					.toString()));
		
		bigBuf.append(createBracketSegment(assembleNewPerson(calendar)));
		bigBuf.append(createBracketSegment(assembleU(calendar)));
		
		//TODO: _DT_confirmShareInvite
		Iterator it_notInLdap = errorUid.iterator();
		StringBuffer tempstb = new StringBuffer("。但是用户:");
     	int g=0;
     	while(it_notInLdap.hasNext()){
     		String curUid = (String) it_notInLdap.next();
     		if(g>0) tempstb.append(",");
     		tempstb.append(curUid);
     		g++;
     	}
     	tempstb.append("不是合法用户名因此对这些用户的共享设置未成功！");
		
		bigBuf.append(createBracketSegmentLast("'_ShowMessage','已保存更改" + (errorUid.size()>0 ? tempstb.toString() : "") + "'"));
		
		totalBuf.append(createBracketSegmentLast(bigBuf.toString()));
		
		return totalBuf.toString();
	}
	
	/**
	 * assemble _AddNewPerson
	 * @param calendar
	 * @return
	 */
	private String assembleNewPerson(SCalendar calendar) {
		StringBuffer buf = new StringBuffer(CAL_DETAIL_ADD_NEW_PERSON).append(RESPONSE_SPLIT);
		buf.append(createQuoteSegment(escapeToView(calendar.getName())));
		buf.append(createQuoteSegment(calendar.getId()));
		buf.append(createQuoteSegment(EditCalDetailPopedom.P_3_2));
		buf.append(createQuoteSegmentLast("false"));
		
		return buf.toString();
	}
	
	/**
	 * assemble u
	 * @param calendar
	 * @return
	 */
	private String assembleU(SCalendar calendar) {
		StringBuffer buf = new StringBuffer(CAL_DETAIL_U).append(RESPONSE_SPLIT);
		
		StringBuffer bufSec = new StringBuffer();
		
		String cId = calendar.getId();
		
		StringBuffer bufThird = new StringBuffer();
		bufThird.append(createQuoteSegment(cId + "/off"));
		bufThird.append(createQuoteSegmentLast("false"));
		
		bufSec.append(createBracketSegment(
				new StringBuffer().append(createQuoteSegment(cId + "/off"))
					.append(createQuoteSegmentLast("false")).toString()));
		
		bufSec.append(createBracketSegment(
				new StringBuffer().append(createQuoteSegment(cId + "/hidden"))
					.append(createQuoteSegmentLast("false")).toString()));
		
		bufSec.append(createBracketSegment(
				new StringBuffer().append(CAL_DETAIL_HIDE_INVITATIONS).append(RESPONSE_SPLIT)
					.append(createQuoteSegmentLast("false")).toString()));
		
		bufSec.append(createBracketSegment(
				new StringBuffer().append(CAL_DETAIL_REMIND_ON).append(RESPONSE_SPLIT)
					.append(createQuoteSegmentLast("false")).toString()));
		
		bufSec.append(createBracketSegmentLast(CAL_DETAIL_INVITATION_REMIND));
		
		
		buf.append(createBracketSegmentLast(bufSec.toString()));
		
		return buf.toString();
	}
}
