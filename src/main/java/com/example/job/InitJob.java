package com.example.job;

import com.example.service.JSLService;
import com.example.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class InitJob {

    @Autowired
    private JSLService jslService;
    @Autowired
    private LogService logService;


    @Scheduled(cron="0 0/1 15 * * ?")
    public void saveStockInfo(){
        logService.updateStockInfoToDB();
    }


}
