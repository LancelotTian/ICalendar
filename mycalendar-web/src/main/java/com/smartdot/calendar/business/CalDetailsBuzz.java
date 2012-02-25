package com.smartdot.calendar.business;

import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;

import com.smartdot.calendar.base.service.ServiceFactory;
import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.ShareCalendar;
import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.service.CalendarService;
import com.smartdot.calendar.service.UserService;
import com.smartdot.calendar.util.Constants;

public class CalDetailsBuzz extends AmountResponseBuzz implements CalDetailsConstants {

    private Logger log = Logger.getLogger(CalDetailsBuzz.class);

    public String createResponseStr(String calendarId, String userId) {
        CalendarService calService = ServiceFactory.getInstance().getCalendarService();

        SCalendar self = null;

        SCalendar defaultCal = null;

        List shares = null;

        try {
            Object[] objs = calService.getShareCalendar(calendarId);
            if (objs != null && objs.length == 3) {
                self = (SCalendar) objs[0];
                defaultCal = (SCalendar) objs[1];
                shares = (List) objs[2];
            }
        } catch (Exception e) {
        }

        StringBuffer totalBuf = new StringBuffer(RESPONSE_BEGIN);

        StringBuffer subBuf = new StringBuffer();

        subBuf.append(createBracketSegment(assembleDsPut(self, shares)));

        subBuf.append(createBracketSegment(CAL_DETAIL_SE_REFRESH_ADD));

        subBuf.append(createBracketSegment(assembleAp(self, shares, userId)));

        subBuf.append(createBracketSegmentLast(CAL_DETAIL_RED_RAW));

        totalBuf.append(createBracketSegmentLast(subBuf.toString()));

        log.debug("cal detail str: " + subBuf.toString());

        return totalBuf.toString();
    }

    /**
     * assemble _DS_Put segment
     * @param calendar
     * @return
     */
    protected String assembleDsPut(SCalendar calendar, List shares) {
        StringBuffer dsPutBuf = new StringBuffer();

        dsPutBuf.append(CAL_DETAIL_DS_PUT).append(RESPONSE_SPLIT);
        dsPutBuf.append(createQuoteSegment(calendar.getId()));
        dsPutBuf.append(EditCalDetailPopedom.getP1()).append(RESPONSE_SPLIT).append(EditCalDetailPopedom.getP2(calendar.getApId(), calendar.getApPopedum())).append(RESPONSE_SPLIT).append(EditCalDetailPopedom.P_3_2).append(RESPONSE_SPLIT);
        dsPutBuf.append(createQuoteSegment(escapeToView(calendar.getName())));
        dsPutBuf.append(createQuoteSegment(calendar.getCtz()));
        dsPutBuf.append(createQuoteSegment(escapeToView(calendar.getLocation())));
        dsPutBuf.append(createQuoteSegment(escapeToView(calendar.getDetails())));
        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append(createQuoteSegment(getRandomCode()));

        //_DS_Put --> ap start
        StringBuffer apBuf = new StringBuffer();
        apBuf.append(createQuoteSegment(getDefaultCalendar(calendar.getUserId())));
        apBuf.append(EditCalDetailPopedom.getP1());
        for (Iterator it = shares.iterator(); it.hasNext();) {
            ShareCalendar share = (ShareCalendar) it.next();
            //log.info("share id: " + share.getUserId());
            apBuf.append(RESPONSE_SPLIT);
            apBuf.append(createQuoteSegment(share.getUserId()));
            apBuf.append(share.getPower().toString());
        }

        dsPutBuf.append(createBracketSegment(apBuf.toString()));

        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append(createQuoteSegment(""));
        dsPutBuf.append(createQuoteSegment("e9actsvpcmdtc80j5lam0buhu8@group.calendar.google.com"));
        dsPutBuf.append(createQuoteSegment(calendar.getGl()));
        dsPutBuf.append(createQuoteSegment("add"));
        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append(createQuoteSegment(TIME_CHINA));
        dsPutBuf.append(createBracketSegment(""));
        dsPutBuf.append(createBracketSegment(""));
        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append("null").append(RESPONSE_SPLIT);
        dsPutBuf.append("0").append(RESPONSE_SPLIT);
        dsPutBuf.append("1");

        return dsPutBuf.toString();
    }

    /**
     * assemble ap
     * @param calendar
     * @return
     */
    protected String assembleAp(SCalendar calendar, List shares, String secid) {
        UserService userService = ServiceFactory.getInstance().getUserService();

        UserBean selfInfo = null;
        try {
            selfInfo = userService.getUserFromLdap(calendar.getUserId());
        } catch (Exception e) {
        }

        StringBuffer buf = new StringBuffer();
        buf.append(CAL_DETAIL_AP).append(RESPONSE_SPLIT);

        StringBuffer calBuf = new StringBuffer();

        // the calendar be added.

        calBuf.append(createQuoteSegment(calendar.getId()));
        calBuf.append(EditCalDetailPopedom.P_3_2).append(RESPONSE_SPLIT);
        calBuf.append(createQuoteSegment(escapeToView(calendar.getName())));
        calBuf.append(createQuoteSegment(selfInfo.getUserId()));

        if (shares.size() != 0) { //share for public or other user.

            for (Iterator it = shares.iterator(); it.hasNext();) {
                ShareCalendar share = (ShareCalendar) it.next();
                String userId = share.getUserId();
                if (Constants.PUBLIC_UID.equals(userId)) {
                    log.debug("share for public");
                    calBuf.append(createQuoteSegment(Constants.PUBLIC_UID));
                    calBuf.append(EditCalDetailPopedom.P_3_5).append(RESPONSE_SPLIT);
                    calBuf.append(createQuoteSegment("Public principal"));
                    calBuf.append(createQuoteSegment("__public_principal__@public.calendar.google.com"));
                }

                try {
                    UserBean user = userService.getUserFromLdap(userId);
                    if (user != null) {
                        String name = user.getUserName();
                        String email = user.getEmail();
                        SCalendar calDef = ServiceFactory.getInstance().getCalendarService().getDefaultCalendarByUserid(userId);
                        String defId = calDef.getId();

                        calBuf.append(createQuoteSegment(defId));
                        calBuf.append(EditCalDetailPopedom.P_3_0).append(RESPONSE_SPLIT);
                        calBuf.append(createQuoteSegment(name));
                        calBuf.append(createQuoteSegment(email));

                    }
                } catch (Exception e) {
                }
            }
        }

        // the default calendar of the user.
        String defId = getDefaultCalendar(calendar.getUserId());
        String selfName = selfInfo.getUserName();
        String selfMail = selfInfo.getEmail();

        calBuf.append(createQuoteSegment(defId));
        calBuf.append(EditCalDetailPopedom.P_3_0).append(RESPONSE_SPLIT);
        calBuf.append(createQuoteSegment(selfName));
        calBuf.append(createQuoteSegmentLast(selfInfo.getUserId()));

        buf.append(createBracketSegmentLast(calBuf.toString()));

        return buf.toString();
    }
}
