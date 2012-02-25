package net.tl.icalendar.mail;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;


public class MailSender {
	private String smtpServer;
	private String mailSenderDesc;
	private String smtpServerUser;
	private String smtpServerPassword;
	private String mailBodyContentEncode="text/html;charset=gb2312";
	private String mailSubjectPrefix;
	private boolean needAuth = false;
	
	/**
	 * 
	 *
	 */
	public MailSender(){}
	
	/**
	 * 
	 * @param smtpServer	邮件服务器名称
	 * @param mailSubjectPrefix	发送邮件时的邮件标题前缀
	 */
	public MailSender(String smtpServer,String mailSenderDesc,String mailSubjectPrefix){
		this.smtpServer = smtpServer;
		this.mailSenderDesc = mailSenderDesc;
		this.mailSubjectPrefix = mailSubjectPrefix;
		this.needAuth = false;
	}
	
	/**
	 * 
	 * @param smtpServer	邮件服务器名称
	 * @param smtpServerUser	用户名
	 * @param smtpServerPassword	密码
	 * @param mailSubjectPrefix	发送邮件时的邮件标题前缀
	 */
	public MailSender(String smtpServer,String mailSenderDesc,String smtpServerUser,String smtpServerPassword,String mailSubjectPrefix){
		this.smtpServer = smtpServer;
		this.mailSenderDesc = mailSenderDesc;
		this.smtpServerUser = smtpServerUser;
		this.smtpServerPassword = smtpServerPassword;
		this.mailSubjectPrefix = mailSubjectPrefix;
		this.needAuth = true;
	}
	
	public boolean sendActivityInform(String toMailBox,String subject,String mailContentbody){
		String ms = null;
		try {
			ms = MimeUtility.encodeText(this.mailSubjectPrefix+subject, "gb18030","B");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return this.send(this.smtpServer,toMailBox,this.mailSenderDesc,ms,mailContentbody);
	}
	
	public boolean send(String smtpServer, String toMailBox, String fromMailBox, String subject, String mailContentbody){
		boolean retFlag = false;
		try
	    {
	      Properties props = System.getProperties();
	      // -- Attaching to default Session, or we could start a new one --
	      props.put("mail.smtp.host", smtpServer);
	      // -- If SMTP server need Auth,you must set --
	      Session session = null;
	      if(this.needAuth){
	    	  props.put("mail.smtp.auth","true");
	   	      session = Session.getInstance(props, new PopupAuthenticator(this.smtpServerUser,this.smtpServerPassword));
	      }
	      else Session.getInstance(props);
	   
	      // -- Create a new message --
	      Message msg = new MimeMessage(session);
	     
	      // -- Set the FROM and TO fields --
	      msg.setFrom(new InternetAddress(fromMailBox));
	      msg.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toMailBox, false));
	      // -- We could include CC recipients too --
	      // if (cc != null)
	      // msg.setRecipients(Message.RecipientType.CC
	      // ,InternetAddress.parse(cc, false));
	      // -- Set the subject and body text --
	      msg.setSubject(subject);
	     // msg.setText(body);
	      msg.setContent(mailContentbody, this.mailBodyContentEncode);
	      // -- Set some other header information --
	      msg.setHeader("X-Mailer", "LOTONtechEmail");
	      msg.setSentDate(new Date());
	      // -- Send the message --
	      Transport.send(msg);
	      retFlag = true;
	    }
	    catch (Exception ex)
	    {
	      ex.printStackTrace();
	    }
	    return retFlag;
	  }

	public String getMailBodyContentEncode() {
		return mailBodyContentEncode;
	}

	public void setMailBodyContentEncode(String mailBodyContentEncode) {
		this.mailBodyContentEncode = mailBodyContentEncode;
	}

	public boolean isNeedAuth() {
		return needAuth;
	}

	public void setNeedAuth(boolean needAuth) {
		this.needAuth = needAuth;
	}

	public String getSmtpServer() {
		return smtpServer;
	}

	public void setSmtpServer(String smtpServer) {
		this.smtpServer = smtpServer;
	}

	public String getSmtpServerPassword() {
		return smtpServerPassword;
	}

	public void setSmtpServerPassword(String smtpServerPassword) {
		this.smtpServerPassword = smtpServerPassword;
	}

	public String getSmtpServerUser() {
		return smtpServerUser;
	}

	public void setSmtpServerUser(String smtpServerUser) {
		this.smtpServerUser = smtpServerUser;
	}
	
	
}
