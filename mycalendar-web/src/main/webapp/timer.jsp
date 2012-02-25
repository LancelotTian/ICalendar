<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-nested" prefix="nested" %>


<html:form action="/createTimer.do">
	启用CRON日历：<html:checkbox name="timerForm" property="isCRON"/><br>
	taskInfo：<html:text name="timerForm" property="taskInfo"/><br>
	
	startTime：<html:text name="timerForm" property="startTime"/><br>
	
	startTimeInterval：<html:text name="timerForm" property="startTimeInterval"/><br>
	startByInterval：<html:text name="timerForm" property="startByInterval"/><br>
	repeatInterval：<html:text name="timerForm" property="repeatInterval"/><br>
	numberOfRepeats：<html:text name="timerForm" property="numberOfRepeats"/><br>
	
	<html:submit>保存</html:submit>

</html:form>