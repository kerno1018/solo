package com.example.dao;

import com.example.entity.LogInfo;
import com.example.entity.StockInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public interface StockDao extends JpaRepository<StockInfo,Long> {

    @Query("from StockInfo t where t.stockId=:stockId and t.date>=:date ")
    public StockInfo findStockByDateAID(@Param("stockId") String stockId,@Param("date") Date date);

    @Query("from StockInfo t where t.price < :price and t.date=(select max(date) from StockInfo)")
    public List<StockInfo> findInvalidStock(@Param("price")Double price);

}
