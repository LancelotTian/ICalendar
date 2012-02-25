<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:static-data="http://google.com/calendar/static-data" version="1.0" exclude-result-prefixes="static-data"><xsl:output method="html" version="4.0" encoding="UTF-8" omit-xml-declaration="yes" indent="no" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd" media-type="text/html"/>
<xsl:preserve-space elements="html value display abbr"/>
<xsl:strip-space elements=""/>
<xsl:template name="common.replace"><xsl:param name="string"/>
<xsl:param name="pattern"/>
<xsl:param name="replacement"/>
<xsl:choose><xsl:when test="contains($string, $pattern)"><xsl:value-of select="substring-before($string, $pattern)"/>
<xsl:value-of select="$replacement"/>
<xsl:call-template name="common.replace"><xsl:with-param name="string" select="substring-after($string, $pattern)"/>
<xsl:with-param name="pattern" select="$pattern"/>
<xsl:with-param name="replacement" select="$replacement"/></xsl:call-template></xsl:when>
<xsl:otherwise><xsl:value-of select="$string"/></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="common.js-string"><xsl:param name="escapee"/>
<xsl:text>'</xsl:text>
<xsl:choose><xsl:when test="not(contains($escapee, &quot;'&quot;) or                           contains($escapee, '\'))"><xsl:value-of select="$escapee"/></xsl:when>
<xsl:otherwise><xsl:call-template name="common.replace"><xsl:with-param name="pattern" select="&quot;'&quot;"/>
<xsl:with-param name="replacement" select="&quot;\'&quot;"/>
<xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="pattern">&amp;#13;</xsl:with-param>
<xsl:with-param name="replacement"><xsl:text>\r</xsl:text></xsl:with-param>
<xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="pattern">&amp;#10;</xsl:with-param>
<xsl:with-param name="replacement"><xsl:text>\n</xsl:text></xsl:with-param>
<xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="pattern" select="'\'"/>
<xsl:with-param name="replacement" select="'\\'"/>
<xsl:with-param name="string" select="$escapee"/></xsl:call-template></xsl:with-param></xsl:call-template></xsl:with-param></xsl:call-template></xsl:with-param></xsl:call-template></xsl:otherwise></xsl:choose>
<xsl:text>'</xsl:text></xsl:template>
<xsl:template name="common.email-to-nmtoken"><xsl:param name="email"/>
<xsl:call-template name="common.replace"><xsl:with-param name="string" select="$email"/>
<xsl:with-param name="pattern" select="'@'"/>
<xsl:with-param name="replacement" select="':40'"/></xsl:call-template></xsl:template>
<xsl:template match="html" mode="common.inline-html"><xsl:for-each select="*|text()"><xsl:copy-of select="."/></xsl:for-each></xsl:template>
<xsl:template match="text()" mode="common.html-to-text"><xsl:value-of select="."/></xsl:template>
<xsl:template match="br" mode="common.html-to-text"><xsl:text>
</xsl:text></xsl:template>
<xsl:template match="*" mode="common.html-to-text"><xsl:apply-templates select="*|text()" mode="common.html-to-text"/></xsl:template>
<xsl:template match="text()" mode="common.escape-xml"><xsl:call-template name="common.escape-xml-text"><xsl:with-param name="xml-text" select="."/></xsl:call-template></xsl:template>
<xsl:template match="*" mode="common.escape-xml"><xsl:text>&lt;</xsl:text> <xsl:value-of select="name(.)"/> <xsl:for-each select="./@*"><xsl:text> </xsl:text> <xsl:value-of select="name(.)"/> <xsl:text>="</xsl:text> <xsl:call-template name="common.escape-xml-value"><xsl:with-param name="attr-value" select="."/></xsl:call-template> <xsl:text>"</xsl:text></xsl:for-each> <xsl:choose><xsl:when test="count(*|text()) = 0"><xsl:text>/&gt;</xsl:text></xsl:when> <xsl:otherwise><xsl:text>&gt;</xsl:text> <xsl:apply-templates select="*|text()" mode="common.escape-xml"/> <xsl:text>&lt;/</xsl:text> <xsl:value-of select="name(.)"/> <xsl:text>&gt;</xsl:text></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="common.escape-xml-value"><xsl:param name="attr-value"/>
<xsl:call-template name="common.replace"><xsl:with-param name="string"><xsl:call-template name="common.escape-xml-text"><xsl:with-param name="xml-text" select="$attr-value"/></xsl:call-template></xsl:with-param>
<xsl:with-param name="pattern" select="'&quot;'"/>
<xsl:with-param name="replacement" select="'&amp;quot;'"/></xsl:call-template></xsl:template>
<xsl:template name="common.escape-xml-text"><xsl:param name="xml-text"/>
<xsl:call-template name="common.replace"><xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="string" select="$xml-text"/>
<xsl:with-param name="pattern" select="'&amp;'"/>
<xsl:with-param name="replacement" select="'&amp;amp;'"/></xsl:call-template></xsl:with-param>
<xsl:with-param name="pattern" select="'&lt;'"/>
<xsl:with-param name="replacement" select="'&amp;lt;'"/></xsl:call-template></xsl:with-param>
<xsl:with-param name="pattern" select="'&gt;'"/>
<xsl:with-param name="replacement" select="'&amp;gt;'"/></xsl:call-template></xsl:template>
<xsl:template match="principal" mode="common.person"><span style="cursor: pointer"><xsl:if test="@type = 0"><xsl:attribute name="onmouseout"><xsl:text>_TT_HidePhoto()</xsl:text></xsl:attribute>
<xsl:attribute name="onmouseover"><xsl:text>_TT_ShowPhoto(this, event, </xsl:text>
<xsl:choose><xsl:when test="contains(value, '@')"><xsl:call-template name="common.js-string"><xsl:with-param name="escapee"><xsl:call-template name="common.full-email"/></xsl:with-param></xsl:call-template>
<xsl:text>, </xsl:text>
<xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="value"/></xsl:call-template></xsl:when>
<xsl:otherwise><xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="display"/></xsl:call-template>
<xsl:text>, 'unknown'</xsl:text></xsl:otherwise></xsl:choose>
<xsl:text>)</xsl:text></xsl:attribute></xsl:if>
<xsl:attribute name="onclick"><xsl:text>_TT_LC(</xsl:text>
<xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="@id"/></xsl:call-template>
<xsl:text>,false)</xsl:text></xsl:attribute>
<xsl:choose><xsl:when test="abbr != ''"><xsl:value-of select="abbr"/></xsl:when>
<xsl:otherwise><xsl:value-of select="display"/></xsl:otherwise></xsl:choose></span></xsl:template>
<xsl:template name="common.full-email"><xsl:call-template name="common.render-mailbox"><xsl:with-param name="common-name" select="display"/>
<xsl:with-param name="addr-spec" select="value"/></xsl:call-template></xsl:template>
<xsl:template name="common.render-mailbox"><xsl:param name="common-name"/>
<xsl:param name="addr-spec"/>
<xsl:choose><xsl:when test="($common-name != '' or $addr-spec = '')                       and $common-name != $addr-spec"><xsl:choose><xsl:when test="contains($common-name, '(') or                           contains($common-name, ')') or                           contains($common-name, '&lt;') or                           contains($common-name, '&gt;') or                           contains($common-name, '@') or                           contains($common-name, ',') or                           contains($common-name, ';') or                           contains($common-name, ':') or                           contains($common-name, '&quot;') or                           contains($common-name, '.') or                           contains($common-name, '[') or                           contains($common-name, ']')"><xsl:text>"</xsl:text>
<xsl:call-template name="common.replace"><xsl:with-param name="string"><xsl:call-template name="common.replace"><xsl:with-param name="string" select="$common-name"/>
<xsl:with-param name="pattern"><xsl:text>\</xsl:text></xsl:with-param>
<xsl:with-param name="replacement"><xsl:text>\\</xsl:text></xsl:with-param></xsl:call-template></xsl:with-param>
<xsl:with-param name="pattern"><xsl:text>"</xsl:text></xsl:with-param>
<xsl:with-param name="replacement"><xsl:text>\"</xsl:text></xsl:with-param></xsl:call-template>
<xsl:text>"</xsl:text></xsl:when>
<xsl:otherwise><xsl:value-of select="$common-name"/></xsl:otherwise></xsl:choose>
<xsl:text> &lt;</xsl:text>
<xsl:value-of select="$addr-spec"/>
<xsl:text>&gt;</xsl:text></xsl:when>
<xsl:otherwise><xsl:value-of select="$addr-spec"/></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="common.toggle"><xsl:param name="module-id"/>
<xsl:param name="expanded"/>
<xsl:value-of select="/eventpage/@url"/>
<xsl:if test="not(contains(/eventpage/@url, '?'))"><xsl:text>?</xsl:text></xsl:if>
<xsl:for-each select="/eventpage/modules/module[@module-id != $module-id]"><xsl:if test="position() != 1 or contains(/eventpage/@url, '?')"><xsl:text>&amp;</xsl:text></xsl:if>
<xsl:text>emid=</xsl:text>
<xsl:value-of select="@module-id"/></xsl:for-each>
<xsl:if test="$expanded = 'true' or                   ($expanded != 'false' and                    count(/eventpage/modules/module[@module-id = $module-id]) = 0                    )"><xsl:if test="count(/eventpage/modules/module[@module-id != $module-id])                    != 0 or contains(/eventpage/@url, '?')"><xsl:text>&amp;</xsl:text></xsl:if>
<xsl:text>emid=</xsl:text>
<xsl:value-of select="$module-id"/></xsl:if></xsl:template>
<xsl:template name="common.module-expanded"><xsl:param name="module-id"/>
<xsl:choose><xsl:when test="count(/eventpage/modules/module[@module-id = $module-id]) != 0"><xsl:text>expanded</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>collapsed</xsl:text></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="common.calendar-list"><xsl:param name="selected_value"/><xsl:variable name="secid"><xsl:value-of select="/eventpage/secid/value"/></xsl:variable>
<xsl:for-each select="/eventpage/calendars/principal"><xsl:if test="value = $secid or /eventpage/@action = 'CREATE'"><option><xsl:attribute name="value"><xsl:value-of select="@id"/></xsl:attribute>
<xsl:if test="$selected_value = @id"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:value-of select="display"/></option></xsl:if></xsl:for-each>
<xsl:if test="/eventpage/source-calendar/@show-transfer = 'true'"><xsl:if test="/eventpage/@action != 'CREATE'"><option value="tranfer_event"><xsl:text>转让活动...</xsl:text></option></xsl:if></xsl:if></xsl:template>
<xsl:template name="common.widget-classes"><xsl:param name="name"/>
<xsl:param name="type"/>
<xsl:param name="value"/>
<xsl:attribute name="class"><xsl:text>data input field-</xsl:text> <xsl:value-of select="$name"/> <xsl:text> </xsl:text> <xsl:if test="@editing != 'true' and $value = '' and                       $name != 'text'"><xsl:text>blank </xsl:text></xsl:if> <xsl:choose><xsl:when test="@access = 'editable'"><xsl:text>editable </xsl:text> <xsl:if test="@editing != 'true'"><xsl:text>highlight </xsl:text></xsl:if></xsl:when> <xsl:otherwise><xsl:text>readonly </xsl:text></xsl:otherwise></xsl:choose> <xsl:value-of select="$type"/></xsl:attribute></xsl:template>
<xsl:variable name="dtstart"><xsl:value-of select="substring-before(/eventpage/dates/value, '/')"/></xsl:variable>
<xsl:variable name="dtstart-date"><xsl:choose><xsl:when test="contains($dtstart, 'T')"><xsl:value-of select="substring-before($dtstart, 'T')"/></xsl:when>
<xsl:otherwise><xsl:value-of select="$dtstart"/></xsl:otherwise></xsl:choose></xsl:variable>
<xsl:variable name="dtstart-time"><xsl:if test="contains($dtstart, 'T')"><xsl:text>T</xsl:text>
<xsl:value-of select="substring-after($dtstart, 'T')"/></xsl:if></xsl:variable>
<xsl:variable name="base-date"><xsl:choose><xsl:when test="$dtstart-date != '' and                       not(contains($dtstart-date, '?'))"><xsl:value-of select="$dtstart-date"/></xsl:when>
<xsl:otherwise><xsl:value-of select="/eventpage/ref-date/value"/></xsl:otherwise></xsl:choose>
<xsl:if test="$dtstart-time != ''"><xsl:choose><xsl:when test="not(contains($dtstart-time, '?'))"><xsl:value-of select="$dtstart-time"/></xsl:when>
<xsl:otherwise><xsl:text>T120000</xsl:text></xsl:otherwise></xsl:choose></xsl:if></xsl:variable>
<xsl:template name="recurui.interval-options"><xsl:param name="selectedValue"/>
<xsl:param name="index"><xsl:text>1</xsl:text></xsl:param>
<xsl:if test="$index &gt;= 1 and $index &lt; 31"><option value="{$index}"><xsl:if test="$selectedValue = $index"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:value-of select="$index"/></option>
<xsl:call-template name="recurui.interval-options"><xsl:with-param name="selectedValue" select="$selectedValue"/>
<xsl:with-param name="index" select="$index + 1"/></xsl:call-template></xsl:if></xsl:template>
<xsl:template name="recurui.interval-message"><xsl:param name="freq"/>
<xsl:param name="plural"/>
<xsl:param name="part"/>
<xsl:choose><xsl:when test="$freq = 'DAILY'"><xsl:choose><xsl:when test="$plural = 'SINGULAR'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">天</xsl:when></xsl:choose></xsl:when>
<xsl:when test="$plural = 'PLURAL'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">天</xsl:when></xsl:choose></xsl:when></xsl:choose></xsl:when>
<xsl:when test="$freq = 'WEEKLY'"><xsl:choose><xsl:when test="$plural = 'SINGULAR'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">周</xsl:when></xsl:choose></xsl:when>
<xsl:when test="$plural = 'PLURAL'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">周</xsl:when></xsl:choose></xsl:when></xsl:choose></xsl:when>
<xsl:when test="$freq = 'MONTHLY'"><xsl:choose><xsl:when test="$plural = 'SINGULAR'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">月</xsl:when></xsl:choose></xsl:when>
<xsl:when test="$plural = 'PLURAL'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">个月</xsl:when></xsl:choose></xsl:when></xsl:choose></xsl:when>
<xsl:when test="$freq = 'YEARLY'"><xsl:choose><xsl:when test="$plural = 'SINGULAR'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">年</xsl:when></xsl:choose></xsl:when>
<xsl:when test="$plural = 'PLURAL'"><xsl:choose><xsl:when test="$part = 'HEADER'">重复间隔：</xsl:when>
<xsl:when test="$part = 'PERIOD'">年</xsl:when></xsl:choose></xsl:when></xsl:choose></xsl:when>
<xsl:otherwise><xsl:if test="$part = 'HEADER'">重复间隔：</xsl:if></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="recurui.days-of-week"><xsl:param name="selectedDays"/>
<xsl:param name="index"><xsl:text>0</xsl:text></xsl:param>
<xsl:if test="$index &gt;= 0 and $index &lt; 7"><xsl:variable name="day-num"><xsl:choose><xsl:when test="$index = 0"><xsl:text>0</xsl:text></xsl:when> <xsl:when test="$index = 1"><xsl:text>1</xsl:text></xsl:when> <xsl:when test="$index = 2"><xsl:text>2</xsl:text></xsl:when> <xsl:when test="$index = 3"><xsl:text>3</xsl:text></xsl:when> <xsl:when test="$index = 4"><xsl:text>4</xsl:text></xsl:when> <xsl:when test="$index = 5"><xsl:text>5</xsl:text></xsl:when> <xsl:when test="$index = 6"><xsl:text>6</xsl:text></xsl:when></xsl:choose></xsl:variable>
<xsl:variable name="ical-id"><xsl:choose><xsl:when test="$index = 0"><xsl:text>SU</xsl:text></xsl:when> <xsl:when test="$index = 1"><xsl:text>MO</xsl:text></xsl:when> <xsl:when test="$index = 2"><xsl:text>TU</xsl:text></xsl:when> <xsl:when test="$index = 3"><xsl:text>WE</xsl:text></xsl:when> <xsl:when test="$index = 4"><xsl:text>TH</xsl:text></xsl:when> <xsl:when test="$index = 5"><xsl:text>FR</xsl:text></xsl:when> <xsl:when test="$index = 6"><xsl:text>SA</xsl:text></xsl:when></xsl:choose></xsl:variable>
<xsl:variable name="msg"><xsl:choose><xsl:when test="$index = 0"><xsl:text>日</xsl:text></xsl:when> <xsl:when test="$index = 1"><xsl:text>一</xsl:text></xsl:when> <xsl:when test="$index = 2"><xsl:text>二</xsl:text></xsl:when> <xsl:when test="$index = 3"><xsl:text>三</xsl:text></xsl:when> <xsl:when test="$index = 4"><xsl:text>四</xsl:text></xsl:when> <xsl:when test="$index = 5"><xsl:text>五</xsl:text></xsl:when> <xsl:when test="$index = 6"><xsl:text>六</xsl:text></xsl:when></xsl:choose></xsl:variable>
<xsl:if test="$index != 0"><xsl:text>  </xsl:text></xsl:if>
<span class="group"><input type="checkbox" id="r-recur-0" onclick="_recur_fce('r-recur')"><xsl:attribute name="id"><xsl:text>r-recur-</xsl:text>
<xsl:value-of select="$day-num"/></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="$day-num"/></xsl:attribute>
<xsl:if test="contains($selectedDays, $ical-id)"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label><xsl:attribute name="for"><xsl:text>r-recur-</xsl:text>
<xsl:value-of select="$day-num"/></xsl:attribute>
<xsl:value-of select="$msg"/></label></span>
<xsl:call-template name="recurui.days-of-week"><xsl:with-param name="selectedDays" select="$selectedDays"/>
<xsl:with-param name="index" select="$index + 1"/></xsl:call-template></xsl:if></xsl:template>
<xsl:template match="rrule" mode="recurui.main"><div id="ff-recur"><xsl:if test="@editing = 'true'"><xsl:attribute name="style"><xsl:text>display: block</xsl:text></xsl:attribute></xsl:if>
<xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:value-of select="@access"/> <xsl:if test="@access != 'editable' and value = ''"><xsl:text> blank</xsl:text></xsl:if></xsl:attribute>
<xsl:if test="count(/eventpage/dates) = 0"><h3 class="label"><label for="wi-recur"><xsl:text>时间</xsl:text></label></h3></xsl:if>
<div id="wi-recur"><xsl:if test="@access = 'editable' and @editing != 'true'"><xsl:attribute name="onclick"><xsl:text>_wi_rewriteOnDemand(this,event)</xsl:text></xsl:attribute></xsl:if>
<xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'recur'"/>
<xsl:with-param name="type" select="'rrule'"/>
<xsl:with-param name="value" select="'not-blank'"/></xsl:call-template>
<xsl:choose><xsl:when test="@access != 'editable'"><xsl:value-of select="display"/></xsl:when>
<xsl:otherwise><div id="r-recur-container" class="recurui-container"><div id="r-recur"><xsl:attribute name="class"><xsl:text>recurui-container </xsl:text> <xsl:choose><xsl:when test="@freq='DAILY'"><xsl:text>recur-daily</xsl:text></xsl:when> <xsl:when test="@freq='WEEKLY'"><xsl:text>recur-weekly</xsl:text></xsl:when> <xsl:when test="@freq='MONTHLY'"><xsl:text>recur-monthly</xsl:text></xsl:when> <xsl:when test="@freq='YEARLY'"><xsl:text>recur-yearly</xsl:text></xsl:when> <xsl:otherwise><xsl:text>recur-not</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute>
<div class="indent group repeat"><h4>重复频率：</h4>
<select class="recur-persel" onchange="_recur_mc('r-recur')" id="r-recur-mperiod"><option><xsl:if test="not(@freq)"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>不重复</xsl:text></option>
<option><xsl:if test="@freq='DAILY'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>按天</xsl:text></option>
<option><xsl:if test="@freq='WEEKLY' and @byday='MO,TU,WE,TH,FR'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>每个工作日 （周一到周五）</xsl:text></option>
<option><xsl:if test="@freq='WEEKLY' and @byday='MO,WE,FR'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>每周星期一、星期三和星期五</xsl:text></option>
<option><xsl:if test="@freq='WEEKLY' and @byday='TU,TH'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>每周星期二和星期四</xsl:text></option>
<option><xsl:if test="@freq = 'WEEKLY' and                                     not(@byday='TU,TH' or @byday='MO,WE,FR' or                                         @byday='MO,TU,WE,TH,FR')"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>按周</xsl:text></option>
<option><xsl:if test="@freq='MONTHLY'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>每月</xsl:text></option>
<option><xsl:if test="@freq='YEARLY'"><xsl:attribute name="selected"><xsl:text>selected</xsl:text></xsl:attribute></xsl:if>
<xsl:text>每年</xsl:text></option></select></div>
<div><div class="recur-secondary group repeat indent"><table class="recur-hr-tab"><tr><td class="recur-hr-cont"><span class="recur-hr" id="rrhr-r-recur"><xsl:choose><xsl:when test="display != ''"><xsl:value-of select="display"/></xsl:when>
<xsl:otherwise><xsl:text>此活动不重复</xsl:text></xsl:otherwise></xsl:choose></span></td></tr></table></div>
<div class="recur-secondary group repeat indent recur-intsel-cont"><xsl:variable name="freq" select="@freq"/>
<xsl:variable name="plural"><xsl:choose><xsl:when test="@interval = 1"><xsl:text>SINGULAR</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>PLURAL&gt;</xsl:text></xsl:otherwise></xsl:choose></xsl:variable>
<h4 id="r-recur-ptitle"><xsl:variable name="digits" select="digits mod 10"/>
<xsl:variable name="tens" select="floor((digits mod 100) div 10)"/>
<xsl:choose><xsl:when test="@freq = 'YEARLY' and @tens != 1 and                                  @digits &gt; 1 and @digits &lt; 5">года</xsl:when>
<xsl:otherwise><xsl:call-template name="recurui.interval-message"><xsl:with-param name="freq" select="$freq"/>
<xsl:with-param name="plural" select="$plural"/>
<xsl:with-param name="part" select="'HEADER'"/></xsl:call-template></xsl:otherwise></xsl:choose></h4>
<select class="recur-intsel" onchange="_recur_ci('r-recur')" id="r-recur-interval"><xsl:call-template name="recurui.interval-options"><xsl:with-param name="selectedValue" select="@interval"/></xsl:call-template></select>
<xsl:text> </xsl:text>
<span id="r-recur-pdesc"><xsl:call-template name="recurui.interval-message"><xsl:with-param name="freq" select="$freq"/>
<xsl:with-param name="plural" select="$plural"/>
<xsl:with-param name="part" select="'PERIOD'"/></xsl:call-template></span></div>
<div class="recur-secondary recur-dowchecks"><div class="group repeat indent"><h4><xsl:text>重复日期为：</xsl:text></h4>
<div class="recur-cbg"><xsl:call-template name="recurui.days-of-week"><xsl:with-param name="selectedDays" select="@byday"/></xsl:call-template></div></div></div>
<div class="recur-repeatby"><div class="group repeat indent"><h4><xsl:text>重复标准：</xsl:text></h4>
<div class="recur-cbg"><input type="radio" onclick="_recur_fce('r-recur')" id="r-recur-byday-month" name="_dowordom" value="BYMONTHDAY"><xsl:if test="count(@bymonthday) != 0"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label for="r-recur-byday-month"><xsl:text>日期</xsl:text></label>
<xsl:text>  </xsl:text>
<input type="radio" onclick="_recur_fce('r-recur')" id="r-recur-byday-week" name="_dowordom" value="BYDAY"><xsl:if test="count(@bymonthday) = 0 and                                         count(@byday) != 0"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label for="r-recur-byday-week"><xsl:text>星期几</xsl:text></label></div></div></div></div>
<div class="recur-secondary repeat indent"><table cellspacing="0" cellpadding="0" class="group" id="r-recur-foot"><tr valign="top"><td colspan="3"><h4><xsl:text>范围：</xsl:text></h4></td></tr>
<tr valign="middle"><td id="r-recur-left" style="padding-left: 1em"><h5 class="nobr"><label for="hr-rstart"><xsl:text>开始：</xsl:text></label></h5></td>
<td class="recurfoot"><input type="text" size="12" id="hr-rstart"><xsl:choose><xsl:when test="count(../first-start) = 0 or                                           ../first-start/@access != 'editable'"><xsl:attribute name="disabled"><xsl:text>disabled</xsl:text></xsl:attribute></xsl:when>
<xsl:otherwise><xsl:attribute name="onchange"><xsl:text>_wi_rpd(this)</xsl:text></xsl:attribute>
<xsl:attribute name="onkeypress"><xsl:text>return(_wi_ns(this,event))</xsl:text></xsl:attribute>
<xsl:attribute name="onblur"><xsl:text>_wi_b(this)</xsl:text></xsl:attribute>
<xsl:attribute name="onfocus"><xsl:text>_wi_f(this)</xsl:text></xsl:attribute></xsl:otherwise></xsl:choose>
<xsl:attribute name="value"><xsl:choose><xsl:when test="count(../first-start) != 0"><xsl:value-of select="../first-start/display"/></xsl:when>
<xsl:otherwise><xsl:value-of select="../dates/start-date"/></xsl:otherwise></xsl:choose></xsl:attribute></input></td>
<td align="right" style="padding-left: 1ex"><h5 class="nobr"><xsl:text>结束时间：</xsl:text></h5></td>
<td width="50%" rowspan="2"><div><table width="100%" cellspacing="0" cellpadding="0"><tr valign="middle"><td align="left"><xsl:variable name="checkOption"><xsl:choose><xsl:when test="count(@until) != 0"><xsl:text>until</xsl:text></xsl:when>
<xsl:when test="count(@count) != 0"><xsl:text>count</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>never</xsl:text></xsl:otherwise></xsl:choose></xsl:variable>
<input type="radio" onclick="_recur_crb('r-recur')" id="r-recur-noend" name="_endmode"><xsl:if test="$checkOption = 'never'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="recur-lbl-r-recur-noend" for="r-recur-noend"><xsl:attribute name="class"><xsl:choose><xsl:when test="$checkOption = 'never'"><xsl:text>recur-checked</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>recur-unchecked</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute>
<xsl:text>从不</xsl:text></label>
<br/>
<input type="radio" onclick="_recur_crb('r-recur')" id="r-recur-until" name="_endmode" value="UNTIL"><xsl:if test="$checkOption = 'until'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<span id="recur-lbl-r-recur-until"><xsl:attribute name="class"><xsl:choose><xsl:when test="$checkOption = 'until'"><xsl:text>recur-checked</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>recur-unchecked</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute>
<label for="r-recur-until"><xsl:text>之前</xsl:text></label>
<xsl:text> </xsl:text>
<input type="text" onfocus="_$('r-recur-until').checked=true" class="recur-onchecked" id="r-recur-enddate" onblur="this.onclick(event)" onclick="_recur_fce('r-recur')" onchange="this.onclick(event)" size="12"/></span></td></tr></table></div></td></tr>
<tr><td colspan="2"/></tr></table></div>
<input type="hidden" id="r-recur-wkst"><xsl:attribute name="value"><xsl:value-of select="@wkst"/></xsl:attribute></input>
<input type="hidden" id="r-recur-orr"><xsl:attribute name="value"><xsl:value-of select="value"/></xsl:attribute></input>
<input type="hidden" id="r-recur-odt"><xsl:attribute name="value"><xsl:value-of select="$base-date"/></xsl:attribute></input>
<input type="hidden" id="r-recur-oedt"><xsl:attribute name="value"><xsl:value-of select="@until"/></xsl:attribute></input></div></div>
<input type="hidden" id="old-recur" name="old-recur"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="value"/></xsl:if></xsl:attribute></input>
<input type="hidden" id="recur" name="recur"><xsl:attribute name="value"><xsl:value-of select="value"/></xsl:attribute></input></xsl:otherwise></xsl:choose></div></div>
<pre id="real-recur" style="display: none">
      <xsl:value-of select="value"/>
    </pre>
