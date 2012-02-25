package net.tl.icalendar.business;

import org.apache.log4j.Logger;

/**
 * create response string for user_prefs servlet.
 * @author chengxc
 *
 */
public class UserPrefsBuzz extends AmountResponseBuzz implements UserPrefsConstants {
	private Logger log = Logger.getLogger(UserPrefsBuzz.class);
	
	public String createResponseStr(String[] eups) {
		StringBuffer totalBuf = new StringBuffer(RESPONSE_BEGIN);
		
		StringBuffer uBuf = new StringBuffer(CAL_DETAIL_U).append(RESPONSE_SPLIT);
		
		StringBuffer innerBuf = new StringBuffer();
		for(int i = 0; i < eups.length; i++) {
			String[] perCouple = eups[i].split(":");
			if(perCouple.length == 2) {
				innerBuf.append(createBracketSegment(new StringBuffer(
						createQuoteSegment(perCouple[0]))
						.append(createQuoteSegmentLast(perCouple[1])).toString()));
			}
		}
		
		innerBuf.append(createBracketSegment(new StringBuffer(
				CAL_DETAIL_HIDE_INVITATIONS).append(RESPONSE_SPLIT)
				.append(createQuoteSegmentLast("false")).toString()));
		
		innerBuf.append(createBracketSegment(new StringBuffer(
				CAL_DETAIL_REMIND_ON).append(RESPONSE_SPLIT)
				.append(createQuoteSegmentLast("false")).toString()));
		
		innerBuf.append(createBracketSegmentLast(CAL_DETAIL_INVITATION_REMIND));
		
		uBuf.append(createBracketSegmentLast(innerBuf.toString()));
		
		totalBuf.append(createBracketSegmentLast(createBracketSegmentLast(uBuf.toString())));
		
		log.debug("user pres str: " + totalBuf.toString());
		
		return totalBuf.toString();
	}

}
