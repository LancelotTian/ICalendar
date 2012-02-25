package net.tl.icalendar.servlet;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.service.ImportAndExportService;
import net.tl.icalendar.utils.CalendarServletUtils;

public class Upload_event extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5522068513049508384L;
	private Log log = LogFactory.getLog(Upload_event.class);

	/**
	 * Constructor of the object.
	 */
	public Upload_event() {
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
		doPost(request, response);
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
		
		String secid = CalendarServletUtils.getUserIdByRequest(request);
		if(secid==null || secid.equalsIgnoreCase("")) throw new ServletException("******Can not to find user info from request.");
		
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		if (isMultipart) {
			FileItem fileItem = null;
			String calId = "";
			DiskFileItemFactory factory = new DiskFileItemFactory();

			factory.setSizeThreshold(10 * 1024);
            ServletFileUpload fu = new ServletFileUpload(factory);
            fu.setSizeMax(1000000000);
            fu.setHeaderEncoding("UTF-8");
            
    		try {
    			List fileItems = fu.parseRequest(request);
    			for(Iterator it = fileItems.iterator(); it.hasNext();) {
    				FileItem item = (FileItem) it.next();
    				String fileName = item.getFieldName();
    				System.out.println("file: name: " + item.getFieldName());
    				if (fileName != null && !fileName.trim().equals("")) {
    					if (item.isFormField()) {
    						String name = item.getFieldName();
    						String value = new String(item.getString().getBytes("UTF-8"), "UTF-8");
                            System.out.println("name: " + name);
                            System.out.println("value: " + value);
    						if("src".equals(name)) {
    							calId = value;
    						}
                            
    					} else {
    						fileItem = item;
    					}
    				}
    			}
    			
                
    			log.info("calendar Id: " + calId);
    			InputStream in = fileItem.getInputStream();

    			
    			ImportAndExportService ieService = ServiceFactory.getInstance().getImportAndExportService();
    			
    			
    			List ret = ieService.importActivities(in, secid, calId);
    			
    			int num = ret.size();
    			CalendarServletUtils.setSessionStateAttr(request, "upload", new Integer(0), ret);
    			
    			response.setContentType("text/html");
    			response.setCharacterEncoding("UTF-8");
    			PrintWriter out = response.getWriter();
    			out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">" );
    			out.println("<HTML>");
    			out.println("  <HEAD><TITLE>日历上传</TITLE></HEAD>");
    			out.println("  <BODY bgcolor=\"fff7d7\" style=\"font-family: arial;\">");
    			out.println("    <p>");
    			out.println("		<b>");
    			out.println(""+num);
    			out.println("		</b>个活动处理完毕。");
    			out.println(" 	 </p>");
    			out.println("	 <p>");
    			out.println("       <b>");
    			out.println(""+num);
    			out.println("		</b>个活动导入成功。");
    			out.println("	 </p>");
    			out.println("<script type=\"text/javascript\">");
    			out.println("window.parent._Dispatch([['_Ping','500'],['_Ping','3000'],['_Ping','15000']]);");
    			out.println("</script>");
    			out.println("  </BODY>");
    			out.println("</HTML>");
    			out.flush();
    			out.close();
    			
			
    			
    		} catch (FileUploadException e) {
    		} catch (Exception e) {
    		}
		}
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
