package net.tl.icalendar.servlet;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.tl.icalendar.base.service.ServiceFactory;
import net.tl.icalendar.service.ImportAndExportService;
import net.tl.icalendar.utils.CalendarServletUtils;

public class ExportIcalZip extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5843389663108488515L;

	/**
	 * Constructor of the object.
	 */
	public ExportIcalZip() {
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
		  //设置响应头,MIMEtype告诉浏览器传送的文件类型
		  response.setContentType( "application/x-zip-compressed" );
		  
		  //取得当前登录的用户uid
		  String userid = CalendarServletUtils.getUserIdByRequest(request);
		  if(userid==null||userid.equalsIgnoreCase("")) throw new ServletException("用户登录超时");
		  
		  //zip文件名称
		  String zipFileName = userid + "@sd.com.ical.zip";
		  
		  //inline;参数让浏览器弹出下载窗口,而不是在网页中打开文件.filename设定文件名
		  response.setHeader( "Content-Disposition" , "inline; filename=" + zipFileName );
		  //通过response获得ServletOutputStream对象
		  ServletOutputStream sos=response.getOutputStream();
		  //获得ZipOutputStream对象
		  ZipOutputStream out=new ZipOutputStream(new BufferedOutputStream(sos));  
		  
		  ImportAndExportService ieService = ServiceFactory.getInstance().getImportAndExportService();
		  
		  String[] fileContents = ieService.getIcsFilesByUserid(userid);
		  
		  ZipEntry zipEntry;
		  for(int i=0;i<fileContents.length;i++){
			  zipEntry = new ZipEntry(userid+"_cal_" + (i+1) + ".ics");
			  out.putNextEntry(zipEntry);
			  out.write(fileContents[i].getBytes("UTF-8"));
			  out.closeEntry();
		  }
		  
		  out.close(); //这里一句一定要,要不就会打开文件出错
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

	System.out.println("download zip ical");
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
