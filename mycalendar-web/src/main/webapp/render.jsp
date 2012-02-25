<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:directive.page import="net.tl.icalendar.format.CalDisConf2Js"/>
<jsp:directive.page import="net.tl.icalendar.util.CalendarBeanUtil"/>
<jsp:directive.page import="net.tl.icalendar.util.CalendarCfg"/>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ page import="net.tl.icalendar.beans.*" %>
<%@ page import="net.tl.icalendar.utils.CalendarServletUtils" %>
<%@ page import="java.util.*,java.text.SimpleDateFormat" %>

<%
	UserBean user = (UserBean)request.getSession(true).getAttribute(CalendarServletUtils.INDICAL_USER);
	List rendProps = (java.util.List)request.getAttribute(CalendarServletUtils.INDICAL_RENDERPROPS);
	if(user==null || rendProps==null){
		request.setAttribute("message",new Integer(3));
		request.getRequestDispatcher("/message.jsp").forward(request,response);
		return;
	}
	
	String curPeriod = (String)rendProps.get(5);
		
	CalendarDisplayConfig displayConfig = (CalendarDisplayConfig)rendProps.get(0);
	//需要更改成多个日历的设置
	SCalendar calendar = (SCalendar)rendProps.get(1);
	
	StringBuffer entriesStrExpress = new StringBuffer();
	entriesStrExpress.append(
								CalendarBeanUtil.simpleJsArrayStr( (String)rendProps.get(2) )  
							);
	
	
	String calendarId = calendar.getId();
	String calendarName = calendar.getName();
	String calendarColor = calendar.getColor()==null ? "1" : ("" + calendar.getColor());
	String calendarOff = calendar.getOff().toString().toLowerCase();
	String configStr =  new CalDisConf2Js(displayConfig).toString();
	String configStrExpress = configStr.substring(1,configStr.length()-1);//displayConfig.getStrExpressionInHTML();
	String startMode = "" + displayConfig.getDefaultCalMode();
	
	////张林添加，对应var rt_clientDispatches参数
	String shareCalendarMessage = (String)rendProps.get(3);
	String dispatchInHtml = (String)rendProps.get(4);
 %>

