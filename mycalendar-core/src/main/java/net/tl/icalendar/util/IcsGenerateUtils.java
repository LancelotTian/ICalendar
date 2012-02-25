package net.tl.icalendar.util;

import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

import net.fortuna.ical4j.model.DateTime;
import net.fortuna.ical4j.model.Property;
import net.fortuna.ical4j.model.Recur;
import net.fortuna.ical4j.model.component.Standard;
import net.fortuna.ical4j.model.component.VAlarm;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.component.VTimeZone;
import net.fortuna.ical4j.model.property.Action;
import net.fortuna.ical4j.model.property.Attendee;
import net.fortuna.ical4j.model.property.CalScale;
import net.fortuna.ical4j.model.property.Clazz;
import net.fortuna.ical4j.model.property.Created;
import net.fortuna.ical4j.model.property.Description;
import net.fortuna.ical4j.model.property.DtEnd;
import net.fortuna.ical4j.model.property.DtStart;
import net.fortuna.ical4j.model.property.LastModified;
import net.fortuna.ical4j.model.property.Location;
import net.fortuna.ical4j.model.property.Method;
import net.fortuna.ical4j.model.property.ProdId;
import net.fortuna.ical4j.model.property.RRule;
import net.fortuna.ical4j.model.property.RecurrenceId;
import net.fortuna.ical4j.model.property.Sequence;
import net.fortuna.ical4j.model.property.Status;
import net.fortuna.ical4j.model.property.Summary;
import net.fortuna.ical4j.model.property.Transp;
import net.fortuna.ical4j.model.property.TzId;
import net.fortuna.ical4j.model.property.TzName;
import net.fortuna.ical4j.model.property.TzOffsetFrom;
import net.fortuna.ical4j.model.property.TzOffsetTo;
import net.fortuna.ical4j.model.property.Uid;
import net.fortuna.ical4j.model.property.Version;
import net.fortuna.ical4j.model.property.XProperty;

import org.apache.commons.lang.time.DurationFormatUtils;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.SeriesBaseInfo;
import net.tl.icalendar.format.FormatHelper;

public class IcsGenerateUtils {

    public static String generateIcs(SCalendar cal, List acts, List sbis, Map sbiExdate, String emailAddr) {
        net.fortuna.ical4j.model.Calendar calendar = null;

        try {
            calendar = IcsGenerateUtils.getCalModel(cal);
        } catch (ParseException e) {
        }

        for (int i = 0; i < acts.size(); i++) {
            Activity curAct = (Activity) acts.get(i);

            VEvent vevent = null;
            try {
                vevent = IcsGenerateUtils.getVeventByAct(curAct, emailAddr);
            } catch (URISyntaxException e) {
            } catch (ParseException e) {
            }
            if (vevent != null) {
                calendar.getComponents().add(vevent);
            }
        }

        for (int i = 0; i < sbis.size(); i++) {
            SeriesBaseInfo curSbi = (SeriesBaseInfo) sbis.get(i);


            VEvent vevent = null;
            try {
                vevent = IcsGenerateUtils.getVeventBySbi(curSbi, (List) sbiExdate.get(curSbi.getId()));
            } catch (ParseException e) {
                // TODO Auto-generated catch block
            }
            if (vevent != null) {
                calendar.getComponents().add(vevent);
            }
        }

        return calendar.toString();
    }

    public static net.fortuna.ical4j.model.Calendar getCalModel(SCalendar cal) throws ParseException {
        net.fortuna.ical4j.model.Calendar calendar = new net.fortuna.ical4j.model.Calendar();

        calendar.getProperties().add(new ProdId("-//TL//iCal4j 1.0//EN"));
        calendar.getProperties().add(Version.VERSION_2_0);
        calendar.getProperties().add(CalScale.GREGORIAN);
        calendar.getProperties().add(Method.PUBLISH);
        calendar.getProperties().add(new XProperty("X-WR-CALNAME", cal.getName()));
        calendar.getProperties().add(new XProperty("X-WR-TIMEZONE", "Asia/Shanghai"));
        calendar.getProperties().add(new XProperty("X-WR-CALDESC", cal.getDetails()));


        VTimeZone vtz = new VTimeZone();
        vtz.getProperties().add(new TzId("Asia/Shanghai"));
        vtz.getProperties().add(new XProperty("X-LIC-LOCATION", "Asia/Shanghai"));


        Standard sdd = new Standard();
        sdd.getProperties().add(new TzOffsetFrom("+0800"));
        sdd.getProperties().add(new TzOffsetTo("+0800"));
        sdd.getProperties().add(new TzName("CST"));
        sdd.getProperties().add(new DtStart("19700101T000000"));

        vtz.getObservances().add(sdd);
        calendar.getComponents().add(vtz);

        return calendar;
    }

