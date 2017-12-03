package com.example.base;

import com.example.bean.Account;
import com.example.bean.OrderInfo;
import com.example.bean.OwnStock;
import com.example.bean.Stock;
import com.example.entity.LogInfo;

import java.util.List;

public class LogBuilder {

    public static void buildSellInfo(LogInfo info, Account account, Stock sell){
        info.setUserId(Integer.valueOf(account.getId()));
        info.setSell(sell.getId());
        info.setSellOne(sell.getBuyOne());
        info.setSellTwo(sell.getBuyTwo());
        info.setSellThree(sell.getBuyThree());
        info.setSellFour(sell.getBuyFouro());
        info.setSellFive(sell.getBuyFive());
        info.setSellPriceFive(sell.getBuyFivePrice());
        info.setSellPriceFour(sell.getBuyFouroPrice());
        info.setSellPriceThree(sell.getBuyThreePrice());
        info.setSellPriceTwo(sell.getBuyTwoPrice());
        info.setSellPriceOne(sell.getBuyOnePrice());
        info.setDealSellPreminum(sell.sortByPrice());
    }

    public static void buildBuyInfo(LogInfo info, Account account, Stock Buy){
        info.setUserId(Integer.valueOf(account.getId()));
        info.setBuy(Buy.getId());
        info.setBuyOne(Buy.getBuyOne());
        info.setBuyTwo(Buy.getBuyTwo());
        info.setBuyThree(Buy.getBuyThree());
        info.setBuyFour(Buy.getBuyFouro());
        info.setBuyFive(Buy.getBuyFive());
        info.setBuyPriceFive(Buy.getBuyFivePrice());
        info.setBuyPriceFour(Buy.getBuyFouroPrice());
        info.setBuyPriceThree(Buy.getBuyThreePrice());
        info.setBuyPriceTwo(Buy.getBuyTwoPrice());
        info.setBuyPriceOne(Buy.getBuyOnePrice());
        info.setDealBuyPreminum(Buy.sortByPrice());
    }


    public static void buildRealBuyInfo(LogInfo info, OrderInfo orderInfo) {
        info.setRealBuy(orderInfo.getCount());
        info.setRealBuyCost(orderInfo.getPrice());
    }
    public static void buildRealSellInfo(LogInfo info, OrderInfo orderInfo) {
        info.setRealSell(orderInfo.getCount());
        info.setRealSellCost(orderInfo.getPrice());
    }
}