<xsl:choose><xsl:when test="@access != 'editable'"><xsl:if test="../first-start/@access != 'editable'"><div class="field readonly blank" id="ff-rstart"><div id="wi-rstart"><xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'rstart'"/>
<xsl:with-param name="type" select="'date'"/>
<xsl:with-param name="value" select="../first-start/value"/></xsl:call-template>
<xsl:value-of select="../first-start/value"/></div></div></xsl:if></xsl:when>
<xsl:otherwise><xsl:if test="count(../first-start) != 0 and                     ../first-start/@access = 'editable'"><input id="rstart" type="hidden" name="rstart" value="{../first-start/value}"/>
<input id="old-rstart" type="hidden" name="old-rstart" value="{../first-start/value}"/></xsl:if></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="module-attendees.main"><xsl:if test="attendees/@access = 'editable' or                   count(attendees/attendee) != 0 or                   attendees/@partial = 'true'"><div id="guests"><xsl:attribute name="class"><xsl:text>module </xsl:text> <xsl:call-template name="common.module-expanded"><xsl:with-param name="module-id" select="4"/></xsl:call-template> <xsl:if test="count(modules/module                                 [@module-id = 3])                           != 0"><xsl:text> add-guests-open</xsl:text></xsl:if></xsl:attribute>
<hr/>
<div class="t1"/><div class="t2"/>
<h2 class="header"><xsl:if test="@action != 'CREATE' and                           @simplified = 'true' and                           (organizer/principal/@id != self/principal/@id or                            count(attendees/attendee/principal                                  [@id != /eventpage/self/principal/@id]) != 0)"><xsl:variable name="to-guests" select="count(attendees/attendee/principal                              [@id != /eventpage/organizer/principal/@id and                               @id != /eventpage/self/principal/@id]                              ) != 0"/>
<span style="padding:4px;font-size:77%; float:right;"><a class="actionlink emailguests"><xsl:attribute name="href"><xsl:choose><xsl:when test="$to-guests"><xsl:text>javascript:_EF_MailAttendees()</xsl:text></xsl:when> <xsl:otherwise><xsl:text>javascript:_EF_MailOrganizer()</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute>
<xsl:choose><xsl:when test="$to-guests"><xsl:text>向来宾发送电子邮件</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>向组织者发送电子邮件</xsl:text></xsl:otherwise></xsl:choose></a></span></xsl:if>
<a onclick="_wi_tm(_MODULE_TYPE_INVITEES);return false" class="toggle"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="4"/></xsl:call-template></xsl:attribute>
<xsl:text>访客</xsl:text></a></h2>
<xsl:if test="attendees/@access = 'editable'                       or attendees/@access = 'extensible'"><p class="actions requiresjs"><a onclick="return _expandAddGuests(this)" class="actionlink add toggle" href="javascript:void(0)"><xsl:text>添加来宾</xsl:text></a></p></xsl:if>
<div class="modulebody" id="guestlists"><xsl:if test="attendees/@access = 'editable'                         or attendees/@access = 'extensible'"><div id="addguests"><xsl:attribute name="class"><xsl:text>module </xsl:text> <xsl:call-template name="common.module-expanded"><xsl:with-param name="module-id" select="3"/></xsl:call-template></xsl:attribute>
<div class="modulebody"><div class="fullwidth fevent"><xsl:text>输入来宾的电子邮件地址，用逗号隔开</xsl:text>
<div id="ff-guesttext" class="field editable"><div id="wi-guesttext" class="data input field-add editable textarea"><xsl:variable name="added-attendees-input-value"><xsl:if test="@action = 'CREATE'"><xsl:for-each select="attendees/attendee"><xsl:call-template name="common.render-mailbox"><xsl:with-param name="common-name" select="principal/display"/>
<xsl:with-param name="addr-spec" select="principal/value"/></xsl:call-template>
<xsl:text>, </xsl:text></xsl:for-each></xsl:if></xsl:variable>
<textarea class="fieldinput" onblur="_wi_b(this)" onfocus="_wi_f(this)" onclick="_rta(this)" onkeyup="_rta(this)" name="add" id="guesttext" rows="5" style="overflow: hidden">
                        
                        <xsl:value-of select="$added-attendees-input-value"/>
                      </textarea>