    public static VEvent getVeventByAct(Activity act, String emailAddr) throws URISyntaxException, ParseException {
        VEvent vevent = null;
        int seriesState = act.getSeriesState().intValue();
        boolean isInSeries = false;
        boolean isSeriesSync = false;
        if (seriesState >= 0) {
            isInSeries = true;
            if (seriesState == 0) {
                isSeriesSync = true;
            }
        }

        //当活动在系列中且与系列同步时不进行任何处理
        if (isInSeries && isSeriesSync) {
            return vevent;
        }

        String uidPropValue = null;
        if (!isInSeries) {
            uidPropValue = "a_" + act.getId() + "@sd.com";
        } else {
            uidPropValue = "s_" + act.getSeriesId() + "@sd.com";
        }

        //活动信息
        vevent = new VEvent();


        //设置开始时间
        DateTime dtstart = new DateTime(act.getStartTime());
        dtstart.setUtc(true);
        vevent.getProperties().add(0, new DtStart(dtstart.toString()));

        //设置结束时间
        DateTime dtend = new DateTime(act.getEndTime());
        dtend.setUtc(true);
        vevent.getProperties().add(1, new DtEnd(dtend.toString()));

        //设置uid
        vevent.getProperties().add(new Uid(uidPropValue));

        //如果是系列活动（但与系列不同步）
        if (isInSeries) {
            DateTime recurTime = new DateTime(act.getOrignDateDuration().getStartTime());
            recurTime.setUtc(true);
            vevent.getProperties().add(new RecurrenceId(recurTime.toString()));
        }

        //设置class
        vevent.getProperties().add(new Clazz(act.getIcc()));

        //设置created
        //TODO 没有保存活动创建到时间
        vevent.getProperties().add(new Created());

        //设置description
        vevent.getProperties().add(new Description(act.getDetails()));

        //设置lastmodify
        DateTime lastModTime = new DateTime(act.getLastModifyTime());
        lastModTime.setUtc(true);
        vevent.getProperties().add(new LastModified(lastModTime.toString()));

        //设置location
        vevent.getProperties().add(new Location(act.getLocation()));

        //设置SEQUENCE
        vevent.getProperties().add(new Sequence(0));

        //设置STATUS
        //TODO 活动共享邀请到响应状态
        vevent.getProperties().add(new Status("CONFIRMED"));

        //设置SUMMARY
        vevent.getProperties().add(new Summary(act.getText()));

        //设置TRANSP
        vevent.getProperties().add(Transp.OPAQUE);

        //设置VALARM
        String erem = act.getErem();
        String[] eremA = erem.split(";");
        for (int j = 0; j < eremA.length; j++) {
            String remindType = eremA[j].split(":")[0].trim();
            //忽略短信提醒
            if (remindType.equalsIgnoreCase("2")) {
                continue;
            }
            boolean isEmailRemind = remindType.equalsIgnoreCase("1");

            long remindRelTime = Long.parseLong(eremA[j].split(":")[1]) * 1000;
            String formatStr = "'P'd'DT'H'H'm'M0S'";
            if (remindRelTime % (24 * 60 * 60 * 1000) == 0) {
                formatStr = "'P'd'D'";
            }

            VAlarm valarm = new VAlarm();
            valarm.getProperties().add(isEmailRemind ? Action.EMAIL : Action.DISPLAY);
            if (isEmailRemind) {
                valarm.getProperties().add(new Description("This is an event reminder"));
                valarm.getProperties().add(new Summary("Alarm notification"));
                valarm.getProperties().add(new Attendee("mailto:" + emailAddr));
            }
            valarm.getProperties().add(new XProperty("TRIGGER", "-" + DurationFormatUtils.formatDuration(remindRelTime, formatStr)));
            vevent.getAlarms().add(valarm);
        }
        return vevent;
    }

    public static VEvent getVeventBySbi(SeriesBaseInfo sbi, List sbiExdate) throws ParseException {
        VEvent vevent = null;

        net.fortuna.ical4j.model.parameter.TzId tzidP = new net.fortuna.ical4j.model.parameter.TzId("Asia/Shanghai");

        //活动信息
        vevent = new VEvent();


        //设置开始时间
        DateTime startDt = new DateTime(sbi.getStartTime());
        DtStart dtStart = new DtStart(startDt.toString());
        dtStart.getParameters().add(tzidP);
        vevent.getProperties().add(0, dtStart);

        //设置结束时间
        DateTime endDt = new DateTime(startDt.getTime() + sbi.getDateDuration().longValue());
        DtEnd dtEnd = new DtEnd(endDt.toString());
        dtEnd.getParameters().add(tzidP);
        vevent.getProperties().add(1, dtEnd);


        //设置rrule
        String recurStr = FormatHelper.getCompleteRecur(sbi.getRecur().split(":")[1], sbi.getStartTime());
        Recur recur = new Recur(recurStr);
        DateTime untilDt = (DateTime) recur.getUntil();
        if (untilDt != null) {
            untilDt.setUtc(true);
            recur.setUntil(untilDt);
        }
        RRule rrule = new RRule(recur);
        vevent.getProperties().add(2, rrule);

        //设置被删除的系列活动
        for (int i = 0; i < sbiExdate.size(); i++) {
            DateTime curDT = (DateTime) sbiExdate.get(i);
            vevent.getProperties().add(new XProperty(Property.EXDATE + ";TZID=Asia/Shanghai", curDT.toString()));
        }

        //设置uid
        vevent.getProperties().add(new Uid("s_" + sbi.getId() + "@sd.com"));


        //设置class
        vevent.getProperties().add(new Clazz(sbi.getIcc()));

        //设置created
        //TODO 没有保存活动创建到时间
        vevent.getProperties().add(new Created());

        //设置description
        vevent.getProperties().add(new Description(sbi.getDetails()));

        //设置lastmodify
        //TODO 没有保存系列的修改时间
        vevent.getProperties().add(new LastModified());

        //设置location
        vevent.getProperties().add(new Location(sbi.getLocation()));

        //设置SEQUENCE
        vevent.getProperties().add(new Sequence(0));

        //设置STATUS
        //TODO 活动共享邀请到响应状态
        vevent.getProperties().add(new Status("CONFIRMED"));

        //设置SUMMARY
        vevent.getProperties().add(new Summary(sbi.getText()));

        //设置TRANSP
        vevent.getProperties().add(Transp.OPAQUE);

        return vevent;
    }
}
