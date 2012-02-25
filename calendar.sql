
    drop table ActivityShare;

    drop table activity;

    drop table calendar;

    drop table calendartask;

    drop table comment;

    drop table dateduration;

    drop table displayconfig;

    drop table mailreminder;

    drop table seriesbase;

    drop table sharecalendar;

    drop table smsreminder;

    create table ActivityShare (
        ID varchar(32) not null,
        UID varchar(100),
        CALJOIN integer,
        MODIFY smallint,
        INVITE smallint,
        VIEW smallint,
        EXTRAGST integer,
        COMMENT varchar(100),
        ACTIVITYID varchar(32) not null,
        primary key (ID)
    );

    comment on column ActivityShare.ACTIVITYID is
        'activity';

    create table activity (
        ID varchar(32) not null,
        TEXT varchar(256),
        LOCATION varchar(128),
        DETAIL varchar(1024),
        STARTTIME timestamp,
        ENDTIME timestamp,
        ICC varchar(16),
        TRP smallint,
        EREM varchar(256),
        SPROP varchar(256),
        SERIESSTATE integer,
        SERIESID varchar(32),
        GUESTSEMAIL varchar(256),
        LASTMODIFYTIME timestamp,
        PERSONID varchar(32) not null,
        CALENDARID varchar(32) not null,
        SF smallint,
        IDINAPP varchar(64),
        APPTYPE varchar(32),
        EXTENDPROP varchar(1024),
        primary key (ID)
    );

    create table calendar (
        ID varchar(32) not null,
        NAME varchar(128),
        COLOR integer,
        ISDEFAULT smallint,
        HIDDEN varchar(32),
        OFF smallint,
        USERID varchar(32) not null,
        DETAILS varchar(300),
        LOCATION varchar(100),
        GL varchar(100),
        CTZ varchar(100),
        GRPEML varchar(100),
        APID varchar(100),
        APPOPEDUM varchar(100),
        NCAL smallint,
        UNDF smallint,
        RP varchar(100),
        primary key (ID)
    );

    create table calendartask (
        ID varchar(32) not null,
        TASKID varchar(16),
        TYPE integer,
        DESC varchar(1024),
        SDATE timestamp,
        primary key (ID)
    );

    create table comment (
        ID varchar(32) not null,
        ACTIVITYID varchar(32),
        PERSONID varchar(32) not null,
        CALENDARID varchar(32),
        COMMENT varchar(512),
        CREATEDDATE timestamp,
        primary key (ID)
    );

    create table dateduration (
        ID varchar(32) not null,
        STARTTIME timestamp,
        ENDTIME timestamp,
        primary key (ID)
    );

    create table displayconfig (
        ID varchar(32) not null,
        DTFLDORDER varchar(3),
        FORMAT24HOURTIME smallint,
        FIRSTDAY varchar(1),
        WEEKVIEW5 smallint,
        DEFAULTCALMODE varchar(10),
        CUSTOMCALMODE varchar(16),
        SHOWCURTIME smallint,
        SHOWDECLINED smallint,
        PERSONID varchar(32) not null unique,
        primary key (ID)
    );

    create table mailreminder (
        ID varchar(32) not null,
        ACTIVITYID varchar(32),
        REMINDTIME varchar(16),
        SDATE timestamp,
        primary key (ID)
    );

    create table seriesbase (
        ID varchar(32) not null,
        TEXT varchar(256),
        LOCATION varchar(128),
        DETAILS varchar(1024),
        STARTTIME timestamp,
        DATEDURATION bigint,
        GUESTSEMAIL varchar(256),
        SPROP varchar(256),
        TRP smallint,
        ICC varchar(16),
        RECUR varchar(256),
        primary key (ID)
    );

    create table sharecalendar (
        ID varchar(32) not null,
        PERSONID varchar(128) not null,
        COLOR integer,
        HIDDEN smallint,
        NAME varchar(128),
        OFF smallint,
        POWER integer,
        CALENDARID varchar(32),
        primary key (ID)
    );

    create table smsreminder (
        ID varchar(32) not null,
        ACTIVITYID varchar(32),
        REMINDTIME varchar(16),
        SDATE timestamp,
        primary key (ID)
    );

    alter table ActivityShare 
        add constraint FKF12E2DF092FB8D3 
        foreign key (ACTIVITYID) 
        references activity;

    alter table comment 
        add constraint FK38A5EE5F92FB8D3 
        foreign key (ACTIVITYID) 
        references activity;

    alter table dateduration 
        add constraint FK2597AF428F144D84 
        foreign key (ID) 
        references activity;

    alter table mailreminder 
        add constraint FK51601F2992FB8D3 
        foreign key (ACTIVITYID) 
        references activity;

    alter table smsreminder 
        add constraint FK61D614CB92FB8D3 
        foreign key (ACTIVITYID) 
        references activity;

create index idx_calid on activity (CALENDARID);