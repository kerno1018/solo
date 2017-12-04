package com.example.base;

import com.example.bean.Account;
import com.example.bean.OrderInfo;
import com.example.bean.OwnStock;
import com.example.bean.Stock;
import com.example.entity.LogInfo;
import com.example.service.LogService;
import org.springframework.jca.context.SpringContextResourceAdapter;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SellAndBuyCommand extends BaseCommand implements Runnable {
    public SellAndBuyCommand(Account x, Stock valueableStock, OwnStock ownStock, LogService logService) {
        super(x,valueableStock,ownStock,logService);
    }
    @Override
    public void run() {
        Double canUseMoney = getCanUsedMoney();

        int canBuyCount = Double.valueOf(canUseMoney/100).intValue();
        int canSellCount = Double.valueOf(canUseMoney/100).intValue();
        // if market can not consume will skip this time.
        if(canBuyCount > valueableStock.getSellOne()/2 || canSellCount > DB.getAllStocks().get(ownStock.getId()).getBuyOne()){
            account.substractLockAccountVersion();
            return;
        }
        ExecutorService threadPool = Executors.newCachedThreadPool();
        threadPool.execute(new Buy(canBuyCount));
        threadPool.execute(new Sell(canSellCount));
        threadPool.shutdown();
        while (!threadPool.isTerminated()){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        account.substractLockAccountVersion();
        logService.save(info);
    }
}
