package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.ShareCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.business.EditCalDetailsBuzz;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.service.UserService;
import net.tl.icalendar.util.Constants;
import net.tl.icalendar.utils.CalendarServletUtils;

public class EditCalDetails extends HttpServlet {

    /**
     *
     */
    private static final long serialVersionUID = -5706538149573447916L;
    private Logger log = Logger.getLogger(EditCalDetails.class);

    /**
     * Constructor of the object.
     */
    public EditCalDetails() {
        super();
    }

    /**
     * Destruction of the servlet. <br>
     */
    @Override
    public void destroy() {
        super.destroy(); // Just puts "destroy" string in log
        // Put your code here
    }

    /**
     * The doGet method of the servlet. <br>
     *
     * This method is called when a form has its tag value method equals to get.
     *
     * @param request the request send by the client to the server
     * @param response the response send by the server to the client
     * @throws ServletException if an error occurred
     * @throws IOException if an error occurred
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        response.setContentType("text/javascript");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        String _dtidAddSample = "_new_calendar_id";

        //如果当前操作为共享设置，则dtid为一个值，表示当前正在共享出去的日历id
        String dtid = request.getParameter("dtid");

        if (dtid != null && dtid.indexOf(_dtidAddSample) > -1) {
            out.write(doAddOtherCalendar(request, response));
            out.close();

            return;
        }

        //张林 begin 1
		/*
         * 一些参数的意义
         * ap公开日历的时候会传递ap的值，ap[0]应该是邀请人，当这个人不存在和共享是不同的值
         * dtid日历的id，因为设置的时候有可能要升级多个id
         * secid 此日历账户的id
         * cn是修改日历名称后的日历的名称，只有修改后才有，否则为空
         * rp是在取消公开日历或者删除别的日历的时候的值
         * ap_a是根据ap[1]的值而改变，若ap[1]不变其值也不变
         */
        StringBuilder strBuf = new StringBuilder();

        //取参数
        //ap[2*i] （i=0,1,2...） 表示被共享人的uid或其用户的默认主日历id；ap[2*i+1] 表示ap[2*i]指定的被共享人的权限
        String[] ap = request.getParameterValues("ap");
        //每个元素与ShareCalendar.java中的userid含义一致。
        String[] rp = request.getParameterValues("rp");
        //String secid = request.getParameter("secid");

        //如果设置共享的同时又修改日历的“详细信息”时会出现下面3个参数，否则不会。
        //日历名称
        String cn = request.getParameter("cn");
        //日历说明
        String details = request.getParameter("details");
        //日历地点
        String location = request.getParameter("location");



        //变量初始化
        SCalendar calendar = new SCalendar();
        Iterator it = null;

        UserBean userBean = null;
        StringBuffer str1 = new StringBuffer();////用来存放70后面的值
        StringBuffer str2 = new StringBuffer();
        StringBuffer str3 = new StringBuffer();
        //ShareCalendar shareCalendar = new ShareCalendar();


        String secid = CalendarServletUtils.getUserIdByRequest(request);
        if (secid == null || secid.equalsIgnoreCase("")) {
            throw new ServletException("******Can not to find user info from request.");
        }
        CalendarService calService = ServiceFactory.getInstance().getCalendarService();
        UserService userService = ServiceFactory.getInstance().getUserService();

        //取得当前正在共享出去的日历
        calendar = calService.getCalendarById(dtid);

        //修改日历的名称、说明和地点信息
        if (cn != null) {
            calendar.setName(cn);
        }
        if (details != null) {
            calendar.setDetails(details);
        }
        if (location != null) {
            calendar.setLocation(location);
        }
        //修改完后保存
        calService.saveCalendar(calendar);

        //日历当前名称
        String name = calendar.getName();

        Set notInLdap = new HashSet();


        if (ap != null) {							//如果共享日历给别人时

            for (int i = 0; i < ap.length; i = i + 2) {	//保存到sharecalendar里面,验证是否存在数据库中，如果存在则修改，否则存储。

                //如果ap[2*n]（n=0,1,2,...）为被共享人的默认主日历id
                if ((ap[i].length() == 32) && !(ap[i].equals(Constants.PUBLIC_UID))) {
                    SCalendar cal = calService.getCalendarById(ap[i]);
                    //取得对应的用户uid，并替换掉原始的日历id
                    ap[i] = cal.getUserId();
                }

                //如果当前用户在ldap中不存在（不是合法用户时）跳过该共享设置，不写到数据库中
                if (userService.getUserFromLdap(ap[i]) == null) {
                    notInLdap.add(ap[i]);
                    continue;
                }

                //取出ShareClendar.java表中ap[i]指定的用户与dtid指定的日历之间的共享信息
                List list = calService.getShareCalendar(ap[i], dtid);

                ShareCalendar shareCalendar = new ShareCalendar();
                if (list.size() > 0) {
                    shareCalendar = (ShareCalendar) list.get(0);
                }
                //修改\初始化共享信息
                shareCalendar.setCalendarId(dtid);
                shareCalendar.setUserId(ap[i]);
                shareCalendar.setPower(new Integer(Integer.parseInt(ap[i + 1])));
                shareCalendar.setName(name);
                //保存共享信息
                calService.saveShareCalendar(shareCalendar);
            }
        }

