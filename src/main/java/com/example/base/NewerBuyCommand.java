package com.example.base;

import com.example.bean.Account;
import com.example.bean.OrderInfo;
import com.example.bean.Stock;
import com.example.entity.LogInfo;
import com.example.service.LogService;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class NewerBuyCommand extends BaseCommand implements Runnable {
    public NewerBuyCommand(Account x, Stock valuableStock, LogService logService) {
        super(x,valuableStock,logService);
    }

    @Override
    public void run() {
        ExecutorService threadPool = Executors.newCachedThreadPool();
        Double canUseMoney = getCanUsedMoney();
        int count = Double.valueOf(canUseMoney/valueableStock.getAvgSellPrice()/100).intValue()*100;
        count = count> Double.valueOf(valueableStock.getSellCount()/2/100).intValue()*100 ? Double.valueOf(valueableStock.getSellCount()/2/100).intValue()*100:count;
        threadPool.execute(new Buy(count));
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
