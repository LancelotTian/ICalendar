package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.tl.icalendar.util.CalendarBeanUtil;
import net.tl.icalendar.util.CalendarCfg;

public class Ping extends HttpServlet {

	private static final long serialVersionUID = -5634026263090575432L;
	

	/**
	 * Constructor of the object.
	 */
	public Ping() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
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
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {}

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
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		String lef = request.getParameter("lef");
		String datePeriod = null;
		
		
		Enumeration enu = request.getParameterNames();
		while(enu.hasMoreElements()){
			String curParamName = (String)enu.nextElement();
			String curParamValue = request.getParameter(curParamName);
			int tempIndex = curParamValue.indexOf("load?emf=");
			if(tempIndex>=0)  datePeriod = getDatePeriod(curParamValue.substring(tempIndex+9));
		}
		
		StringBuffer str = new StringBuffer("while(1);[['v','" + CalendarCfg.getJsFilePrefix() + "']");
		if(datePeriod!=null && lef!=null)
			str.append(","+CalendarBeanUtil.getLoadTimeStampResponse(lef,datePeriod));
		str.append("]");
		out.write(str.toString());
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}
	
	private String getDatePeriod(String str){
		String[] elems = str.split("\n");
		String stim = elems[0].split(" ")[1].split("/")[0];
		String etim = elems[elems.length-1].split(" ")[1].split("/")[1];
		return stim + "/" + etim;
	}

}