<input type="hidden" name="old-add" id="old-guesttext"><xsl:attribute name="value"><xsl:if test="@action != 'CREATE'"><xsl:value-of select="$added-attendees-input-value"/></xsl:if></xsl:attribute></input></div></div></div></div>
</div></xsl:if>
<div id="guestlistscont"><xsl:choose><xsl:when test="count(attendees[@partial = 'true']) = 0"><xsl:if test="@action != 'CREATE' and                               count(attendees/attendee) != 0"><xsl:apply-templates select="attendees" mode="module-attendees.count"/></xsl:if></xsl:when>
<xsl:otherwise><xsl:text>应组织者要求，来宾列表已被隐藏。</xsl:text></xsl:otherwise></xsl:choose></div>
<div class="fevent" id="guestOptionForm"><xsl:if test="              shared-property[@name = 'goo.allowModify']              /@access = 'editable' or              shared-property[@name = 'goo.allowInvitesOther']              /@access = 'editable' or              shared-property[@name = 'goo.showInvitees']              /@access = 'editable' or              reminder/@access = 'editable'"><xsl:if test="@action = 'CREATE' or                             (source-calendar/principal/@id =                              organizer/principal/@id)"><xsl:call-template name="module-attendees.option-form"/></xsl:if></xsl:if></div></div></div></xsl:if></xsl:template>
<xsl:template match="attendees" mode="module-attendees.count"><xsl:variable name="yes-count" select="count(attendee                    [principal/@status = 1]) +              sum(attendee                  [principal/@status = 1]                  /@extra-guests)"/>
<xsl:variable name="maybe-count" select="count(attendee                    [principal/@status = 3]) +              sum(attendee                  [principal/@status = 3]                  /@extra-guests)"/>
<xsl:variable name="no-count" select="count(attendee                    [principal/@status = 2])"/>
<xsl:variable name="none-count" select="count(attendee                    [principal/@status= 0])"/>
<xsl:variable name="editable" select="@access = 'editable' and              /eventpage/@action != 'CREATE'"/>
<div id="ff-guestcount" class="field readonly"><h3 class="label"><label for="wi-guestcount"><xsl:text>来宾数： </xsl:text></label></h3>
<div id="wi-guestcount" class="data input readonly text"><xsl:if test="$yes-count != 0"><xsl:value-of select="$yes-count"/> 位回答是</xsl:if>
<xsl:if test="$maybe-count != 0"><xsl:if test="($yes-count) != 0"><xsl:text>, </xsl:text></xsl:if><xsl:value-of select="$maybe-count"/> 位回答也许</xsl:if>
<xsl:if test="$no-count != 0"><xsl:if test="($yes-count + $maybe-count) != 0"><xsl:text>, </xsl:text></xsl:if><xsl:value-of select="$no-count"/> 位回答否</xsl:if>
<xsl:if test="$none-count != 0"><xsl:if test="($yes-count + $no-count + $maybe-count) != 0"><xsl:text>, </xsl:text></xsl:if>
<xsl:choose><xsl:when test="$none-count = 1"><xsl:text>有 1 位尚未回复</xsl:text></xsl:when>
<xsl:otherwise>有 <xsl:value-of select="$none-count"/> 位尚未回复</xsl:otherwise></xsl:choose></xsl:if></div></div>
<xsl:if test="$yes-count != 0"><xsl:call-template name="module-attendees.response-count"><xsl:with-param name="response-group" select="'response-yes'"/>
<xsl:with-param name="indicator-img" select="'images/icon_r_yes.gif'"/>
<xsl:with-param name="title"><xsl:text>是</xsl:text></xsl:with-param>
<xsl:with-param name="count" select="$yes-count"/>
<xsl:with-param name="status" select="1"/>
<xsl:with-param name="editable" select="$editable"/></xsl:call-template></xsl:if>
<xsl:if test="$maybe-count != 0"><xsl:call-template name="module-attendees.response-count"><xsl:with-param name="response-group" select="'response-maybe'"/>
<xsl:with-param name="indicator-img" select="'images/icon_r_maybe.gif'"/>
<xsl:with-param name="title"><xsl:text>也许</xsl:text></xsl:with-param>
<xsl:with-param name="count" select="$maybe-count"/>
<xsl:with-param name="status" select="3"/>
<xsl:with-param name="editable" select="$editable"/></xsl:call-template></xsl:if>
<xsl:if test="$no-count != 0"><xsl:call-template name="module-attendees.response-count"><xsl:with-param name="response-group" select="'response-no'"/>
<xsl:with-param name="indicator-img" select="'images/icon_r_no.gif'"/>
<xsl:with-param name="title"><xsl:text>否</xsl:text></xsl:with-param>
<xsl:with-param name="count" select="$no-count"/>
<xsl:with-param name="status" select="2"/>
<xsl:with-param name="editable" select="$editable"/></xsl:call-template></xsl:if>
<xsl:if test="$none-count != 0"><xsl:call-template name="module-attendees.response-count"><xsl:with-param name="response-group" select="'response-none'"/>
<xsl:with-param name="indicator-img" select="'images/blank.gif'"/>
<xsl:with-param name="title"><xsl:text>等待回复</xsl:text></xsl:with-param>
<xsl:with-param name="count" select="$none-count"/>
<xsl:with-param name="status" select="0"/>
<xsl:with-param name="editable" select="$editable"/></xsl:call-template></xsl:if></xsl:template>
<xsl:template name="module-attendees.response-count"><xsl:param name="response-group"/>
<xsl:param name="indicator-img"/>
<xsl:param name="title"/>
<xsl:param name="count"/>
<xsl:param name="status"/>
<xsl:param name="editable"/>
<div><xsl:attribute name="id"><xsl:text>ff-</xsl:text> <xsl:value-of select="$response-group"/></xsl:attribute>
<xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:choose><xsl:when test="$editable">editable</xsl:when> <xsl:otherwise>readonly</xsl:otherwise></xsl:choose> <xsl:text> people </xsl:text> <xsl:value-of select="$response-group"/></xsl:attribute>
<h3 class="subtitle"><label><xsl:attribute name="for"><xsl:text>wi-</xsl:text> <xsl:value-of select="$response-group"/></xsl:attribute>
<xsl:value-of select="$title"/>
<xsl:text> </xsl:text>
<strong class="count"><xsl:text>(</xsl:text>
<xsl:value-of select="$count"/>
<xsl:text>)  </xsl:text></strong>
<div style="display:inline"><img alt=""><xsl:attribute name="src"><xsl:value-of select="$indicator-img"/></xsl:attribute></img></div></label></h3>
<ul><xsl:attribute name="id"><xsl:text>wi-</xsl:text> <xsl:value-of select="$response-group"/></xsl:attribute>
<xsl:attribute name="class"><xsl:text>data input field-del </xsl:text> <xsl:choose><xsl:when test="$editable">editable highlight</xsl:when> <xsl:otherwise>readonly</xsl:otherwise></xsl:choose> <xsl:text> rolist</xsl:text></xsl:attribute>
<xsl:variable name="self-id"><xsl:choose><xsl:when test="count(/eventpage/self/principal/value) != 0"><xsl:value-of select="/eventpage/self/principal/value"/></xsl:when>
<xsl:otherwise><xsl:value-of select="/eventpage/self/principal/@id"/></xsl:otherwise></xsl:choose></xsl:variable>
<xsl:variable name="organizer-id"><xsl:choose><xsl:when test="count(/eventpage/organizer/principal/value) != 0"><xsl:value-of select="/eventpage/organizer/principal/value"/></xsl:when>
<xsl:otherwise><xsl:value-of select="/eventpage/organizer/principal/@id"/></xsl:otherwise></xsl:choose></xsl:variable>
<xsl:for-each select="attendee[principal/@status = $status]"><xsl:variable name="principal-id"><xsl:choose><xsl:when test="count(principal/value) != 0"><xsl:value-of select="principal/value"/></xsl:when>
<xsl:otherwise><xsl:value-of select="principal/@id"/></xsl:otherwise></xsl:choose></xsl:variable>
<li class="roitem guest"><xsl:call-template name="module-attendees.setup-one-attendee"><xsl:with-param name="editable" select="$editable"/>
<xsl:with-param name="principal-id" select="$principal-id"/>
<xsl:with-param name="organizer-id" select="$organizer-id"/>
<xsl:with-param name="self-id" select="$self-id"/></xsl:call-template></li></xsl:for-each></ul></div></xsl:template>
<xsl:template name="module-attendees.setup-one-attendee"><xsl:param name="editable"/>
<xsl:param name="principal-id"/>
<xsl:param name="organizer-id"/>
<xsl:param name="self-id"/>
<xsl:variable name="allow-presence" select="/eventpage/self/@allow-presence-feature"/>
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td><table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align: top"><span><xsl:if test="$allow-presence = 'true'"><xsl:call-template name="module-attendees.setup-chat-click"><xsl:with-param name="id-prefix" select="'evtChatDot'"/>
<xsl:with-param name="name" select="principal/display"/>
<xsl:with-param name="principal-id" select="$principal-id"/>
<xsl:with-param name="self-id" select="$self-id"/></xsl:call-template></xsl:if>
<img width="15" id="evtChatImg{$principal-id}" alt="" src="images/blank.gif"/></span></td>
<td><div style="float:left;"><div style="overflow:hidden"><xsl:if test="principal/@id = /eventpage/self/principal/@id"><xsl:attribute name="class">self</xsl:attribute></xsl:if>
<xsl:if test="string-length(principal/display) &gt; 30"><div id="longAttendeeName" style="display:none"/></xsl:if>
<div style="display: inline; font-weight: bold"><xsl:if test="$allow-presence = 'true'"><xsl:if test="$principal-id != $self-id and                          principal/@type = 0"><xsl:attribute name="onmouseout"><xsl:text>this.className=''</xsl:text></xsl:attribute>
<xsl:attribute name="onmouseover">this.className='attendeeLink'</xsl:attribute></xsl:if>
<xsl:call-template name="module-attendees.setup-chat-click"><xsl:with-param name="id-prefix" select="'evtChatAttendee'"/>
<xsl:with-param name="name" select="principal/display"/>
<xsl:with-param name="principal-id" select="$principal-id"/>
<xsl:with-param name="self-id" select="$self-id"/></xsl:call-template></xsl:if>
<xsl:value-of select="principal/display"/></div>
<xsl:if test="@extra-guests &gt; 0"><xsl:text> </xsl:text>
<em><xsl:choose><xsl:when test="@extra-guests = 1"><xsl:text>
                增加 1 位来宾
              </xsl:text></xsl:when>
