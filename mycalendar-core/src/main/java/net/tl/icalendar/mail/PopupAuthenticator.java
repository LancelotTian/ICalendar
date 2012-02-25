package net.tl.icalendar.mail;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

public class PopupAuthenticator extends Authenticator {
	private final String username;
	private final String password;
	
	public PopupAuthenticator(String user,String pass){
		this.username = user;
		this.password = pass;
	}
	
	protected PasswordAuthentication getPasswordAuthentication() {
		return new PasswordAuthentication(username, password); 
	}
}