        if (rp != null) {						//如果当前操作还包含取消某些共享时
            for (int i = 0; i < rp.length; i++) {
                if ((rp[i].length() == 32) && !(rp[i].equals(Constants.PUBLIC_UID))) {
                    SCalendar cal = calService.getCalendarById(rp[i]);
                    rp[i] = cal.getUserId();
                }
                ShareCalendar shareCalendar = (ShareCalendar) calService.getShareCalendar(rp[i], dtid).get(0);
                if (shareCalendar != null) {
                    //取消共享
                    calService.deleteShareCalendar(shareCalendar);
                }
            }
        }





        //生成响应信息

        //取ShareCalendar.java表中所有calendarId==dtid的记录
        List list = calService.getShareCalendar(null, dtid);

        it = list.iterator();

        //取得当前用户
        userBean = userService.getUserFromLdap(secid);

        strBuf.append("while(1);[['_DS_put','").append(dtid).append("',");
        strBuf.append(70).append(",");

        //如果日历公开为true；否则为false
        boolean flag = false;
        while (it.hasNext()) {

            ShareCalendar sc = (ShareCalendar) it.next();
            //TODO 合并精简
            if (sc.getUserId().equals(Constants.PUBLIC_UID) && sc.getCalendarId().equals(dtid)) {
                flag = true;
                str1.append(sc.getPower()).append(",");
            }
            str2.append("'").append(sc.getUserId()).append("',");
            str2.append(sc.getPower()).append(",");
            if (sc.getUserId().equals(Constants.PUBLIC_UID)) {

                str3.append(",");
                str3.append("'").append(sc.getUserId()).append("',");
                str3.append(5).append(",");
                str3.append("'Public principal','__public_principal__@public.calendar.google.com'");

            } else {
                SCalendar calendar_temp = calService.getDefaultCalendarByUserid(sc.getUserId());
                str3.append(",");
                if (calendar_temp == null) {
                    str3.append("'").append(sc.getUserId()).append("',");
                } else {
                    str3.append("'").append(calendar_temp.getId()).append("',");
                }
                str3.append(0).append(",'','");
                str3.append(sc.getUserId()).append("'");
            }

        }
        if (!flag) {
            strBuf.append(0).append(",");
        } else {
            strBuf.append(str1);
        }

        strBuf.append(0).append(",");
        strBuf.append("'").append(calendar.getName()).append("'");

        strBuf.append(",'Asia/Shanghai',");
        strBuf.append("'").append(calendar.getLocation()).append("'" + ",");//location
        strBuf.append("'").append(calendar.getDetails()).append("'" + ",");

        strBuf.append("'").append(calendar.getDetails()).append("'" + ",'");
        strBuf.append("0cc8de159ca1b162568db21e2530f4f2',['");

        strBuf.append(dtid).append("',");
        strBuf.append(70).append(",");
        strBuf.append(str2);
        strBuf.deleteCharAt(strBuf.length() - 1);

        strBuf.append("],null,'','");
        strBuf.append(secid);
        strBuf.append("','CN','add',null,null,'(GMT+08:00) 中国时间 - 北京',[],[],null,null,0,1],['_SE_refreshAddCalendarView'],");

        strBuf.append("['ap',['");

        strBuf.append(dtid).append("',0,'");
        strBuf.append(userBean.getUserName());
        strBuf.append("','").append(secid).append("'");

        strBuf.append(str3);
        strBuf.append("]],['_RedrawCheckboxes'],");
        Iterator it_notInLdap = notInLdap.iterator();
        StringBuilder tempstb = new StringBuilder("。但是用户:");
        int g = 0;
        while (it_notInLdap.hasNext()) {
            String curUid = (String) it_notInLdap.next();
            if (g > 0) {
                tempstb.append(",");
            }
            tempstb.append(curUid);
            g++;
        }
        tempstb.append("不是合法用户名因此对这些用户的共享设置未成功！");
        strBuf.append("['_ShowMessage','已保存更改").append(notInLdap.size() > 0 ? tempstb.toString() : "").append("']]");



