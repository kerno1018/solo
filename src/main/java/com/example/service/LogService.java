package com.example.service;

import com.example.base.DB;
import com.example.base.Keys;
import com.example.base.Util;
import com.example.bean.Stock;
import com.example.dao.LogDao;
import com.example.dao.StockDao;
import com.example.entity.LogInfo;
import com.example.entity.StockInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Service
public class LogService {

    @Autowired
    private LogDao dao;
    @Autowired
    private StockDao stockDao;

    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void save(LogInfo bean){
        dao.save(bean);
    }


    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void updateStockInfoToDB() {
        if(DB.getAllStocks().size()>0){
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            StockInfo stockInfo = null;
            for(Stock stock:DB.getAllStocks().values()){
                stockInfo = new StockInfo();
                stockInfo.setPrice(stock.getDealMoney());
                stockInfo.setVolume(stock.getDealMoney());
                stockInfo.setStockId(stock.getId());
                try {
                    stockInfo.setDate(format.parse(stock.getDate()));
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                if(checkExists(stockInfo)){
                    stockDao.save(stockInfo);
                }
            }
        }
    }
    public Boolean checkExists(StockInfo stockInfo){

        StockInfo stock = stockDao.findStockByDateAID(stockInfo.getStockId(),stockInfo.getDate());

        return stock == null;

    }
}
