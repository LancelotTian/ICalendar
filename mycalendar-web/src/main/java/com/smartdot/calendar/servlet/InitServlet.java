package com.smartdot.calendar.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;


public class InitServlet extends HttpServlet {

    private static final long serialVersionUID = -5924578618589937243L;
    static Logger logger = Logger.getLogger(InitServlet.class);

    /**
     * Constructor of the object.
     */
    public InitServlet() {
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
    }

    /**
     * Initialization of the servlet. <br>
     *
     * @throws ServletException if an error occure
     */
    @Override
    public void init() throws ServletException {
        logger.info(">>>>>>>>>>>>>>>>>>>>>>> INDI Calendar application starting... >>>>>>>>>>>>>>>>>>>>>>>");
        logger.info(">>>> Checking wether Daily_registe_task in WAS Scheduler or not ");
//        TimerTaskService ttService = new TimerTaskServiceImpl();
//        List timerTaskes = null;
//        try {
//            timerTaskes = ttService.getTimerTaskesByName(CalendarCfg.getDailyTaskId());
//        } catch (Exception e) {
//        }
//
//        if (timerTaskes == null || timerTaskes.size() < 1) {
//            logger.info(">>>> Daily_registe_task not exist in WAS Scheduler,so create it...");
//            TimerTask tt = new TimerTask();
//            tt.setCRON(true);
//            tt.setTaskInfo(CalendarCfg.getDailyTaskId());
//            tt.setStartTimeInterval("0 30 0 * * ?");
//            tt.setRepeatInterval("0 30 0 * * ?");
//            tt.setNumberOfRepeats(-1);
//
//            try {
//                ttService.saveTimerTask(tt);
//            } catch (Exception e) {
//                logger.error("### Can't create Daily_registe_task to WAS Scheduler. ###");
//            }
//        } else {
//            logger.info(">>>> Daily_registe_task had existed in WAS Scheduler.");
//        }

        //String fileSplitor = System.getProperty("file.separator");
        //String prefix = getServletContext().getRealPath(fileSplitor);

        //Windows Tomcat
        //String file_log4jprop = "WEB-INF\\classes\\log4j.properties";
        //String file = "WEB-INF\\classes\\calendarConfig.properties";
        //Linux WAS
		/*
        String file_log4jprop = "/WEB-INF/classes/log4j.properties";
        String file_myprop = "/WEB-INF/classes/calendarConfig.properties";
        
        
        String filePath_myprop = prefix + file_myprop; 
        String filePath_log4jprop = prefix + file_log4jprop; 
        
        Properties props_myprop = new Properties(); 
        Properties props_log4j = new Properties(); 
        
        try   { 
        FileInputStream   istream   =   new FileInputStream(filePath_myprop);
        props_myprop.load(istream);
        istream.close();

        istream = new  FileInputStream(filePath_log4jprop);
        props_log4j.load(istream);
        istream.close();

        String level = props_myprop.getProperty("log4j.level");
        String logFile = prefix + props_myprop.getProperty("log4j.file.path");//设置路径
        //String maxFileSize = props_myprop.getProperty("log4j.file.maxFileSize");
        //String maxBackupIndex = props_myprop.getProperty("log4j.file.maxBackupIndex");


        props_log4j.setProperty( "log4j.rootLogger",level+", stdout, R");
        props_log4j.setProperty( "log4j.appender.R.File",logFile);
        // props_log4j.setProperty( "log4j.appender.R.MaxFileSize",maxFileSize);
        //props_log4j.setProperty( "log4j.appender.R.MaxBackupIndex",maxBackupIndex);

        PropertyConfigurator.configure(props_log4j);//装入log4j配置信息
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        logger.info("Log4j config success!");
        logger.info("******calendarConfig path: " + filePath_myprop);
        logger.info("******log4j path: " + filePath_log4jprop);
        logger.info("******log file path: " + logFile);
        
        }   catch   (IOException   e)   { 
        logger.info("Log4j config failed!");
        logger.error("******Read configuration form calendarConfig or log4j.properties failed！ [ "   +   filePath_myprop   +   "]. ");
        logger.error("******calendarConfig path: " + filePath_myprop);
        logger.error("******log4j path: " + filePath_log4jprop);
        return;
        } */
    }
}
