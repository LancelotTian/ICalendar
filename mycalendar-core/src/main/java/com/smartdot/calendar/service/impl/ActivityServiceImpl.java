package com.smartdot.calendar.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.fortuna.ical4j.model.DateTime;

import org.apache.log4j.Logger;

import com.smartdot.calendar.beans.Activity;
import com.smartdot.calendar.beans.ActivityComment;
import com.smartdot.calendar.beans.ActivityShare;
import com.smartdot.calendar.beans.DateDuration;
import com.smartdot.calendar.beans.SCalendar;
import com.smartdot.calendar.beans.SeriesBaseInfo;
import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.dao.ActivityDao;
import com.smartdot.calendar.dao.CalendarDao;
import com.smartdot.calendar.dao.impl.ActivityDaoImpl;
import com.smartdot.calendar.dao.impl.CalendarDaoImpl;
import com.smartdot.calendar.dao.impl.HibernateSessionFactory;
import com.smartdot.calendar.format.Activity2Js;
import com.smartdot.calendar.format.Activity2XML;
import com.smartdot.calendar.format.FormatHelper;
import com.smartdot.calendar.format.Principal;
import com.smartdot.calendar.service.ActivityService;
import com.smartdot.calendar.service.UserService;
import com.smartdot.calendar.util.CalendarBeanUtil;
import com.smartdot.calendar.util.CalendarCfg;

public class ActivityServiceImpl implements ActivityService {

    private static Logger logger = Logger.getLogger(ActivityServiceImpl.class);
    //private String my_secid_to_del;
    private ActivityDao actDao;

    public ActivityServiceImpl(/*String secid*/) {
        //	this.my_secid_to_del = secid;
        actDao = new ActivityDaoImpl();
    }

