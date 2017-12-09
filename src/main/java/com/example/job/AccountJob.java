package com.example.job;

import com.example.base.DB;
import com.example.base.Keys;
import com.example.base.Util;
import com.example.bean.Account;
import com.example.bean.OwnStock;
import com.example.entity.User;
import com.example.service.UserService;
import com.example.util.HeartUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class AccountJob {
    Logger logger = LoggerFactory.getLogger(AccountJob.class);
    public final static long SECOND = 1 * 1000;
    @Autowired
    private UserService service;
    @Scheduled(fixedDelay = SECOND * 10)
    public void autoLogin(){
        List<User> list = service.getUserList();
        for (User user : list) {
            if(DB.getAccount(user.getId()+"") == null){
                Account account = user.getAccount();
                account.setDealUrl(Keys.GTJA_DEALINFO_TADAY);
                account.setId(user.getId());
                account.setCookie(user.getAccount().getCookie());
                account.setStatus(true);
                account.initClient();
                List<OwnStock> ownStocks = Util.getOwnStock(account.getClient(),account);
                Map<String,OwnStock> map = new HashMap<>();
                for(OwnStock stock : ownStocks){
                    map.put(stock.getId(),stock);
                }
                account.setOwnStock(map);
                logger.warn("add account "+ account.getId());
//                try {
//                    EmailSender.send(Keys.needProxy,account.getEmail(),"Auto Login Success.","Success" + CacluateUtil.format(new Date()));
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
                account.syncMoney();
                DB.addAccount(account);
            }
        }
        //TODO set cookie
//        if(DB.getAllAccount().size() ==0){
//            new Thread(new AutoLogin(user)).start();
//        }

    }
    @Scheduled(fixedDelay = SECOND*30)
//    @Scheduled(cron="0/29 * 09-15 * * ? ")
    public void keepHeart(){
        Map<String, Account> accounts =  DB.getAllAccount();
        if(accounts.size() > 0 ){
            for(Account account : accounts.values()){
                if(account.getStatus()){
                    HeartUtil.heart(account);
                }
            }
        }
    }
    @Scheduled(cron="0 0/5 09-15 * * ? ")
    public void syncAccountInfo(){
        Map<String, Account> accounts =  DB.getAllAccount();
        if(accounts.size() > 0 ){
            for(Account account : accounts.values()){
                if(account.getStatus()){
                    account.syncAccountInfo();
                }
            }
        }
    }
    @Scheduled(fixedDelay = SECOND*2)
    public void cleanTimeOutAccount(){
        Map<String, Account> accounts = DB.getAllAccount();
        if(accounts.size() > 0 ) {
            List<Account> removeList = new ArrayList<>();
            for (Account account : accounts.values()) {
                if (!account.getStatus()) {
                    service.lockUser(account.getId());
                    removeList.add(account);
                }
            }
            for (Account account : removeList) {
                DB.getAllAccount().remove(account.getUser().getId()+"");
            }
        }
    }


}