        out.write(strBuf.toString());
        //张林 end 1

    }

    @Override
    public void init() throws ServletException {
        // Put your code here
    }

    /**
     * @author chengxc
     * 添加日历调用方法；
     * @param request
     * @param response
     * @return
     * @throws ServletException
     * @throws IOException
     */
    private String doAddOtherCalendar(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        log.info("deal add other calendar.");

        SCalendar calendar = createCalendar(request);
        Object[] result = createShare(request);
        List shares = (List) result[0];
        String secid = CalendarServletUtils.getUserIdByRequest(request);
        if (secid == null || secid.equalsIgnoreCase("")) {
            throw new ServletException("******Can not to find user info from request.");
        }
        CalendarService calService = ServiceFactory.getInstance().getCalendarService();

        Object[] objs = calService.createCalendarWithShare(calendar, shares);
        String calId = "";
        List sharesAfter = new ArrayList();
        if (objs != null && objs.length == 2) {
            calId = (String) objs[0];
            sharesAfter = (List) objs[1];
        }

        calendar.setId(calId);

        String responseStr = new EditCalDetailsBuzz().createResponseStr(calendar, sharesAfter, request.getParameter("dtid"), secid, (Set) result[1]);
        log.debug("responseStr: " + responseStr);

        return responseStr;
    }

    /**
     * @author chengxc
     * 添加日历 doAddOtherCalendar方法中调用；
     * @param request
     * @return
     */
    private SCalendar createCalendar(HttpServletRequest request) {
        String secId = request.getParameter("secid");
        String name = request.getParameter("cn");
        String details = request.getParameter("details");
        String location = request.getParameter("location");
        String gl = request.getParameter("gl");
        String ctz = request.getParameter("ctz");
        String ncal = request.getParameter("ncal");
        String undefined = request.getParameter("undefined");

        log.info("secId: " + secId + ", name: " + name + ", details: " + details + ", location: " + location
                + ", gl: " + gl + ", ctz: " + ctz + ", ncal: " + ncal + ", undefined: " + undefined);

        SCalendar cal = new SCalendar();
        cal.setUserId(secId);
        cal.setName(name);
        cal.setDetails(details);
        cal.setLocation(location);
        cal.setGl(gl);
        cal.setCtz(ctz);
        cal.setNcal(("true".equals(ncal) ? Boolean.TRUE : Boolean.FALSE));
        cal.setUndefined(("true".equals(undefined) ? Boolean.TRUE : Boolean.FALSE));
        cal.setIsDefault((false ? Boolean.TRUE : Boolean.FALSE));

        return cal;
    }

    /**
     * @author chengxc
     * 添加日历 doAddOtherCalendar中调用；
     * @param request
     * @return
     * @throws RemoteException
     */
    private Object[] createShare(HttpServletRequest request) throws ServletException{
        String[] aps = request.getParameterValues("ap");
        String apId = "", apPopedum = "";

        List shares = new ArrayList();

        String secid = CalendarServletUtils.getUserIdByRequest(request);
        if (secid == null || secid.equalsIgnoreCase("")) {
            throw new ServletException("******Can not to find user info from request.");
        }
        CalendarService calService = ServiceFactory.getInstance().getCalendarService();

        Set notInLdap = new HashSet();

        if (aps != null && aps.length > 1) {
            int apsLen = aps.length;
            int coupleLen = apsLen / 2;
            for (int i = 0; i < coupleLen; i++) {
                apId = aps[i * 2];
                apPopedum = aps[i * 2 + 1];
                ShareCalendar share = new ShareCalendar();
                if (!Constants.PUBLIC_UID.equals(apId)) { // to be saved must be userId except for public.
                    try {
                        SCalendar cal = calService.getCalendarById(apId);
                        if (cal != null) {
                            apId = cal.getUserId();
                        }
                    } catch (Exception e) {
                    }
                }

                //如果当前用户在ldap中不存在（不是合法用户时）跳过该共享设置，不写到数据库中
                if (ServiceFactory.getInstance().getUserService().getUserFromLdap(apId) == null) {
                    notInLdap.add(apId);
                    continue;
                }

                share.setUserId(apId);
                share.setPower(new Integer(apPopedum));

                shares.add(share);
            }
        }
        Object[] ret = new Object[2];
        ret[0] = shares;
        ret[1] = notInLdap;
        return ret;
    }
}
