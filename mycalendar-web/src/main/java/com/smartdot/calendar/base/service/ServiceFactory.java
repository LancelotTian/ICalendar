package com.smartdot.calendar.base.service;

import com.smartdot.calendar.service.ActivityService;
import com.smartdot.calendar.service.CalendarService;
import com.smartdot.calendar.service.ImportAndExportService;
import com.smartdot.calendar.service.SearchService;
import com.smartdot.calendar.service.UserService;
import com.smartdot.calendar.service.impl.ActivityServiceImpl;
import com.smartdot.calendar.service.impl.CalendarServiceImpl;
import com.smartdot.calendar.service.impl.ImportAndExportServiceImpl;
import com.smartdot.calendar.service.impl.SearchServiceImpl;
import com.smartdot.calendar.service.impl.UserServiceImpl;

public class ServiceFactory {

    private static ServiceFactory sf;

    private ServiceFactory() {
    }

    public static ServiceFactory getInstance() {
        if (sf == null) {
            sf = new ServiceFactory();
        }
        return sf;
    }

    public CalendarService getCalendarService() {
        return new CalendarServiceImpl();
    }

    public ActivityService getActivityService() {
        return new ActivityServiceImpl();
    }

    public ImportAndExportService getImportAndExportService() {
        return new ImportAndExportServiceImpl();
    }

    public UserService getUserService() {
        return new UserServiceImpl();
    }

    public SearchService getSearchService() {
        return new SearchServiceImpl();
    }
}
