/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smartdot.calendar.util;

import com.smartdot.calendar.beans.UserBean;
import com.smartdot.calendar.dao.impl.HibernateSessionFactory;
import com.smartdot.calendar.service.CalendarService;
import com.smartdot.calendar.service.impl.CalendarServiceImpl;
import java.util.List;

/**
 *
 * @author TianLiang <Lancelot_Tian@cn.dlink.com>
 */
public class Test {

    public static void main(String[] args) {
        HibernateSessionFactory.getConfiguration();
        CalendarService calendarService = new CalendarServiceImpl();
        UserBean u = new UserBean();
        u.setUserId("ada");
        u.setUserName("女主角");
        u.setEmail("ada@smartdot.com");
        u.setMobile("13688389409");

        List ret = null;
        ret = calendarService.getRenderProps(u, CalendarBeanUtil.dateStrToDate("20080101T000000"), CalendarBeanUtil.dateStrToDate("20100101T000000"));
        for (Object obj : ret) {
            System.out.println(obj);

        }

    }
}
