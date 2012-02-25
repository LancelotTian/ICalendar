<%@ page language="java" pageEncoding="utf-8"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<title>消息</title>
  </head>
  
  <body>
  	<%
  		Integer message = (Integer)request.getAttribute("message");
  		if(message!=null){
  		int code = message.intValue();
  		switch(code){
  			case 0:
  	 %>
  	 您还没有登录或登录已过期，请先<a href='http://cmri.hq.cmcc/wps/myportal'>登录门户</a>。
  	 <%
  	 			 break;
  	 		case 1:
  	  %>
  	 您没有登录权限，请确认您在portal的用户组中。
  	 <%
  	 			  break;
  	 		case 2:
  	 %>
  	 致命错误，无法连接LDAP服务，请联系管理员。
  	 <%
  	 			  break;
  	 		case 3:
  	 %>
  	 页面未被正常初始化。您可能访问了错误的页面或页面不存在，请联系管理员确认。
  	 <% 
  	 			  break;
  	 		default:
  	 %>
  	 未知错误，错误码为<%=code %>
  	 <%
  	 			  break;
  	 	 }
  	 	}
  	 %>
    
  </body>
 </html>