<xsl:otherwise>+外加 <xsl:value-of select="@extra-guests"/> 位来宾</xsl:otherwise></xsl:choose></em></xsl:if>
<xsl:text> </xsl:text>
<xsl:if test="response-comment/value != ''"><span class="note"><xsl:value-of select="response-comment/value"/></span></xsl:if></div></div></td></tr></table></td>
<td style="vertical-align:top" align="right"><xsl:choose><xsl:when test="$editable and            ($principal-id != $organizer-id or             /eventpage/source-calendar/@access = 'editable')"><div class="rolink"><xsl:attribute name="title"><xsl:text>从访客列表中移除此人</xsl:text></xsl:attribute>
<xsl:attribute name="onclick"><xsl:text>_wi_ro_rm(this, </xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="$principal-id"/></xsl:call-template> <xsl:text>)</xsl:text></xsl:attribute>
<xsl:attribute name="id"><xsl:text>wi-rem-</xsl:text> <xsl:value-of select="$principal-id"/></xsl:attribute>
<xsl:text>  删除</xsl:text></div>
<input type="hidden" class="old-real" id="old-real-{$principal-id}" value="{$principal-id}"/></xsl:when>
<xsl:otherwise><div class="real" style="display: none"><xsl:value-of select="$principal-id"/></div></xsl:otherwise></xsl:choose></td></tr></table></xsl:template>
<xsl:template name="module-attendees.setup-chat-click"><xsl:param name="id-prefix"/>
<xsl:param name="name"/>
<xsl:param name="principal-id"/>
<xsl:param name="self-id"/>
<xsl:attribute name="id"><xsl:value-of select="$id-prefix"/> <xsl:value-of select="$principal-id"/></xsl:attribute>
<xsl:if test="$principal-id != $self-id and                   principal/@type = 0"><xsl:attribute name="class">chatDot</xsl:attribute>
<xsl:attribute name="title">和  <xsl:value-of select="$name"/> <xsl:text> &lt;</xsl:text> <xsl:value-of select="$principal-id"/> <xsl:text>&gt;</xsl:text>  聊天</xsl:attribute>
<xsl:attribute name="onclick"><xsl:text>_wi_chat(this, </xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="$principal-id"/></xsl:call-template> <xsl:text>)</xsl:text></xsl:attribute></xsl:if></xsl:template>
<xsl:template name="module-attendees.option-form"><div class="module" id="guest-options"><h3 class="label"><xsl:text>来宾可以</xsl:text></h3>
<div class="data"><div class="group"><xsl:if test="/eventpage/self/@allow-guest-modify-feature = 'true'"><xsl:call-template name="module-attendees.shared-property-value"><xsl:with-param name="baseName" select="'modify'"/>
<xsl:with-param name="propName" select="'goo.allowModify'"/>
<xsl:with-param name="fieldId" select="'guests-modify'"/>
<xsl:with-param name="fieldLabelId" select="'guests-modify-label'"/>
<xsl:with-param name="fieldLabelText"><xsl:text>
                  修改活动
                </xsl:text></xsl:with-param></xsl:call-template></xsl:if>
<xsl:call-template name="module-attendees.shared-property-value"><xsl:with-param name="baseName" select="'invite'"/>
<xsl:with-param name="propName" select="'goo.allowInvitesOther'"/>
<xsl:with-param name="fieldId" select="'guests-invite'"/>
<xsl:with-param name="fieldLabelId" select="'guests-invite-label'"/>
<xsl:with-param name="fieldLabelText"><xsl:text>
                邀请他人
              </xsl:text></xsl:with-param></xsl:call-template>
<xsl:call-template name="module-attendees.shared-property-value"><xsl:with-param name="baseName" select="'seelist'"/>
<xsl:with-param name="propName" select="'goo.showInvitees'"/>
<xsl:with-param name="fieldId" select="'guests-seelist'"/>
<xsl:with-param name="fieldLabelId" select="'guests-seelist-label'"/>
<xsl:with-param name="fieldLabelText"><xsl:text>
                查看来宾列表
              </xsl:text></xsl:with-param></xsl:call-template></div></div>
<xsl:if test="self/@allow-invite-yourself-feature = 'true'"><xsl:call-template name="module-attendees.shared-property-value"><xsl:with-param name="baseName" select="'invite-yourself'"/>
<xsl:with-param name="propName" select="'goo.allowInviteYourself'"/>
<xsl:with-param name="fieldId" select="'guests-invite-yourself'"/>
<xsl:with-param name="fieldLabelId" select="'guests-invite-yourself-label'"/>
<xsl:with-param name="fieldLabelText"><xsl:text>
              任何人都可以将自己添加到此活动中
            </xsl:text></xsl:with-param></xsl:call-template></xsl:if></div></xsl:template>
<xsl:template name="module-attendees.shared-property-value"><xsl:param name="baseName"/>
<xsl:param name="propName"/>
<xsl:param name="fieldId"/>
<xsl:param name="fieldLabelId"/>
<xsl:param name="fieldLabelText"/>
<xsl:if test="shared-property[@name = $propName]/@access = 'editable'"><div><div class="field editable"><xsl:attribute name="id"><xsl:text>ff-guests-</xsl:text> <xsl:value-of select="$baseName"/></xsl:attribute>
<div class="data input field-sprop editable checkbox"><xsl:attribute name="id"><xsl:text>wi-guests-</xsl:text> <xsl:value-of select="$baseName"/></xsl:attribute>
<xsl:call-template name="module-attendees.checkbox-sprop"><xsl:with-param name="fieldId" select="$fieldId"/>
<xsl:with-param name="propName" select="$propName"/></xsl:call-template></div></div>
<label><xsl:attribute name="id"><xsl:value-of select="$fieldLabelId"/></xsl:attribute>
<xsl:attribute name="for"><xsl:value-of select="$fieldId"/></xsl:attribute>
<xsl:value-of select="$fieldLabelText"/></label></div></xsl:if></xsl:template>
<xsl:template name="module-attendees.checkbox-sprop"><xsl:param name="fieldId"/>
<xsl:param name="propName"/>
<input type="checkbox" name="sprop"><xsl:attribute name="id"><xsl:value-of select="$fieldId"/></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="$propName"/> <xsl:text>:true</xsl:text></xsl:attribute>
<xsl:if test="shared-property[@name = $propName]/value = 'true'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<input type="hidden" name="old-sprop"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="$propName"/>
<xsl:text>:</xsl:text>
<xsl:value-of select="shared-property[@name = $propName]/value"/></xsl:if></xsl:attribute></input></xsl:template>
<xsl:template name="module-comments.main"><xsl:if test="comments/@access = 'editable' or                   count(comments/comment) != 0"><div id="comments"><xsl:attribute name="class"><xsl:text>module </xsl:text> <xsl:call-template name="common.module-expanded"><xsl:with-param name="module-id" select="8"/></xsl:call-template> <xsl:if test="count(modules/module                           [@module-id = 7]) != 0"><xsl:text> add-comment-open</xsl:text></xsl:if></xsl:attribute>
<div class="t1"/><div class="t2"/>
<h2 class="header"><a onclick="_wi_tm(_MODULE_TYPE_COMMENTS);return false" class="toggle"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="8"/></xsl:call-template></xsl:attribute>
<xsl:text>讨论此活动</xsl:text></a></h2>
<xsl:call-template name="module-comments.editbox"/>
<xsl:apply-templates select="comments"/></div></xsl:if></xsl:template>
<xsl:template name="module-comments.editbox"><xsl:if test="comments/@access = 'editable'"><p class="actions requiresjs"><a onclick="return _showCommentField(this)" class="actionlink add"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="7"/></xsl:call-template></xsl:attribute>
<xsl:text>添加注释</xsl:text></a></p>
<div class="fevent modulebody" id="addCommentForm"><div class="field"><div class="data collapsed" id="addedcomments"><div class="group"><p class="instructions"><xsl:text>在下面输入您的注释，输好以后一定要记得按“发布注释”。</xsl:text></p>
<div id="ff-commenttext" class="field editable"><span id="wi-commenttext" class="input editable textarea field-ec"><textarea onblur="_wi_b(this)" onfocus="_wi_f(this)" id="commenttext" name="ec" class="primitive fieldinput"/>
<input type="hidden" id="old-commenttext" name="old-ec"/></span></div></div>
<div class="btngroup"><button onclick="_wi_pc(_$('masterForm'),event); return false" class="btn btnsm"><xsl:text>发布注释</xsl:text></button></div></div></div></div></xsl:if></xsl:template>
<xsl:template match="comments"><div class="modulebody" id="existingComments"><div id="ff-commentlist" class="field readonly"><xsl:choose><xsl:when test="count(comment) != 0"><ol id="wi-commentlist" class="data input field-dec readonly rolist"><xsl:apply-templates select="comment"/></ol></xsl:when>
<xsl:otherwise><div id="wi-commentlist" class="data input field-dec readonly text">目前尚未有任何注释！</div></xsl:otherwise></xsl:choose></div></div></xsl:template>
<xsl:template match="comment"><li class="roitem comment"><em class="comment-date"><xsl:value-of select="rel-time"/></em>
<cite><xsl:attribute name="class"><xsl:text>name</xsl:text> <xsl:variable name="author-status" select="author/principal/@status"/> <xsl:choose><xsl:when test="$author-status = 1"><xsl:text> response-yes</xsl:text></xsl:when> <xsl:when test="$author-status = 2"><xsl:text> response-no</xsl:text></xsl:when> <xsl:when test="$author-status =                      3"><xsl:text> response-maybe</xsl:text></xsl:when> <xsl:when test="$author-status =                     0"><xsl:text> response-none</xsl:text></xsl:when></xsl:choose> <xsl:if test="/eventpage/self/principal/@id =                           author/principal/@id"><xsl:text> self</xsl:text></xsl:if></xsl:attribute>
<xsl:value-of select="author/principal/display"/></cite>
<blockquote class="comment-text"><xsl:apply-templates select="html" mode="common.inline-html"/></blockquote></li></xsl:template>
<xsl:template name="module-details.main"><div class="t1"/><div class="t2"/>
<div class="module" id="details"><div class="modulebody"><xsl:apply-templates select="summary"/>
<xsl:apply-templates select="dates" mode="field"/>
<xsl:apply-templates select="timezone"/>
<xsl:apply-templates select="rrule" mode="recurui.main"/>
<xsl:call-template name="check-resources"/>
<xsl:apply-templates select="location"/>
<xsl:apply-templates select="geocode"/>
<xsl:apply-templates select="source-calendar"/>
<xsl:apply-templates select="description"/>
<xsl:call-template name="google-doc"/>
<div class="reset"/></div></div>
<div class="t2"/><div class="t1"/></xsl:template>
<xsl:template match="summary"><div id="ff-title"><xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:value-of select="@access"/></xsl:attribute>
<h3 class="label"><label for="wi-title"><xsl:text>内容</xsl:text></label></h3>
<div id="wi-title"><xsl:if test="@access = 'editable' and @editing != 'true'"><xsl:attribute name="onclick"><xsl:text>_wi_rewriteOnDemand(this,event)</xsl:text></xsl:attribute></xsl:if>
<xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'text'"/>
<xsl:with-param name="type" select="'text'"/>
<xsl:with-param name="value" select="html"/></xsl:call-template>
<xsl:choose><xsl:when test="@editing = 'true'"><input type="text" class="fieldinput text" onkeypress="return(_wi_ns(this,event))" onblur="_wi_b(this)" onfocus="_wi_f(this)" name="text" id="title"><xsl:attribute name="value"><xsl:value-of select="html"/></xsl:attribute></input>
<input type="hidden" name="old-text" id="old-title"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="html"/></xsl:if></xsl:attribute></input></xsl:when>
<xsl:when test="count(html/text()) != 0"><xsl:apply-templates select="html" mode="common.inline-html"/></xsl:when>
<xsl:otherwise><xsl:text> </xsl:text></xsl:otherwise></xsl:choose></div></div></xsl:template>
<xsl:template match="dates" mode="field"><div id="ff-when"><xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:value-of select="@access"/></xsl:attribute>
<h3 class="label"><label for="wi-when"><xsl:text>时间</xsl:text></label></h3>
<div id="wi-when"><xsl:if test="@access = 'editable' and @editing != 'true'"><xsl:attribute name="onclick"><xsl:text>_wi_rewriteOnDemand(this,event)</xsl:text></xsl:attribute></xsl:if>
<xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'dates'"/>
<xsl:with-param name="type" select="'daterange'"/>
<xsl:with-param name="value" select="value"/></xsl:call-template>
<xsl:choose><xsl:when test="@editing = 'true'"><xsl:apply-templates select="." mode="module-details.daterange-editor"/></xsl:when>
<xsl:otherwise><xsl:value-of select="display"/>
<span id="hr-r-recur"><xsl:if test="../rrule/display != ''"><xsl:text> (</xsl:text> <xsl:value-of select="../rrule/display"/> <xsl:text>)</xsl:text></xsl:if></span></xsl:otherwise></xsl:choose></div></div>
<xsl:if test="value != ''"><pre id="real-when" style="display: none">
        <xsl:value-of select="value"/>
      </pre></xsl:if></xsl:template>
