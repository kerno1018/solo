package com.example.job;

import com.example.base.Keys;
import com.example.base.NewerBuyCommand;
import com.example.base.SellAndBuyCommand;
import com.example.bean.Account;
import com.example.bean.OwnStock;
import com.example.bean.Stock;
import com.example.base.DB;
import com.example.service.JSLService;
import com.example.service.LogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Component
public class CurrencyJob {
    Logger logger = LoggerFactory.getLogger(CurrencyJob.class);
    public final static long SECOND = 1 * 1000;
    @Autowired
    private JSLService jslService;
    @Autowired
    private LogService logService;
    @Scheduled(cron="0/30 * 09-15 * * ? ")
    public void jslInfo(){
        jslService.syncData();
    }

    @Scheduled(cron="0/5 * 09-15 * * ? ")
    public void syncData(){
        if(DB.start){
            jslService.refreshData();
        }
    }

    @Scheduled(cron="0/2 * 09-15 * * ? ")
    public void rolling(){
        if(DB.start){
            List<Stock> list = new ArrayList<Stock>();
            DB.getAllStocks().values().forEach(x->{
                try {
                    list.add(x.clone());
                } catch (CloneNotSupportedException e) {
                    e.printStackTrace();
                }
            });
            Collections.sort(list, new Comparator<Stock>() {
                @Override
                public int compare(Stock o1, Stock o2) {
                    return o1.sortByPrice().compareTo(o2.sortByPrice());
                }
            });

            list.forEach((x)->{
                System.out.println("  "+x.getId() + " --- " + x.getPrice() + " --- " + x.sortByPrice());
            });
            System.out.println("-----------------------------------------------------------");
            Stock valueableStock = list.get(0);
            for(Account x : DB.getAllAccount().values()){
                if(x.getStatus() && x.getLockAccountVersion().equals(0)){
                    x.setLockAccountVersion(1);
                    // had ext money will auto buy.
                    if(x.getCanUseMoney() > Keys.FORBID_ROLLING_LIMIT){
                        if(valueableStock.sortByPrice() < 0 ){
                            Double canUseMoney = x.getCanUseMoney() - Keys.FORBID_ROLLING_LIMIT;
                            if(canUseMoney/valueableStock.getAvgSellPrice() > 100){
                                new Thread(new NewerBuyCommand(x,valueableStock,logService)).start();
                                break;
                            }
                        }
                    }
                    // check own stock had rolling stock or not
                    for(OwnStock stock : x.getOwnStock().values()){
                        // if had own
                        if(DB.getAllStocks().get(stock.getId()) != null){
                            //check need rolling or not.
                            Stock own = DB.getAllStocks().get(stock.getId());
                            // filter same stock
                            if(own.getId().equals(valueableStock.getId())){
                                continue;
                            }
                            if(valueableStock.sortByPrice() < 0 && valueableStock.sortByPrice() - own.sortByPrice() <= Keys.CONDITION_PREMINUM){
                                // sell own,buy new.
                                new Thread(new SellAndBuyCommand(x,valueableStock,stock,logService)).start();
                            }
                        }
                    }
                    x.setLockAccountVersion(0);
                }else{
                    logger.info("Account will continue rolling after all order finished.");
                }
            }
        }
    }



}
