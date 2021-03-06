package com.example.service;

import com.example.bean.jsl.Currency;
import com.example.base.DB;
import com.example.base.Keys;
import com.example.dao.StockDao;
import com.example.entity.StockInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.base.Util;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
public class JSLService {
    Logger logger = LoggerFactory.getLogger(JSLService.class);
    private ObjectMapper mapp = new ObjectMapper();

    @Autowired
    private StockDao stockDao;

    public void syncInvalidStockInfo(){
        List<StockInfo> result = stockDao.findInvalidStock(Keys.INVALID_PRICE_LIMIT);
        if(result != null){
            for(StockInfo stock : result){
                DB.invalidStock.put(stock.getStockId(),stock);
            }
        }
    }

    public void syncData(){
        try {
          Currency currency = mapp.readValue(Util.postResponseByUrl(Keys.JSL_MONEYINFO+new Date().getTime()), Currency.class);
          if(currency != null){
              currency.getRows().forEach(x->{
                   org.jsoup.nodes.Document doc = Jsoup.parse(x.getCell().get("today_net_value").toString(), "UTF-8");
                   Elements elements = doc.getElementsByTag("span");
                   String price = "";
                   if(elements.size()>0){
                       price = elements.get(0).text();
                   }else{
                       price = x.getCell().get("today_net_value").toString();
                   }
                   if(DB.invalidStock.size() == 0){
                       syncInvalidStockInfo();
                       logger.info("Had "+DB.invalidStock.size()+" Invalid stock less than "+Keys.INVALID_PRICE_LIMIT);
                   }
                   if(DB.invalidStock.get(x.getCell().get("fund_id").toString()) == null){
                        DB.realValue.put(x.getCell().get("fund_id").toString(),Double.valueOf(price));
                   }
              });
              if(!DB.start){
                  initData();
              }
          }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private void initData(){
        DB.realValue.keySet().forEach(x->{
            String value = Util.getResponseByUrl(Keys.URL_STOCKK+"sh"+x);
            System.out.println(value);
            if(value.length()> 40){
                DB.stockMapping.put(x,"sh"+x);
            }else{
                DB.stockMapping.put(x,"sz"+x);
            }
        });
        DB.start = true;
    }

    public void refreshData(){
        StringBuilder str = new StringBuilder();
        Integer i=0;
        for(String key : DB.stockMapping.keySet()){
            i++;
            str.append(DB.stockMapping.get(key)).append(",");
            if(i%15 ==0){
                DB.updateStockInfo(Util.getResponseByUrl(Keys.URL_STOCKK+str.toString()));
                str = new StringBuilder();
            }
        }
        if(str.length()>0){
            DB.updateStockInfo(Util.getResponseByUrl(Keys.URL_STOCKK+str.toString()));
        }
        logger.info("refresh data with " + DB.getAllStocks().size() +" done!");
    }
}