<xsl:template name="check-resources"><xsl:if test="/eventpage/self/principal/@hosted-domain != '' and                   /eventpage/@simplified = 'true' and                   (/eventpage/attendees/@access = 'editable' or                    /eventpage/attendees/@access = 'extensible')"><div id="checkR"><h3 class="label"/>
<div onmousedown="_ME_ScheduleMeeting()" class="alternative"><xsl:text>
            检查来宾是否能出席，资源是否可用
          </xsl:text></div></div></xsl:if></xsl:template>
<xsl:template match="timezone"><xsl:if test="/eventpage/@simplified = 'false' and                   /eventpage/@current-action = 'TEMPLATE' and                   /eventpage/timezone/@visible = 'true'"><div id="ff-timezone" class="field {@access}"><h3 class="label"><label for="wi-timezone"/></h3>
<div id="wi-timezone"><xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'timezone'"/>
<xsl:with-param name="type" select="'text'"/>
<xsl:with-param name="value" select="/eventpage/timezone/value"/></xsl:call-template>
<div id="timezone-msg">开始时间和结束时间都显示在日历的时区 (<xsl:value-of select="/eventpage/timezone/display"/>) 中</div></div></div></xsl:if></xsl:template>
<xsl:template match="location"><div id="ff-where"><xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:value-of select="@access"/> <xsl:if test="@access != 'editable' and value = ''"><xsl:text> blank</xsl:text></xsl:if> <xsl:text> auto-location</xsl:text></xsl:attribute>
<h3 class="label"><label for="wi-where"><xsl:text>地点</xsl:text></label></h3>
<xsl:if test="count(link) != 0"><span class="extracontent"><a class="link" target="_blank" onclick="return _gotoMap('where');"><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
<xsl:if test="contains(link, '://maps.google.')"><xsl:attribute name="title"><xsl:text>点击查看 Google 地图</xsl:text></xsl:attribute></xsl:if>
<xsl:text>地图</xsl:text></a></span></xsl:if>
<div id="wi-where"><xsl:call-template name="common.widget-classes"><xsl:with-param name="name" select="'location'"/>
<xsl:with-param name="type" select="'text'"/>
<xsl:with-param name="value" select="value"/></xsl:call-template>
<xsl:if test="@access = 'editable' and @editing != 'true'"><xsl:attribute name="onclick"><xsl:text>_wi_rewriteOnDemand(this,event)</xsl:text></xsl:attribute></xsl:if>
<xsl:choose><xsl:when test="@access = 'editable' and                           @editing = 'true'"><input type="text" class="fieldinput text" onkeypress="return(_wi_ns(this,event))" onblur="_wi_b(this)" onfocus="_wi_f(this)" name="location" id="where"><xsl:attribute name="value"><xsl:value-of select="value"/></xsl:attribute></input>
<xsl:if test="/eventpage/@action != 'CREATE'"><input type="hidden" name="old-location" id="old-where"><xsl:attribute name="value"><xsl:value-of select="value"/></xsl:attribute></input></xsl:if></xsl:when>
<xsl:otherwise><xsl:value-of select="value"/></xsl:otherwise></xsl:choose></div>
<xsl:if test="@access = 'editable' and @editing != 'true' and value = ''"><div class="alternative requiresjs alternativewhere" id="alt-where" onclick="_wi_rewriteOnDemand(_$('wi-where'),event);_WHACK();return false"><xsl:text>点击以添加地点</xsl:text></div></xsl:if></div></xsl:template>
<xsl:template match="geocode"><h3 class="label"/>
<div class="field readonly"><div class="data readonly"><div id="efmap"/></div></div>
<div id="ff-map"><input type="hidden" id="latitude"><xsl:attribute name="value"><xsl:value-of select="@latitudeE6"/></xsl:attribute></input>
<input type="hidden" id="longitude"><xsl:attribute name="value"><xsl:value-of select="@longitudeE6"/></xsl:attribute></input>
<input type="hidden" id="zoomlevel"><xsl:attribute name="value"><xsl:value-of select="@zoomlevel"/></xsl:attribute></input></div></xsl:template>
<xsl:template match="source-calendar"><xsl:if test="/eventpage/@action != 'CREATE'"><input type="hidden" name="src" id="oncalendar"><xsl:attribute name="value"><xsl:value-of select="principal/@id"/></xsl:attribute></input></xsl:if>
<xsl:choose><xsl:when test="@access = 'editable' and                       count(/eventpage/calendars/principal) &gt; 1"><xsl:variable name="field-name"><xsl:choose><xsl:when test="/eventpage/@action = 'CREATE'"><xsl:text>oncalendar</xsl:text></xsl:when> <xsl:otherwise><xsl:text>tocalendar</xsl:text></xsl:otherwise></xsl:choose></xsl:variable>
<xsl:variable name="input-name"><xsl:choose><xsl:when test="/eventpage/@action = 'CREATE'">src</xsl:when> <xsl:otherwise>targ</xsl:otherwise></xsl:choose></xsl:variable>
<div class="field editable"><xsl:attribute name="id"><xsl:text>ff-</xsl:text><xsl:value-of select="$field-name"/></xsl:attribute>
<h3 class="label"><label><xsl:attribute name="for"><xsl:text>wi-</xsl:text><xsl:value-of select="$field-name"/></xsl:attribute>
<xsl:text>日历</xsl:text></label></h3>
<span><xsl:attribute name="id"><xsl:text>wi-</xsl:text><xsl:value-of select="$field-name"/></xsl:attribute>
<xsl:attribute name="class"><xsl:text>input editable list field-</xsl:text> <xsl:value-of select="$input-name"/></xsl:attribute>
<select size="1"><xsl:attribute name="id"><xsl:value-of select="$field-name"/></xsl:attribute>
<xsl:attribute name="name"><xsl:value-of select="$input-name"/></xsl:attribute>
<xsl:attribute name="onchange"><xsl:text>_EF_CalendarChange(this, '</xsl:text> <xsl:value-of select="principal/@id"/> <xsl:text>')</xsl:text></xsl:attribute>
<xsl:call-template name="common.calendar-list"><xsl:with-param name="selected_value" select="principal/@id"/></xsl:call-template></select>
<input type="hidden"><xsl:attribute name="name"><xsl:text>old-</xsl:text><xsl:value-of select="$input-name"/></xsl:attribute>
<xsl:attribute name="id"><xsl:text>old-</xsl:text><xsl:value-of select="$field-name"/></xsl:attribute>
<xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="principal/@id"/></xsl:if></xsl:attribute></input></span></div></xsl:when>
<xsl:when test="/eventpage/@action = 'CREATE'"><input type="hidden" name="src" id="oncalendar"><xsl:attribute name="value"><xsl:value-of select="/eventpage/calendars/principal/@id"/></xsl:attribute></input>
<input type="hidden" name="old-src" id="old-oncalendar"/></xsl:when>
<xsl:otherwise><xsl:variable name="self" select="../self/principal/@id"/>
<xsl:variable name="owner" select="../organizer/principal/@id"/>
<xsl:variable name="creator" select="../creator/principal/@id"/>
<xsl:variable name="src" select="principal/value"/>
<xsl:if test="$owner != '' and                       (($creator != '' and $creator != $owner) or                        $owner != $self or $creator != $self or $src != $self)"><div id="ff-by" class="field readonly"><h3 class="label"><label for="wi-by"><xsl:text>创建者：</xsl:text></label></h3>
<span id="wi-by" class="input readonly text field-owner"><cite class="name"><xsl:choose><xsl:when test="$creator != '' and $creator != $owner">由 <xsl:apply-templates select="../creator/principal" mode="common.person"/> 替 <xsl:apply-templates select="../organizer/principal" mode="common.person"/> </xsl:when>
<xsl:otherwise><xsl:apply-templates select="../organizer/principal" mode="common.person"/></xsl:otherwise></xsl:choose></cite></span></div></xsl:if></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template match="description"><div id="ff-descrip"><xsl:attribute name="class"><xsl:text>field </xsl:text> <xsl:value-of select="@access"/> <xsl:if test="@access != 'editable' and html = ''"><xsl:text> blank</xsl:text></xsl:if></xsl:attribute>
<h3 class="label"><label for="wi-descrip"><xsl:text>说明</xsl:text></label></h3>
<pre id="wi-descrip">
        <xsl:if test="@access = 'editable' and @editing != 'true'">
          <xsl:attribute name="onclick">
            <xsl:text>_wi_rewriteOnDemand(this,event)</xsl:text>
          </xsl:attribute>
        </xsl:if>

        <xsl:call-template name="common.widget-classes">
          <xsl:with-param name="name" select="'details'"/>
          <xsl:with-param name="type" select="'textarea pre-wrap'"/>
          <xsl:with-param name="value" select="html"/>
        </xsl:call-template>

        <xsl:choose>
          <xsl:when test="@editing = 'true'">

            <textarea class="fieldinput" onblur="_wi_b(this)" onfocus="_wi_f(this)" onclick="_rta(this)" onkeyup="_rta(this)" name="details" id="descrip" rows="5" style="overflow: hidden">
              
              <xsl:apply-templates select="html" mode="common.html-to-text"/>
            </textarea>
            <xsl:if test="/eventpage/@action != 'CREATE'">
              <input type="hidden" name="old-details" id="old-descrip">
                <xsl:attribute name="value">
                  <xsl:apply-templates select="html" mode="common.html-to-text"/>
                </xsl:attribute>
              </input>
            </xsl:if>

          </xsl:when>
          <xsl:otherwise>

            <xsl:apply-templates select="html" mode="common.inline-html"/>

          </xsl:otherwise>
        </xsl:choose>
      </pre>
