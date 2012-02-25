package net.tl.icalendar.service.impl;

import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;


import org.apache.log4j.Logger;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.CalendarTask;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.TimerTask;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.dao.ActivityDao;
import net.tl.icalendar.dao.CalendarDao;
import net.tl.icalendar.dao.TaskDao;
import net.tl.icalendar.dao.impl.ActivityDaoImpl;
import net.tl.icalendar.dao.impl.CalendarDaoImpl;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.dao.impl.TaskDaoImpl;
import net.tl.icalendar.mail.MailSender;
import net.tl.icalendar.mail.MailSenderFactory;
import net.tl.icalendar.service.TaskService;
import net.tl.icalendar.service.TimerTaskService;
import net.tl.icalendar.service.UserService;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.CalendarCfg;

public class TaskServiceImpl implements TaskService {

    private static Logger logger = Logger.getLogger(ActivityServiceImpl.class);
    private TaskDao taskDao;
    private ActivityDao actDao;
    private CalendarDao calDao;
    private UserService userService;
    private TimerTaskService ttService;

    public TaskServiceImpl() {
        taskDao = new TaskDaoImpl();
        actDao = new ActivityDaoImpl();
        calDao = new CalendarDaoImpl();
        userService = new UserServiceImpl();
        ttService = new TimerTaskServiceImpl();
    }

