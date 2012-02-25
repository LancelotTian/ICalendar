/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.tl.icalendar.service.impl;

import net.tl.icalendar.service.impl.CalendarServiceImpl;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.beans.CalendarDisplayConfig;
import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.ShareCalendar;
import net.tl.icalendar.beans.UserBean;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author TianLiang <Lancelot_Tian@cn.dlink.com>
 */
public class CalendarServiceImplTest {

    public CalendarServiceImplTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of getRenderProps method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetRenderProps() {
        System.out.println("getRenderProps");

        CalendarService calService = new CalendarServiceImpl();
        UserBean u = new UserBean();
        u.setUserId("ada");
        u.setUserName("女主角");
        u.setEmail("ada@icalendar.com");
        u.setMobile("13688389409");

        List ret = null;
        ret = calService.getRenderProps(u, CalendarBeanUtil.dateStrToDate("20080101T000000"), CalendarBeanUtil.dateStrToDate("20100101T000000"));
        assertNotNull(ret);
        assertEquals(5, ret.size());
        CalendarDisplayConfig cdc = (CalendarDisplayConfig) ret.get(0);
        assertNotNull(cdc.getId());
        assertEquals(u.getUserId(), cdc.getPersonId());
    }

    /**
     * Test of getDefaultCalByUser method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetDefaultCalByUser() {
        System.out.println("getDefaultCalByUser");
        UserBean user = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        SCalendar expResult = null;
        SCalendar result = instance.getDefaultCalByUser(user);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of modifyCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testModifyCalendar() {
        System.out.println("modifyCalendar");
        String id = "";
        String attrName = "";
        String attrValue = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        SCalendar expResult = null;
        SCalendar result = instance.modifyCalendar(id, attrName, attrValue);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of modifyUserCalDisplayConfig method, of class CalendarServiceImpl.
     */
    @Test
    public void testModifyUserCalDisplayConfig() {
        System.out.println("modifyUserCalDisplayConfig");
        String uid = "";
        Map attrMap = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        instance.modifyUserCalDisplayConfig(uid, attrMap);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of createCalendarWithShare method, of class CalendarServiceImpl.
     */
    @Test
    public void testCreateCalendarWithShare() {
        System.out.println("createCalendarWithShare");
        SCalendar cal = null;
        List shareCalendarList = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        Object[] expResult = null;
        Object[] result = instance.createCalendarWithShare(cal, shareCalendarList);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getCalAccessLevelForUser method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetCalAccessLevelForUser() {
        System.out.println("getCalAccessLevelForUser");
        String uid = "";
        Set calIds = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        Map expResult = null;
        Map result = instance.getCalAccessLevelForUser(uid, calIds);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getCalendarById method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetCalendarById() {
        System.out.println("getCalendarById");
        String cid = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        SCalendar expResult = null;
        SCalendar result = instance.getCalendarById(cid);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDefaultCalendarByUserid method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetDefaultCalendarByUserid() {
        System.out.println("getDefaultCalendarByUserid");
        String userId = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        SCalendar expResult = null;
        SCalendar result = instance.getDefaultCalendarByUserid(userId);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of modifyShareCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testModifyShareCalendar() {
        System.out.println("modifyShareCalendar");
        String cid = "";
        String attrName = "";
        String attrValue = "";
        String secid = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        instance.modifyShareCalendar(cid, attrName, attrValue, secid);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getShareCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetShareCalendar_String_String() {
        System.out.println("getShareCalendar");
        String uid = "";
        String cid = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        List expResult = null;
        List result = instance.getShareCalendar(uid, cid);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of deleteShareCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testDeleteShareCalendar() {
        System.out.println("deleteShareCalendar");
        ShareCalendar shareCalendar = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        String expResult = "";
        String result = instance.deleteShareCalendar(shareCalendar);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of saveShareCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testSaveShareCalendar() {
        System.out.println("saveShareCalendar");
        ShareCalendar shareCalendar = null;
        CalendarServiceImpl instance = new CalendarServiceImpl();
        String expResult = "";
        String result = instance.saveShareCalendar(shareCalendar);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of saveCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testSaveCalendar() {
        System.out.println("saveCalendar");
        CalendarServiceImpl instance = new CalendarServiceImpl();
        
        SCalendar calendar = new SCalendar();
        calendar.setName("中文日历");
        calendar.setUserId("tianliang" + System.currentTimeMillis());
        
        String result = instance.saveCalendar(calendar);
    }

    /**
     * Test of getShareCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testGetShareCalendar_String() {
        System.out.println("getShareCalendar");
        String calendarId = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        Object[] expResult = null;
        Object[] result = instance.getShareCalendar(calendarId);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of deleteCalendar method, of class CalendarServiceImpl.
     */
    @Test
    public void testDeleteCalendar() {
        System.out.println("deleteCalendar");
        String cid = "";
        CalendarServiceImpl instance = new CalendarServiceImpl();
        boolean expResult = false;
        boolean result = instance.deleteCalendar(cid);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
