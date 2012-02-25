package com.smartdot.calendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UpdateTzsServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8158373404711417232L;

	/**
	 * Constructor of the object.
	 */
	public UpdateTzsServlet() {
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
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
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
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		String gl = request.getParameter("gl");
		String hl = request.getParameter("hl");
		String userId = request.getParameter("secid");
		
		response.setContentType("text/javascript");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		//TODO: modify str; and the return string should be create with the 'gl' and 'hl', so different country the string is different.
		
		/**
		 * 2.显示所有时区，传入hl secid, 返回所有时区列表；
		 *  */
		
		
		String str = "while(1);[['_TZ_updateCache',['Asia/Shanghai','(GMT+08:00) 中国时间 - 北京'],'zh_CN','CN'],['_TZ_redrawTimeZones','zh_CN','CN']]";
		out.write(str);
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
