package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Presence extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5809532918638372783L;

	/**
	 * Constructor of the object.
	 */
	public Presence() {
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
		
		String [] eatt = request.getParameterValues("eatt");
		
		StringBuffer strBuf = new StringBuffer();
		
		strBuf.append("while(1);[['_addPresenceInEventForm',");
		
		for(int i=0;i<eatt.length;i++){
			strBuf.append("[['"+eatt[i]+"',-2,'']");
			
			if(i<eatt.length-1) strBuf.append(",");
			
		}
		
		strBuf.append("]]]");
		

		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.write(strBuf.toString());
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

}