<xsl:if test="@access = 'editable' and @editing != 'true' and html = ''"><div class="alternative requiresjs alternativedescrip" id="alt-descrip" onclick="_wi_rewriteOnDemand(_$('wi-descrip'),event);_WHACK();return false"><xsl:text>点击以添加说明</xsl:text></div></xsl:if></div></xsl:template>
<xsl:template match="dates" mode="module-details.daterange-editor"><span class="group"><xsl:call-template name="module-details.daterange-field"><xsl:with-param name="field-id-var" select="'_DR_SD'"/>
<xsl:with-param name="field-id" select="'when-sd'"/>
<xsl:with-param name="size" select="10"/>
<xsl:with-param name="value" select="start-date"/>
<xsl:with-param name="visible" select="true()"/></xsl:call-template>
<xsl:text> </xsl:text>
<xsl:call-template name="module-details.daterange-field"><xsl:with-param name="field-id-var" select="'_DR_ST'"/>
<xsl:with-param name="field-id" select="'when-st'"/>
<xsl:with-param name="size" select="8"/>
<xsl:with-param name="value"><xsl:choose><xsl:when test="start-time"><xsl:value-of select="start-time"/></xsl:when>
<xsl:otherwise>?:??</xsl:otherwise></xsl:choose></xsl:with-param>
<xsl:with-param name="visible" select="start-time"/></xsl:call-template></span>
<xsl:text> 到 </xsl:text>
<xsl:variable name="end-time-field"><xsl:call-template name="module-details.daterange-field"><xsl:with-param name="field-id-var" select="'_DR_ET'"/>
<xsl:with-param name="field-id" select="'when-et'"/>
<xsl:with-param name="size" select="8"/>
<xsl:with-param name="value"><xsl:choose><xsl:when test="start-time"><xsl:value-of select="end-time"/></xsl:when>
<xsl:otherwise>?:??</xsl:otherwise></xsl:choose></xsl:with-param>
<xsl:with-param name="visible" select="start-time"/></xsl:call-template></xsl:variable>
<xsl:variable name="end-date-field"><xsl:call-template name="module-details.daterange-field"><xsl:with-param name="field-id-var" select="'_DR_ED'"/>
<xsl:with-param name="field-id" select="'when-ed'"/>
<xsl:with-param name="size" select="10"/>
<xsl:with-param name="value" select="end-date"/>
<xsl:with-param name="visible" select="true()"/></xsl:call-template></xsl:variable>
<span class="group"><xsl:copy-of select="$end-date-field"/>
<xsl:text> </xsl:text>
<xsl:copy-of select="$end-time-field"/></span>
<span class="group"><input type="checkbox" id="when-ad" onclick="_DR_Check(this, 'when',_DR_AD)" value="on"><xsl:if test="not(end-time)"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label for="when-ad"><xsl:text>全天</xsl:text></label></span>
<input type="hidden" id="when-real" name="dates"><xsl:attribute name="value"><xsl:value-of select="value"/></xsl:attribute></input>
<input type="hidden" id="old-when" name="old-dates"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="value"/></xsl:if></xsl:attribute></input></xsl:template>
<xsl:template name="module-details.daterange-field"><xsl:param name="field-id-var"/>
<xsl:param name="field-id"/>
<xsl:param name="size"/>
<xsl:param name="value"/>
<xsl:param name="visible"/>
<input type="text"><xsl:attribute name="class"><xsl:text>text</xsl:text> <xsl:if test="$visible and ($value = '' or contains($value, '?'))"><xsl:text> dr-partial</xsl:text></xsl:if></xsl:attribute> <xsl:attribute name="id"><xsl:value-of select="$field-id"/></xsl:attribute> <xsl:attribute name="onchange"><xsl:text>_DR_Check(this,'when',</xsl:text> <xsl:value-of select="$field-id-var"/> <xsl:text>)</xsl:text></xsl:attribute> <xsl:attribute name="size"><xsl:value-of select="$size"/></xsl:attribute> <xsl:attribute name="value"><xsl:value-of select="$value"/></xsl:attribute> <xsl:if test="not($visible)"><xsl:attribute name="style"><xsl:text>display: none</xsl:text></xsl:attribute></xsl:if></input></xsl:template>
<xsl:template name="google-doc"><xsl:if test="/eventpage/self/@allow-google-doc-feature = 'true'"><div id="ff-google-docs" class="field editable"><div><input type="hidden" id="no-of-gdocs"><xsl:attribute name="value"><xsl:value-of select="count(/eventpage/attachments/attachment)"/></xsl:attribute></input></div>
<div id="docs-attached"><xsl:for-each select="attachments/attachment"><xsl:call-template name="elements-for-an-attachment"><xsl:with-param name="url-of-doc" select="url"/>
<xsl:with-param name="title-of-doc" select="title"/>
<xsl:with-param name="icon-url-of-doc" select="icon-url"/>
<xsl:with-param name="id-prefix"/></xsl:call-template>
<xsl:call-template name="elements-for-an-attachment"><xsl:with-param name="url-of-doc" select="url"/>
<xsl:with-param name="title-of-doc" select="title"/>
<xsl:with-param name="icon-url-of-doc" select="icon-url"/>
<xsl:with-param name="id-prefix">old-</xsl:with-param></xsl:call-template></xsl:for-each></div>
<div><input id="can-add-google-doc" type="hidden"><xsl:attribute name="value"><xsl:choose><xsl:when test="/eventpage/@access-level &gt;=                     60"><xsl:text>true</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>false</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute></input></div>
<xsl:choose><xsl:when test="/eventpage/@access-level &gt;= 60"><xsl:call-template name="draw-google-doc"/></xsl:when>
<xsl:otherwise><xsl:if test="count(/eventpage/attachments/attachment) &gt; 0"><xsl:call-template name="draw-google-doc"/></xsl:if></xsl:otherwise></xsl:choose></div></xsl:if></xsl:template>
<xsl:template name="draw-google-doc"><h3 class="label"><label for="display-docs"><xsl:text>附件</xsl:text></label></h3>
<div id="display-docs"><table id="google-docs-top-table" frame="void"/></div></xsl:template>
<xsl:template name="elements-for-an-attachment"><xsl:param name="url-of-doc"/>
<xsl:param name="title-of-doc"/>
<xsl:param name="icon-url-of-doc"/>
<xsl:param name="id-prefix"/>
<input type="hidden"><xsl:attribute name="name"><xsl:value-of select="$id-prefix"/>
<xsl:text>gdoc-attachment</xsl:text></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="$url-of-doc"/>
<xsl:text> </xsl:text>
<xsl:value-of select="$title-of-doc"/>
<xsl:text> </xsl:text>
<xsl:value-of select="$icon-url-of-doc"/></xsl:attribute></input></xsl:template>
<xsl:variable name="event-is-editable" select="count(/eventpage/*/@access[. != 'readonly']) != 0"/>
<xsl:variable name="event-is-spammable" select="(/eventpage/creator/principal/@id != /eventpage/self/principal/@id)        and (/eventpage/organizer/principal/@id != /eventpage/self/principal/@id)        and count(/eventpage/attendees/*) &gt;= 30"/>
<xsl:template name="module-header-footer.header"><div class="noprint eventborder" style="padding-bottom: 8px; background-color: #c3d9ff; width: 100%"><a class="lk" onmousedown="_EF_Dismiss(false)" onclick="return false" href="/back_to_calendar" id="btcb_top" style="font-weight: bold; font-size: 90%"><xsl:text>« 返回到日历</xsl:text></a>
<xsl:if test="$event-is-editable"><xsl:text> </xsl:text>
<button class="ab" onclick="_EV_Blur(this);_wi_s(_$('masterForm'), true)" id="detailSubmitButtonTop" accesskey="s">保存<small> (<u>S</u>)</small></button>
<xsl:text> </xsl:text>
<button class="ab" onclick="_EV_Blur(this);_EF_Dismiss(true)" id="efcb_top"><xsl:text>取消</xsl:text></button>
<xsl:if test="@action != 'CREATE' and                       @access-level &gt;= 40"><xsl:text> </xsl:text>
<button onclick="_EF_Delete()" class="ab"><xsl:text>删除</xsl:text></button></xsl:if></xsl:if>
<xsl:if test="$event-is-spammable and                     $event-is-editable and                     @action != 'CREATE' and                     @access-level &gt;= 40"><button onclick="_EF_ReportSpamEvent()" class="ab"><xsl:text>报告垃圾邮件
          </xsl:text></button></xsl:if>
