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
        info = new LogInfo();
        Double canUseMoney = account.getCanUseMoney();
        canUseMoney = canUseMoney > Keys.FORBID_ROLLING_LIMIT ? Keys.FORBID_ROLLING_LIMIT : canUseMoney;
        int canBuyCount = Double.valueOf(canUseMoney/valueableStock.getSellOnePrice()/100).intValue()*100;
        int canSellCount = new BigDecimal(canUseMoney/DB.getAllStocks().get(ownStock.getId()).getBuyOnePrice()/100).setScale(0, BigDecimal.ROUND_HALF_UP).intValue();
        ExecutorService threadPool = Executors.newCachedThreadPool();
        threadPool.execute(new Buy(canBuyCount));
        threadPool.execute(new Sell(canSellCount));
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
