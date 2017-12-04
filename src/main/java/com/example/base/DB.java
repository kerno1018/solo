package com.example.base;

import com.example.bean.Account;
import com.example.entity.LogInfo;
import com.example.bean.Stock;
import org.jsoup.helper.StringUtil;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ConcurrentSkipListSet;

/**
 * Created by kerno on 16-1-4.
 */
public class DB {
    private static volatile Map<String, Account> accountMap = new ConcurrentHashMap<>();
    private static Map<String,Stock> stockInfo = new ConcurrentHashMap<>(); // sh or sz
    public static Set<String> failedSyncStock = new ConcurrentSkipListSet<>();
    public static Map<String,String> stockMapping = new HashMap<>();
    public static Queue<LogInfo> dealQueue = new ConcurrentLinkedQueue<>();
    public static Set<String> updateStock = new ConcurrentSkipListSet<>();
    public static Map<String,Map<Integer,String>> gridOrder = new ConcurrentHashMap<>();


    public volatile static Map<String,Double> realValue = new ConcurrentHashMap<>();
    public volatile static Boolean start = false;


    public static void clear(){
        accountMap.clear();
        stockInfo.clear();
        failedSyncStock.clear();
        stockMapping.clear();
        dealQueue.clear();
        updateStock.clear();
        gridOrder.clear();
    }

    public static void updateStockInfo(String source){
        String[] stocks = source.split(";");
        Stock fund = null;
        for(String stock : stocks){
            stock = stock.replaceAll("\\\\s*|\\t|\\r|\\n","");
            if(stock.length() < 30){
                System.out.println(stock);
                // TODO fix error code
                if(!StringUtil.isBlank(stock)){
                    failedSyncStock.add(stock.substring(11,stock.lastIndexOf("=")));
                }
                continue;
            }
            fund = new Stock(stock);
            if(fund.getPrice() == 0.0){
                return;
            }
            stockInfo.put(fund.getId(),fund);
        }
    }
    public static Map<String, Stock> getAllStocks(){
        return stockInfo;
    }
    public static void addAccount(Account account){
        accountMap.put(account.getId()+"",account);
    }
    public static Account getAccount(String id){
        return accountMap.get(id);
    }
    public static Map<String, Account> getAllAccount(){
        return accountMap;
    }


}
