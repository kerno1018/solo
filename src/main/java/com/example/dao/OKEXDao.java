package com.example.dao;

import com.example.dao.entity.OKex;
import com.example.util.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class OKEXDao {
    ObjectMapper mapp = new ObjectMapper();

    public List<OKex> processPart(String symbol,Double index) throws IOException {
        List<OKex> result = new ArrayList<>();
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"this_week")),Map.class),index));
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"next_week")),Map.class),index));
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"quarter")  ),Map.class),index));
        return result;
    }

    public Double processIndex(String symbol) throws IOException {
        String index = "https://www.okex.com/api/v1/future_index.do?symbol="+symbol;
        return (Double) mapp.readValue(HttpUtil.getResponse(index),Map.class).get("future_index");
    }
    private String buildUrl(String symbal,String time){
        StringBuilder str= new StringBuilder("https://www.okex.com/api/v1/future_ticker.do?symbol=");
        str.append(symbal).append("&contract_type=").append(time);
        return str.toString();
    }

    public List<OKex> getListByType(String type) {
        try {
            return processPart(type,processIndex(type));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Double getBTCPriceFromKraken() {
        String url = "https://api.kraken.com/0/public/Ticker?pair=XBTUSD";
        try {
            Map<String,Map<String,Map<String,List>>> map = mapp.readValue(HttpUtil.getResponse(url),Map.class);
            return Double.valueOf(map.get("result").get("XXBTZUSD").get("c").get(0).toString());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("get BTC price from kraken failed");
        }
    }

    public static void main(String[] args) {
        new OKEXDao().getBTCPriceFromKraken();
    }
}
