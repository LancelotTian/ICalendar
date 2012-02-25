-- MySQL dump 10.11
--
-- Host: localhost    Database: calendar
-- ------------------------------------------------------
-- Server version	5.0.77

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `calendar`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `calendar` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `calendar`;

--
-- Table structure for table `ActivityShare`
--

DROP TABLE IF EXISTS `ActivityShare`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `ActivityShare` (
  `ID` varchar(32) NOT NULL,
  `UID` varchar(100) default NULL,
  `CALJOIN` int(11) default NULL,
  `MODIFY` smallint(6) default NULL,
  `INVITE` smallint(6) default NULL,
  `VIEW` smallint(6) default NULL,
  `EXTRAGST` int(11) default NULL,
  `COMMENT` varchar(100) default NULL,
  `ACTIVITYID` varchar(32) NOT NULL,
  PRIMARY KEY  (`ID`),
  KEY `FKF12E2DF092FB8D3` (`ACTIVITYID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `activity` (
  `ID` varchar(32) NOT NULL,
  `TEXT` varchar(256) default NULL,
  `LOCATION` varchar(128) default NULL,
  `DETAIL` varchar(1024) default NULL,
  `STARTTIME` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `ENDTIME` timestamp NOT NULL default '0000-00-00 00:00:00',
  `ICC` varchar(16) default NULL,
  `TRP` smallint(6) default NULL,
  `EREM` varchar(256) default NULL,
  `SPROP` varchar(256) default NULL,
  `SERIESSTATE` int(11) default NULL,
  `SERIESID` varchar(32) default NULL,
  `GUESTSEMAIL` varchar(256) default NULL,
  `LASTMODIFYTIME` timestamp NOT NULL default '0000-00-00 00:00:00',
  `PERSONID` varchar(32) NOT NULL,
  `CALENDARID` varchar(32) NOT NULL,
  `SF` smallint(6) default NULL,
  `IDINAPP` varchar(64) default NULL,
  `APPTYPE` varchar(32) default NULL,
  `EXTENDPROP` varchar(1024) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `idx_calid` (`CALENDARID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `calendar` (
  `ID` varchar(32) NOT NULL,
  `NAME` varchar(128) default NULL,
  `COLOR` int(11) default NULL,
  `ISDEFAULT` smallint(6) default NULL,
  `HIDDEN` varchar(32) default NULL,
  `OFF` smallint(6) default NULL,
  `USERID` varchar(32) NOT NULL,
  `DETAILS` varchar(300) default NULL,
  `LOCATION` varchar(100) default NULL,
  `GL` varchar(100) default NULL,
  `CTZ` varchar(100) default NULL,
  `GRPEML` varchar(100) default NULL,
  `APID` varchar(100) default NULL,
  `APPOPEDUM` varchar(100) default NULL,
  `NCAL` smallint(6) default NULL,
  `UNDF` smallint(6) default NULL,
  `RP` varchar(100) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `calendartask`
--

DROP TABLE IF EXISTS `calendartask`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `calendartask` (
  `ID` varchar(32) NOT NULL,
  `TASKID` varchar(16) default NULL,
  `TYPE` int(11) default NULL,
  `DESC` varchar(1024) default NULL,
  `SDATE` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `comment` (
  `ID` varchar(32) NOT NULL,
  `ACTIVITYID` varchar(32) default NULL,
  `PERSONID` varchar(32) NOT NULL,
  `CALENDARID` varchar(32) default NULL,
  `COMMENT` varchar(512) default NULL,
  `CREATEDDATE` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`),
  KEY `FK38A5EE5F92FB8D3` (`ACTIVITYID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `dateduration`
--

DROP TABLE IF EXISTS `dateduration`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `dateduration` (
  `ID` varchar(32) NOT NULL,
  `STARTTIME` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `ENDTIME` timestamp NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `displayconfig`
--

DROP TABLE IF EXISTS `displayconfig`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `displayconfig` (
  `ID` varchar(32) NOT NULL,
  `DTFLDORDER` varchar(3) default NULL,
  `FORMAT24HOURTIME` smallint(6) default NULL,
  `FIRSTDAY` varchar(1) default NULL,
  `WEEKVIEW5` smallint(6) default NULL,
  `DEFAULTCALMODE` varchar(10) default NULL,
  `CUSTOMCALMODE` varchar(16) default NULL,
  `SHOWCURTIME` smallint(6) default NULL,
  `SHOWDECLINED` smallint(6) default NULL,
  `PERSONID` varchar(32) NOT NULL,
  PRIMARY KEY  (`ID`),
  UNIQUE KEY `PERSONID` (`PERSONID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `mailreminder`
--

DROP TABLE IF EXISTS `mailreminder`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `mailreminder` (
  `ID` varchar(32) NOT NULL,
  `ACTIVITYID` varchar(32) default NULL,
  `REMINDTIME` varchar(16) default NULL,
  `SDATE` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`),
  KEY `FK51601F2992FB8D3` (`ACTIVITYID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `seriesbase`
--

DROP TABLE IF EXISTS `seriesbase`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `seriesbase` (
  `ID` varchar(32) NOT NULL,
  `TEXT` varchar(256) default NULL,
  `LOCATION` varchar(128) default NULL,
  `DETAILS` varchar(1024) default NULL,
  `STARTTIME` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `DATEDURATION` bigint(20) default NULL,
  `GUESTSEMAIL` varchar(256) default NULL,
  `SPROP` varchar(256) default NULL,
  `TRP` smallint(6) default NULL,
  `ICC` varchar(16) default NULL,
  `RECUR` varchar(256) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `sharecalendar`
--

DROP TABLE IF EXISTS `sharecalendar`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `sharecalendar` (
  `ID` varchar(32) NOT NULL,
  `PERSONID` varchar(128) NOT NULL,
  `COLOR` int(11) default NULL,
  `HIDDEN` smallint(6) default NULL,
  `NAME` varchar(128) default NULL,
  `OFF` smallint(6) default NULL,
  `POWER` int(11) default NULL,
  `CALENDARID` varchar(32) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `smsreminder`
--

DROP TABLE IF EXISTS `smsreminder`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `smsreminder` (
  `ID` varchar(32) NOT NULL,
  `ACTIVITYID` varchar(32) default NULL,
  `REMINDTIME` varchar(16) default NULL,
  `SDATE` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`),
  KEY `FK61D614CB92FB8D3` (`ACTIVITYID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET character_set_client = @saved_cs_client;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-07-18  1:52:15
