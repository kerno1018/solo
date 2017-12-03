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
        info = new LogInfo();
        Double canUseMoney = account.getCanUseMoney() - Keys.FORBID_ROLLING_LIMIT;
        canUseMoney = canUseMoney > Keys.FORBID_ROLLING_LIMIT ? Keys.FORBID_ROLLING_LIMIT : canUseMoney;
        int count = Double.valueOf(canUseMoney/valueableStock.getSellOnePrice()/100).intValue()*100;
        threadPool.execute(new Buy(count));
        threadPool.shutdown();
        while (!threadPool.isTerminated()){
            try {
                System.out.println(threadPool.isTerminated());
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        logService.save(info);
    }
}
