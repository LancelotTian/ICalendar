package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.tl.icalendar.util.CalendarBeanUtil;

public class Compose extends HttpServlet {

	private static final long serialVersionUID = -4890903817166948043L;

	/**
	 * Constructor of the object.
	 */
	public Compose() {
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
    @Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		
		String ctext = request.getParameter("ctext");
		
		
		String etim = request.getParameter("etim");
		String stim = request.getParameter("stim");
		//String qa_src = request.getParameter("qa-src");
		//String secid = request.getParameter("secid");

		PrintWriter out = response.getWriter();
		String ret = "while(1);[['_SpawnQuickAddEvent','" + CalendarBeanUtil.javaStrtoGoogleJsonArrayElementStrInCompose(ctext) + "','','','" + stim + "','" + etim + "',[],'',null,null,[],'']]";
		out.write(ret);
		out.close();
		
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
    @Override
	public void init() throws ServletException {
		// Put your code here
	}

}
