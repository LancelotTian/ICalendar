package net.tl.icalendar.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.Session;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.beans.ActivityShare;
import net.tl.icalendar.beans.CalendarDisplayConfig;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.SeriesBaseInfo;
import net.tl.icalendar.beans.ShareCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.dao.ActivityDao;
import net.tl.icalendar.dao.CalendarDao;
import net.tl.icalendar.dao.impl.ActivityDaoImpl;
import net.tl.icalendar.dao.impl.CalendarDaoImpl;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.format.Activity2Js;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.service.UserService;
import net.tl.icalendar.util.Constants;

public class CalendarServiceImpl implements CalendarService {

    private static Logger logger = Logger.getLogger(UserServiceImpl.class);
    //private String my_secid_to_del;
    private CalendarDao calDao;

    //constructor
    public CalendarServiceImpl(/*String secid*/) {
        //	this.my_secid_to_del = secid;
        calDao = new CalendarDaoImpl();
    }

    @Override
    public List getRenderProps(UserBean user, Date startDate, Date endDate) {
        List ret = new ArrayList();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            ActivityDao actDao = new ActivityDaoImpl();

            CalendarDisplayConfig cdc = calDao.getCalendarDisplayConfigByUid(user.getUserId());
            if (cdc == null) {
                cdc = this.createCalendarDisplayConfigForUser(user.getUserId());
                cdc = calDao.saveCalendarDisplayConfig(cdc);
            }
            ret.add(cdc);

            List calendarList = calDao.getCalendarsByUid(user.getUserId());
            //如果当前用户目前还没有任何日历时为其创建一个默认日历
            if (calendarList != null && calendarList.isEmpty()) {
                SCalendar mcal = this.createDefaultCalendarForUser(user.getUserId());
                calendarList.add(calDao.saveCalendar(mcal));
            }

            // ret.add(calendarList);

            // zhanglin add
            SCalendar defaultCalendar = null;

            List shareOutCals = new ArrayList();
            List shareInCals = new ArrayList();

            for (int i = 0; i < calendarList.size(); i++) {
                SCalendar curCal = (SCalendar) calendarList.get(i);
                if (curCal.getIsDefault().booleanValue()) {
                    defaultCalendar = curCal;
                }
                shareOutCals.addAll(calDao.getShareCalendar(null, curCal.getId()));
            }

            ret.add(defaultCalendar);

            shareInCals.addAll(calDao.getShareCalendar(user.getUserId(), null));

            StringBuilder rt_clientDispatches = new StringBuilder();
            StringBuilder _Dispatch = new StringBuilder();

            rt_clientDispatches.append("[['_DS_put','").append(defaultCalendar.getId()).append("',");
            rt_clientDispatches.append(70).append(",");

            StringBuilder tempStr1_out = new StringBuilder();
            StringBuilder tempStr2_out = new StringBuilder();

            int tempPower = 0;
            for (int i = 0; i < shareOutCals.size(); i++) {

                ShareCalendar sc = (ShareCalendar) shareOutCals.get(i);
                String curPersonId = sc.getUserId();
                if (curPersonId.equals(Constants.PUBLIC_UID)) {
                    tempPower = sc.getPower().intValue();
                    tempStr1_out.append(",'" + Constants.PUBLIC_UID + "',");
                    tempStr1_out.append(5);
                    tempStr1_out.append(",'Public principal','__public_principal__@public.calendar.google.com'");
                } else {
                    if (curPersonId != null && !curPersonId.equalsIgnoreCase("")) {
                        SCalendar curPersonDefaultCal = calDao.getMainCalendarByUid(curPersonId);
                        if (curPersonDefaultCal != null) {
                            tempStr1_out.append(",'");
                            tempStr1_out.append(curPersonDefaultCal.getId()).append("',");
                            tempStr1_out.append(0).append(",' ','");
                            tempStr1_out.append(sc.getUserId()).append("'");
                        }
                    }
                }

                tempStr2_out.append("'").append(sc.getUserId()).append("',");
                tempStr2_out.append(sc.getPower()).append(",");
            }

            StringBuilder tempStr1_in = new StringBuilder();
            StringBuilder tempStr2_in = new StringBuilder();

            /** add by chengxc calendar list except default calendar. */
            StringBuilder listCalsExDef = new StringBuilder();
            for (Iterator listIt = calendarList.iterator(); listIt.hasNext();) {
                SCalendar cal = (SCalendar) listIt.next();
                if (!cal.getIsDefault().booleanValue()) {
                    listCalsExDef.append("['").append(cal.getId()).append("/off','").append(cal.getOff() == null ? "false" : cal.getOff().toString()).append("'],");
                    listCalsExDef.append("['").append(cal.getId()).append("/hidden','").append(cal.getHidden() == null ? "false" : cal.getHidden().toString()).append("'],");
                    listCalsExDef.append("['").append(cal.getId()).append("/color','").append(cal.getColor() == null ? "1" : cal.getColor().toString()).append("'],");
                }
            }
            _Dispatch.append(listCalsExDef.toString());

            for (int i = 0; i < shareInCals.size(); i++) {
                ShareCalendar sc = (ShareCalendar) shareInCals.get(i);
                SCalendar curCal = calDao.getCalendarById(sc.getCalendarId());
                if (curCal != null) {
                    String curCalOwnerId = curCal.getUserId();
                    UserBean curUser = this.getIndiCalUser(curCalOwnerId);

                    tempStr1_in.append(",'");
                    tempStr1_in.append(sc.getCalendarId()).append("',0,'").append(curUser.getUserName()).append("','");
                    tempStr1_in.append(curCalOwnerId).append("'");

                    tempStr2_in.append(",['_AddNewPerson','").append(curUser.getUserName()).append("','");
                    tempStr2_in.append(curCal.getId()).append("',");
                    tempStr2_in.append("'1','true']");

                    _Dispatch.append("['").append(sc.getCalendarId()).append("/name','").append(sc.getName()).append("'],");
                    _Dispatch.append("['").append(sc.getCalendarId()).append("/color','").append(sc.getColor()).append("'],");
                    _Dispatch.append("['").append(sc.getCalendarId()).append("/off','").append(sc.getOff()).append("'],");
                    _Dispatch.append("['").append(sc.getCalendarId()).append("/hidden','").append(sc.getHidden()).append("'],");
                }
            }

            if (_Dispatch.length() > 0) {
                _Dispatch.deleteCharAt(_Dispatch.length() - 1);
            }

            rt_clientDispatches.append(tempPower).append(",");
            rt_clientDispatches.append(0).append(",");
            rt_clientDispatches.append("'").append(defaultCalendar.getName()).append("'");
            rt_clientDispatches.append(",'Asia/Shanghai',");
            rt_clientDispatches.append("null,");// 此处location
            rt_clientDispatches.append("null,");// 此处details先不考虑
            rt_clientDispatches.append("null,'");// 不确定的一个参数
            rt_clientDispatches.append("b490e9ae604f43682316fc54eb2374c7',['");
            rt_clientDispatches.append(defaultCalendar.getId()).append("',");// 此用户持有者本身的日历id，理论上应该加入到数据库，再讨论
            rt_clientDispatches.append(70).append(",");
            rt_clientDispatches.append(tempStr2_out.toString());
            if (rt_clientDispatches.length() > 0) {
                rt_clientDispatches.deleteCharAt(rt_clientDispatches.length() - 1);
            }

            rt_clientDispatches.append("],null,'','");
            rt_clientDispatches.append(user.getUserId());// ///////////////////////////////-----------12.18
            rt_clientDispatches.append("','CN','add',null,null,'(GMT+08:00) 中国时间- 北京',[],[],null,null,0,1],['_SE_refreshAddCalendarView'],");

            rt_clientDispatches.append("['ap',['");
            // 添加新增加的人的日历id,

            //
            // /一下是显示账户日历和用户id所对应
            rt_clientDispatches.append(defaultCalendar.getId()).append("',0,'");
            rt_clientDispatches.append(user.getUserName());
            rt_clientDispatches.append("','").append(user.getUserId()).append("'");
            rt_clientDispatches.append(tempStr1_out.toString());

            rt_clientDispatches.append("]],['_RedrawCheckboxes'],['ap',['");

            rt_clientDispatches.append(defaultCalendar.getId()).append("',0,'");
            rt_clientDispatches.append(user.getUserName());
            rt_clientDispatches.append("','").append(user.getUserId()).append("',");

            /** add by chengxc */
            for (Iterator listIt = calendarList.iterator(); listIt.hasNext();) {
                SCalendar cal = (SCalendar) listIt.next();
                if (!cal.getIsDefault().booleanValue()) {
                    rt_clientDispatches.append("'").append(cal.getId()).append("',0,'");
                    rt_clientDispatches.append(cal.getName());
                    rt_clientDispatches.append("','").append(cal.getGroupEmail()).append("'");
                    if (listIt.hasNext()) {
                        rt_clientDispatches.append(",");
                    }
                }
            }

            // add by ray
            for (int i = 0; i < calendarList.size(); i++) {
                SCalendar curCal = (SCalendar) calendarList.get(i);
                rt_clientDispatches.append(this.getSharePersons(actDao.getActsInPeriodByCalid(curCal.getId(), startDate, endDate)));

            }

            rt_clientDispatches.append(this.getActivityStr(actDao.getShareAcitivitiesInPeriod(user.getUserId(), startDate, endDate)));

            // end

            rt_clientDispatches.append(tempStr1_in.toString());
            rt_clientDispatches.append("]],");

            rt_clientDispatches.append("['sb','").append(defaultCalendar.getId()).append("',2,1],");
            rt_clientDispatches.append("['sb','").append(defaultCalendar.getId()).append("',1,3,600]");

            rt_clientDispatches.append(",['_DS_SetPublicID','" + Constants.PUBLIC_UID + "']");
            rt_clientDispatches.append(tempStr2_in.toString());
            rt_clientDispatches.append(",['_AddNewPerson','");
            rt_clientDispatches.append(user.getUserName());
            rt_clientDispatches.append("','");
            rt_clientDispatches.append(defaultCalendar.getId());
            rt_clientDispatches.append("','2','true']");

            /** add by chengxc */
            for (Iterator listIt = calendarList.iterator(); listIt.hasNext();) {
                SCalendar cal = (SCalendar) listIt.next();
                if (!cal.getIsDefault().booleanValue()) {
                    rt_clientDispatches.append(",['_AddNewPerson','");
                    rt_clientDispatches.append(cal.getName());
                    rt_clientDispatches.append("','");
                    rt_clientDispatches.append(cal.getId());
                    rt_clientDispatches.append("','2','true']");
                }
            }

            rt_clientDispatches.append("];");

            List activities = new ArrayList();

            for (int i = 0; i < calendarList.size(); i++) {
                SCalendar curCal = (SCalendar) calendarList.get(i);
                activities.addAll(actDao.getActsInPeriodByCalid(curCal.getId(), startDate, endDate));

            }

            // add by ray
            activities.addAll(actDao.getShareAcitivitiesInPeriod(user.getUserId(), startDate, endDate));


            int actSize = activities.size();
            StringBuilder strBuf = new StringBuilder("[");

            for (int i = 0; i < actSize; i++) {
                Activity curEntry = (Activity) activities.get(i);
                if (i > 0) {
                    strBuf.append(",");
                }
                String actS = new Activity2Js(user.getUserId(), new Integer(100), curEntry).toLoadRespString(Activity2Js.ADDORUPDATE);
                strBuf.append(actS);
            }
            // TODO
            // strBuf.append(",['a','2c94da051eb8fdc1011eb8feb95a0002','myAct','20090111T050000','20090111T063000',b,,,526083,,,22,'{\\42a\\42:[{\\42i\\42:\\422c94da051eb53d9c011eb53e88f10003\\42,\\42s\\42:1,\\42n\\42:\\42程秀超\\42},{\\42i\\42:\\422c94da051eb48f74011eb4b3270f005b\\42,\\42s\\42:3}]}']");

            strBuf.append("]");
            ret.add(strBuf.toString());

            ret.add(rt_clientDispatches.toString());
            ret.add(_Dispatch.toString());

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get calendar render props for user [id=" + user.getUserId() + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return ret;
    }

    @Override
    public SCalendar getDefaultCalByUser(UserBean user) {
        SCalendar cal = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            cal = calDao.getMainCalendarByUid(user.getUserId());
            //当前用户还没有主日历
            if (cal == null) {
                //为用户创建主日历
                cal = this.createDefaultCalendarForUser(user.getUserId());
                cal = calDao.saveCalendar(cal);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get default calendar for user [id=" + user.getUserId() + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return cal;
    }

    @Override
    public SCalendar modifyCalendar(String id, String attrName, String attrValue) {
        SCalendar cal = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            cal = calDao.getCalendarById(id);

            if (attrName.equalsIgnoreCase(SCalendar.COLOR)) {
                cal.setColor(Integer.valueOf(attrValue));

            } else if (attrName.equalsIgnoreCase(SCalendar.OFF)) {
                cal.setOff(attrValue.equalsIgnoreCase("true"));
            } else if (attrName.equalsIgnoreCase(SCalendar.HIDDEN)) {
                cal.setHidden(("" + attrValue.equalsIgnoreCase("true")).toLowerCase());
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to modify calendar. calendar [id=" + id + "],attribute [name=" + attrName + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return cal;
    }

    @Override
    public void modifyUserCalDisplayConfig(String uid, Map attrMap) {
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            CalendarDisplayConfig calDC = calDao.getCalendarDisplayConfigByUid(uid);
            calDC.updateAttr(attrMap);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to modify calendar display config. [userid=" + uid + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
    }

    private UserBean getIndiCalUser(String userId) {
        // logger.info("******Get user from ldap ejb client. [userid=" + userId
        // +"]");
        if (userId == null || userId.equalsIgnoreCase("")) {
            logger.error("******Current operation is attemptting to lookup null or empty string uid from LDAP.");
        }

        UserBean user = new UserServiceImpl().getUserFromLdap(userId);

        if (user == null) {
            logger.warn("******User[uid=" + userId + "] not exist in LDAP!Maybe the user had been deleted from ldap.Will return default user.");
            user = new UserBean();
            user.setUserId(userId);
            user.setUserName(userId + "NotExistInLdap");
        }

        return user;
    }

    @Override
    public Object[] createCalendarWithShare(SCalendar cal, List shareCalendarList) {

        String id = null;

        Object[] obj = new Object[2];

        try {

            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            id = calDao.saveCalendar(cal).getId();

            obj[0] = id;

            for (int i = 0; i < shareCalendarList.size(); i++) {

                ShareCalendar sc = (ShareCalendar) shareCalendarList.get(i);

                sc.setCalendarId(id);
                sc.setName(cal.getName());

                HibernateSessionFactory.getSessionFactory().getCurrentSession().save(sc);
            }

            obj[1] = shareCalendarList;

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("fail to save Calendar", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return obj;
    }

    @Override
    public Map getCalAccessLevelForUser(String uid, Set calIds) {
        Map ret = new HashMap();

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();
            Iterator it = calIds.iterator();
            while (it.hasNext()) {
                String calId = (String) it.next();
                Integer curAccessLevel = calDao.getCalAccessLevelForUser(uid, calId);
                ret.put(calId, curAccessLevel);
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to finish outer app request. Cause: Fail to get access level [" + uid + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return ret;
    }

    @Override
    public SCalendar getCalendarById(String cid) {
        SCalendar sc = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            sc = calDao.getCalendarById(cid);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get calendar by id", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return sc;
    }

    @Override
    public SCalendar getDefaultCalendarByUserid(String userId) {
        SCalendar sc = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            sc = calDao.getMainCalendarByUid(userId);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get calendar by id", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return sc;
    }

    @Override
    public void modifyShareCalendar(String cid, String attrName,
            String attrValue, String secid) {
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            ShareCalendar shareCalendar = (ShareCalendar) calDao.getShareCalendar(secid, cid).get(0);

            if (attrName.equals("name")) {
                shareCalendar.setName(attrValue);
            } else if (attrName.equals("color")) {
                shareCalendar.setColor(new Integer(Integer.parseInt(attrValue)));
            } else if (attrName.equals("hidden")) {
                shareCalendar.setHidden(Boolean.valueOf(attrValue));
            } else if (attrName.equals("off")) {
                shareCalendar.setOff(Boolean.valueOf(attrValue));
            }

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to modify sharecalendar. calendar [id=" + cid + "],attribute [name=" + attrName + "]", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
    }

    @Override
    public List getShareCalendar(String uid, String cid) {
        List list = new ArrayList();
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            list = calDao.getShareCalendar(uid, cid);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get sharecalendar", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return list;

    }

    @Override
    public String deleteShareCalendar(ShareCalendar shareCalendar) {
        String id = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            id = calDao.deleteShareCalendar(shareCalendar);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to delete sharecalendar", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return id;
    }

    @Override
    public String saveShareCalendar(ShareCalendar shareCalendar) {
        String shareCalendarId = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            shareCalendarId = calDao.saveShareCalendar(shareCalendar).getId();

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to get sharecalendar", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return shareCalendarId;

    }

    @Override
    public String saveCalendar(SCalendar calendar) {
        String calendarId = null;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            calendarId = calDao.saveCalendar(calendar).getId();

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            logger.error("******Fail to save calendar", ex);
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }
        return calendarId;
    }

    @Override
    public Object[] getShareCalendar(String calendarId) {

        Object[] obj = new Object[3];

        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            SCalendar cal = calDao.getCalendarById(calendarId);

            obj[0] = cal;

            obj[1] = calDao.getMainCalendarByUid(cal.getUserId());

            obj[2] = calDao.getShareCalendar(null, calendarId);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return obj;
    }

    private String getSharePersons(List activities) {
        UserService userService = new UserServiceImpl();
        StringBuilder rt_clientDispatches = new StringBuilder();
        rt_clientDispatches.append("");
        Set uids = new HashSet();
        if (null != activities) {
            for (int i = 0; i < activities.size(); i++) {
                Activity ac = (Activity) activities.get(i);

                Iterator it = ac.getActivityShare().iterator();

                while (it.hasNext()) {
                    ActivityShare share = (ActivityShare) it.next();
                    uids.add(share.getUid());
                }
            }

            Iterator uidIt = uids.iterator();

            while (uidIt.hasNext()) {
                String uid = (String) uidIt.next();
                if (null != uid) {
                    SCalendar cal = calDao.getMainCalendarByUid(uid);
                    if (cal == null) {
                        cal = this.createDefaultCalendarForUser(uid);
                        cal = calDao.saveCalendar(cal);
                    }

                    String calID = cal.getId();
                    rt_clientDispatches.append(",'").append(calID).append("'" + ",0,'");
                    UserBean user = userService.getUserFromLdap(uid);
                    rt_clientDispatches.append(user != null ? user.getUserName() : "");
                    rt_clientDispatches.append("','").append(uid).append("'");
                }
            }
        }

        return rt_clientDispatches.toString();
    }

    private String getActivityStr(List activities) {
        UserService userService = new UserServiceImpl();
        StringBuilder rt_clientDispatches = new StringBuilder();
        rt_clientDispatches.append("");
        Set uids = new HashSet();
        if (null != activities) {
            for (int i = 0; i < activities.size(); i++) {
                Activity ac = (Activity) activities.get(i);

                uids.add(ac.getSecid());
            }

            Iterator uidIt = uids.iterator();

            while (uidIt.hasNext()) {
                String uid = (String) uidIt.next();
                SCalendar tc = calDao.getMainCalendarByUid(uid);
                if (tc == null) {
                    tc = this.createDefaultCalendarForUser(uid);
                    tc = calDao.saveCalendar(tc);
                }
                String calID = tc.getId();
                rt_clientDispatches.append(",'").append(calID).append("'" + ",0,'");
                UserBean user = userService.getUserFromLdap(uid);
                rt_clientDispatches.append(user != null ? user.getUserName() : "");
                rt_clientDispatches.append("','").append(uid).append("'");
            }
        }

        return rt_clientDispatches.toString();
    }

    @Override
    public boolean deleteCalendar(String cid) {

        boolean flag = false;
        try {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().beginTransaction();

            ActivityDao actDao = new ActivityDaoImpl();

            Session session = HibernateSessionFactory.getSessionFactory().getCurrentSession();

            String hql = " delete net.tl.icalendar.beans.ShareCalendar  entry where entry.calendarId='" + cid + "'";


            session.createQuery(hql).executeUpdate();

            SCalendar cal = (SCalendar) session.get("net.tl.icalendar.beans.SCalendar", cid);

            if (null == cal) {
                return false;
            }
            //删除日历下的所有活动
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

            //删除日历本身
            session.delete(cal);

            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().commit();

            flag = true;
        } catch (Exception ex) {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().getTransaction().rollback();
        } finally {
            HibernateSessionFactory.getSessionFactory().getCurrentSession().close();
        }

        return flag;
    }

    private SCalendar createDefaultCalendarForUser(String uid) {

        UserService userService = new UserServiceImpl();
        UserBean user = userService.getUserFromLdap(uid);

        if (user != null) {
            String userid = user.getUserId();
            String username = user.getUserName();
            if (username == null || username.trim().equalsIgnoreCase("")) {
                username = userid;
            }

            SCalendar calendar = new SCalendar();
            calendar.setColor(new Integer(1));
            calendar.setOff((false ? Boolean.TRUE : Boolean.FALSE));
            calendar.setIsDefault((true ? Boolean.TRUE : Boolean.FALSE));
            calendar.setName(username + "的日历");
            calendar.setUserId(userid);
            calendar.setDetails(username + "的默认日历");
            return calendar;
        }
        return null;
    }

    private CalendarDisplayConfig createCalendarDisplayConfigForUser(String uid) {
        CalendarDisplayConfig cdc = new CalendarDisplayConfig();
        cdc.setPersonId(uid);
        return cdc;
    }
}
