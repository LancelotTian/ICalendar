/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.tl.icalendar.util;

import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.dao.impl.HibernateSessionFactory;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.service.impl.CalendarServiceImpl;
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
        u.setEmail("ada@icalendar.com");
        u.setMobile("13688389409");

        List ret = null;
        ret = calendarService.getRenderProps(u, CalendarBeanUtil.dateStrToDate("20080101T000000"), CalendarBeanUtil.dateStrToDate("20100101T000000"));
        for (Object obj : ret) {
            System.out.println(obj);

        }

    }
}
