package com.example.util;

import java.util.Calendar;
import java.util.Date;

public class TimeLimit {
    protected Calendar time = Calendar.getInstance();
    public Boolean holdOn () {
        return time.getTimeInMillis() <= new Date().getTime();
    }

    private static volatile Calendar dataProtectedTime = Calendar.getInstance();
    public static Boolean canGetNew(){
        return dataProtectedTime.getTimeInMillis() <= new Date().getTime();
    }

    public static synchronized void delay(){
        dataProtectedTime.setTime(new Date());
        dataProtectedTime.add(Calendar.MINUTE,15);
    }

}
