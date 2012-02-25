package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.beans.SCalendar;
import net.tl.icalendar.beans.ShareCalendar;
import net.tl.icalendar.beans.UserBean;
import net.tl.icalendar.service.ActivityService;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.util.Constants;
import net.tl.icalendar.utils.CalendarServletUtils;

public class EditCalList extends HttpServlet {

    /**
     *
     */
    private static final long serialVersionUID = -490802624092856811L;
    private Logger log = Logger.getLogger(EditCalList.class);

    /**
     * Constructor of the object.
     */
    public EditCalList() {
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

    /**
     * The doPost method of the servlet. <br>
     *
     * This method is called when a form has its tag value method equals to post.
     *
     * @param request the request send by the client to the server
     * @param response the response send by the server to the client
     * @throws ServletException if an error occurred
     * @throws IOException if an error occurred
     */
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        response.setContentType("text/javascript");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        String ltyp = request.getParameter("ltyp");
        String cid = request.getParameter("cid");
        String lact = request.getParameter("lact");


        if (null != ltyp && "2".equals(ltyp)) {
            deleteIt(cid, request);
            log.debug("delete calendar successfully with calendar: " + cid);

            if ("DELETE".equals(lact)) {
                out.write("while(1);[['_forceRefresh','0']]");
            } else if ("REMOVE".equals(lact)) {
                out.write("while(1);[['_HandleRemoveCalendarResult','" + cid + "','true']]");
            }

            out.close();

            return;
        }



        String secid = request.getParameter("secid");
        StringBuilder str = new StringBuilder();
        if (lact.equalsIgnoreCase("REMOVE")) {
            str.append(Remove(secid, cid));
        } else if (lact.equalsIgnoreCase("ADD")) {
            str.append(Add(secid, cid));
        }


        out.write(str.toString());
        out.close();

    }

    @Override
    public void init() throws ServletException {
        // Put your code here
    }

    public String Add(String secid, String cid)  {
        StringBuilder str = new StringBuilder();
        boolean flag = false;

        CalendarService calService = ServiceFactory.getInstance().getCalendarService();

        String calendarId = null;

        if (cid.length() == 32) {
            calendarId = cid;
        } else {
            SCalendar calendar = calService.getDefaultCalendarByUserid(cid);
            if (calendar == null) {/////不存在这个账户，则
                flag = true;
            } else {
                calendarId = calendar.getId();
            }
        }

        if (flag) {////若账户不存在��û�������
            str.append("while(1);[['_SE_ShowInvite','");
            str.append(cid);
            str.append("','INVITE']]");
        } else {///看是否有权限添加
            SCalendar calendar = calService.getCalendarById(calendarId);
            ShareCalendar shareCalendar = (ShareCalendar) calService.getShareCalendar(Constants.PUBLIC_UID, calendarId).get(0);
            if (shareCalendar == null) {///此日历不能共享
                str.append("while(1);[['_SE_ShowInvite','");
                str.append(calendar.getUserId());
                str.append("','REQUEST']]");
            } else {///如果存在把其添加入数据库

                UserBean user = ServiceFactory.getInstance().getUserService().getUserFromLdap(calendar.getUserId());//getUserById(calendar.getUserId());
                ShareCalendar shareCalendar_temp = new ShareCalendar();
                shareCalendar_temp.setCalendarId(calendar.getId());
                shareCalendar_temp.setUserId(user.getUserId());
                shareCalendar_temp.setName(calendar.getName());
                shareCalendar_temp.setPower(shareCalendar.getPower());

                calService.saveShareCalendar(shareCalendar_temp);
                str.append("while(1);[['_AddNewPerson','").append(user.getUserName()).append("','").append(calendarId).append("','0','false'],['u',[['").append(calendarId).append("/off','false'],['").append(calendarId).append("/hidden','false'],['hideInvitations','false'],['remindOnRespondedEventsOnly','false'],['hideInvitations_remindOnRespondedEventsOnly','false_false']]],['_SE_refreshAddCalendarView']]");
            }
        }
        return str.toString();
    }

    public String Remove(String secid, String cid) {
        StringBuilder str = new StringBuilder();

        CalendarService calService = ServiceFactory.getInstance().getCalendarService();
        ShareCalendar shareCalendar = (ShareCalendar) calService.getShareCalendar(secid, cid).get(0);
        calService.deleteShareCalendar(shareCalendar);

        str.append("while(1);[['_HandleRemoveCalendarResult','");
        str.append(cid);
        str.append("','true']]");

        return str.toString();
    }

    /**
     * delete calendar by calendar id;
     * @param calId
     * @throws ServletException
     */
    private void deleteIt(String calId, HttpServletRequest request) throws ServletException {

        String secid = CalendarServletUtils.getUserIdByRequest(request);
        if (secid == null || secid.equalsIgnoreCase("")) {
            throw new ServletException("******Can not to find user info from request.");
        }
        CalendarService calService = ServiceFactory.getInstance().getCalendarService();
        ActivityService actService = ServiceFactory.getInstance().getActivityService();

        try {
            SCalendar cal = calService.getDefaultCalendarByUserid(secid);
            if (cal != null && calId.equals(cal.getId())) {
                actService.deleteAllActivitiesInCalendar(calId);
                return;
            }
            calService.deleteCalendar(calId);
        } catch (Exception e) {
            log.error("delete calenar error, e:" + e);
        }
    }
}
