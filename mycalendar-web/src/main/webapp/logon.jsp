<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-nested" prefix="nested" %>

<html>
	<head>
		<link rel = "Shortcut Icon" href="images/favicon.ico" />
		<title>登录个人日历</title>
		<style type="text/css">
			.topnavigation {
				background-color: #103d76;
				color: #ffffff;
				width: 100%;
			}
			.login {
				background-color: #FFFFFF;
				width : 100%;
			}
			.loginlabel{
				font-family: verdana;
				font-size: 8pt;
				vertical-align : middle;
				color : #103d76;
			}
			.copyright {
				background-color: #103d76;
				color: #ffffff;
				font-family: verdana;
				text-align: center;
				width: 100%;
				font-variant : small-caps;
				font-size : 8pt;
			}
			.loginform{
				font-size: 8pt;
				margin-bottom : 4px;
				vertical-align : middle;
				color : #103d76;
			}
		</style>
	</head>
	
	<body  marginwidth="0" marginheight="0" bgcolor="#ffffff" leftmargin="0" topmargin="0">
		<table width="100%" cellSpacing="0" cellPadding="0" border="0" >
			<tr>
				<td bgcolor="white">
					<img title="慧点科技个人日历" alt="慧点科技个人日历" src="images//logo-sm.png">
				</td>
				<td align="right" bgcolor="white">
					<a target="_blank" href="http://cn.wowarmory.com/">
						<img border="0" src="images//logo-sm.png"/>
					</a>
				</td>
			</tr>
			<tr>
				<td colspan="2" class="topnavigation">
					<img border="0" align="left" width="5" height="1" src="images/pixel.gif">
					<img height="25" src="images/pixel.gif">
					<img border="0" width="14" height="1" src="images/pixel.gif">
				</td>
			</tr>

			<tr>
				<td colspan="2" class="login" width="100%">
					<img border="0" height="36" width="1" src="images/pixel.gif">
					<br>
					<img align="left" border="0" height="100" width="155" src="images/pixel.gif">
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<% if(request.getAttribute("error")==null || !request.getAttribute("error").toString().equalsIgnoreCase("true")){ %>
							<td align="left" colspan="2" class="login">
								<img title="欢迎使用个人日历" alt="欢迎使用个人日历" src="images/welcome.gif" border="0">
							</td>
							<%}else{ request.removeAttribute("error");%>
							<td colspan="2">
								<b class="loginform">用于登录的信息不正确。</b>
							</td>
							<%} %>
						</tr>
						<tr>
							<td valign="bottom" class="submitLink" width="275">&nbsp;</td>
							<td nowrap="true">
								<br>
								<html:form action="/logon.do" method="post" >
									<table border="0" cellspacing="0" cellpadding="3">
										<tr>
											<td valign="middle" nowrap="true">
												<b class="loginlabel">用户标识:&nbsp; </b>
											</td>
											<td valign="bottom" align="left">
												<html:text name="logonForm" property="userid" style="font-size: 13px; width: 160px;" size="20" />
											</td>
										</tr>
										<tr>
											<td valign="middle" nowrap="true">
												<b class="loginlabel">密码:&nbsp; </b>
											</td>
											<td valign="bottom" align="left">
												<html:password name="logonForm" property="password" style="font-size: 13px; width: 160px;" size="20" />
											</td>
										</tr>
										<tr>
											<td colspan="2" align="right">
												<a href="Javascript:document.forms[0].submit();"
													onmouseout="document.images['logon'].src='images/login.gif'; "
													onmouseover="document.images['logon'].src='images/login_f2.gif';">
													<img space="4" border="0" name="logon" src="images/login.gif" title="登录到个人日历" alt="登录到个人日历" align="right">
												</a>
											</td>
										</tr>
									</table>
								</html:form>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<br>
								<span style="font-family:verdana; font-size:8pt;"> </span>
							</td>
						</tr>
					</table>
				</td>
			</tr>

			<tr>
				<td colspan="2" class="copyright">
					&copy; 1998-2008 北京慧点科技开发有限公司.
					<br>
					个人日历
				</td>
			</tr>
		</table>
	</body>
</html>
