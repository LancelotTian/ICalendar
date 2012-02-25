package net.tl.icalendar.base.service;

import net.tl.icalendar.service.ActivityService;
import net.tl.icalendar.service.CalendarService;
import net.tl.icalendar.service.ImportAndExportService;
import net.tl.icalendar.service.SearchService;
import net.tl.icalendar.service.UserService;
import net.tl.icalendar.service.impl.ActivityServiceImpl;
import net.tl.icalendar.service.impl.CalendarServiceImpl;
import net.tl.icalendar.service.impl.ImportAndExportServiceImpl;
import net.tl.icalendar.service.impl.SearchServiceImpl;
import net.tl.icalendar.service.impl.UserServiceImpl;

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
