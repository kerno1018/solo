package com.example.base;

import com.example.bean.Account;
import com.example.bean.OrderInfo;
import com.example.bean.OwnStock;
import com.example.bean.Stock;
import com.example.entity.LogInfo;
import com.example.service.LogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;

public class BaseCommand {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    protected Account account;
    protected Stock valueableStock;
    protected OwnStock ownStock;
    protected LogService logService;
    protected LogInfo info;
    public BaseCommand(Account x, Stock valueableStock, OwnStock ownStock, LogService logService) {
        info = new LogInfo();
        this.account = x;
        this.valueableStock = valueableStock;
        this.ownStock = ownStock;
        this.logService = logService;
    }
    public BaseCommand(Account x, Stock valueableStock, LogService logService) {
        info = new LogInfo();
        this.account = x;
        this.valueableStock = valueableStock;
        this.logService = logService;
    }
    protected Double getCanUsedMoney(){
        Double canUseMoney = account.getCanUseMoney();
        canUseMoney = canUseMoney > Keys.FORBID_ROLLING_LIMIT ? Keys.FORBID_ROLLING_LIMIT : canUseMoney;
        return canUseMoney;
        // check half sell or buy (one plus two) need cost money
//        double marketProvideMoney = valueableStock.getMarketProvideMoney();
//        double buyCostMoney = canUseMoney > marketProvideMoney ? marketProvideMoney : canUseMoney;
//        if(ownStock != null){
//            double markeyConsumeMoney = DB.getAllStocks().get(ownStock.getId()).getMarketConsumeMoney();
//            double sellEarnMoney = canUseMoney > markeyConsumeMoney ? markeyConsumeMoney : canUseMoney;
//            return buyCostMoney > sellEarnMoney ? sellEarnMoney : buyCostMoney;
//        }
//        return buyCostMoney;
    }
    class Buy implements Runnable{
        Integer canBuyCount;
        public Buy(Integer count){
            this.canBuyCount = count;
        }
        @Override
        public void run() {
            try {
                String orderNo = Util.buy(account.getClient(),account,valueableStock.getId(),valueableStock.getSellOnePrice(),canBuyCount);
                if(!Keys.ERROR_ORDER_NO.equals(orderNo)){
                    LogBuilder.buildBuyInfo(info,account,valueableStock);
                    account.addVersion();
                    boolean doneFlag = false;
                    while (!doneFlag){
                        List<OrderInfo> infos = account.getDealOrderSuccess();
                        for (OrderInfo orderInfo : infos) {
                            if(orderInfo.getOrderNo().equals(orderNo)){
                                doneFlag = true;
                                LogBuilder.buildRealBuyInfo(info,orderInfo);
                                account.syncMoney();
                                break;
                            }
                        }
                        Thread.sleep(2000);
                        if(Keys.SHOW_LOG){
                            logger.info("checking buy process to complement!");
                        }
                    }
                    account.subtractVersion();
                }
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    class Sell implements Runnable{
        Integer canSellCount;
        public Sell(Integer count){
            this.canSellCount = count;
        }
        @Override
        public void run() {
            try {
//                String orderNo = Util.buy(account.getClient(),account,valueableStock.getId(),valueableStock.getSellOnePrice(),canBuyCount);
                String orderNo = Util.sell(account.getClient(),account,DB.getAllStocks().get(ownStock.getId()).getBuyOnePrice(),ownStock.getCostPrice(),valueableStock.getId(),canSellCount);
                if(!Keys.ERROR_ORDER_NO.equals(orderNo)){
                    LogBuilder.buildSellInfo(info,account,valueableStock);
                    info.setOrderNo(orderNo);
                    account.addVersion();
                    boolean doneFlag = false;
                    while (!doneFlag){
                        List<OrderInfo> infos = account.getDealOrderSuccess();
                        for (OrderInfo orderInfo : infos) {
                            if(orderInfo.getOrderNo().equals(orderNo)){
                                doneFlag = true;
                                LogBuilder.buildRealSellInfo(info,orderInfo);
                                account.syncMoney();
                                break;
                            }
                        }
                        Thread.sleep(2000);
                        if(Keys.SHOW_LOG){
                            logger.info("checking sell process to complement!");
                        }
                    }
                    account.subtractVersion();
                }
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
