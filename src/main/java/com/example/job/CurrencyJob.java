package com.example.job;

import com.example.base.Keys;
import com.example.base.NewerBuyCommand;
import com.example.base.SellAndBuyCommand;
import com.example.bean.Account;
import com.example.bean.OwnStock;
import com.example.bean.Stock;
import com.example.base.DB;
import com.example.entity.User;
import com.example.service.JSLService;
import com.example.service.LogService;
import com.example.util.MathUtil;
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
        if(DB.start && DB.getAllStocks().size()>3){
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

            Stock valueableStock = list.get(0);
            for(Account x : DB.getAllAccount().values()){
                if(x.getStatus() && x.getLockAccountVersion().equals(0)){

                    // had ext money will auto buy.
                    if(Double.valueOf(x.getCanUseMoney()/Keys.FORBID_ROLLING_LIMIT).intValue() > 1){
                        if(valueableStock.sortByPrice() < 0 ){
                            Double canUseMoney = x.getCanUseMoney() - Keys.FORBID_ROLLING_LIMIT;
                            if(canUseMoney/valueableStock.getSellOnePrice() >= 100){
                                x.addLockAccountVersion();
                                new Thread(new NewerBuyCommand(x,valueableStock,logService)).start();
                                break;
                            }
                        }
                    }
                    // check own stock had rolling stock or not
                    for(OwnStock stock : x.getOwnStock().values()){
                        // if had own
                        if(x.getLockAccountVersion().equals(0) && DB.getAllStocks().get(stock.getId()) != null && stock.getCanUseCount() > 0){
                            //check need rolling or not.
                            Stock own = DB.getAllStocks().get(stock.getId());
                            // filter same stock
                            if(own.getId().equals(valueableStock.getId())){
                                continue;
                            }
                            double valueablePriminum = MathUtil.formatDoubleWith2point((valueableStock.getSellOnePrice()-DB.realValue.get(valueableStock.getId())) /DB.realValue.get(valueableStock.getId()));
                            double ownPriminum = MathUtil.formatDoubleWith2point((DB.getAllStocks().get(own.getId()).getBuyOnePrice() - DB.realValue.get(own.getId())) / DB.realValue.get(own.getId()));
                            double countPriminum = valueablePriminum - ownPriminum;
                            if(Keys.SHOW_LOG){
                                logger.info("---------------------------------------------------------------------------");
                                logger.info("value priminum :" + valueablePriminum);
                                logger.info("  own priminum :" + ownPriminum);
                                logger.info("count priminum :" + countPriminum);
                                logger.info("---------------------------------------------------------------------------");
                            }
                            if(countPriminum < 0 && countPriminum <= Keys.CONDITION_PREMINUM){
                                // sell own,buy new.
                                x.addLockAccountVersion();
                                new Thread(new SellAndBuyCommand(x,valueableStock,stock,logService)).start();
                            }
                        }
                    }
                }else{
                    logger.info("Account will continue rolling after all order finished.");
                }
            }
        }
    }

//    @Scheduled(fixedDelay = 5*SECOND)
//    public void onlyLog(){
//        if(Keys.DEBUG && DB.getAllAccount().size() ==0){
//            User user = new User();
//            user.setEnable(true);
//            user.setId(1);
//            Account account = new Account();
//            account.setId(1);
//            account.setUser(user);
//            user.setAccount(account);
//            account.setCookie("test");
//            DB.addAccount(account);
//        }
//
//    }

}