<xsl:if test="@action != 'CREATE' and                     count(calendars/principal) != 0"><form action="" style="display: none"><select size="1" class="prefselect" style="vertical-align: middle;" onchange="_EF_moreActionsChange(this)"><option value="n" selected="selected"><xsl:text>其他操作...</xsl:text></option>
<option value="d"><xsl:text>重复活动</xsl:text></option>
<xsl:for-each select="calendars/principal"><xsl:if test="@id != /eventpage/source-calendar/principal/@id"><option><xsl:attribute name="value"><xsl:text>c</xsl:text>
<xsl:value-of select="@id"/></xsl:attribute>复制到 <xsl:value-of select="display"/></option></xsl:if></xsl:for-each></select></form></xsl:if></div></xsl:template>
<xsl:template name="module-header-footer.footer"><div class="noprint eventborder" style="padding-top: 8px; background-color: #c3d9ff; width: 100%"><a class="lk" onmousedown="_EF_Dismiss(false)" onclick="return false" href="/back_to_calendar" id="btcb_btm" style="font-weight: bold; font-size: 90%"><xsl:text>« 返回到日历</xsl:text></a>
<xsl:if test="$event-is-editable"><xsl:text> </xsl:text>
<button class="ab" onclick="_EV_Blur(this);_wi_s(_$('masterForm'), true)" id="detailSubmitButtonBtm" accesskey="s">保存<small> (<u>S</u>)</small></button>
<xsl:text> </xsl:text>
<button class="ab" onclick="_EV_Blur(this);_EF_Dismiss(true)" id="efcb_btm"><xsl:text>取消</xsl:text></button></xsl:if></div></xsl:template>
<xsl:template name="module-hidden.main"><input type="hidden" name="ctz"><xsl:attribute name="value"><xsl:value-of select="timezone/value"/></xsl:attribute></input>
<input type="hidden" name="rfdt"><xsl:attribute name="value"><xsl:value-of select="ref-date/value"/></xsl:attribute></input>
<xsl:if test="attendees/@exceptional = 'true'"><input type="hidden" id="marker-showntfdlg"/></xsl:if>
<xsl:if test="/eventpage/@action = 'CREATE'"><xsl:for-each select="private-property[@access != 'editable']"><input type="hidden" name="pprop"><xsl:attribute name="id"><xsl:text>prv-props-</xsl:text> <xsl:value-of select="position() - 1"/></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="@name"/> <xsl:text>:</xsl:text> <xsl:value-of select="value"/></xsl:attribute></input></xsl:for-each>
<xsl:for-each select="shared-property[@access != 'editable']"><input type="hidden" name="pprop"><xsl:attribute name="id"><xsl:text>prv-props-</xsl:text> <xsl:value-of select="position() - 1"/></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="@name"/> <xsl:text>:</xsl:text> <xsl:value-of select="value"/></xsl:attribute></input></xsl:for-each></xsl:if>
<xsl:if test="shared-property[         @name = 'goo.allowModify']/value = 'true'"><input type="hidden" id="marker-guests-can-modify"/></xsl:if>
<xsl:if test="eid"><input type="hidden" name="eid"><xsl:attribute name="value"><xsl:value-of select="eid/value"/></xsl:attribute></input></xsl:if>
<input type="hidden" name="action"><xsl:attribute name="value"><xsl:value-of select="@action"/></xsl:attribute></input>
<xsl:if test="secid"><input type="hidden" name="secid"><xsl:attribute name="value"><xsl:value-of select="secid/value"/></xsl:attribute></input></xsl:if>
<xsl:if test="@lang"><input type="hidden" name="hl"><xsl:attribute name="value"><xsl:value-of select="@lang"/></xsl:attribute></input></xsl:if>
<xsl:if test="source-calendar/@access != 'editable'"><input type="hidden" id="marker-calname"><xsl:attribute name="value"><xsl:value-of select="/eventpage/source-calendar/principal/display"/></xsl:attribute></input></xsl:if>
<xsl:if test="source-calendar/principal/@id = organizer/principal/@id"><input type="hidden" id="marker-org-cal"/></xsl:if>
<xsl:if test="source-calendar/principal/@hosted-domain != ''"><input type="hidden" id="domain-marker"><xsl:attribute name="value"><xsl:value-of select="source-calendar/principal/@hosted-domain"/></xsl:attribute></input></xsl:if>
<xsl:if test="@specialized = 'true'"><input type="hidden" id="marker-special"/></xsl:if>
<xsl:if test="attendees/@partial = 'true'"><input type="hidden" id="marker-hiddenguests"/></xsl:if>
<xsl:if test="@simplified = 'true'"><input type="hidden" name="sf" value="true"/></xsl:if></xsl:template>
<xsl:template name="module-options.main"><xsl:if test="transparent/@access='editable' or                   class/@access='editable' or                   (reminders/@access='editable' and @simplified='true')"><div id="options"><xsl:attribute name="class"><xsl:text>module </xsl:text> <xsl:call-template name="common.module-expanded"><xsl:with-param name="module-id" select="6"/></xsl:call-template></xsl:attribute>
<hr/>
<div class="t1"/><div class="t2"/>
<h2 class="header"><a onclick="_wi_tm(_MODULE_TYPE_OPTIONS);return false" class="toggle"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="6"/></xsl:call-template></xsl:attribute>
<xsl:text>选项</xsl:text></a></h2>
<div class="modulebody"><div class="fevent" id="optionForm"><xsl:apply-templates select="reminders"/>
<xsl:apply-templates select="transparent"/>
<xsl:apply-templates select="class"/></div></div></div></xsl:if></xsl:template>
<xsl:template match="reminders"><xsl:if test="@access = 'editable' and /eventpage/self/principal/value = /eventpage/source-calendar/principal/value"><div id="ff-op-reminder" class="field editable"><h3 class="subtitle"><label for="wi-op-reminder"><xsl:text>提醒</xsl:text></label></h3>
<div id="wi-op-reminder"><xsl:attribute name="class"><xsl:text>data input field editable reminderBlock</xsl:text></xsl:attribute>
<div id="op-reminder"/></div></div></xsl:if><xsl:if test="@access = 'readonly' or /eventpage/self/principal/value != /eventpage/source-calendar/principal/value"><div id="ff-op-reminder" style="display:none"><h3 class="subtitle"><label for="wi-op-reminder"><xsl:text>提醒</xsl:text></label></h3>
<div id="wi-op-reminder"><xsl:attribute name="class"><xsl:text>data input field editable reminderBlock</xsl:text></xsl:attribute>
<div id="op-reminder"/></div></div></xsl:if></xsl:template>
<xsl:template match="transparent"><xsl:if test="@access = 'editable'"><div id="ff-op-avail" class="field editable"><h3 class="label"><label for="wi-op-avail"><xsl:text>状态显示为</xsl:text></label></h3>
<span id="wi-op-avail" class="input editable radio field-trp"><div class="data"><div class="group"><input type="radio" name="trp" id="op-avail__0" class="member" value="true"><xsl:if test="value = 'true'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-op-avail__0" for="op-avail__0"><xsl:text>有空</xsl:text></label></div>
<div class="group"><input type="radio" name="trp" id="op-avail__1" class="member" value="false"><xsl:if test="value != 'true'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-op-avail__1" for="op-avail__1"><xsl:text>忙碌</xsl:text></label></div></div>
<input type="hidden" name="old-trp"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="value"/></xsl:if></xsl:attribute></input></span></div></xsl:if></xsl:template>
<xsl:template match="class"><xsl:if test="@access = 'editable'"><div class="field"><h3 class="label"><xsl:text>隐私</xsl:text></h3>
<div class="data"><h4 class="subtitle"><xsl:text>此活动是:</xsl:text></h4>
<div id="ff-op-pub" class="field editable"><span id="wi-op-pub" class="input editable radio field-icc"><div class="data"><div class="group"><input type="radio" name="icc" id="op-pub__0" class="member" value="DEFAULT"><xsl:if test="value = 'DEFAULT'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-op-pub__0" for="op-pub__0"><xsl:text>默认</xsl:text></label></div></div>
<div class="data"><div class="group"><input type="radio" name="icc" id="op-pub__1" class="member" value="PRIVATE"><xsl:if test="value = 'PRIVATE'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-op-pub__1" for="op-pub__1"><xsl:text>私人</xsl:text></label></div></div>
<div class="data"><div class="group"><input type="radio" name="icc" id="op-pub__2" class="member" value="PUBLIC"><xsl:if test="value = 'PUBLIC'"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-op-pub__2" for="op-pub__2"><xsl:text>公共</xsl:text></label></div></div>
<input type="hidden" name="old-icc"><xsl:attribute name="value"><xsl:if test="/eventpage/@action != 'CREATE'"><xsl:value-of select="value"/></xsl:if></xsl:attribute></input></span></div>
<a id="helplink34580" target="_blank" class="helplink" style="display:none"><xsl:attribute name="href"><xsl:text>http://www.google.com/support/calendar</xsl:text> <xsl:text>/bin/answer.py?answer=34580&amp;hl=</xsl:text> <xsl:value-of select="/eventpage/@lang"/></xsl:attribute>
<xsl:text>了解私人和公共活动</xsl:text></a>
<xsl:if test="/eventpage/@simplified = 'true' and                          /eventpage/@action != 'CREATE' and                         /eventpage/class/value != 'PRIVATE'"><br/>
<a class="helplink" href="javascript:void(_EF_PublishButtonPopup())" style="display:none"><xsl:text>发布此活动</xsl:text></a></xsl:if></div></div></xsl:if></xsl:template>
<xsl:template name="module-response.main"><xsl:call-template name="invite-yourself-if-allowed"/>
<xsl:if test="@action != 'CREATE' and             0 != count(attendees/attendee/principal                       [@id = /eventpage/source-calendar/principal/@id])"><xsl:call-template name="module-response"/></xsl:if></xsl:template>
<xsl:template name="module-response"><div id="just like that"/>
<xsl:variable name="editable" select="/eventpage/@access-level &gt;= 30"/>
<xsl:variable name="status" select="/eventpage/source-calendar/         principal/@status"/>
<div id="myresponse"><xsl:call-template name="header-class"><xsl:with-param name="module-to-expand" select="5"/>
<xsl:with-param name="user-status" select="$status"/></xsl:call-template>
<hr/>
<div class="t1"/><div class="t2"/>
<h2 class="header"><xsl:choose><xsl:when test="$editable and /eventpage/@can-respond='true'"><a onclick="_wi_tm(_MODULE_TYPE_ATTENDING);return false" class="toggle"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="5"/></xsl:call-template></xsl:attribute>
<xsl:call-template name="module-response.status-messages"/>
<em><xsl:choose><xsl:when test="/eventpage/source-calendar/principal/@id =                                     /eventpage/self/principal/@id"><xsl:text>更改回复</xsl:text></xsl:when>
<xsl:otherwise>更改对  <xsl:value-of select="/eventpage/source-calendar/principal/display"/> 的回复</xsl:otherwise></xsl:choose></em></a></xsl:when>
<xsl:otherwise><xsl:call-template name="module-response.status-messages"/></xsl:otherwise></xsl:choose></h2>
<div class="t2"/><div class="t1"/>
<xsl:if test="$editable and /eventpage/@can-respond='true'"><div class="modulebody"><div class="fevent" id="responseForm"><div id="ff-response" class="field editable"><xsl:call-template name="reponse-radio-buttons"><xsl:with-param name="resp-suffix"/>
<xsl:with-param name="resp-status" select="$status"/></xsl:call-template></div>
<xsl:call-template name="resp-comments"><xsl:with-param name="suffix"/></xsl:call-template></div></div></xsl:if></div></xsl:template>
<xsl:template name="module-response.status-messages"><xsl:param name="invite-yourself"/>
<xsl:choose><xsl:when test="/eventpage/source-calendar/principal/@id =                       /eventpage/self/principal/@id or                       $invite-yourself = 'true'"><span id="hdr-yes"><xsl:text>是，我会参加</xsl:text></span>
<span id="hdr-no"><xsl:text>不，我不参加</xsl:text></span>
<span id="hdr-maybe"><xsl:text>我可能参加</xsl:text></span>
<span id="hdr-none"><xsl:choose><xsl:when test="$invite-yourself = 'true'"><xsl:text>将您自己添加到此活动中</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>您尚未回复</xsl:text></xsl:otherwise></xsl:choose></span></xsl:when>
<xsl:otherwise><span id="hdr-yes">是， <xsl:value-of select="/eventpage/source-calendar/principal/display"/>  将参加</span>
<span id="hdr-no">不， <xsl:value-of select="/eventpage/source-calendar/principal/display"/>  不参加</span>
<span id="hdr-maybe"> <xsl:value-of select="/eventpage/source-calendar/principal/display"/>  也许参加</span>
<span id="hdr-none">有  <xsl:value-of select="/eventpage/source-calendar/principal/display"/>  位尚未回复</span></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="invite-yourself-if-allowed"><xsl:if test="self/@allow-invite-yourself-feature='true'"><xsl:if test="/eventpage/@can-add-self='true'"><xsl:call-template name="module-invite-yourself"/></xsl:if></xsl:if></xsl:template>
<xsl:template name="module-invite-yourself"><div id="invite-yourself"><xsl:variable name="status-invite-yourself" select="/eventpage/self/principal/@status"/>
<xsl:call-template name="header-class"><xsl:with-param name="module-to-expand" select="11"/>
<xsl:with-param name="user-status" select="$status-invite-yourself"/></xsl:call-template>
<div class="t1"/><div class="t2"/>
<h2 class="header"><xsl:if test="/eventpage/@can-add-self='true'"><a onclick="_wi_tm(_MODULE_TYPE_INVITE_YOURSELF);return false" class="toggle"><xsl:attribute name="href"><xsl:call-template name="common.toggle"><xsl:with-param name="module-id" select="11"/></xsl:call-template></xsl:attribute>
<xsl:call-template name="module-response.status-messages"><xsl:with-param name="invite-yourself">true</xsl:with-param></xsl:call-template></a></xsl:if></h2>
<div class="t2"/><div class="t1"/>
<xsl:if test="/eventpage/@can-add-self='true'"><div class="modulebody"><div class="fevent" id="responseForm-invite-yourself"><div id="ff-response-invite-yourself" class="field editable"><xsl:call-template name="reponse-radio-buttons"><xsl:with-param name="resp-suffix">-invite-yourself</xsl:with-param>
<xsl:with-param name="resp-status" select="$status-invite-yourself"/></xsl:call-template></div>
<xsl:call-template name="resp-comments"><xsl:with-param name="suffix">-invite-yourself</xsl:with-param></xsl:call-template></div></div>
<input type="hidden" id="self-principal-id"><xsl:attribute name="value"><xsl:value-of select="self/principal/@id"/></xsl:attribute></input></xsl:if></div></xsl:template>
<xsl:template name="header-class"><xsl:param name="module-to-expand"/>
<xsl:param name="user-status"/>
<xsl:attribute name="class"><xsl:text>module </xsl:text> <xsl:call-template name="common.module-expanded"><xsl:with-param name="module-id" select="$module-to-expand"/></xsl:call-template> <xsl:choose><xsl:when test="$user-status = 1"><xsl:text> response-yes</xsl:text></xsl:when> <xsl:when test="$user-status =               0"><xsl:text> response-none</xsl:text></xsl:when> <xsl:when test="$user-status = 2"><xsl:text> response-no</xsl:text></xsl:when> <xsl:when test="$user-status = 3"><xsl:text> response-maybe</xsl:text></xsl:when> <xsl:otherwise><xsl:text> response-none</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute></xsl:template>
<xsl:template name="resp-comments"><xsl:param name="suffix"/>
<xsl:variable name="self-principal" select="/eventpage/self/principal/@id"/>
<xsl:variable name="source-principal" select="/eventpage/source-calendar/principal/@id"/>
<div class="field"><h3 class="label"><label><xsl:attribute name="for"><xsl:text>rcomment</xsl:text>
<xsl:value-of select="$suffix"/></xsl:attribute>
添加注释</label></h3>
<div class="data"><div class="group"><div class="field editable"><xsl:attribute name="id"><xsl:text>ff-rcomment</xsl:text>
<xsl:value-of select="$suffix"/></xsl:attribute>
<span class="input editable textarea field-rcomment"><xsl:attribute name="id"><xsl:text>wi-rcomment</xsl:text>
<xsl:value-of select="$suffix"/></xsl:attribute>
<textarea onblur="_wi_b(this)" onfocus="_wi_f(this)" class="primitive fieldinput">
                <xsl:attribute name="name">
                  <xsl:text>rcomment</xsl:text>
                  <xsl:value-of select="$suffix"/>
                </xsl:attribute>
                <xsl:attribute name="id">
                  <xsl:text>rcomment</xsl:text>
                   <xsl:value-of select="$suffix"/>
                </xsl:attribute>
                <xsl:choose>
                  <xsl:when test="$suffix = '-invite-yourself'">
                    <xsl:value-of select="/eventpage/attendees/attendee                      [principal/@id = $self-principal]/response-comment/value"/>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="/eventpage/attendees/attendee                      [principal/@id = $source-principal]/                      response-comment/value"/>
                  </xsl:otherwise>
                </xsl:choose>
              </textarea>