<html>
	<head>
		<title>CMRI日历</title>
		
		<script type="text/javascript">
			function _gt(){
				return new Date().getTime()
			}

			var _loadStartTime=_gt(),_user_email="<%=user.getEmail() %>",_nav=navigator.userAgent.toLowerCase(),_tsf=18;
			
			if(document.cookie.match(/\\bCAL=.*\\bCAL=/))
				document.cookie='CAL=X; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/calendar';
			_sip=false;
			_experimentalLangs="ar,iw";
			_allowGuestModifyFeature=false;
			_allowGoogleDocFeature=false;
			_allowInviteYourselfFeature=false;
			_allowFindNextFeature=false;
			_ol_enabled=false;
			_ol_serve_ol=false;
			_enableEventSuggestions=false;
			_enableSecondaryTz=false;
			_isGoogUser=false;
			_locale='zh_CN';
			_enableTv=true;
			_aF=true;
			_hosted=false;
			_APP_NAME="<%=user.getUserId() %>@icalendar.calendar";
			_OL_COOKIE_NAME="OL_SESSION";
			_ACCOUNTS_BASE_URL="https://www.google.com/accounts";
			_enable_new_oops_errors=true;
			_enableContextualTooltip=true;
			_debugContextualTooltip=false;
		</script>
		
		<link type="text/css" rel="stylesheet" href="<%=CalendarCfg.getJsFilePrefix() %>doozercompiled.css">
		
		<script type="text/javascript">
			var _preScript=_gt();
		</script>
		
		<script type="text/javascript" src="<%=CalendarCfg.getJsFilePrefix() %>calendarjs_doozercompiled__zh_cn.js"></script>
		
		<script type="text/javascript">
			var _postScript=_gt();
			_GA_on=false;
			_SE_weatherOn=true;
			_SE_vcalNotificationsOn=false;
			_EF_mapOn=false;
		</script>
		
		<script type="text/javascript">
			var _eoHeadTime=_gt();
		</script>
		
		<style type="text/css">
			*{font-weight:normal !important}
			.requiresjs{display:block}
		</style>
		
		<script type="text/javascript">
			window.gbar={};
			(
				function(){
					function e(a,c,g){
						var f="on"+c;
						if(a.addEventListener) a.addEventListener(c,g,false);
						else if(a.attachEvent) a.attachEvent(f,g);
						else{
							var d=a[f];
							a[f]=function(){
									var b=d.apply(this,arguments),j=g.apply(this,arguments);
									return b==undefined?j:j==undefined?b:j&&b
								  }
						}
					};
					
					var h=window.gbar,i,k;
					
					function l(a,c){
						a.visibility=k?"hidden":"visible";
						a.left=c+"px"
					}
					
					h.tg=function(a){
						a=a||window.event;
						var c=0,g,f=window.navExtra,d=document.getElementById("gbi"),b=a.target||a.srcElement;
						a.cancelBubble=true;
						if(!i){
							i=document.createElement(Array.every||window.createPopup?"iframe":"div");
							i.frameBorder="0";
							i.src="javascript:''";
							d.parentNode.appendChild(i).id="gbs";
							if(f)
								for(g in f)
									d.insertBefore(f[g],d.firstChild).className="gb2";
							e(document,"click",h.close)
						}
						if(b.className!="gb3") b=b.parentNode;
						do c+=b.offsetLeft;
						while(b=b.offsetParent);
						l(d.style,c);
						i.style.width=d.offsetWidth+"px";
						i.style.height=d.offsetHeight+"px";
						l(i.style,c);
						k=!k;
					};
					h.close=function(a){
						k&&h.tg(a);
					}
				}
			)();	
		</script>
		
		<style type="text/css">
			#gbar{
				height:22px;
				padding-left:3px
			}
			.gbh,.gbd{
				border-top:1px solid #c9d7f1;
				font-size:1px
			}
			.gbh{
				height:0;
				position:absolute;
				top:24px;
				width:100%
			}
			#gbi,#gbs{
				background:#fff;
				left:0;
				position:absolute;
				top:24px;
				visibility:hidden;
				z-index:1000
			}
			#gbi{
				border:1px solid;
				border-color:#c9d7f1 #36c #36c #a2bae7;
				z-index:1001
			}
			#guser{
				padding-bottom:7px !important
			}
			#gbar,#guser{
				font-size:13px;
				padding-top:4px !important
			}
			@media all{
				.gb1,.gb3{
					height:22px;
					margin-right:.73em;
					vertical-align:top
				}
				#gbar{
					float:left
				}
			}
			.gb2{
				display:block;
				padding:.2em .5em
			}
			a.gb1,a.gb2,a.gb3{
				color:#00c !important
			}
			.gb2,.gb3{
				text-decoration:none
			}
			a.gb2:hover{
				background:#36c;
				color:#fff !important
			}
			
			/*目前不显示的模块：来宾设置、搜索日历时的范围选择、打印连接、添加朋友的日历*/
			#printlink,#guests,#searchAddCal{
				display: none;
			}

		</style>
		
		<link rel="SHORTCUT ICON" href="images/favicon.ico">
		<link type="application/atom+xml" rel="alternate" href="feeds/tianliang1980%40gmail.com/public/full" title="您的 慧点 日历 Atom 供稿">
	</head>
	
	<body class='zh_cn zh ff ff3' style='margin:0 1ex'>
		<div id=loadingItem style='position:absolute;top:8em;left:2em'>
			<br>
			<font size=+2>正在加载...</font><br><br>针对慢速连接，&nbsp;
			<a href='http://www.google.com/calendar/htmlembed?src=tianliang1980@gmail.com&skipwarning=true&eopt=3'>加载只读视图</a>
		</div>
		
		<script type="text/javascript">
			var _beginBodyTime=_gt();
		</script>
		<noscript><br>您的浏览器必须支持 javascript。<br></noscript>
		
		<div id=gbar>
			<nobr>
			<!-- <a target=_blank href="http://mail.icalendar.com.cn" class=gb1>我的邮箱</a> -->
				<b class=gb1>日历</b> 
				<a target=_blank href="http://cmri.hq.cmcc/wps/myportal" class=gb1>门户首页</a> 
				<a target=_blank href="http://rdplaces.hq.cmcc" class=gb1>协作空间</a> 
				<a target=_blank href="http://cmri.hq.cmcc/activities" class=gb1>活动组织</a> 
				<!-- <a target=_blank href="http://cmri.hq.cmcc/dogear" class=gb1>书签</a> --> 
				<a target=_blank href="http://cmri.hq.cmcc/wps/myportal/ConferenceManage" class=gb1>会议室预定</a> 
				<!--
				<a href="http://www.google.com/intl/zh-CN/options/" onclick="this.blur();gbar.tg(event);return !1" class=gb3>
					<u style=height:22px;vertical-align:top>更多</u> 
					<small>&#9660;</small>
				</a>
				<div id=gbi>
					<a></a>
					<a target=_blank href="http://images.google.com/imghp?tab=ci" class=gb2>图片</a> 
					<a target=_blank href="http://ditu.google.com/maps?tab=cl" class=gb2>地图</a> 
					<a target=_blank href="http://news.google.com/nwshp?tab=cn" class=gb2>资讯</a> 
					<a target=_blank href="http://video.google.com/?tab=cv" class=gb2>视频</a> 
					<a target=_blank href="http://groups.google.com/grphp?tab=cg" class=gb2>论坛</a> 
					<a target=_blank href="http://books.google.com/bkshp?tab=cp" class=gb2>图书</a> 
					<a target=_blank href="http://blogsearch.google.com/?tab=cb" class=gb2>博客</a> 
					<div class=gb2><div class=gbd></div></div>
					<a></a> 
					<a target=_blank href="http://www.google.com/intl/zh-CN/options/" class=gb2>更多 &raquo;</a> 
				</div>
			-->
			</nobr>
		</div>
		
		<div class=gbh style=left:0></div>
		<div class=gbh style=right:0></div>
		<div style="clear:both"></div>
		<div id="AllDayBeakerParent" style="position:absolute;top:0;left:0;visibility:hidden"></div>
		
		<div id="guser" class="cal-gaia-bar">
			<span id="offline_sc"></span>
			<b>您好！<%=user.getUserName() %></b> | <a id="prf_g" class="lk" href="javascript:void(_GenSettings());">设置</a> <!--  | <a id="logout" class="lk" target="_top" onclick="javascript:window.close();">退出</a>  -->
		</div>
		
		<div id="topBar">
			<h1 class="hdn">慧点 日历</h1>
			<div id="mb1" style="display:none"></div>
			<div class="noprint">
				<div id="logoparent">
					<img onmousedown="_SR_backToCalendar()" id="mainlogo" alt="慧点 日历" src="images/logo-sm.png">
				</div>
			
				<div class="topCtrls">
					<!-- 搜索活动栏 -->
					<div id="srreg">
						<h2 class="hdn">搜索</h2>
						<form action="javascript:_SR_searchCalendars()" name="search">
							<input name="q" maxlength="2048" size="28" id="maininput">
							<input type="submit" value="搜索“我的日历”">
						<!--  	<input type="button" onclick="_SR_searchPublic()" value="搜索公共日历"> -->
							<a href="javascript:void _SR_showSearchOptions()" class="small" id="show_search_opts">显示搜索选项</a>
						</form>
					</div>
					
					<div id="ntowner"></div>
				</div>
			</div>
			<div id="sropt"></div>
		</div>
		
		<div id="lo">正在加载...</div>
		
		<div class="tooltipPopup" style="visibility:hidden;display:none;" align="center" id="loadingDiv">
			<b>正在加载...</b>
			<br>
			<br>
			<br>
			<br>
			<img src="images/spin_32.gif" alt="" style="width:32px; height:32px; border-style:none;">
			<br>
			<br>
			<br>
		</div>
		
		<iframe src="javascript:false;" scrolling="no" class="tooltipPopup" frameborder="0" id="tooltipIframe" style="visibility:hidden;display:none"></iframe>
		
		<table id="mothertable" width="100%" cellpadding="0" cellspacing="0">
			<tr>
				<td id="nav" class="noprint">
					<table class="sidebar" cellspacing="4">
						<tr><td>
								<span class="lk" onmousedown="_CreateNewEvent()" id="comp"><b>创建活动</b></span>
						</td></tr>
						<tr><td>&nbsp;</td></tr>
					</table>
					
					<div id="dp_0_t1" class="t1">&nbsp;</div>
					<div id="dp_0_t2" class="t2">&nbsp;</div>
					<h2 class="hdn">日期选择器</h2>
					<div id="dp_0" class="datePickerDiv"></div>
					<div id="dp_0_b2" class="t2">&nbsp;</div>
					<div id="dp_0_b1" class="t1">&nbsp;</div>
					
					<div class="nb_0" style="padding-top:12px">
						<div style="width:100%; height:2px">
							<div class="t1 chromeColor">&nbsp;</div>
							<div class="t2 chromeColor">&nbsp;</div>
						</div>
						<h2 id="clst_my" class="calHeader goog-zippy-expanded normalText">
							<img src="images/blank.gif" alt="" class="h" unselectable="on">我的日历
						</h2>
						<div style="padding:0 2px 1px;clear:both" class="sidetable chromeColor" id="lhscalinner_my">
							<div id="calendars_my"></div>
							<div class="calendarsBottom">
								<div class="callistLink floatLeft"><span class="lk" onmousedown="_GenSettings()">设置</span></div>
								<div class="callistLink textAlignRight"><span class="lk" onmousedown="_EH_nwC()">创建</span></div> 
								<div class="callistLink textAlignRight"><span class="h" onmousedown="">&nbsp;</span></div>
							</div>
						</div>
					</div>
					
					<!-- 其它日历  -->
					<div class="nb_0" style="padding-top:12px;display:yes">
						<div style="width:100%; height:2px">
							<div class="t1 chromeColor">&nbsp;</div>
							<div class="t2 chromeColor">&nbsp;</div>
						</div>
						<h2 id="clst_fav" class="calHeader goog-zippy-expanded normalText">
							<img src="images/blank.gif" alt="" class="h" unselectable="on">其他日历
						</h2>
						<div style="padding:0 2px 1px;clear:both" class="sidetable chromeColor" id="lhscalinner_fav">
							<div style="background:#e0ecff;border-bottom:1px solid #c3d9ff">
								<div style="padding:4px">
									<form id="searchAddCalForm" autocomplete="off" onsubmit="_SearchAddCal();return false;" action="">
										<div class="textbox-fill-wrapper">
											<div>
												<input id="searchAddCal" onblur="_RestoreSearchMessage(this)" onfocus="_FocusSearchMessage(this)" style="font-size:90%;color:gray;padding:3px;border:0" value="&#28155;&#21152;&#26379;&#21451;&#30340;&#26085;&#21382;">
											</div>
										</div>
									</form>
								</div>
							</div>
						
							<div id="calendars_fav"></div>
							<div class="calendarsBottom" id="calendarsBottomChrome">
								<div class="callistLink floatLeft">
									<span class="lk" onmousedown="_GenSettings(1)">设置</span>
								</div>
								<div class="callistLink textAlignRight">
									<span style="cursor:pointer" onclick="_AP_show()" id="add_cals_link">
										<!-- 不显示
										<span class="lk">添加</span> 
										<span style="color:#73a6ff">&#9660;</span>
										-->
										<span class=""></span>
										<span style="color:#73a6ff">&nbsp;</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					 
				</td>
				
				
				
				<td id="maincell" valign="top">
					<div id="mainbody" class="printAlignLeft">
						<div id="mainnav"></div>
						<div class="t1 chromeColor">&nbsp;</div>
						<div class="t2 chromeColor">&nbsp;</div>
						<div class="printborder mainGrid">
							<div id="colheaders"></div>
							<div class="inset grid" id="allDayGrid"></div>
							<div id="webContentGrid"></div>
							<div id="gridcontainer">
								<div id="calowner"></div>
							</div>
						</div>
						
						<div class="t2 chromeColor">&nbsp;</div>
						<div class="t1 chromeColor">&nbsp;</div>
					</div>
					
					<div id="cover" style="display:none"></div>
				</td>
			</tr>
		</table>
		
		<iframe id="historyFrame" style="display:none;position:absolute" src="about:blank" scrolling="no"></iframe>
		
		<script type="text/javascript">
			function renderBody(){
				_$('loadingItem').innerHTML='';
				_renderInit("<%=calendarId %>","<%=CalendarCfg.getJsFilePrefix() %>",!_ol_serve_ol);
				_Dispatch(['u',[['<%=calendarId %>/color','<%=calendarColor %>'],['<%=calendarId %>/off','<%=calendarOff %>']<%if(dispatchInHtml!=null && !dispatchInHtml.equalsIgnoreCase("")){%>,<%=dispatchInHtml%><%}%>,<%=configStrExpress %>]]);
				_renderBody();
			};	
			
			var _initialDispatches;
			
			function postRender(){
				var rt_eventDispatches = <%=entriesStrExpress %>;
				var rt_esDispatches = ['us','<%=calendarId %> <%=curPeriod %> <%=CalendarBeanUtil.getCurrentMsTime() %>'];
				var rt_clientDispatches = <%=shareCalendarMessage %>
				
				var rt_extraDispatches = [];
				_initialDispatches = rt_clientDispatches;
				try{
					var gal=0,startTime="<%=new SimpleDateFormat("yyyyMMdd'T'HHmmss").format(new Date()) %>",startMode="<%=startMode %>";
					var sp=false;
					try{
						sp=false;
					}
					catch(e){}
					_renderMain(sp,rt_clientDispatches, rt_eventDispatches,rt_esDispatches,rt_extraDispatches,gal,startTime,startMode,!_ol_serve_ol);
				} 
				catch(ex){
					rt_clientDispatches=rt_eventDispatches=rt_esDispatches=rt_extraDispatches=null;
				}
				_renderPost();
			};
			renderBody();
		</script>
	</body>
	<script type="text/javascript">
		postRender();
	</script>
</html>