    @Override
    public Object[] addCommentToActivity(String id, ActivityComment comment) {
        Activity act = null;
        StringBuilder strBuf = new StringBuilder();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            act = actDao.getActivity(id);
            act.getComments().add(comment);
            Integer calAL = new CalendarDaoImpl().getCalAccessLevelForUser(comment.getPersonId(), act.getSrcCalendarId());
            String actS = new Activity2Js(comment.getPersonId(), calAL, act, null).toEventRespString();

            strBuf.append(actS);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to add comment to activity. Activity [id=" + id + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        Object[] ret = new Object[2];
        ret[0] = act;
        ret[1] = strBuf.toString();
        return ret;
    }

    @Override
    public void deleteAllActivitiesInCalendar(String cid) {
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            List acts = actDao.getActsByCalid(cid);
            Set seriesIds = new HashSet();

            for (int i = 0; i < acts.size(); i++) {
                Activity act = (Activity) acts.get(i);
                String seriesId = act.getSeriesId();
                if (seriesId != null && !seriesId.trim().equals("")) {
                    seriesIds.add(seriesId);
                }
                actDao.deleteActivity(act);
            }

            Iterator it = seriesIds.iterator();
            while (it.hasNext()) {
                String seriesId = (String) it.next();
                SeriesBaseInfo sbi = actDao.getSeriesBaseInfo(seriesId);
                actDao.deleteSeriesBaseInfo(sbi);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
    }

    @Override
    public List deleteAllActivitiesInSeries(String aid) {
        List ret = new ArrayList();
        Set deletedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity act = actDao.getActivity(aid);

            String seriesId = act.getSeriesId();

            List allActsInSeries = actDao.getActsBySeriesid(seriesId);
            for (int i = 0; i < allActsInSeries.size(); i++) {
                Activity curAct = (Activity) allActsInSeries.get(i);
                String curActId = curAct.getId();

                deletedTasks.addAll(curAct.getTimerRemindTasks());

                actDao.deleteActivity(curAct);
                ret.add(curActId);
            }

            actDao.deleteSeriesBaseInfo(actDao.getSeriesBaseInfo(seriesId));

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to delete activity in ALL model [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.unregisteCalendarTask(deletedTasks);

        return ret;
    }

    @Override
    public String deleteOneActivity(String aid) {
        String ret = aid;
        Set deletedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity act = actDao.getActivity(aid);
            if (act == null) {
                throw new RuntimeException("******Fail to finish outer app request. Cause: Fail to get activity . [id=" + aid + "].");
            }

            // 注销was定时服务
            deletedTasks.addAll(act.getTimerRemindTasks());

            String seriesId = act.getSeriesId();
            actDao.deleteActivity(act);

            // 如果当前删除的活动属于某一个系列时，还要删除其DateDuration表中的信息。此外如果当前删除的活动是这个系列的唯一一个活动还要删除SeriesBaseEntry表中的信息
            if (act.getSeriesState().intValue() >= 0) {
                List othersInSeries = actDao.getActsBySeriesid(seriesId);
                // 当前活动是此系列的唯一一个活动时删除SeriesBaseEntry表中的信息
                if (othersInSeries.isEmpty()) {
                    SeriesBaseInfo sbi = actDao.getSeriesBaseInfo(seriesId);
                    if (sbi != null) {
                        actDao.deleteSeriesBaseInfo(sbi);
                    }
                }
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            ret = null;
            logger.error("******Fail to delete activity [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.unregisteCalendarTask(deletedTasks);

        return ret;
    }

    @Override
    public List deleteTailActivitiesInSeries(String aid) {
        List ret = new ArrayList();
        Set deletedTaks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity act = actDao.getActivity(aid);

            String seriesId = act.getSeriesId();

            List allActsInSeries = actDao.getActsBySeriesid(seriesId);
            int actsInSeriesNum = allActsInSeries.size();

            long actStim = act.getStartTime().getTime();

            long seriesUntil = 0; // 系列截止时间寄存器
            int deletedActsNum = 0; // 删除活动的总数

            for (int i = 0; i < actsInSeriesNum; i++) {
                Activity curAct = (Activity) allActsInSeries.get(i);
                DateDuration curActDd = curAct.getOrignDateDuration();

                long curActStim = curActDd.getStartTime().getTime();

                // 当前活动开始时间在被删除的活动开始时间之前时，如果这个开始时间是所有遍历的活动中最大时
                if (curActStim < actStim && curActStim > seriesUntil) {
                    seriesUntil = curActStim; // 更改系列截止时间寄存器为当前活动的开始时间
                }
                // 当前活动开始时间大于、等于（该活动本身）被删除活动的开始时间时删除该活动
                if (curActStim >= actStim) {
                    String curActId = curAct.getId();

                    deletedTaks.addAll(curAct.getTimerRemindTasks());

                    actDao.deleteActivity(curAct);
                    ret.add(curActId);
                    deletedActsNum++;
                }
            }

            // 如果删除的活动包括此系列中的所有活动应删除该系列基本信息,否则应更改系列基本信息的截止时间为seriesUntil
            SeriesBaseInfo sbi = actDao.getSeriesBaseInfo(seriesId);

            if (deletedActsNum == actsInSeriesNum) {
                actDao.deleteSeriesBaseInfo(sbi);
            } else {
                Date newUntilDate = new Date(seriesUntil);
                sbi.setRecur("RRULE:" + FormatHelper.modifyRecurUntil(sbi.getRecur().split(":")[1], CalendarBeanUtil.dateToStr(newUntilDate).split("T")[0]));
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to delete activity in TAIL model [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.unregisteCalendarTask(deletedTaks);

        return ret;
    }

    @Override
    public Object[] getActivityXMLFormat(String aid, String type, String secid) {
        Object[] ret = new Object[2];
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            UserService userService = new UserServiceImpl();
            CalendarDao calDao = new CalendarDaoImpl();

            Activity act = actDao.getActivity(aid);
            Integer calAccessLevel = calDao.getCalAccessLevelForUser(secid, act.getSrcCalendarId());
            SeriesBaseInfo sbi = null;
            if (act.getSeriesId() != null) {
                sbi = actDao.getSeriesBaseInfo(act.getSeriesId());
            }
            UserBean creatUser = userService.getUserFromLdap(act.getSecid());
            SCalendar creatorMainCal = calDao.getMainCalendarByUid(act.getSecid());
            Principal creator = FormatHelper.getPrincipal(creatorMainCal, creatUser);
            //SCalendar sourceCal = daoImpl.getCalendarById(act.getSrcCalendarId());
            //UserBean sourceCalCreator = this.getUserFromLdap(sourceCal.getUserId());
            //Principal organizer = FormatHelper.getPrincipal(sourceCal, sourceCalCreator);
            Principal organizer = creator;
            UserBean acceserer = userService.getUserFromLdap(secid);
            SCalendar accesserMainCal = calDao.getMainCalendarByUid(secid);
            Principal accessor = FormatHelper.getPrincipal(accesserMainCal, acceserer);



            Set comments = act.getComments();
            Map commentors = null;
            if (comments != null && comments.size() > 0) {
                commentors = new HashMap();
                Iterator comIt = comments.iterator();
                while (comIt.hasNext()) {
                    ActivityComment curComment = (ActivityComment) comIt.next();
                    String comUserid = curComment.getPersonId();
                    if (!commentors.containsKey(comUserid)) {
                        UserBean curComUser = userService.getUserFromLdap(comUserid);
                        SCalendar curComUserMainCal = calDao.getMainCalendarByUid(comUserid);
                        Principal curPrin = FormatHelper.getPrincipal(curComUserMainCal, curComUser);
                        commentors.put(comUserid, curPrin);
                    }
                }
            }
            SCalendar srcCal = calDao.getCalendarById(act.getSrcCalendarId());
            UserBean srcCalUser = userService.getUserFromLdap(srcCal.getUserId());
            Principal srcCalendar = FormatHelper.getPrincipal(srcCal, srcCalUser);


            Activity2XML a2x = new Activity2XML();
            a2x.setAct(act);
            a2x.setCalAccessLevel(calAccessLevel);
            a2x.setPosition(type);
            a2x.setSbi(sbi);
            a2x.setCreator(creator);
            a2x.setOrganizer(organizer);
            a2x.setAccessor(accessor);
            a2x.setCommentors(commentors);
            a2x.setSrcCalendar(srcCalendar);
            ret[0] = act;
            ret[1] = a2x.toXMLString();

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get activity [id=" + aid + "]");
            //HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return ret;
    }

    @Override
    public List getCalendarAcitivitiesInPeriod(String cid, Date startDate, Date endDate) {
        List ret = null;

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            ret = actDao.getActsInPeriodByCalid(cid, startDate, endDate);

            // add ray
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get calendar[id=" + cid + "] activities in period [" + startDate.toString() + " - " + endDate.toString() + "]");
            //HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return ret;
    }

    @Override
    public SeriesBaseInfo getSeriesBaseInfo(String sid) {
        SeriesBaseInfo sbi = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            sbi = actDao.getSeriesBaseInfo(sid);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get series base info [id=" + sid + "]");
            //HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return sbi;
    }

    @Override
    public List getShareAcitivitiesInPeriod(String uid, Date startDate, Date endDate) {
        List ret = null;

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            ret = actDao.getShareAcitivitiesInPeriod(uid, startDate, endDate);

            // add ray

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            //HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return ret;
    }

    @Override
    public Object[] modifyOneActivity(String secid, String aid, Map props) {
        Activity act = null;
        StringBuilder strBuf = new StringBuilder();
        List actsInEventResp = new ArrayList();
        Set addedTasks = new HashSet();
        Set deletedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            CalendarDao calDao = new CalendarDaoImpl();

            act = actDao.getActivity(aid);

            if (act == null) {
                throw new RuntimeException("******Fail to finish outer app request. Cause:Can not find Activity [id='" + aid + "']");
            }

            Set oldTimerRemindTasks = act.getTimerRemindTasks();

            act.setMultiProps(props);
            if (props.containsKey("targ")) {
                String targCalId = (String) props.get("targ");
                SCalendar targCal = calDao.getCalendarById(targCalId);
                if (targCal != null) {
                    act.setSrcCalendarId(targCalId);
                }
            }

            Set newTimerRemindTasks = act.getTimerRemindTasks();

            Set[] modifyRet = actDao.modifyActTimerReminders(act, oldTimerRemindTasks, newTimerRemindTasks);

            addedTasks.addAll(modifyRet[0]);
            deletedTasks.addAll(modifyRet[1]);

            int oldSeriersStateFlag = act.getSeriesState().intValue();
            if (oldSeriersStateFlag >= 0) {
                DateDuration actDD = act.getOrignDateDuration();

                SeriesBaseInfo sbi = actDao.getSeriesBaseInfo(act.getSeriesId());

                boolean flag_syncWithSeries = actDD.compare(act) && CalendarBeanUtil.checkActFollowSeries(act, sbi);
                if (oldSeriersStateFlag == 1 && flag_syncWithSeries) { // 活动原始状态为“与系列不同步”
                    // 且
                    // 经过当前修改
                    // “与系列同步”
                    act.setSeriesState(new Integer(0)); // 更新其与系列之间的同步状态
                }
                if (oldSeriersStateFlag == 0 && !flag_syncWithSeries) {
                    act.setSeriesState(new Integer(1));
                }
            }

            actsInEventResp.add(act);
            if (act.getSeriesState().intValue() == 0) {
                actsInEventResp.addAll(actDao.getActsBySeriesid(act.getSeriesId()));
            }

            for (int i = 0; i < actsInEventResp.size(); i++) {
                Activity curAct = (Activity) actsInEventResp.get(i);
                if (i > 0) {
                    strBuf.append(",");
                }
                Integer calAL = calDao.getCalAccessLevelForUser(secid, curAct.getSrcCalendarId());
                String actS = new Activity2Js(secid, calAL, curAct, null).toEventRespString();
                strBuf.append(actS);
            }

            // add by ray
            this.modifyActivityShare(act, props);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to modify activity. Activity [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.registeCalendarTask(addedTasks);
        this.unregisteCalendarTask(deletedTasks);

        Object[] ret = new Object[3];
        ret[0] = actsInEventResp;
        ret[1] = strBuf.toString();
        ret[2] = act;
        return ret;
    }

    @Override
    public Object[] modifySeriesActivities(String secid, String aid, Map props, String scope,
            Date rstart, long rdur, String recur, Date droiStim, Date droiEtim) {
        Activity act = null;
        StringBuilder strBuf = new StringBuilder();
        List actsInEventResp = new ArrayList();
        List actsInLoadResp = new ArrayList();
        Set addedTasks = new HashSet();
        Set deletedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            CalendarDao calDao = new CalendarDaoImpl();

            act = actDao.getActivity(aid);

            String seriesId = null;
            SeriesBaseInfo oldSbi = null;
            List actsInSeries = null;
            // 修改的活动属于某一个系列
            if (act.getSeriesState().intValue() >= 0) {
                seriesId = act.getSeriesId();
                oldSbi = actDao.getSeriesBaseInfo(seriesId);
                actsInSeries = actDao.getActsBySeriesid(seriesId);
            }

            // 界面上执行修改系列活动，且使用“以下全部活动”
            // 有两种情况可以触发这种修改
            // 1、修改某个系列活动（且seriesState==0）的基本信息：text、location、details、guestMails（暂不考虑）、erem、trp、icc、sprop。此时肯定没有同时修改recur本身信息（recur规则、系列开始/结束时间）
            // 2、修改系列活动的起止时间（会出现rstart和rdur），此时即使修改了recur本身信息（recur规则、系列开始/结束时间）也会被忽略
            if (scope.equals("TAIL")) {

                String oldRecur = oldSbi.getRecur();

                if (act.getStartTime().getTime() != oldSbi.getStartTime().getTime()) {// 当前修改的活动不是系列的第一个活动
                    // 否则进行正常的操作
                    // 产生新系列的SeriesBaseInfo.startTime属性，默认为第一种情况的该值设置
                    Date newSeriesStartTime = act.getStartTime();
                    // 产生新系列的SeriesBaseInfo.dateDuration属性，默认为第一种情况的该值设置
                    long newSeriesDateDuration = act.getEndTime().getTime() - act.getStartTime().getTime();

                    // 如果存在第2中修改，重新设置SeriesBaseInfo.startTime属性和SeriesBaseInfo.dateDuration属性
                    if (rstart != null) {
                        newSeriesStartTime = rstart;
                    }
                    if (rdur != -1) {
                        newSeriesDateDuration = rdur;
                    }

                    // 对当前活动的原始系列活动及系列信息的修改
                    // 原始系列的截至时间
                    Calendar cal = Calendar.getInstance();
                    cal.setTime(new Date(newSeriesStartTime.getTime()));
                    cal.set(Calendar.HOUR_OF_DAY, 0);
                    cal.set(Calendar.MINUTE, 0);
                    cal.set(Calendar.SECOND, 0);
                    cal.set(Calendar.MILLISECOND, 0);
                    Date oldSeriesEndTime = new Date(cal.getTimeInMillis() - 1000);
                    // 设置原始系列的结束时间
                    oldSbi.setRecur("RRULE:" + FormatHelper.modifyRecurUntil(oldSbi.getRecur().split(":")[1], CalendarBeanUtil.dateToStr(oldSeriesEndTime)));


                    // 删除ACTIVITY表、DateDuration表中不在该系列范围的活动
                    long oldSbiEndTime = oldSeriesEndTime.getTime();
                    for (int i = 0; i < actsInSeries.size(); i++) {
                        Activity curAct = (Activity) actsInSeries.get(i);
                        DateDuration curActDD = curAct.getOrignDateDuration();
                        // 对于不是系列活动中的第一个活动且开始时间大于系列的新的结束时间的活动应该删除
                        long curDDSt = curActDD.getStartTime().getTime();
                        if (curDDSt != oldSbi.getStartTime().getTime()
                                && curDDSt >= oldSbiEndTime) {
                            deletedTasks.addAll(curAct.getTimerRemindTasks());
                            actsInLoadResp.add(actDao.deleteActivity(curAct));
                        } else {
                            actsInLoadResp.add(curAct);
                        }
                    }

                    // 创建新的系列活动
                    // 创建一个新系列活动中的第一个活动
                    Activity firstActInNewSeries = act.getDuplicateEntry(
                            newSeriesStartTime, new Date(newSeriesStartTime.getTime()
                            + newSeriesDateDuration));
                    firstActInNewSeries.setMultiProps(props);
                    if (props.containsKey("targ")) {
                        String targCalId = (String) props.get("targ");
                        SCalendar targCal = calDao.getCalendarById(targCalId);
                        if (targCal != null) {
                            firstActInNewSeries.setSrcCalendarId(targCalId);
                        }
                    }

                    // add by ray
                    this.addActivityShare(firstActInNewSeries, props);

                    addedTasks.addAll(firstActInNewSeries.getTimerRemindTasks());
                    firstActInNewSeries.setTimerRemindByErem();

                    // 创建新系列的SeriesBaseEntry
                    SeriesBaseInfo newSbi = new SeriesBaseInfo(
                            firstActInNewSeries, oldRecur);
                    // 保存SeriesBaseInfo
                    String newSbiId = actDao.saveSeriesBaseInfo(newSbi).getId();

                    // 更改第一个活动的属性，注意这里即使只有一个活动也要认为它是一个系列，与创建不同
                    firstActInNewSeries.setSeriesId(newSbiId);
                    firstActInNewSeries.setSeriesState(new Integer(0));
                    // 保存第一个系列活动
                    DateDuration firstActDD = new DateDuration(
                            firstActInNewSeries.getStartTime(),
                            firstActInNewSeries.getEndTime());
                    firstActInNewSeries.setOrignDateDuration(firstActDD);
                    firstActDD.setActivity(firstActInNewSeries);
                    actDao.saveActivity(firstActInNewSeries);

                    actsInEventResp.add(firstActInNewSeries);
                    actsInEventResp.add(firstActInNewSeries);
                    // 保存第一个系列活动的DateDuration

                    List dates = CalendarBeanUtil.getDatesListByRrule(newSbi.getRecur().split(":")[1], newSbi.getStartTime());
                    long period = firstActInNewSeries.getEndTime().getTime() - firstActInNewSeries.getStartTime().getTime();
                    for (int i = 0; i < dates.size(); i++) {
                        DateTime curDt = (DateTime) dates.get(i);
                        DateDuration curActDD = new DateDuration((Date) curDt, period);
                        Activity curAct = firstActInNewSeries.getDuplicateEntry(curActDD.getStartTime(),
                                curActDD.getEndTime());
                        // add by ray
                        this.addActivityShare(curAct, props);

                        curAct.setOrignDateDuration(curActDD);
                        curActDD.setActivity(curAct);

                        addedTasks.addAll(curAct.getTimerRemindTasks());
                        curAct.setTimerRemindByErem();

                        actDao.saveActivity(curAct);

                        actsInEventResp.add(curAct);
                        actsInLoadResp.add(curAct);
                    }

                    Set tempTimesDeleted = CalendarBeanUtil.removeSetFromSet(
                            deletedTasks, addedTasks);
                    Set tempTimesAdded = CalendarBeanUtil.removeSetFromSet(
                            addedTasks, deletedTasks);

                    addedTasks = tempTimesAdded;
                    deletedTasks = tempTimesDeleted;
                } else {
                    scope = "ALL";
                }
            }

            // 修改全部系列活动可以分为4大类
            // 首先修改当前活动的lastModifyTime，与request中的rfdt一致
            // 1、修改提醒字段erem ，注意他始终会出现在request参数列表中
            // 2、修改系列的基本信息，指text、location、guestsEmail、details、sprop、trp和icc,修改哪个属性哪个就会出现在request请求参数中
            // 3-1、修改系列活动的开始时间和结束时间，此时request中会有两个参数出现rdur（对应SeriesBaseEntry.dateDuration）、rstart（对应SeriesBaseEntry）
            // 3-2、修改系列的开始时间，此时request中会有rstart出现，不会出现rdur
            // 3-3、修改系列活动产生的规则recur，此时request中会出现recur字段
            // 对于第3种情况下我们删除系列的原有所有活动，然后产生新的系列活动，此时如果有2修改则不用执行，只有不会出现3的时候才进行2。注意这与google日历功能实现不一样

            if (scope.equals("ALL")) {
                if (recur != null && recur.trim().equals("")) {//将系列活动修改为非系列活动
                    Set oldTimerRemindTasks = act.getTimerRemindTasks();
                    act.setMultiProps(props);
                    act.setSeriesState(new Integer(-1));
                    act.setSeriesId(null);
                    Set newTimerRemindTasks = act.getTimerRemindTasks();

                    Set[] modifyRet = actDao.modifyActTimerReminders(act, oldTimerRemindTasks, newTimerRemindTasks);

                    addedTasks.addAll(modifyRet[0]);
                    deletedTasks.addAll(modifyRet[1]);

                    actsInEventResp.add(act);
                    actsInLoadResp.add(act);

                    for (int i = 0; i < actsInSeries.size(); i++) {
                        Activity curAct = (Activity) actsInSeries.get(i);
                        if (!curAct.getId().equals(act.getId())) {
                            deletedTasks.addAll(curAct.getTimerRemindTasks());

                            actDao.deleteActivity(curAct);

                            actsInLoadResp.add(actDao.deleteActivity(curAct));
                        }
                    }

                } else {
                    // 操作3、当request参数中出现rdur和rstart时进行第3类修改操作而不用进行第2类修改
                    if (rstart != null || rdur != -1 || recur != null) {

                        if (act.getSeriesState().intValue() >= 0) {

                            if (rstart != null) {
                                oldSbi.setStartTime(rstart);
                            }
                            if (rdur != -1) {
                                oldSbi.setDateDuration(new Long(rdur));
                            }
                            if (recur != null) {
                                oldSbi.setRecur(recur);
                            }
                            // 如果recur中有until且其值包含“T”将其去掉
                            oldSbi.setRecur("RRULE:" + FormatHelper.delHmsFromRecurUntil(oldSbi.getRecur().split(":")[1]));
                            // 更新当前活动的信息
                            act.setMultiProps(props);

                            // 删除该系列活动所有在CalendarEntry表和DateDuration表中的信息
                            for (int i = 0; i < actsInSeries.size(); i++) {
                                Activity curAct = (Activity) actsInSeries.get(i);

                                deletedTasks.addAll(curAct.getTimerRemindTasks());

                                actDao.deleteActivity(curAct);

                                actsInLoadResp.add(actDao.deleteActivity(curAct));
                            }
                            // 重建整个系列活动
                            Activity firstActInSeries = act.getDuplicateEntry(new Date(oldSbi.getStartTime().getTime()), new Date(
                                    oldSbi.getStartTime().getTime()
                                    + oldSbi.getDateDuration().longValue()));
                            if (props.containsKey("targ")) {
                                String targCalId = (String) props.get("targ");
                                SCalendar targCal = calDao.getCalendarById(targCalId);
                                if (targCal != null) {
                                    firstActInSeries.setSrcCalendarId(targCalId);
                                }
                            }

                            addedTasks.addAll(firstActInSeries.getTimerRemindTasks());
                            firstActInSeries.setTimerRemindByErem();

                            List dates = CalendarBeanUtil.getDatesListByRrule(oldSbi.getRecur().split(":")[1], oldSbi.getStartTime());
                            int datesSize = dates.size();
                            if (datesSize > 0) {// 该系列中除了正在创建的这个活动还有其它的活动,那么将每个活动作为系列活动处理，保存系列基本信息，各个活动的时间段

                                firstActInSeries.setSeriesState(new Integer(0)); // 该活动位于一个系列中

                                // 将该活动的时间段保存
                                DateDuration firstActInSeriesDD = new DateDuration(
                                        firstActInSeries.getStartTime(),
                                        firstActInSeries.getEndTime());// 将该活动的时间段保存
                                firstActInSeries.setOrignDateDuration(firstActInSeriesDD);
                                firstActInSeriesDD.setActivity(firstActInSeries);
                            } else {// 当前活动没有其它同系列的活动
                                // 删除SeriesBaseEntry表中的该系列信息
                                actDao.deleteSeriesBaseInfo(oldSbi);
                                firstActInSeries.setSeriesState(new Integer(-1));
                                firstActInSeries.setSeriesId("");
                            }

                            // add by ray
                            this.addActivityShare(firstActInSeries, props);

                            actDao.saveActivity(firstActInSeries);

                            if (firstActInSeries.getStartTime().getTime() <= droiEtim.getTime()
                                    && firstActInSeries.getStartTime().getTime() >= droiStim.getTime()) {
                                actsInLoadResp.add(firstActInSeries);
                                actsInEventResp.add(firstActInSeries);
                                actsInEventResp.add(firstActInSeries);
                            }

                            // 生成其它同系列的活动，并保存在CalendarEntry表和DateDuration表中
                            long period = firstActInSeries.getEndTime().getTime() - firstActInSeries.getStartTime().getTime();
                            for (int i = 0; i < datesSize; i++) {
                                DateTime curDt = (DateTime) dates.get(i);
                                DateDuration curActDD = new DateDuration((Date) curDt, period);
                                Activity curAct = firstActInSeries.getDuplicateEntry(curActDD.getStartTime(),
                                        curActDD.getEndTime());

                                // add by ray
                                this.addActivityShare(curAct, props);

                                addedTasks.addAll(curAct.getTimerRemindTasks());
                                curAct.setTimerRemindByErem();

                                curAct.setOrignDateDuration(curActDD);
                                curActDD.setActivity(curAct);

                                actDao.saveActivity(curAct);

                                if (curAct.getStartTime().getTime() <= droiEtim.getTime()
                                        && curAct.getStartTime().getTime() >= droiStim.getTime()) {
                                    actsInLoadResp.add(curAct);
                                    actsInEventResp.add(curAct);
                                }
                            }

                            Set tempTimesDeleted = CalendarBeanUtil.removeSetFromSet(deletedTasks, addedTasks);
                            Set tempTimesAdded = CalendarBeanUtil.removeSetFromSet(addedTasks, deletedTasks);

                            addedTasks = tempTimesAdded;
                            deletedTasks = tempTimesDeleted;

                        } else { // 当前操作时将一个非系列活动修改为系列活动这与创建系列的过程类似

                            Set oldTimerRemindTasks = act.getTimerRemindTasks();

                            act.setMultiProps(props);
                            if (props.containsKey("targ")) {
                                String targCalId = (String) props.get("targ");
                                SCalendar targCal = calDao.getCalendarById(targCalId);
                                if (targCal != null) {
                                    act.setSrcCalendarId(targCalId);
                                }
                            }

                            if (rstart != null) {
                                act.setStartTime(rstart);
                            }
                            if (rdur != -1) {
                                act.setEndTime(new Date(rstart.getTime() + rdur));
                            }

                            oldSbi = new SeriesBaseInfo(act, recur);

                            List dates = CalendarBeanUtil.getDatesListByRrule(oldSbi.getRecur().split(":")[1], oldSbi.getStartTime());
                            int datesSize = dates.size();

                            if (datesSize > 0) {// 该系列中除了正在创建的这个活动还有其它的活动,那么将每个活动作为系列活动处理，保存系列基本信息，各个活动的时间段

                                seriesId = actDao.saveSeriesBaseInfo(oldSbi).getId();// 保存该系列的基本信息

                                // 创建系列活动中的第一个活动
                                Activity firstActInSeries = act.getDuplicateEntry(
                                        act.getStartTime(), act.getEndTime());
                                firstActInSeries.setSeriesState(new Integer(0));
                                firstActInSeries.setSeriesId(seriesId);

                                DateDuration firstActInSeriesDD = new DateDuration(
                                        firstActInSeries.getStartTime(),
                                        firstActInSeries.getEndTime());// 将该活动的时间段保存
                                firstActInSeries.setOrignDateDuration(firstActInSeriesDD);
                                firstActInSeriesDD.setActivity(firstActInSeries);

                                addedTasks.addAll(firstActInSeries.getTimerRemindTasks());
                                firstActInSeries.setTimerRemindByErem();

                                actDao.saveActivity(firstActInSeries);

                                actsInEventResp.add(firstActInSeries);
                                actsInEventResp.add(firstActInSeries);
                                actsInLoadResp.add(firstActInSeries);

                                // 删除原始的活动
                                deletedTasks.addAll(oldTimerRemindTasks);
                                actDao.deleteActivity(act);
                                actsInLoadResp.add(aid);

                                long period = firstActInSeries.getEndTime().getTime() - firstActInSeries.getStartTime().getTime();
                                for (int i = 0; i < datesSize; i++) {
                                    DateTime curDt = (DateTime) dates.get(i);
                                    DateDuration curActDD = new DateDuration((Date) curDt, period);
                                    Activity curAct = firstActInSeries.getDuplicateEntry(curActDD.getStartTime(), curActDD.getEndTime());

                                    addedTasks.addAll(curAct.getTimerRemindTasks());
                                    curAct.setTimerRemindByErem();

                                    curAct.setOrignDateDuration(curActDD);
                                    curActDD.setActivity(curAct);

                                    actDao.saveActivity(curAct);

                                    if (curAct.getStartTime().getTime() <= droiEtim.getTime()
                                            && curAct.getStartTime().getTime() >= droiStim.getTime()) {
                                        actsInEventResp.add(curAct);
                                        actsInLoadResp.add(curAct);
                                    }
                                }
                            } else {

                                Set newTimerRemindTasks = act.getTimerRemindTasks();

                                Set[] modifyRet = actDao.modifyActTimerReminders(
                                        act, oldTimerRemindTasks,
                                        newTimerRemindTasks);

                                addedTasks.addAll(modifyRet[0]);
                                deletedTasks.addAll(modifyRet[1]);

                                actsInEventResp.add(act);
                                actsInLoadResp.add(act);
                            }

                            Set tempTimesDeleted = CalendarBeanUtil.removeSetFromSet(deletedTasks, addedTasks);
                            Set tempTimesAdded = CalendarBeanUtil.removeSetFromSet(addedTasks, deletedTasks);

                            addedTasks = tempTimesAdded;
                            deletedTasks = tempTimesDeleted;

                        }
                    } else {// reuqest参数中不包含会触发重构系列的参数时，仅仅修改系列中每个活动的基本信息

                        Set oldTimerRemindTasks = act.getTimerRemindTasks();

                        act.setMultiProps(props);
                        if (props.containsKey("targ")) {
                            String targCalId = (String) props.get("targ");
                            SCalendar targCal = calDao.getCalendarById(targCalId);
                            if (targCal != null) {
                                act.setSrcCalendarId(targCalId);
                            }
                        }

                        // add by ray
                        this.modifyActivityShare(act, props);

                        Set newTimerRemindTasks = act.getTimerRemindTasks();

                        Set[] modifyResult = actDao.modifyActTimerReminders(act,
                                oldTimerRemindTasks, newTimerRemindTasks);

                        addedTasks.addAll(modifyResult[0]);
                        deletedTasks.addAll(modifyResult[1]);

                        String baseEremStr = act.getErem();
                        Date baseLastModifyTime = act.getLastModifyTime();
                        actsInEventResp.add(0, act);
                        actsInEventResp.add(act);
                        actsInLoadResp.add(act);

                        // 修改ACTIVITY表中的所有系列活动的erem和lastModifyTime
                        for (int i = 0; i < actsInSeries.size(); i++) {
                            Activity curAct = (Activity) actsInSeries.get(i);

                            if (!curAct.getId().equalsIgnoreCase(aid)) {// 不对id指定的活动进行重复处理

                                Set curActOldTimerRemindTasks = curAct.getTimerRemindTasks();

                                // add by ray
                                this.modifyActivityShare(curAct, props);

                                if (curAct.getSeriesState().intValue() == 0) {// 修改系列中所有seriesState==0且不是当前id指定活动的相应属性
                                    curAct.setMultiProps(props);
                                    actsInEventResp.add(curAct);
                                    actsInLoadResp.add(curAct);
                                } else {
                                    curAct.setLastModifyTime(baseLastModifyTime);
                                }
                                // 1、始终进行1对应的操作，修改系列中所有CalendarEntry的erem属性,与CalendarEntry.seriesState的取值无关
                                curAct.setErem(baseEremStr);

                                if (props.containsKey("targ")) {
                                    String targCalId = (String) props.get("targ");
                                    SCalendar targCal = calDao.getCalendarById(targCalId);
                                    if (targCal != null) {
                                        curAct.setSrcCalendarId(targCalId);
                                    }
                                }

                                Set curActNewTimerRemindTasks = curAct.getTimerRemindTasks();

                                Set[] modifyResult_2 = actDao.modifyActTimerReminders(curAct, curActOldTimerRemindTasks, curActNewTimerRemindTasks);

                                addedTasks.addAll(modifyResult_2[0]);
                                deletedTasks.addAll(modifyResult_2[1]);

                            }

                        }

                        oldSbi.setMultiProps(props);

                        Set tempTimesDeleted = CalendarBeanUtil.removeSetFromSet(deletedTasks, addedTasks);
                        Set tempTimesAdded = CalendarBeanUtil.removeSetFromSet(addedTasks, deletedTasks);

                        addedTasks = tempTimesAdded;
                        deletedTasks = tempTimesDeleted;

                    }
                }
            }

            for (int i = 0; i < actsInEventResp.size(); i++) {
                Activity curAct = (Activity) actsInEventResp.get(i);
                if (i > 0) {
                    strBuf.append(",");
                }
                Integer calAL = calDao.getCalAccessLevelForUser(secid, curAct.getSrcCalendarId());
                String actS = new Activity2Js(secid, calAL, curAct, null).toEventRespString();
                strBuf.append(actS);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to modify series activity. Activity [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.registeCalendarTask(addedTasks);
        this.unregisteCalendarTask(deletedTasks);

        Object[] ret = new Object[3];
        ret[0] = actsInEventResp;
        ret[1] = strBuf.toString();
        ret[2] = actsInLoadResp;
        return ret;
    }

    @Override
    public String respondToActivity(String aid, String uid, Integer join) {

        String back = "";
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity ac = actDao.getActivity(aid);

            ActivityShare share = actDao.getActivityShareByUid(ac, uid);

            share.setJoin(join);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return back;
    }

    @Override
    public StringBuffer responseToActivity(String aid, String uid, Integer guest, Integer join, String comment) {

        StringBuffer strBuf = new StringBuffer();
        strBuf.append("while(1);[['a',");
        try {

            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity activity = actDao.getActivity(aid);

            ActivityShare activityShare = actDao.getActivityShareByUid(activity, uid);


            activityShare.setJoin(join);

            activityShare.setComment(comment);

            activityShare.setExtraGuests(guest);

            UserBean user = new UserServiceImpl().getUserFromLdap(uid);

            strBuf.append("'").append(activity.getId()).append("',");

            strBuf.append("'").append(activity.getText()).append("','").append(activity.getStartTime()).append("','").append(activity.getEndTime()).append("','b3VydWkxOTg1QGdtYWlsLmNvbQ','").append(activity.getSrcCalendarId()).append("',,1793,,,2,'{\42a\42:[{\42i\42:\42b3VydWkxOTg1QGdtYWlsLmNvbQ\42,\42s\42:1},{\42i\42:\42").append(activity.getSrcCalendarId()).append("\42,\42s\42:1,\42n\42:\42").append(user.getUserName()).append("\42,\42c\42:\42").append(activityShare.getComment()).append("\42}]}',null,,null,[102333,40,null,'',[['\74p\76ddd\74/p\076','").append(user.getEmail()).append("','20090106T093054'");

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();

        } catch (Exception ex) {
            logger.error("fail to save Calendar");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        strBuf.append("]],0,'DEFAULT']],['_RefreshCalendarWhenDisplayedNext'],['_Ping','500'],['_Ping','3000'],['_Ping','15000']]");

        return strBuf;
    }

    @Override
    public Object[] restorOriginalActivity(String secid, String aid, Map props) {
        Activity act = null;
        StringBuilder strBuf = new StringBuilder();
        Set addedTasks = new HashSet();
        Set deletedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            act = actDao.getActivity(aid);

            Set oldTimerRemindTasks = act.getTimerRemindTasks();

            act.setMultiProps(props);

            // 更新活动的基本信息与系列同步
            SeriesBaseInfo sbi = actDao.getSeriesBaseInfo(act.getSeriesId());
            act.setText(sbi.getText());
            act.setLocation(sbi.getLocation());
            act.setGuestsEmail(sbi.getGuestsEmail());
            act.setDetails(sbi.getDetails());
            act.setSprop(sbi.getSprop());
            act.setTrp(sbi.getTrp());
            act.setIcc(sbi.getIcc());

            // 更新活动的起止时间
            DateDuration actDD = act.getOrignDateDuration();
            act.setStartTime(new Date(actDD.getStartTime().getTime()));
            act.setEndTime(new Date(actDD.getEndTime().getTime()));

            // 设置系列状态标识
            act.setSeriesState(new Integer(0));

            Set newTimerRemindTasks = act.getTimerRemindTasks();

            Set[] modifyResult = actDao.modifyActTimerReminders(act, oldTimerRemindTasks, newTimerRemindTasks);
            addedTasks.addAll(modifyResult[0]);
            deletedTasks.addAll(modifyResult[1]);


            Integer calAL = new CalendarDaoImpl().getCalAccessLevelForUser(secid, act.getSrcCalendarId());
            String actS = new Activity2Js(secid, calAL, act, null).toEventRespString();
            strBuf.append(actS);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to reset activity. Activity [id=" + aid + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.registeCalendarTask(addedTasks);
        this.unregisteCalendarTask(deletedTasks);

        Object[] ret = new Object[2];
        ret[0] = act;
        ret[1] = strBuf.toString();
        return ret;
    }

    @Override
    public Object[] restorOriginalActivity(String secid, String aid) {
        return this.restorOriginalActivity(secid, aid, null);
    }

    @Override
    public Object[] saveActivity(Activity act) {
        return this.saveActivity(act, null, null, null);
    }

    @Override
    public Object[] saveActivity(Activity act, String recur, Date droiStim,
            Date droiEtim) {

        List savedActs = new ArrayList();
        StringBuilder strBuf = new StringBuilder();
        SeriesBaseInfo sbi = null;
        Set addedTasks = new HashSet();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            // 保存前查看数据库中是否已经有该定时时间
            addedTasks.addAll(act.getTimerRemindTasks());

            act.setTimerRemindByErem();

            // add by ray
            // add shared activities
            this.addActivityShare(act, null);

            if (recur == null) {
                actDao.saveActivity(act);
                savedActs.add(act);
            } else {// 想要创建一个系列活动，但此时未必就会创建一个系列
                sbi = new SeriesBaseInfo(act, recur);

                List dates = CalendarBeanUtil.getDatesListByRrule(sbi.getRecur().split(":")[1], sbi.getStartTime());
                int datesSize = dates.size();

                // 如果dateSize>0满足创建一个系列的条件
                if (datesSize > 0) {
                    String seriesId = actDao.saveSeriesBaseInfo(sbi).getId();// 保存该系列的基本信息
                    act.setSeriesId(seriesId);
                    act.setSeriesState(new Integer(0)); // 该活动位于一个系列中
                    DateDuration actDD = new DateDuration(act.getStartTime(), act.getEndTime());// 将该活动的时间段保存
                    act.setOrignDateDuration(actDD);
                    actDD.setActivity(act);

                    actDao.saveActivity(act);
                    savedActs.add(act);

                    long period = act.getEndTime().getTime() - act.getStartTime().getTime();
                    for (int i = 0; i < datesSize; i++) {
                        DateTime curDt = (DateTime) dates.get(i);
                        DateDuration curActDD = new DateDuration((Date) curDt, period);//(DateDuration) dates.get(i);
                        Activity curAct = act.getDuplicateEntry(curActDD.getStartTime(), curActDD.getEndTime());
                        // add by ray
                        this.addActivityShare(curAct, null);

                        curAct.setTimerRemindByErem();
                        curAct.setOrignDateDuration(curActDD);
                        curActDD.setActivity(curAct);

                        addedTasks.addAll(curAct.getTimerRemindTasks());

                        actDao.saveActivity(curAct);

                        if (curAct.getStartTime().getTime() <= droiEtim.getTime() && curAct.getStartTime().getTime() >= droiStim.getTime()) {
                            savedActs.add(curAct);
                        }
                    }
                } else { // 不满足形成一个系列的条件即没有形成一个系列
                    sbi = null;
                    actDao.saveActivity(act);
                    savedActs.add(act);
                }
            }

            // 格式为： [......],[......],...,[......]
            for (int i = 0; i < savedActs.size(); i++) {
                Activity curActy = (Activity) savedActs.get(i);
                if (i > 0) {
                    strBuf.append(",");
                }
                String actStr = new Activity2Js(act.getSecid(), new Integer(100), curActy, sbi).toEventRespString();
                strBuf.append(actStr);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to save activity [activity=" + act.toString() + "]");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.registeCalendarTask(addedTasks);

        Object[] ret = new Object[2];
        ret[0] = savedActs;
        ret[1] = strBuf.toString();
        return ret;
    }

    private boolean unregisteCalendarTask(Set set) {
        if (!CalendarCfg.isTimerTaskEnable()) {
            return true;
        }
        try {
            new TaskServiceImpl().unregisteCalendarTask(set);
        } catch (Exception e) {
            logger.error("###Fail to unregiste activity send mail reminder task! ###");
            return false;
        }

        return true;
    }

    private boolean registeCalendarTask(Set set) {
        if (!CalendarCfg.isTimerTaskEnable()) {
            return true;
        }
        try {
            new TaskServiceImpl().registeCalendarTask(set);
        } catch (Exception e) {
            logger.error("###Fail to registe activity send mail reminder task! ###");
            return false;
        }

        return true;
    }

    private void modifyActivityShare(Activity activity, Map props) {

        String[] addPersons = null;

        String[] delPersons = null;

        String[] sprop = null;

        if (null != props && props.containsKey("add")) {

            addPersons = (String[]) props.get("add");

        }

        if (null != props && props.containsKey("del")) {

            delPersons = (String[]) props.get("del");

        }

        if (null != props && props.containsKey("sprop")) {
            sprop = (String[]) props.get("sprop");
        }

        if (null != addPersons) {

            for (int i = 0; i < addPersons.length; i++) {

                ActivityShare activityShare = new ActivityShare();


                activityShare.setUid(addPersons[i]);

                activityShare.setActivity(activity);

                activityShare.setJoin(new Integer(0));

                activityShare.setExtraGuests(new Integer(0));

                activityShare.setModifiable(false);

                if (null != sprop && sprop.length >= 1) {
                    activityShare.setInviteable((sprop[0].indexOf("false") == -1 ? true : false));
                } else {
                    activityShare.setInviteable(true);
                }

                if (null != sprop && sprop.length >= 2) {
                    activityShare.setViewable((sprop[1].indexOf("false") == -1 ? true : false));
                } else {
                    activityShare.setViewable(true);
                }

                if (!this.ifShareExist(activity, addPersons[i])) {
                    activity.getActivityShare().add(activityShare);
                }
            }

        } else if (null != delPersons) {
            for (int i = 0; i < delPersons.length; i++) {

                //TODO 事务呢?
                ActivityShare activityShare = actDao.getActivityShareByUid(activity, delPersons[i]);


                activity.getActivityShare().remove(activityShare);

                actDao.delActivityShare(activityShare);
            }
        }
    }

    /**
     * 添加共享活动
     *
     * @author ray
     * @param activity
     * @param props
     * @
     */
    private void addActivityShare(Activity activity, Map props) {
        /** 如果不加这句，则每添加一个活动都会保存一个ActivityShare记录**/
        if (true) {
            return;
        }
        //		TODO 事务呢?
        ActivityShare myActivityShare = actDao.getActivityShareByUid(activity, activity.getSecid());

        if (null == myActivityShare) {

            myActivityShare = new ActivityShare();

            myActivityShare.setActivity(activity);

            myActivityShare.setUid(activity.getSecid());

            myActivityShare.setModifiable(true);

            myActivityShare.setViewable(true);

            myActivityShare.setInviteable(true);

            myActivityShare.setJoin(new Integer(1));

            myActivityShare.setExtraGuests(new Integer(0));

            if (!this.ifShareExist(activity, activity.getSecid())) {
                activity.getActivityShare().add(myActivityShare);
            }

        }

        String[] addPersons = null;

        String[] delPersons = null;

        String[] sprop = null;


        if (activity.getGuestsEmail() != null) {

            addPersons = activity.getGuestsEmail().split(";");

        } else if (null != props && props.containsKey("add")) {

            addPersons = (String[]) props.get("add");

        }

        if (null != props && props.containsKey("del")) {

            delPersons = (String[]) props.get("del");

        }

        if (null != activity.getSprop()) {

            sprop = activity.getSprop().split(";");

        } else if (null != props && props.containsKey("sprop")) {
            sprop = (String[]) props.get("sprop");
        }

        if (null != addPersons) {

            for (int i = 0; i < addPersons.length; i++) {

                ActivityShare activityShare = new ActivityShare();


                activityShare.setUid(addPersons[i]);

                activityShare.setActivity(activity);

                activityShare.setJoin(new Integer(0));

                activityShare.setExtraGuests(new Integer(0));

                activityShare.setModifiable(false);

                if (null != sprop && sprop.length >= 1) {
                    activityShare.setInviteable((sprop[0].indexOf("false") == -1 ? true : false));
                } else {
                    activityShare.setInviteable(true);
                }

                if (null != sprop && sprop.length >= 2) {
                    activityShare.setViewable((sprop[1].indexOf("false") == -1 ? true : false));
                } else {
                    activityShare.setViewable(true);
                }

                if (!this.ifShareExist(activity, addPersons[i])) {
                    activity.getActivityShare().add(activityShare);
                }

            }

        } else if (null != delPersons) {
            Set set = new HashSet();

            for (int i = 0; i < delPersons.length; i++) {


                Iterator it = activity.getActivityShare().iterator();

                while (it.hasNext()) {

                    ActivityShare activityShare = (ActivityShare) it.next();

                    if (activityShare.getUid().equals(delPersons[i])) {

                        set.add(activityShare);
                    }
                }

            }
            activity.getActivityShare().remove(set);
        }

    }

    private boolean ifShareExist(Activity activity, String person) {

        Set set = activity.getActivityShare();

        Iterator it = set.iterator();

        while (it.hasNext()) {
            ActivityShare temp = (ActivityShare) it.next();
            if (temp.getUid().equals(person)) {
                return true;
            }
        }

        return false;
    }
}