<input type="hidden"><xsl:attribute name="id"><xsl:text>old-rcomment</xsl:text>
<xsl:value-of select="$suffix"/></xsl:attribute>
<xsl:attribute name="name"><xsl:text>old-rcomment</xsl:text>
<xsl:value-of select="$suffix"/></xsl:attribute>
<xsl:choose><xsl:when test="$suffix = '-invite-yourself'"><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                        [principal/@id = $self-principal]/                        response-comment/value"/></xsl:attribute></xsl:when>
<xsl:otherwise><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                        [principal/@id = $source-principal]/                        response-comment/value"/></xsl:attribute></xsl:otherwise></xsl:choose></input></span></div></div></div>
<div class="data"><div class="btngroup"><xsl:choose><xsl:when test="$suffix = '-invite-yourself'"><input type="button" onclick="_wi_sr(this.form, true)" class="btn btnsm"><xsl:attribute name="value"><xsl:text>提交我的回复</xsl:text></xsl:attribute></input></xsl:when>
<xsl:otherwise><input type="button" onclick="_wi_sr(this.form, false)" class="btn btnsm"><xsl:attribute name="value"><xsl:text>提交我的回复</xsl:text></xsl:attribute></input></xsl:otherwise></xsl:choose></div></div></div></xsl:template>
<xsl:template name="reponse-radio-buttons"><xsl:param name="resp-suffix"/>
<xsl:param name="resp-status"/>
<xsl:variable name="self-principal" select="/eventpage/self/principal/@id"/>
<xsl:variable name="source-principal" select="/eventpage/source-calendar/principal/@id"/>
<h3 class="label"><label><xsl:attribute name="for"><xsl:text>wi-response</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:text>您是否会参加？</xsl:text></label></h3>
<span class="input editable radio field-rst"><xsl:attribute name="id"><xsl:text>wi-response</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<div class="data"><div class="group"><input type="radio" class="member" value="1"><xsl:attribute name="name"><xsl:text>rst</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:attribute name="id"><xsl:text>response__0</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:if test="$resp-status = 1"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label><xsl:attribute name="name"><xsl:text>lbl-response__0</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:attribute name="for"><xsl:text>response__0</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:text>是</xsl:text></label>
+
<xsl:choose><xsl:when test="$resp-suffix = '-invite-yourself'"><input type="text" id="xguests-invite-yourself" size="2" name="rgu-invite-yourself" onchange="_wi_vi(this);                  _wi_updateRadio(this.form, 'rst-invite-yourself',                  '1')"><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                        [principal/@id = $self-principal]/@extra-guests"/></xsl:attribute></input></xsl:when>
<xsl:otherwise><input type="text" id="xguests" size="2" name="rgu" onchange="_wi_vi(this); _wi_updateRadio(this.form, 'rst',                 '1')"><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                        [principal/@id = $source-principal]/@extra-guests"/></xsl:attribute></input></xsl:otherwise></xsl:choose>
<input type="hidden"><xsl:attribute name="name"><xsl:text>old-rgu</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:choose><xsl:when test="$resp-suffix = '-invite-yourself'"><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                      [principal/@id = $self-principal]/@extra-guests"/></xsl:attribute></xsl:when>
<xsl:otherwise><xsl:attribute name="value"><xsl:value-of select="/eventpage/attendees/attendee                      [principal/@id = $source-principal]/@extra-guests"/></xsl:attribute></xsl:otherwise></xsl:choose></input>
来宾</div></div>
<div class="data"><div class="group"><input type="radio" class="member" value="3"><xsl:attribute name="name"><xsl:text>rst</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:attribute name="id"><xsl:text>response__1</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:if test="$resp-status = 3"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label><xsl:attribute name="id"><xsl:text>lbl-response__1</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:attribute name="for"><xsl:text>response__1</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:text>也许</xsl:text></label></div></div>
<xsl:if test="$resp-suffix != '-invite-yourself'"><div class="data"><div class="group"><input type="radio" name="rst" id="response__2" class="member" value="2"><xsl:if test="$resp-status = 2"><xsl:attribute name="checked"><xsl:text>checked</xsl:text></xsl:attribute></xsl:if></input>
<xsl:text> </xsl:text>
<label id="lbl-response__2" for="response__2"><xsl:text>否</xsl:text></label></div></div></xsl:if>
<input type="hidden"><xsl:attribute name="name"><xsl:text>old-rst</xsl:text>
<xsl:value-of select="$resp-suffix"/></xsl:attribute>
<xsl:attribute name="value"><xsl:value-of select="$resp-status"/></xsl:attribute></input></span></xsl:template>
<xsl:template name="module-revert.main"><xsl:variable name="allow-rejoin" select="@simplified = 'true'"/>
<xsl:variable name="can-revert-overrides" select="@has-overrides = 'true'              and @access-level &gt;= 40"/>
<xsl:variable name="can-revert-specialization" select="@specialized = 'true'              and first-start              and (organizer/principal/@id = source-calendar/principal/@id                   or shared-property[                     @name = 'goo.allowModify']/value = 'true')              and @access-level &gt;= 60"/>
<xsl:if test="$allow-rejoin and @action != 'VIEW_ORIGINAL'            and ($can-revert-overrides or $can-revert-specialization)"><div id="revertmsg" class="module"><div class="t1"/><div class="t2"/>
<div class="modulebody revertmod"><xsl:choose><xsl:when test="$can-revert-overrides"><xsl:text>您曾经进行过不会显示给其他来宾的更改。</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>此活动已更改，不再属于系列活动之一。</xsl:text></xsl:otherwise></xsl:choose>
<xsl:text> </xsl:text>
<a><xsl:attribute name="href"><xsl:text>javascript:void(_EF_ShowEventDetails(</xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="eid/value"/></xsl:call-template> <xsl:text>,true,true))</xsl:text></xsl:attribute>
<xsl:choose><xsl:when test="$can-revert-overrides"><xsl:text>恢复原始活动详情。</xsl:text></xsl:when>
<xsl:otherwise><xsl:text>撤消更改，并将此活动重新纳入到系列活动中。</xsl:text></xsl:otherwise></xsl:choose></a></div>
<div class="t2"/><div class="t1"/></div></xsl:if></xsl:template>
<xsl:template name="eventpage.standalone"><html><head><title><xsl:choose><xsl:when test="@action != 'CREATE'"><xsl:value-of select="summary/html"/></xsl:when>
<xsl:otherwise><xsl:text>新活动</xsl:text></xsl:otherwise></xsl:choose></title>
<link type="text/css" rel="stylesheet"><xsl:attribute name="href"><xsl:value-of select="@static-file-prefix"/>
<xsl:text>standalonecompiled.css</xsl:text></xsl:attribute></link>
<link rel="SHORTCUT ICON" href="images/favicon.ico"/>
<link rel="alternate" media="handheld"><xsl:attribute name="href"><xsl:text>mevent</xsl:text> <xsl:text>?eid=</xsl:text> <xsl:value-of select="eid/value"/></xsl:attribute></link>
<xsl:element name="script"><xsl:attribute name="type">text/javascript</xsl:attribute> <xsl:text>var init_uid = </xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="self/principal/@id"/></xsl:call-template>; <xsl:text>var init_contactListDispatch = </xsl:text> <xsl:call-template name="standalone.self-contactlist-dispatch"/>; <xsl:text>var init_prefsDispatch = </xsl:text> <xsl:value-of select="standalone-userprefs/value"/>;</xsl:element>
<script type="text/javascript"><![CDATA[
window._locale = 'zh_CN';
]]></script>
<xsl:element name="script"><xsl:attribute name="type">text/javascript</xsl:attribute> <xsl:attribute name="src"><xsl:value-of select="@static-file-prefix"/> <xsl:text>standalonecompiled__zh_cn.js</xsl:text></xsl:attribute></xsl:element>
<xsl:element name="script"><xsl:attribute name="type">text/javascript</xsl:attribute> <xsl:text>_setStaticFilePrefix(</xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="@static-file-prefix"/></xsl:call-template>); <xsl:text>
function _isIE() {
  var a = navigator.userAgent.toLowerCase();
  return (a.indexOf('msie')!=-1);
}

function _checkCSS(reload) {
  var ok = true;
  for(var i = 0; i &lt; document.styleSheets.length; ++i) {
    if (!document.styleSheets[i].href) break;
    var sheet = document.styleSheets[i];
    var r = sheet.rules;
    if (r.length == 0 || r[r.length-1].selectorText != '.lastCalRule') {
      ok = false;
      if (reload) {
        sheet.href += '?rand=' + Math.random();
      }
    }
  }
  return ok;
}

(function(){
  if (_isIE()) {
    if (typeof _lastCalFunc != 'function') {
      var mainjs = document.scripts[1];
      if (mainjs) {
        mainjs.src = mainjs.src + '?rand=' + Math.random();
      }
    }
    _checkCSS(true);
  }
})();</xsl:text></xsl:element>
<script type="text/javascript"><![CDATA[
(function(){
  if (_isIE() && (typeof _lastCalFunc != 'function' || 
      !_checkCSS(false))) {
    window.location.href =
      'http://www.google.com/support/calendar/bin/answer.py' +
      '?answer=34581&hl=' + 'zh_CN';
  }
})();
]]></script>
<style type="text/css">
body {
  margin:0;
  padding:10px;
}
</style></head>
<body onload="_initStandalone()" class="eventpg zh_cn zh"><div style="display:none" id="event-page-spec"><xsl:apply-templates select="." mode="common.escape-xml"/></div>
<script type="text/javascript"><![CDATA[
var _nav=navigator.userAgent.toLowerCase();
if (_nav.indexOf('msie 6.')!=-1) {document.body.className += ' ie6'};
if (_nav.indexOf('msie 7.')!=-1) {document.body.className += ' ie7'};
      
var style = '.requiresjs{display:block;}';
if (_isIE() || _isSafari) {
  document.writeln('<style type="text/css">' + style + '<\/style>');
} else {
  var styleNode = document.createElement('style');
  styleNode.type = 'text/css';
  styleNode.appendChild(document.createTextNode(style));
  document.body.appendChild(styleNode);
}
]]></script>
<xsl:element name="script"><xsl:attribute name="type">text/javascript</xsl:attribute> <xsl:text>_setUid(init_uid);</xsl:text> <xsl:text>
    _storeEventXml(_$('event-page-spec'));
    _Dispatch(init_contactListDispatch);
    _Dispatch(init_prefsDispatch);
    </xsl:text></xsl:element>
<div id="nb"><a id="nb-logo" href="render" title="转到 Google 日历"><img src="images/blue_beta_zh-CN.gif" height="34" width="150" style="top: -5px; left: -13px; position: absolute; border: 0px" alt="Google 日历"/></a>
<xsl:variable name="is-public-principal" select="self/principal/@type = 5"/>
<div id="nb-link"><div id="nb-user"><xsl:if test="not($is-public-principal)"><strong><xsl:value-of select="self/principal/value"/></strong>
<xsl:if test="not(self/@sign-up-url)"><xsl:text>|</xsl:text>
<xsl:choose><xsl:when test="self/@is-signed-in = 'true'"><a href="logout"><xsl:text>退出</xsl:text></a></xsl:when>
<xsl:otherwise><a href="render"><xsl:text>登录</xsl:text></a></xsl:otherwise></xsl:choose></xsl:if></xsl:if></div>
<div id="nb-this"><xsl:choose><xsl:when test="$is-public-principal"><a href="render"><xsl:text>注册 Google 日历</xsl:text></a></xsl:when>
<xsl:when test="self/@sign-up-url"><a><xsl:attribute name="href"><xsl:value-of select="self/@sign-up-url"/></xsl:attribute>
注册 Google 日历</a></xsl:when>
<xsl:otherwise> </xsl:otherwise></xsl:choose></div></div></div>
<xsl:if test="self/@gaia-account-email"><div style="height: 2.1ex;" class="nt" id="nt1"><div style="padding-bottom: 4px; padding-top: 4px" align="center"><table cellspacing="0" cellpadding="0"><tr style="height:1px;"><td class="tl"/>
<td class="nm" rowspan="2" id="nt2"><a href="{self/@transfer-event-url}">添加此活动</a>到您的 <xsl:value-of select="self/@gaia-account-email"/> 日历。</td>
<td class="tr"/></tr>
<tr style="height:1px;"><td class="bl"/>
<td class="br"/></tr></table></div></div></xsl:if>
<xsl:for-each select="messages-to-user/message"><div class="messageToUser"><span><xsl:value-of select="display"/></span></div></xsl:for-each>
<div id="content"><form action="event" method="POST" onsubmit="return _wi_s(this, false)"><xsl:attribute name="name">masterForm</xsl:attribute>
<xsl:attribute name="id">masterForm</xsl:attribute>
<xsl:call-template name="eventpage.body"/>
<xsl:if test="count(@event-auth-token) != 0"><input type="hidden" name="tok"><xsl:attribute name="value"><xsl:value-of select="@event-auth-token"/></xsl:attribute></input></xsl:if>
<xsl:if test="@access-level = 20"><input type="button"><xsl:attribute name="value"><xsl:text>添加到我的日历</xsl:text></xsl:attribute>
<xsl:attribute name="onclick"><xsl:text>window.location = </xsl:text> <xsl:call-template name="common.js-string"><xsl:with-param name="escapee"><xsl:text>event</xsl:text> <xsl:text>?action=TEMPLATE</xsl:text> <xsl:text>&amp;tmeid=</xsl:text> <xsl:value-of select="eid/value"/> <xsl:text>&amp;tmsrc=</xsl:text> <xsl:value-of select="source-calendar/principal/@id"/></xsl:with-param></xsl:call-template></xsl:attribute></input></xsl:if>
<xsl:if test="@access-level &gt;= 30"><input type="submit" id="submitButton" value="保存更改"><xsl:attribute name="style"><xsl:if test="@action != 'CREATE'                               and count(*[@editing = 'true']) = 0"><xsl:text>display:none</xsl:text></xsl:if></xsl:attribute></input>
<xsl:text> </xsl:text>
<script type="text/javascript"><![CDATA[
if (window.opener && window.opener !== window) {
  var button = document.createElement('button');
  button.onclick = function () { window.close(); };
  button.appendChild(document.createTextNode(_MSG_CANCEL));
  _$('masterForm').appendChild(button);
}
]]></script></xsl:if></form></div></body></html></xsl:template>
<xsl:template name="standalone.self-contactlist-dispatch"><xsl:text>['ap',[</xsl:text>
<xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="self/principal/@id"/></xsl:call-template>
<xsl:text>,</xsl:text>
<xsl:value-of select="self/principal/@type"/>
<xsl:text>,</xsl:text>
<xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="self/principal/display"/></xsl:call-template>
<xsl:text>,</xsl:text>
<xsl:call-template name="common.js-string"><xsl:with-param name="escapee" select="self/principal/value"/></xsl:call-template>
<xsl:text>]]</xsl:text></xsl:template>
<xsl:template match="/eventpage"><xsl:choose><xsl:when test="@simplified = 'true'"><xsl:call-template name="eventpage.simplified"/></xsl:when>
<xsl:otherwise><xsl:call-template name="eventpage.standalone"/></xsl:otherwise></xsl:choose></xsl:template>
<xsl:template name="eventpage.simplified"><top><xsl:call-template name="module-header-footer.header"/>
<form method="post" name="masterForm" id="masterForm" onsubmit="return _wi_s(this, false)" action="event"><div class="eventpg"><div id="content"><xsl:call-template name="eventpage.body"/></div></div></form>
<xsl:call-template name="module-header-footer.footer"/></top></xsl:template>
<xsl:template name="eventpage.body"><xsl:call-template name="module-hidden.main"/>
<div class="fevent" id="eventdetails"><div id="details-container"><xsl:call-template name="module-details.main"/></div></div>
<div id="extras"><xsl:call-template name="module-response.main"/>
<xsl:call-template name="module-attendees.main"/>
<xsl:if test="@action != 'CREATE'"><xsl:call-template name="module-options.main"/></xsl:if></div>
<xsl:call-template name="module-revert.main"/>
<xsl:if test="@action = 'CREATE'"><xsl:call-template name="module-options.main"/></xsl:if>
<xsl:if test="not(/eventpage/rrule and not(/eventpage/dates))"><xsl:call-template name="module-comments.main"/></xsl:if>
<div class="reset"/></xsl:template></xsl:stylesheet>