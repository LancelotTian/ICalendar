package net.tl.icalendar.mail;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.PropertiesConfiguration;

public class MailSenderFactory {
	
	private static boolean needValidate;
	private static String user;
	private static String password;
	private static String mailServer;
	private static String mailSenderDesc;
	private static String mailSubjectPrefix;
	
	static {
    	try {
    		Configuration config = new PropertiesConfiguration("mail_cfg.properties");
    		needValidate = config.getBoolean("needValidate");
    		user = config.getString("user");
    		password = config.getString("password");
            mailServer = config.getString("mailServer");
            mailSenderDesc = config.getString("mailSenderDesc");
            mailSubjectPrefix = config.getString("mailSubjectPrefix");
		} catch (Exception e) {
			System.err.println("%%%% Error Creating MailSenderFactory %%%%");
			e.printStackTrace();
		}
    }
	
	
	private MailSenderFactory(){}
	
	
	public static MailSender getMailSender(){
		if(needValidate) return new MailSender(mailServer,mailSenderDesc,user,password,mailSubjectPrefix);
		else return new MailSender(mailServer,mailSenderDesc,mailSubjectPrefix);
	}
}