    public void registeCalendarTask(Set taskSet) {
        logger.debug("*********registeCalendarTask num=>" + taskSet.size());
        if (taskSet.isEmpty()) {
            return;
        }

        long validRegisteEndTime = CalendarBeanUtil.getAfterDaysTimeByHour(1, 3);

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Iterator iterator = taskSet.iterator();

            while (iterator.hasNext()) {
                String curTaskInfo = (String) iterator.next();

                int taskType = Integer.parseInt(curTaskInfo.split(":")[0]);
                String taskId = curTaskInfo.split(":")[1];

                switch (taskType) {
                    case CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND:
                        ;
                    case CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND:
                        Date taskExeTime = CalendarBeanUtil.dateStrToDate(taskId);
                        if (taskExeTime.getTime() > new Date().getTime()
                                && taskExeTime.getTime() <= validRegisteEndTime) {
                            try {
                                if (!taskDao.checkTaskIdExistInCalendarTask(taskId)) {
                                    // 如果taskId在表中不存在（即该taskId尚未注册到was定时服务），需要向was定时服务注册
                                    boolean registeSuccess = true;

                                    try {
                                        TimerTask timerTask = new TimerTask();
                                        timerTask.setCRON(false);
                                        timerTask.setStartTime(CalendarBeanUtil.dateStrToDate(taskId));
                                        timerTask.setTaskInfo(taskId);
                                        ttService.saveTimerTask(timerTask);
//									TimerRegister timerRegister = new TimerRegister();
//									SchedulerInfo schedulerInfo = new SchedulerInfo();
//									schedulerInfo.setConnName(CalendarCfg.getTimeConnName()); // application name
//									schedulerInfo.setProg(taskId); // return back arg;
//									schedulerInfo.setStartTime(CalendarBeanUtil.dateStrToDate(taskId)); // date type;
//									schedulerInfo.setMergeTimer(true);
//									timerRegister.registerTimer(schedulerInfo);
                                        // 测试用
                                        // if(false)throw new RemoteException();
                                        logger.debug("***Registe to was timer.taskId=>" + taskId);
                                    } catch (Exception e) {
                                        registeSuccess = false;
                                        logger.error("******Fail to registe timer task to WAS timer service. [taskType=" + taskType + ";taskId='" + taskId + "']");
                                    }

                                    if (registeSuccess) { // 注册到was定时服务成功，添加相应的任务到CalendarTask
                                        CalendarTask cTask = new CalendarTask(taskId, new Integer(taskType));
                                        taskDao.saveCalendarTask(cTask);
                                    }
                                } else {
                                    // taskId在CalendarTask表中存在，即该taskId已经注册到was定时服务，那么无需再想was定时服务注册，仅检查在
                                    // CalendarTask是否存在对应的任务
                                    if (!taskDao.checkTaskExistInCalendarTask(taskId, taskType, null)) {
                                        // 如果任务在CalendarTask中尚未注册那么就添加该任务
                                        CalendarTask cTask = new CalendarTask(taskId, new Integer(taskType));
                                        taskDao.saveCalendarTask(cTask);
                                    }
                                }

                            } catch (Exception he) {
                                logger.error("******Fail to operate(read or write) in CalendarTask [taskType=" + taskType + ";taskId='" + taskId + "'],just skip it not rollback because it just to read.");
                            }
                        }
                        break;

                    case CalendarTask.TASK_MULTI_DELETE_DIRTY_ACTS:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_GENERATE_SERIES_ACTS:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_REGISTER_ACTS_MAIL_REMIND_TO_TIMER:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_SEND_ALL_ACTS_MAIL_REMIND:
                        // TODO 处理程序
                        break;
                    default:
                        logger.error("******Unknown Task type [" + taskType + "]");
                        break;
                }
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to finish outer app request. Cause: Fail to add calendar timer task.");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
    }

    public void registeOnceTaskToWASTimer(Date startTime, Date endTime) {
        Set taskSet = new HashSet();
        logger.debug("--- Registe CalendarTask between " + startTime + " and " + endTime + " ---");

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            logger.debug("--- Delete all expired taskes in CalendarTask ---");
            try {
                taskDao.deleteCalendarTaskBeforCurTime();
            } catch (Exception e) {
                logger.error("****** Fail to delete dirty calendar task.");
            }

            // 读取所有发送邮件的定时任务信息
            Set taskIds_sendMail = actDao.getTaskIdsOfMailRemindInPeriod(startTime, endTime);
            Iterator iterator = taskIds_sendMail.iterator();
            while (iterator.hasNext()) {
                String curTaskId = (String) iterator.next();
                taskSet.add("" + CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND + ":" + curTaskId);
            }

            Set taskIds_sendSms = actDao.getTaskIdsOfSmsRemindInPeriod(startTime, endTime);
            Iterator iterator2 = taskIds_sendSms.iterator();
            while (iterator2.hasNext()) {
                String curTaskId = (String) iterator2.next();
                taskSet.add("" + CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND + ":" + curTaskId);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to finish outer app request. Cause: Fail to finish registe daily task to WAS timer .");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        this.registeCalendarTask(taskSet);

    }

    public void timerCallBack(String eventId) {
        if (eventId.equalsIgnoreCase(CalendarCfg.getDailyTaskId())) {
            logger.debug("---registe daily task triggered by WAS Timer----");
            this.registeOnceTaskToWASTimer(new Date(CalendarBeanUtil.getAfterDaysTimeByHour(0, 3)), new Date(CalendarBeanUtil.getAfterDaysTimeByHour(1, 3)));
        } else {
            logger.debug("---do send sms or email task triggered by WAS Timer(" + eventId + ")----");
            Date curReceivedDate = CalendarBeanUtil.dateStrToDate(eventId);
            if (curReceivedDate == null) {
                logger.error("******Received from was timer wrong format date string.[dateString=" + eventId + "]");
            }

            Set calendarTaskType = null;
            try {
                HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

                calendarTaskType = taskDao.getCalendarTaskTypeByTaskId(eventId);

                HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
            } catch (Exception ex) {
                logger.error("******Fail to get calendar task by time[" + CalendarBeanUtil.dateToStr(curReceivedDate) + "].");
                HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
            } finally {
                HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
            }



            Iterator iterator = calendarTaskType.iterator();
            while (iterator.hasNext()) {
                int taskType = ((Integer) iterator.next()).intValue();
                switch (taskType) {
                    case CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND:
                        logger.debug("----Ready to send email triggered by WAS Timer(" + eventId + ")---");
                        this.doEmailRemindTask(eventId);
                        break;
                    case CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND:
                        logger.debug("----Ready to send sms triggered by WAS Timer(" + eventId + ")---");
                        this.doSMSRemindTask(eventId);
                        break;
                    default:
                        logger.error("******Unknown task type or the task type has not respondding program to do it.");
                }
            }

        }
    }

    public void unregisteCalendarTask(Set taskSet) {
        if (taskSet.isEmpty()) {
            return;
        }

        long validRegisteEndTime = CalendarBeanUtil.getAfterDaysTimeByHour(1, 3);

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Iterator iterator = taskSet.iterator();
            while (iterator.hasNext()) {
                String curTaskInfo = (String) iterator.next();
                int taskType = Integer.parseInt(curTaskInfo.split(":")[0]);
                String taskId = curTaskInfo.split(":")[1];

                switch (taskType) {
                    case CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND:
                        ;
                    case CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND:
                        Date taskExeTime = CalendarBeanUtil.dateStrToDate(taskId);
                        if (taskExeTime.getTime() > new Date().getTime()
                                && taskExeTime.getTime() <= validRegisteEndTime) {
                            try {
                                if (!taskDao.checkTaskIdExistInSourceOfTaskType(taskId, taskType)) {
                                    // 如果taskType指定的原始任务信息表中找不到taskId（该任务因为修改等原因不存在了），需要删除CalendarTask中对应的任务
                                    taskDao.deleteCalendarTask(taskId, taskType);

                                    if (!taskDao.checkTaskIdExistInCalendarTask(taskId)) {
                                        // 如果删除完CalendarTask中对应的任务后taskId在CalendarTask表中不存在去注销掉was定时服务
                                        try {
                                            ttService.deleteTimerTaskByName(taskId);
//										TimerRegister timerRegister = new TimerRegister();
//										timerRegister.cancelTimer(CalendarCfg.getTimeConnName(),taskId);
                                            // if(false)throw new RemoteException();
                                            logger.info("***Unregiste from was timer.taskId=>" + taskId);
                                        } catch (Exception e) {
                                            logger.error("******Fail to unregister timer task from WAS timer service. [taskId="
                                                    + taskId
                                                    + "],just skip it.");
                                        }
                                    }

                                }
                            } catch (Exception he) {
                                logger.error("******Fail to operate(read or delete) in CalendarTask [taskType="
                                        + taskType
                                        + ";taskId='"
                                        + taskId
                                        + "'],just skip it not rollback because it just to read.");
                            }
                        }
                        break;

                    case CalendarTask.TASK_MULTI_DELETE_DIRTY_ACTS:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_GENERATE_SERIES_ACTS:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_REGISTER_ACTS_MAIL_REMIND_TO_TIMER:
                        // TODO 处理程序
                        break;
                    case CalendarTask.TASK_MULTI_SEND_ALL_ACTS_MAIL_REMIND:
                        // TODO 处理程序
                        break;
                    default:
                        logger.error("******Unknown Task type [" + taskType + "]");
                        break;
                }
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to finish outer app request. Cause: Fail to finish unregiste from WAS timer .");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
    }

    private void doEmailRemindTask(String eventId) {
        List actIds = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            actIds = actDao.getActIdsByTaskId(eventId, CalendarTask.TASK_ONCE_SEND_ACT_MAIL_REMIND);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get activity id from ActivityMailReminder table.");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        if (actIds != null) {
            for (int i = 0; i < actIds.size(); i++) {
                String curActId = (String) actIds.get(i);
                try {
                    logger.debug("---will be sended activity id=" + actIds + "---");
                    this.sendEmailReminder(curActId);
                } catch (Exception e) {
                }
            }
        }

    }

    private void doSMSRemindTask(String eventId) {
        List actIds = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            actIds = actDao.getActIdsByTaskId(eventId, CalendarTask.TASK_ONCE_SEND_ACT_SMS_REMIND);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get activity id from ActivitySmsReminder table.");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        if (actIds != null) {
            for (int i = 0; i < actIds.size(); i++) {
                String curActId = (String) actIds.get(i);
                try {
                    this.sendSmsReminder(curActId, eventId);
                } catch (Exception e) {
                }
            }
        }

    }

    private void sendSmsReminder(String id, String eventId) {
        boolean sendFlag = true;
        StringBuffer smsContent = new StringBuffer();
        // String mailSubject = "[日历提醒]: ";
        String mailSubject = "温馨提示: ";
        smsContent.append(mailSubject);
        String mobile = null;

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity act = actDao.getActivity(id);
            sendFlag = act != null;
            if (sendFlag) {
                SCalendar cal = calDao.getCalendarById(act.getSrcCalendarId());
                UserBean user = userService.getUserFromLdap(cal.getUserId());
                mobile = user.getMobile();
                sendFlag = mobile != null && !mobile.equalsIgnoreCase("") && cal != null;
                if (sendFlag) {
                    //	String calName = cal.getName();
                    String actText = act.getText();
                    if (actText == null || actText.equalsIgnoreCase("")) {
                        actText = "(无主题)";
                    }
                    smsContent.append("您的活动" + "\"").append(actText).append("\"将于");


                    Date stim = act.getStartTime();
                    Date remindTim = CalendarBeanUtil.dateStrToDate(eventId);
                    smsContent.append(CalendarBeanUtil.timesBeforeStr(stim, remindTim));


                    smsContent.append("内开始，详情请参见\"内部门户个人日历系统\"。");
                }
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            sendFlag = false;
            logger.error("******Fail to send sms reminding for activity . [id=" + id + "].");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        if (sendFlag) {
            //TODO implement is
            logger.info("Send sms(now unimplement) to " + mobile + ",content:" + smsContent);
//            Service1Soap ss = null;
//            try {
//                ss = SmsFactory.getInstance().getSmsSender();
//            } catch (MalformedURLException e) {
//            } catch (ServiceException e) {
//            }
//            if (ss == null) {
//                logger.warn("******Fail to get sms sender.");
//            }
//            try {
//                ss.sendSms(mobile, smsContent.toString());
//            } catch (Exception e) {
//                logger.warn("******Fail to send sms inform.");
//            }
        }
    }

    private void sendEmailReminder(String id) {
        boolean sendFlag = true;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        StringBuffer mailContent = new StringBuffer();
        String mailSubject = "";

        String emailAddress = null;

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            Activity act = actDao.getActivity(id);
            logger.debug("---ready to send activity is " + act + "---");
            sendFlag = act != null;
            if (sendFlag) {
                SCalendar cal = calDao.getCalendarById(act.getSrcCalendarId());
                UserBean user = userService.getUserFromLdap(cal.getUserId());

                emailAddress = user.getEmail();
                sendFlag = emailAddress != null && !emailAddress.equalsIgnoreCase("") && cal != null;
                logger.debug("--- find user info:" + sendFlag + " ---");
                if (sendFlag) {
                    String userName = user.getUserName();
                    String calName = cal.getName();
                    String actText = act.getText();
                    if (actText == null || actText.trim().equalsIgnoreCase("")) {
                        actText = "(无主题)";
                    }
                    String actLocation = act.getLocation();
                    String actDetails = act.getDetails();
                    Date stim = act.getStartTime();
                    Date etim = act.getEndTime();

                    mailSubject += "\u0020" + actText + "\u0020@\u0020" + sdf.format(stim) + "\u0020\u2014\u0020" + sdf.format(etim);

                    mailContent.append("<HTML>");
                    mailContent.append("	 <HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=GB2312\"></HEAD>");
                    mailContent.append("  <BODY style=\"border-width:0px\" >");
                    mailContent.append("		<div style=\"padding:10px 7px;font-size:12px;line-height:1.4 font-family:Arial,Sans-serif;text-align:center;\">");
                    // strBuf.append(" <div><a
                    // href=\"http://www.google.com/calendar/\"><img
                    // style=\"border-width:0\"
                    // src=\"http://www.google.com/calendar/images/blue_beta_zh-CN.gif\"
                    // alt=\"Google 日历\"></a></div>");
                    mailContent.append("			<div style=\"width:370px; background:#D2E6D2; border-style:solid;border-color:#ccc; border-width:1px 1px 0 1px; padding:15px 15px 5px 15px; margin:0 auto\">");
                    mailContent.append("				<p style=\"margin:0;color:#000\">").append(userName).append(",此提醒针对</p>");
                    mailContent.append("				<h2 style=\"margin:5px 0;font-size:18px;line-height:1.4;color:#000\">").append(actText).append("</h2>");
                    mailContent.append("				<p style=\"margin:0 0 .5em;\">");
                    mailContent.append("					<span style=\"color:#000\">").append(sdf.format(stim)).append(" &ndash; ").append(sdf.format(etim)).append("</span>");
                    mailContent.append("					<br>");
                    mailContent.append("					<span style=\"color:#676;\">(时区:&#20013;&#22269;&#26102;&#38388; - &#21271;&#20140;)</span>");
                    mailContent.append("					<br>");
                    // strBuf.append(" <span style=\"color:#000\">" + actLocation +
                    // " (<a href=\"http://maps.google.com/maps?q=" +
                    // CalendarBeanUtil.getStrUnicode(actLocation) +
                    // "&amp;hl=zh-CN\">地图</a>)</span>");
                    mailContent.append("					<span style=\"color:#000\">").append(actLocation).append("</span>");
                    mailContent.append("					<br>");
                    mailContent.append("					<span style=\"color:#000\">日历：").append(calName).append("</span>");
                    mailContent.append("					<br>");
                    mailContent.append("					<br>");
                    mailContent.append("					<span style=\"color:#000\">所有者/创建者：").append(userName).append("</span>");
                    mailContent.append("				</p>");
                    mailContent.append("				<p style=\"margin:0 0 1em;color:#000; white-space:pre-wrap !important; white-space:-moz-pre-wrap !important; white-space:-pre-wrap !important; white-space:-o-pre-wrap !important; white-space:pre; word-wrap:break-word;\">");
                    // 活动的details
                    mailContent.append("					").append(actDetails);
                    mailContent.append("					<br>");
                    // strBuf.append(" <a
                    // href=\"http://www.google.com/calendar/event?action=VIEW&amp;eid=bzE1YWJydm9pdXJsdGxwNHFia2QyMW5qZTggYmpzbWl0aEBzaW5hLmNvbQ&amp;tok=MTYjYmpzbWl0aEBzaW5hLmNvbTY2M2I2ZGYzMjhmNTM0OTVjOTA1MDVjODFiNjExZjkwZDRkODFhNmQ&amp;ctz=Asia%2FShanghai&amp;hl=zh_CN\">更多活动详情&raquo;</a>");
                    mailContent.append("				</p>");
                    mailContent.append("		    </div>");
                    mailContent.append("			<div><img src=\"http://www.google.com/calendar/images/envelope.gif\" style=\"background:#D2E6D2; width:420px height:95px\" alt=\"\"></div>");
                    // strBuf.append(" <p style=\"margin:-15px 0 0;\"><a
                    // href=\"http://www.google.com/calendar/\">查看您的日历&raquo;</a>
                    // </p>");
                    mailContent.append("			</div></BODY></HTML>");
                }
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            sendFlag = false;
            logger.error("******Fail to send email reminding for activity . [id=" + id + "].");
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        // 发送邮件
        if (sendFlag) {
            logger.debug("---sending email to " + emailAddress + "---");
            MailSender ms = MailSenderFactory.getMailSender();
            ms.sendActivityInform(emailAddress, mailSubject, mailContent.toString());
        } else {
            logger.debug("---can not send email because user info not exist ---");
        }
    }
}
